const User = require("../model/userModel.js");
const transporter = require("../config/nodemailer");

module.exports.sendResetOtp = async (req, res) =>{
    const {email} = req.body || {};
    // console.log(email)
    if(!email) {
        return res.json({success: false, message: 'Email is required'});
    };
    try{
        const user = await User.findOne({email});
        if(!user) {
        return res.json({success: false, message: 'User not found'});
        }
        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.resetOtp = otp;
        user.resetOtpExpiresAt = Date.now() + 15 * 60 * 1000;

        await user.save();

    const mailOption = {
        from : process.env.SENDER_EMAIL,
        to: user.email,
        subject: "Password Reset Otp",
        text: `Your otp for reseting your password is ${otp}. Use this OTP to proceed with resetting your password.`
        
        // html: PASSWORD_RESET_TEMPLATE.replace('{OTP}', otp).replace('{Date}',new Date().toLocaleDateString('en-GB', {
        //              day: '2-digit',
        //              month: 'short',
        //              year: 'numeric'
        //             })).replace('{name}',user.name)
    }
    await transporter.sendMail(mailOption);

    res.json({ success: true, message: "Otp sent to your email"});
        
    } catch(error) {
        return res.json({success: false, message:error.message});
    }
};

// Reset User password
module.exports.resetPassword = async (req, res)=>{
    const {email,otp,newPassword} = req.body || {};
    if(!email || !otp || !newPassword) {
       return res.json({ success: false, message: "Email, OTP and NewPassword is required"});
    };
    try{
        const user = await User.findOne({email});
        if(!user) {
           return res.json({ success: false, message: "User not found"});
        }
        if(user.resetOtp === '' || user.resetOtp !== String(otp)) {
           return res.json({ success: false, message: "Invalid OTP"});
        }
        if(user.resetOtpExpiresAt < Date.now()) {
           return res.json({ success: false, message: "OTP Expired"});
        }

        user.password = newPassword; // The pre('save') hook will hash this automatically!
        user.resetOtp = '' ;
        user.resetOtpExpiresAt = 0 ;

        await user.save();

            return res.json({ success: true, message: "Password has been reset successfully "});
    } catch(error) {
            return res.json({success: false, message:error.message});
    };
};

  
