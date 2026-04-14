import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="border-t bg-gray-50 text-gray-600"
    >
      <div className="container mx-auto px-4 py-10 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col">
            <img
              src="media/images/logo.svg"
              className="w-32 md:w-40 mb-6 pt-2"
              alt="logo"
            />
            <p className="text-sm text-gray-500">
              &copy; 2010 - 2025, Zerodha Broking Ltd.<br></br> All rights
              reserved.
            </p>
            <div className="flex gap-5 mt-6 text-xl">
              <i className="fa-brands fa-x-twitter hover:text-gray-900 cursor-pointer"></i>
              <i className="fa-brands fa-facebook hover:text-gray-900 cursor-pointer"></i>
              <i className="fa-brands fa-instagram hover:text-gray-900 cursor-pointer"></i>
              <i className="fa-brands fa-linkedin hover:text-gray-900 cursor-pointer"></i>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-4 sm:mt-0 text-lg font-semibold text-gray-800">Company</h5>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              About <br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Products<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Pricing<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Referral programme<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Careers<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Zerodha.tech<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Open source<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Press & media<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Zerodha Cares (CSR)<br></br>
            </a>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-4 sm:mt-0 text-lg font-semibold text-gray-800">Support</h5>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Contact us <br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Support portal<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Z-Connect blog<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              List of charges<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Downloads & resources<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Videos<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Market overview<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              How to file a complaint?<br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Status of your complaints<br></br>
            </a>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-4 sm:mt-0 text-lg font-semibold text-gray-800">Account</h5>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Open an account <br></br>
            </a>
            <a className="block hover:text-blue-500 mb-2 cursor-pointer transition-colors duration-200">
              Fund transfer<br></br>
            </a>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-gray-500 text-xs space-y-4">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to <Link className="text-blue-500 hover:underline">complaints@zerodha.com</Link>, for DP related to <Link className="text-blue-500 hover:underline">dp@zerodha.com</Link>.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF{" "}
          </p>

          <p>
            {" "}
            Procedure to file a complaint on <Link className="text-blue-500 hover:underline">SEBI SCORES</Link>: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances{" "}
          </p>

          <p>
            <Link className="text-blue-500 hover:underline">Smart Online Dispute Resolution | Grievances Redressal Mechanism</Link>{" "}
          </p>

          <p>
            {" "}
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please  &nbsp;
             <Link className="text-blue-500 hover:underline">create a ticket here.</Link>
            
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
