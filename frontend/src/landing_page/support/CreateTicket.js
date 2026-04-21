import React from 'react'
import {Link} from "react-router-dom";

function CreateTicket() {
    return ( 
        <div className="container mx-auto p-4 md:p-12 mb-12 max-w-6xl">
            <h4 className="text-xl md:text-2xl font-medium text-gray-600 mb-10 md:ml-10 px-4 md:px-0">To create a ticket, select a relevant topic</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-10">
                
                <div>
                    <h5 className="text-lg font-medium text-gray-800 mb-6 flex items-center"><i className="fa-solid fa-circle-plus mr-3"></i> Account Opening</h5>
                    <div className="flex flex-col space-y-4 ml-8">
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Resident individual</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Minor</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Non Resident Indian (NRI)</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Company, Partnership, HUF and LLP</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Glossary</Link>
                    </div>
                </div>
                
                <div>
                    <h5 className="text-lg font-medium text-gray-800 mb-6 flex items-center"><i className="fa-regular fa-user mr-3"></i> Your StockX Account</h5>
                    <div className="flex flex-col space-y-4 ml-8">
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Your Profile</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Account modification</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Client Master Report (CMR) and Depository</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Participant (DP)</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Nomination</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Transfer and conversion of securities</Link>
                    </div>
                </div>
                
                <div>
                    <h5 className="text-lg font-medium text-gray-800 mb-6 flex items-center"><i className="fa-solid fa-chart-simple mr-3"></i> Kite</h5>
                    <div className="flex flex-col space-y-4 ml-8">
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">IPO</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Trading FAQs</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Margin Trading Facility (MTF) and Margins</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Charts and orders</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Alerts and Nudges</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">General</Link>
                    </div>
                </div>

                <div>
                    <h5 className="text-lg font-medium text-gray-800 mb-6 flex items-center"><i className="fa-solid fa-briefcase mr-3"></i> Funds</h5>
                    <div className="flex flex-col space-y-4 ml-8">
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Add money</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Withdraw money</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Add bank accounts</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">eMandates</Link>
                    </div>
                </div>
                
                <div>
                    <h5 className="text-lg font-medium text-gray-800 mb-6 flex items-center"><i className="fa-solid fa-network-wired mr-3"></i> Console</h5>
                    <div className="flex flex-col space-y-4 ml-8">
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Portfolio</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Corporate actions</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Funds statement</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Reports</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Profile</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Segments</Link>
                    </div>
                </div>
                
                <div>
                    <h5 className="text-lg font-medium text-gray-800 mb-6 flex items-center"><i className="fa-solid fa-compact-disc mr-3"></i> Coin</h5>
                    <div className="flex flex-col space-y-4 ml-8">
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Understanding mutual funds and Coin</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Coin app</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Coin web</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">Transactions and reports</Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-blue-700 hover:underline leading-relaxed">National Pension Scheme (NPS)</Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default CreateTicket;