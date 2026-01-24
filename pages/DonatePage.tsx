// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React, { useState } from 'react';

const ImpactItem: React.FC<{ amount: string, description: string }> = ({ amount, description }) => (
    <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <ion-icon name="leaf-outline" class="text-2xl text-green-600"></ion-icon>
        </div>
        <div>
            <p className="text-lg font-semibold text-ocean-blue-800">{amount}</p>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const CopyableDetail: React.FC<{ label: string; value: string }> = ({ label, value }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    return (
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-xl font-mono text-ocean-blue-800">{value}</p>
            </div>
            <button
                onClick={handleCopy}
                className="flex items-center space-x-2 bg-ocean-blue-100 text-ocean-blue-700 px-4 py-2 rounded-md hover:bg-ocean-blue-200 transition duration-300"
                aria-label={`Copy ${label}`}
            >
                <ion-icon name={copied ? "checkmark-done-outline" : "copy-outline"} class="text-lg"></ion-icon>
                <span className="text-sm font-semibold">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
        </div>
    );
};

const DonatePage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Messaging */}
            <div>
                <img className="h-100 w-80" src="https://nayanaaryafoundation.org/assets/upi-sbi.jpeg" alt="" />
                <h1 className="text-4xl font-extrabold text-ocean-blue-800 tracking-tight">Your Gift Creates Hope</h1>
                <p className="mt-4 text-xl text-gray-600">
                    Every donation, no matter the size, directly supports our programs. You can make a direct bank transfer using the details provided to bring us closer to a world where every visually impaired child can succeed.
                </p>
                <div className="mt-10 space-y-6">
                    <ImpactItem amount="1000 INR" description="Provides educational materials for a child for a month." />
                    <ImpactItem amount="5000 INR" description="Sponsors a child's assistive technology training." />
                    <ImpactItem amount="15000 INR" description="Supports a rural outreach camp for a day." />
                </div>
            </div>

            {/* Right Column: Bank Details */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold text-center text-ocean-blue-800 mb-2">Donate via Bank Transfer</h2>
                <p className="text-center text-gray-600 mb-8">
                    Please use the following details to transfer funds directly to our accounts.
                </p>
                
                <div className="space-y-8">
                    <div className="border-t border-gray-200 pt-8">
                        <h3 className="text-lg font-semibold text-ocean-blue-700 mb-4">Account</h3>
                        <div className="space-y-4">
                            <CopyableDetail label="Account Number" value="44503561286" />
                            <CopyableDetail label="IFSC Code" value="SBIN0007130" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center bg-warm-amber-50 p-4 rounded-lg border-l-4 border-warm-amber-400">
                    <p className="text-sm text-warm-amber-800">
                        After transferring, please email us at <a href="mailto:admin@nayanaaryafoundation.org" className="font-semibold underline hover:text-warm-amber-900">admin@nayanaaryafoundation.org</a> with your transaction details so we can send you a receipt. Thank you for your generosity!
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;