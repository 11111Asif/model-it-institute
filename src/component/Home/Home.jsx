import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Courses from "../Courses/Courses";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Instructors from "../Instructors/Instructors";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Courses></Courses>
            <Instructors></Instructors>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;