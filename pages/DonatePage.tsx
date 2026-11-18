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
    <div className="bg-cream-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Messaging */}
            <div className="lg:sticky lg:top-28">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary-red-600">Donate</p>
                <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-ocean-blue-800 tracking-tight">Your gift creates hope.</h1>
                <p className="mt-4 text-xl text-neutral-600">
                    Every donation, whatever the size, goes directly into our programmes for visually impaired children in Bengaluru. Scan the UPI code or use the bank details, whichever is easier for you.
                </p>
                <div className="mt-10 space-y-6">
                    <ImpactItem amount="₹1,000" description="Braille books and learning materials for a child for a month." />
                    <ImpactItem amount="₹5,000" description="Sponsors a child's assistive technology training." />
                    <ImpactItem amount="₹15,000" description="Supports a rural eye-screening and outreach camp for a day." />
                </div>
            </div>

            {/* Right Column: Ways to pay */}
            <div className="bg-white p-8 rounded-3xl shadow-soft-lg border border-cream-200">
                {/* UPI */}
                <section aria-labelledby="upi-heading">
                    <h2 id="upi-heading" className="text-2xl font-bold text-center text-ocean-blue-800 mb-2">Scan &amp; pay with UPI</h2>
                    <p className="text-center text-neutral-600 mb-6">
                        Works with Google Pay, PhonePe, Paytm, BHIM and any UPI app.
                    </p>
                    <div className="flex justify-center">
                        <img
                            src="/assets/upi-sbi.jpeg"
                            alt="UPI QR code for Nayana Arya Foundation. UPI ID nayanaarya@sbi"
                            className="w-64 sm:w-72 h-auto rounded-2xl shadow-soft border border-cream-200"
                            loading="lazy"
                        />
                    </div>
                    <div className="mt-6">
                        <CopyableDetail label="UPI ID" value="nayanaarya@sbi" />
                    </div>
                </section>

                {/* Divider */}
                <div className="relative my-10" aria-hidden="true">
                    <div className="border-t border-cream-200"></div>
                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-sm text-neutral-500">or</span>
                </div>

                {/* Bank transfer */}
                <section aria-labelledby="bank-heading">
                    <h2 id="bank-heading" className="text-2xl font-bold text-center text-ocean-blue-800 mb-2">Bank transfer (NEFT / IMPS)</h2>
                    <p className="text-center text-neutral-600 mb-6">
                        Transfer directly to our State Bank of India account.
                    </p>
                    <div className="space-y-4">
                        <CopyableDetail label="Account Name" value="Nayana Arya Foundation" />
                        <CopyableDetail label="Account Number" value="44503561286" />
                        <CopyableDetail label="IFSC Code" value="SBIN0007130" />
                    </div>
                </section>

                <div className="mt-8 text-center bg-warm-amber-50 p-4 rounded-lg border-l-4 border-warm-amber-400">
                    <p className="text-sm text-warm-amber-800">
                        After transferring, please email us at <a href="mailto:admin@nayanaaryafoundation.in" className="font-semibold underline hover:text-warm-amber-900">admin@nayanaaryafoundation.in</a> with your transaction details so we can send you a receipt. Thank you for your generosity!
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;