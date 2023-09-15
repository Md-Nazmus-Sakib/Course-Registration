import { useEffect } from "react";
import { useState } from "react";
import './AllCourses.css'
import Course from "../Course/Course";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




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

            toast.error('😅 You Add This Course !!! Please select another one.', {
                position: "top-center",
                theme: "colored",
            });
        }
        else {
            const courseHour = totalCourseHour + course.credit_hour;
            if (courseHour > 20) {
                toast.error('🚀 You can not exceed total credit hours more than 20 hours !!! You can not add More.', {
                    position: "top-center",
                    theme: "colored",
                });
            }
            else {
                setTotalCourseHour(courseHour)
                const coursePrice = totalPrice + course.price;
                setTotalPrice(coursePrice)
                const newSelectCourse = [...selectCourse, course];
                setSelectCourse(newSelectCourse)

            }
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
                <div>
                    {totalCourseHour > 1 ?
                        <h3>Credit Hour Remaining : {20 - totalCourseHour} hr</h3> :
                        <h3>You Can Select at list 20 hours Credit</h3>
                    }
                </div>
                <hr />
                <h2>Course Name</h2>
                <ol className="added-course">
                    {
                        selectCourse.map(sCourse => <li key={sCourse.id}>{sCourse.title}</li>)
                    }
                </ol>

                <hr />
                <h2>Total Credit Hour : {totalCourseHour}</h2>
                <hr />
                <h2>Total Price : {totalPrice} USD</h2>
            </div>


            <ToastContainer />

        </div>
    );
};

export default AllCourses;