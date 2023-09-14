import { useEffect } from "react";
import { useState } from "react";
import './AllCourses.css'
import Course from "../Course/Course";
import SelectCourse from "../SelectCourse/SelectCourse";



const AllCourses = () => {

    const [courses, setCourses] = useState([])

    const [selectCourse, setSelectCourse] = useState([]);
    console.log(selectCourse)


    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    // const handelSelectToAddCourse = (course) => {
    //     const newSelectCourse = [...course, course];

    //     setSelectCourse(newSelectCourse)
    // }


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
                {
                    selectCourse.map(sCourse => <li key={sCourse.id}>{sCourse.title}</li>)
                }

            </div>

        </div>
    );
};

export default AllCourses;