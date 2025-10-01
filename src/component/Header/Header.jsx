import { Button } from "@/components/ui/button";




const Header = () => {
    return (
        <div>
            <header className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">
                            MI
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold">Model IT Institute</h1>
                            <p className="text-sm text-slate-500">Faridpur — Digital Skills & Career Growth</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a className="hover:text-indigo-600" href="#courses">Courses</a>
                        <a className="hover:text-indigo-600" href="#instructors">Instructors</a>
                        <a className="hover:text-indigo-600" href="#testimonials">Testimonials</a>
                        <a className="hover:text-indigo-600" href="#contact">Contact</a>
                        <Button className="ml-2" asChild>
                            <a href="#enroll">Enroll Now</a>
                        </Button>
                    </nav>

                    <div className="md:hidden">
                        {/* mobile menu placeholder */}
                        <button className="p-2 rounded-md bg-slate-100">Menu</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;