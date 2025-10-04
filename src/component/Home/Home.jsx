import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Header from "../Header/Header";
import Instructors from "../Instructors/Instructors";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Courses></Courses>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;