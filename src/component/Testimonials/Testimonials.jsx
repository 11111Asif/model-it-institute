import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <section id="testimonials" className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold">What Our Students Say</h3>
                    <p className="text-slate-600 mt-2">Success stories from our graduates.</p>

                    <div className="mt-8 grid md:grid-cols-3 gap-4">
                        <div className="bg-slate-50 rounded-xl p-4">
                            <div className="font-semibold">Ayesha</div>
                            <div className="text-sm text-slate-600 mt-2">"I learned video editing and now work on freelance projects."</div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4">
                            <div className="font-semibold">Rafiq</div>
                            <div className="text-sm text-slate-600 mt-2">"Great mentors and practical classes — recommended!"</div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4">
                            <div className="font-semibold">Salma</div>
                            <div className="text-sm text-slate-600 mt-2">"Got my first client after the freelancing module."</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;