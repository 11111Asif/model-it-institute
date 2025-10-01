


const Banner = () => {
    return (
        <div>
            <div className="hero bg-gray-50 py-6">
                <div className="hero-content flex-col lg:flex-row-reverse py-16">
                    <div>
                        <iframe
                            className=" top-0 left-0 lg:w-[550px] h-[300px] rounded-4xl"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        ></iframe>
                    </div>
                    <div className="lg:w-[550px]">
                        <h1 className="lg:text-5xl text-2xl font-bold">Become a Pro in Digital Skills — Start Today</h1>
                        <p className="py-6">
                            Practical, project-based courses in Video Editing, Graphic Design, Digital Marketing and Freelancing. Learn from industry experts at Model IT Institute, Faridpur.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a href="#enroll" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow">Enroll Now</a>
                            <a href="#courses" className="inline-flex items-center px-5 py-3 border border-black rounded-lg text-slate-700">View Courses</a>
                        </div>
                        <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-600">
                            <div>
                                <div className="font-semibold text-lg">Duration</div>
                                <div>3 months</div>
                            </div>
                            <div>
                                <div className="font-semibold text-lg">Format</div>
                                <div>Online & Classroom</div>
                            </div>
                            <div>
                                <div className="font-semibold text-lg">Certificate</div>
                                <div>Completion Certificate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;