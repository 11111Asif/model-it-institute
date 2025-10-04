import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <h3 className="text-2xl font-bold">Get in Touch / Book a Demo</h3>
                        <p className="text-slate-600 mt-2">Visit us at our center or drop a message — we’ll get back within 24 hours.</p>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <MapPin size={18} />
                                <div>
                                    <div className="font-medium">Address</div>
                                    <div className="text-sm text-slate-600">Janata Bank Mor, Maya Super Market (3rd Floor), Faridpur</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                <div>
                                    <div className="font-medium">Phone</div>
                                    <div className="text-sm text-slate-600">01903789332</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} />
                                <div>
                                    <div className="font-medium">Email</div>
                                    <div className="text-sm text-slate-600">info@modelitinstitute.com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h4 className="text-lg font-semibold">Enroll / Message</h4>
                            <p className="text-sm text-slate-600 mt-1">Fill the form and we'll contact you.</p>

                            <form className="mt-4 space-y-3">
                                <input className="w-full border rounded-md px-3 py-2" placeholder="Full name" />
                                <input className="w-full border rounded-md px-3 py-2" placeholder="Phone number" />
                                <input className="w-full border rounded-md px-3 py-2" placeholder="Email" />
                                <select className="w-full border rounded-md px-3 py-2">
                                    <option>Interested course</option>
                                    <option>Video Editing</option>
                                    <option>Graphic Design</option>
                                    <option>Digital Marketing</option>
                                </select>
                                <textarea className="w-full border rounded-md px-3 py-2" rows={3} placeholder="Message (optional)" />

                                <div className="flex justify-end">
                                    <Button>Send Message</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;