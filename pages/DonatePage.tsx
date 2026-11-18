// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React, { useState } from 'react';

const ImpactItem: React.FC<{ amount: string, description: string }> = ({ amount, description }) => (
    <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-cream-200 shadow-soft">
        <div className="flex-shrink-0 w-11 h-11 bg-warm-amber-100 rounded-full flex items-center justify-center">
            <ion-icon name="leaf-outline" class="text-xl text-warm-amber-700" aria-hidden="true"></ion-icon>
        </div>
        <div>
            <p className="text-lg font-bold text-ocean-blue-800">{amount}</p>
            <p className="text-neutral-600 text-sm">{description}</p>
        </div>
    </div>
);

const CopyableDetail: React.FC<{ label: string; value: string; mono?: boolean }> = ({ label, value, mono = true }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    return (
        <div className="flex justify-between items-center gap-3 bg-cream-100 px-4 py-3 rounded-xl border border-cream-200">
            <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide text-neutral-500">{label}</p>
                <p className={`text-lg text-ocean-blue-800 truncate ${mono ? 'font-mono' : 'font-semibold'}`}>{value}</p>
            </div>
            <button
                onClick={handleCopy}
                className="flex-shrink-0 flex items-center gap-1.5 bg-white text-ocean-blue-700 px-3 py-2 rounded-lg border border-cream-200 hover:bg-ocean-blue-50 transition duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-blue-400"
                aria-label={`Copy ${label}`}
            >
                <ion-icon name={copied ? "checkmark-done-outline" : "copy-outline"} class="text-base" aria-hidden="true"></ion-icon>
                <span className="text-sm font-semibold">{copied ? 'Copied' : 'Copy'}</span>
            </button>
        </div>
    );
};

const DonatePage: React.FC = () => {
  return (
    <div className="bg-cream-50 py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro: kept short so the payment card sits above the fold */}
        <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-red-600">Donate</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-ocean-blue-800 tracking-tight">Your gift creates hope.</h1>
            <p className="mt-3 text-base md:text-lg text-neutral-600">
                Every rupee goes directly into our programmes for visually impaired children in Bengaluru. Scan the UPI code or transfer to our bank account, whichever is easier for you.
            </p>
        </div>

        {/* Payment card: QR on the left, bank details on the right */}
        <div className="bg-white rounded-3xl shadow-soft-lg border border-cream-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* UPI */}
                <section aria-labelledby="upi-heading" className="p-6 lg:p-8 flex flex-col items-center text-center lg:border-r border-cream-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-ocean-blue-100 flex items-center justify-center">
                            <ion-icon name="qr-code-outline" class="text-xl text-ocean-blue-700" aria-hidden="true"></ion-icon>
                        </div>
                        <h2 id="upi-heading" className="text-2xl font-bold text-ocean-blue-800">Scan &amp; pay with UPI</h2>
                    </div>
                    <p className="mt-2 text-neutral-600">Google Pay, PhonePe, Paytm, BHIM or any UPI app.</p>

                    <img
                        src="/assets/upi-sbi.jpeg"
                        alt="UPI QR code for Nayana Arya Foundation. UPI ID nayanaarya@sbi"
                        className="mt-5 w-52 sm:w-56 h-auto rounded-2xl shadow-soft border border-cream-200"
                        loading="lazy"
                    />

                    <div className="mt-5 w-full max-w-sm">
                        <CopyableDetail label="UPI ID" value="nayanaarya@sbi" />
                    </div>
                </section>

                {/* Bank transfer */}
                <section aria-labelledby="bank-heading" className="p-6 lg:p-8 flex flex-col border-t lg:border-t-0 border-cream-200">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-ocean-blue-100 flex items-center justify-center">
                            <ion-icon name="business-outline" class="text-xl text-ocean-blue-700" aria-hidden="true"></ion-icon>
                        </div>
                        <h2 id="bank-heading" className="text-2xl font-bold text-ocean-blue-800">Bank transfer</h2>
                    </div>
                    <p className="mt-2 text-neutral-600">NEFT, IMPS or RTGS to our State Bank of India account.</p>

                    <div className="mt-5 space-y-2.5">
                        <CopyableDetail label="Account Name" value="Nayana Arya Foundation" mono={false} />
                        <CopyableDetail label="Account Number" value="44503561286" />
                        <CopyableDetail label="IFSC Code" value="SBIN0007130" />
                    </div>

                    <div className="mt-auto pt-6">
                        <div className="flex gap-3 bg-warm-amber-50 p-4 rounded-xl border-l-4 border-warm-amber-400">
                            <ion-icon name="receipt-outline" class="text-xl text-warm-amber-700 flex-shrink-0 mt-0.5" aria-hidden="true"></ion-icon>
                            <p className="text-sm text-warm-amber-800">
                                After paying, email your transaction details to <a href="mailto:admin@nayanaaryafoundation.in" className="font-semibold underline hover:text-warm-amber-900">admin@nayanaaryafoundation.in</a> and we'll send you a receipt. Thank you for your generosity.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        {/* What your gift does */}
        <section aria-label="What your donation provides" className="mt-14">
            <h2 className="text-center text-2xl font-bold text-ocean-blue-800 mb-6">What your gift makes possible</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <ImpactItem amount="₹1,000" description="Braille books and learning materials for a child for a month." />
                <ImpactItem amount="₹5,000" description="Sponsors a child's assistive technology training." />
                <ImpactItem amount="₹15,000" description="Supports a rural eye-screening and outreach camp for a day." />
            </div>
        </section>
      </div>
    </div>
  );
};

export default DonatePage;
