import Slider from "react-slick";
import homebackground from "../images/homebackground.png";
import homeagain from "../images/homeagain.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaArrowCircleRight,
  FaHandshake,
  FaIdCard,
  FaRegStar,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";
import elearning from "../images/elearning.png";
import tutoring from "../images/tutoring.png";
import { HiUserGroup } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import Partnership from "./Partnership";
import TeachingMethodologies from "./TeachingMethodologies";
import ApprovedTestimonials from "./ApprovedTestimonials";

function Home() {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);

  const getCourse = async () => {
    let response = await fetch("http://localhost:9000/api/course/getAllCourse");
    response = await response.json();
    setCourse(response.response);
  };

  useEffect(() => {
    getCourse();
  }, []);

  // const CustomArrow = ({ direction, onClick }) => (
  //   <button
  //     onClick={onClick}
  //     className={`absolute top-1/2  text-2xl bg-amber-500 text-blue-950 rounded-full p-2  hover:bg-blue-950 hover:text-white transition-all ${
  //       direction === "prev" ? "top-80 left-52" : "top-80 left-40"
  //     }`}
  //   >

  //   </button>
  // );

  const slides = [
    {
      title: "Web Development",
      subtitle: "Master Full-Stack Development",
      content: "Learn MERN stack with real-world projects",
      gradient: "from-blue-500 to-cyan-400",
      badge: "🔥 Hot Course",
    },
    {
      title: "Special Offer!",
      subtitle: "Limited Time Discount",
      content: "Get 15% off on January enrollments",
      gradient: "from-blue-800 to-violet-950",
      badge: "⏳ Ending Soon",
    },
    {
      title: "New Launch",
      subtitle: "Python & Data Science",
      content: "Start your AI/ML journey today",
      gradient: "from-orange-500 to-yellow-400",
      badge: "🎉 Just Added",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    // prevArrow: <CustomArrow direction="prev" />,
    // nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <>
      <div
        style={{
          backgroundImage: ` url(${homebackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
        }}
        className=" relative "
      >
        <div className="flex justify-between items-center h-full  z-10">
          <div className="pl-48 w-[800px] -mt-24 relative ">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className="text-white ">
                  {slide && (
                    <span className="mb-4 inline-block bg-gradient-to-r from-blue-600 to-blue-950 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                      {slide.badge}
                    </span>
                  )}

                  <h1
                    className={`text-6xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent leading-tight`}
                  >
                    {slide.title}
                  </h1>
                  <h2 className="text-4xl font-semibold text-white mt-4">
                    {slide.subtitle}
                  </h2>
                  <p className="text-xl text-white mt-6 max-w-2xl leading-relaxed">
                    {slide.content}
                  </p>

                  <div className="gap-7 flex w-fit  justify-center text-center">
                    <button
                      onClick={() => {
                        navigate("/allCourses");
                      }}
                      className="mt-8 flex gap-2 items-center bg-gradient-to-r from-blue-600 to-blue-950 text-white rounded-full text-sm p-3 font-medium "
                    >
                      Enroll Now <FaArrowCircleRight />
                    </button>

                    <button
                      onClick={() => {
                        navigate("/allCourses");
                      }}
                      className="mt-8 flex gap-2  items-center bg-gradient-to-r from-blue-600 to-blue-950 text-white  rounded-full text-sm p-3 font-medium "
                    >
                      View Courses <FaArrowCircleRight />
                    </button>

                    <button className="mt-8 flex items-center gap-2  bg-gradient-to-r from-blue-600 to-blue-950 text-white  rounded-full text-sm p-3 font-medium">
                      Schedule a Demo <FaArrowCircleRight />
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="pr-16 ">
            <img src={homeagain} alt="IT Training" className="max-h-[90vh]" />
          </div>
        </div>

        {/* Another Section Start yeta bata */}
        <div className="flex p-20 justify-center gap-20 bg-gray-50">
          {/* Card 1 */}
          <div className="group shadow-2xl p-4 h-32 w-96 cursor-pointer rounded-2xl flex gap-x-5 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-900 hover:to-blue-600">
            <div className="flex justify-center items-center rounded-full border border-dashed w-12 h-12 mt-6 transition-colors duration-300 group-hover:border-white">
              <FaGraduationCap
                size={20}
                className="text-blue-950 transition-colors duration-300 group-hover:text-white"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <h1 className="text-lg font-semibold text-start text-blue-950 transition-colors duration-300 group-hover:text-white">
                Be Your Own Boss
              </h1>
              <p className="text-sm text-blue-950 transition-colors duration-300 group-hover:text-white">
                Embrace Independence: Be Your Own <br /> Boss and Shape Your
                Future!
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group shadow-2xl cursor-pointer p-4 h-32 w-96 rounded-2xl flex gap-x-5 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-900 hover:to-blue-600">
            <div className="flex justify-center items-center rounded-full border border-dashed w-12 h-12 mt-6 transition-colors duration-300 group-hover:border-white">
              <FaGraduationCap
                size={20}
                className="text-blue-950 transition-colors duration-300 group-hover:text-white"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <h1 className="text-lg font-semibold text-start text-blue-950 transition-colors duration-300 group-hover:text-white">
                Reach Your Career Goals
              </h1>
              <p className="text-sm text-blue-950 transition-colors duration-300 group-hover:text-white">
                Strive for Success: Reach Your Career <br /> Goals and Unlock
                Your Potential
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group shadow-2xl p-4 cursor-pointer h-32 w-96 rounded-2xl flex gap-x-5 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-900 hover:to-blue-600">
            <div className="flex justify-center items-center rounded-full border border-dashed w-12 h-12 mt-6 transition-colors duration-300 group-hover:border-white">
              <FaGraduationCap
                size={20}
                className="text-blue-950 transition-colors duration-300 group-hover:text-white"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <h1 className="text-lg font-semibold text-start text-blue-950 transition-colors duration-300 group-hover:text-white">
                Get Hired
              </h1>
              <p className="text-sm text-blue-950 transition-colors duration-300 group-hover:text-white">
                Validate Your Skills, Open Doors: Earn <br />
                Industry-Recognized Certificates!
              </p>
            </div>
          </div>
        </div>



        {/* Calling the course */}
       <div className="py-10">
  <h1 className="font-semibold text-2xl text-center font-serif text-blue-900">
    Featured Courses
  </h1>

  <div className="flex flex-wrap justify-center gap-12 mt-8 p-4">
    {course.slice(0, 8).map((item) => (
      <div
        key={item._id}
        onClick={() => navigate("/CourseDetails", { state: { ...item } })}
        className="w-[280px] bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer group overflow-hidden transform hover:-translate-y-1"
      >
        {/* Course Image */}
        <div className="relative">
          <img
            src={`http://localhost:9000/image/${item.image}`}
            alt={item.name}
            className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute top-2 right-2 flex gap-1">
            {item.isBestseller && (
              <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                Bestseller
              </span>
            )}
            {item.isFeatured && (
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Course Info */}
        <div className="p-4 space-y-2">
          <h2 className="text-md font-bold text-gray-800 line-clamp-2 h-12">
            {item.name}
          </h2>

          {/* Rating */}
          <div className="flex items-center text-amber-400 text-sm">
            {Array.from({ length: 5 }, (_, i) => {
              const r = item.rating;
              if (r >= i + 1)
                return <FaStar key={i} className="w-4 h-4" />;
              else if (r >= i + 0.5)
                return <FaStarHalfAlt key={i} className="w-4 h-4" />;
              else
                return <FaRegStar key={i} className="w-4 h-4 text-gray-200" />;
            })}
            
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            {item.discountPrice < item.price && (
              <span className="text-xs text-gray-400 line-through">
                ₹{item.price}
              </span>
            )}
            <span className="text-lg font-semibold text-orange-600">
              ₹{item.discountPrice}
            </span>
          </div>

          {/* Enroll Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/allCourses");
            }}
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* View All */}
  <div className="flex justify-center mt-6">
    <button
      onClick={() => navigate("/allCourses")}
      className="bg-gradient-to-r from-blue-600 to-blue-900 text-white px-5 py-2 text-sm rounded-full hover:scale-105 transition"
    >
      View All Courses
    </button>
  </div>
</div>


        {/* This is for another section */}

        <div className="bg-[linear-gradient(135deg,_#2f3493_70%,_white_50%,_#ffc107_80%)] h-52 w-full text-white mt-24 relative">
          <img
            className="absolute left-[990px] -top-20 h-72 w-96"
            src={elearning}
            alt=""
          />

          <div className="absolute top-2">
            <h1 className="text-3xl font-serif p-6 relative left-4">
              ALL THE{" "}
            </h1>
            <h1 className="text-3xl font-serif relative left-16 -top-3">
              SKILLS YOU NEED IN ONE PLACE
            </h1>
            <p className="text-l relative left-16 font-serif">
              From Critical skills To Technical Topics,{" "}
              <span className="font-bold">Sipalaya InfoTech</span> Supports Your
              Professional{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 py-20">
          {/* Left Column - Text and Image */}
          <div className="max-w-md">
            <h1 className="font-semibold text-3xl mb-4">
              What Sets Us <span className="text-blue-900">Apart?</span>
            </h1>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Discover what makes us unique. Our standout features set us apart
              from the rest, showcasing our commitment to excellence and
              delivering exceptional value to our students and community.
            </p>

            <img
              className="rounded-tr-[100px] rounded-bl-[40px] w-full h-auto object-cover"
              src={tutoring}
              alt="tutoring students"
            />
          </div>

          {/* Middle Column - Stats 1 */}
          <div className="flex flex-col gap-8 mt-10">
            <div className="bg-blue-100 text-blue-900 p-8 rounded-2xl w-96 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">10,000 +</h1>
                <p>Trusted And Enrolled Students</p>
              </div>
              <FaUserGraduate className="text-4xl" />
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-2xl w-96 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">7,000 +</h1>
                <p>Successful Job Placement</p>
              </div>
              <HiUserGroup className="text-4xl" />
            </div>

            <div className="bg-blue-700 text-white p-6 rounded-2xl w-96 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">30 +</h1>
                <p>In-house Software Development Team</p>
              </div>
              <MdVerified className="text-4xl" />
            </div>
          </div>

          
          <div className="flex flex-col gap-6">
            <div className="bg-cyan-700 text-white p-6 rounded-2xl w-96 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold p-2">100 +</h1>
                <p>Software Company Collaboration</p>
              </div>
              <FaHandshake className="text-4xl" />
            </div>

            <div className="bg-purple-950 text-white p-6 rounded-2xl w-96 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">20 +</h1>
                <p>IT And Engineering College Collaboration</p>
              </div>
              <FaIdCard className="text-4xl" />
            </div>

            <div className="bg-teal-600 text-white p-8 rounded-2xl w-96 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">80 +</h1>
                <p>Certified Trainers</p>
              </div>
              <MdVerified className="text-4xl" />
            </div>

            <div className="bg-blue-700 text-white p-8 rounded-2xl w-96 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">7 +</h1>
                <p>Years Of Experience</p>
              </div>
              <MdVerified className="text-4xl" />
            </div>
          </div>
        </div>

         {/* Testimonials ko lagii */}
      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4 text-center">What Our Students Say</h2>
        <ApprovedTestimonials />
      </section>

          <div className="-mt-8">
          <TeachingMethodologies />
        </div>

        <div>
          <Partnership />
        </div>

     

        {/* This is for fotter */}

        <Footer />
      </div>
    </>
  );
}

export default Home;
