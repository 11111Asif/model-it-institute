import React from 'react';

const Instructors = () => {
    return (
        <div>
            <section id="instructors" className="max-w-6xl mx-auto px-6 py-12">
                <h3 className="text-2xl font-bold">Meet the Instructors</h3>
                <p className="text-slate-600 mt-2">Experienced mentors with real industry experience.</p>

                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow p-4 text-center">
                        <div className="w-28 h-28 rounded-full bg-slate-200 mx-auto flex items-center justify-center">Photo</div>
                        <h4 className="mt-3 font-semibold">Md. Shafiqur Rahaman</h4>
                        <p className="text-sm text-slate-600">Founder & Lead Trainer — Digital Marketing</p>
                    </div>

                    <div className="bg-white rounded-xl shadow p-4 text-center">
                        <div className="w-28 h-28 rounded-full bg-slate-200 mx-auto flex items-center justify-center">Photo</div>
                        <h4 className="mt-3 font-semibold">Instructor 2</h4>
                        <p className="text-sm text-slate-600">Video Editing Specialist</p>
                    </div>

                    <div className="bg-white rounded-xl shadow p-4 text-center">
                        <div className="w-28 h-28 rounded-full bg-slate-200 mx-auto flex items-center justify-center">Photo</div>
                        <h4 className="mt-3 font-semibold">Instructor 3</h4>
                        <p className="text-sm text-slate-600">Graphic Design Mentor</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Instructors;