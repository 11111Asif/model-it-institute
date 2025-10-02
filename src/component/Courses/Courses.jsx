import { Card, CardContent } from "@/components/ui/Card";


const Courses = () => {
    return (
        <div>
            <section id="courses" className="bg-white ">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">Our Popular Courses</h3>
                        <a href="#" className="text-sm text-indigo-600">See all courses →</a>
                    </div>

                    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/** Course Card (replicate as needed) */}
                        <Card>
                            <CardContent>
                                <div className="h-40 bg-slate-100 rounded-md flex items-center justify-center">Thumbnail</div>
                                <h4 className="mt-4 font-semibold">Video Editing (36 classes)</h4>
                                <p className="text-sm text-slate-600 mt-2">Learn Premiere Pro, CapCut for PC, transitions, color grading and freelancing tips.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-sm font-medium">৳8,000</div>
                                    <a href="#enroll" className="text-sm text-indigo-600">Enroll</a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <div className="h-40 bg-slate-100 rounded-md flex items-center justify-center">Thumbnail</div>
                                <h4 className="mt-4 font-semibold">Graphic Design (Photoshop + Illustrator)</h4>
                                <p className="text-sm text-slate-600 mt-2">From basics to advanced: logos, posters, and freelancing workflows.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-sm font-medium">৳7,000</div>
                                    <a href="#enroll" className="text-sm text-indigo-600">Enroll</a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent>
                                <div className="h-40 bg-slate-100 rounded-md flex items-center justify-center">Thumbnail</div>
                                <h4 className="mt-4 font-semibold">Digital Marketing (1 month)</h4>
                                <p className="text-sm text-slate-600 mt-2">Facebook Ads, Google Ads basics, SEO and freelancing launch plan.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-sm font-medium">৳6,000</div>
                                    <a href="#enroll" className="text-sm text-indigo-600">Enroll</a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;