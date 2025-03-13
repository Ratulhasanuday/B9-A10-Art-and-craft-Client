import { FaPhoneAlt } from "react-icons/fa";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { IoMailOpenOutline } from "react-icons/io5";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>

         <div className="md:p-10 p-5">
                         <div>
                             <h1 className="text-center text-3xl font-bold underline">About Us </h1>
                             <h3 className="text-2xl font-semibold pt-8">It was a big, round room with a high arched roof, and the walls and ceiling and floor were this is a covered with large emeralds set closely together.</h3>
                             <p className="text-lg font-medium"> It encompasses various sectors, including hotels, resorts, restaurants, and tourism. Customer satisfaction is at the heart of hospitality, requiring professionalism, warmth, and attention to detail. From front desk services to housekeeping and fine dining, every interaction shapes a guest's perception. Technology plays a growing role, with online bookings, personalized services, and digital concierge systems enhancing convenience. Sustainability is also becoming a priority, with eco-friendly practices improving both efficiency and guest appeal. Ultimately, hospitality thrives on delivering comfort, luxury, and a welcoming atmosphere to every visitor.</p>
                         </div>
         
                         <div className="mt-8">
                             <h2 className="text-3xl font-bold text-center  underline">Our Management</h2>
                             <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-6">
                                 <div>
                                     <img src={'https://i.ibb.co.com/60fjSsnk/new-team-01.jpg'} alt="Placeholder" />
                                     <h1 className="text-2xl font-bold pt-8 pl-5">Marcus</h1>
                                     <h2 className="text-xl font-medium pl-5">CEO</h2>
                                 </div>
                                 <div>
                                     <img src={'https://i.ibb.co.com/Gv576ZKL/new-team-02.jpg'} alt="Placeholder" />
                                     <h1 className="text-2xl font-bold pt-8 pl-5">Olivia</h1>
                                     <h2 className="text-xl font-medium pl-5">Managing Director</h2>
                                 </div>
                                 <div>
                                     <img src={'https://i.ibb.co.com/b5m4ccxh/new-team-03.jpg'} alt="Placeholder" />
                                     <h1 className="text-2xl font-bold pt-8 pl-5">Adrian Leo</h1>
                                     <h2 className="text-xl font-medium pl-5">Deputy Managing Director</h2>
                                 </div>
                                 <div>
                                     <img src={'https://i.ibb.co.com/b5m4ccxh/new-team-03.jpg'} alt="Placeholder" />
                                     <h1 className="text-2xl font-bold pt-8 pl-5">Sebastian Nathaniel</h1>
                                     <h2 className="text-xl font-medium pl-5">Senior Manager</h2>
                                 </div>
                             </div>
                         </div>
                         <div className="m-8">
                             <h2 className="text-2xl text-center font-bold underline">Contact Us</h2>
                             <div className="grid md:grid-cols-2 grid-cols-1 md:mt-16 pt-8">
                                 <div>
                                     <p className="md:text-xl font-bold text-center"><FaPhoneAlt className="text-9xl mx-auto " /> Phone Nubmber: <br /> +088 01881565469</p>
                                 </div>
                                 <div >
                                     <p className="md:text-xl font-bold text-center"><IoMailOpenOutline className="text-9xl mx-auto " />Email Address : <br />
                                     restae.helpdesk@gmail.com</p>
                                 </div>
                             </div>
                         </div>
                         <div>
                             <h2></h2>
                         </div>
         
                     </div>
            <Footer></Footer>
        </div>
    );
};

export default About;