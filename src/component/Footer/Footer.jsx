import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-slate-900 text-slate-200 mt-12">
                <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-bold">Model IT Institute</h4>
                        <p className="text-sm text-slate-400 mt-2">Practical tech training in Faridpur — video editing, design & digital marketing.</p>
                    </div>
                    <div>
                        <h5 className="font-medium">Quick Links</h5>
                        <ul className="mt-2 text-sm text-slate-400 space-y-1">
                            <li>Courses</li>
                            <li>Instructors</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-medium">Contact</h5>
                        <div className="mt-2 text-sm text-slate-400">01903789332 • info@modelitinstitute.com</div>
                        <div className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} Model IT Institute. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;