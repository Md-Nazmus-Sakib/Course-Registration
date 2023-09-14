import { useEffect } from "react";
import { useState } from "react";
import './AllCourses.css'
import Course from "../Course/Course";
import SelectCourse from "../SelectCourse/SelectCourse";



const AllCourses = () => {

    const [courses, setCourses] = useState([])

    const [selectCourse, setSelectCourse] = useState([]);

    const [totalCourseHour, setTotalCourseHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);



    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    const handelSelectToAddCourse = (course) => {

        const alreadyExist = selectCourse.find(courseId => courseId.id === course.id)
        if (alreadyExist) {
            return (alert('already exist'))
        }
        else {
            const courseHour = totalCourseHour + course.credit_hour;
            setTotalCourseHour(courseHour)
            const coursePrice = totalPrice + course.price;
            setTotalPrice(coursePrice)
            const newSelectCourse = [...selectCourse, course];
            setSelectCourse(newSelectCourse)
        }


    }


    return (
        <div className="course-container">
            <div className="all-course">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        handelSelectToAddCourse={handelSelectToAddCourse}
                    ></Course>)
                }
            </div>
            <div className="course-name">
                <h2>Course Name</h2>
                <ol>
                    {
                        selectCourse.map(sCourse => <li key={sCourse.id}>{sCourse.title}</li>)
                    }
                </ol>

                <hr />
                <h2>Total Course Hour= {totalCourseHour}</h2>
                <hr />
                <h2>Total Price= {totalPrice}</h2>
            </div>

        </div>
    );
};

export default AllCourses;