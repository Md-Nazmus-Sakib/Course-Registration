import { useEffect } from "react";
import { useState } from "react";
import './AllCourses.css'
import Course from "../Course/Course";



const AllCourses = () => {

    const [courses, setCourses] = useState([])


    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div>
            <div>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>

        </div>
    );
};

export default AllCourses;