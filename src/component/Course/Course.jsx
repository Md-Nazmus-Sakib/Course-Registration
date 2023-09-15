import './Course.css'
import { BeakerIcon, BookOpenIcon } from '@heroicons/react/24/solid'

const Course = ({ course, handelSelectToAddCourse }) => {
    const { image, title, description, price, credit_hour } = course;

    return (
        <div className='course-card'>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='card-footer'>

                {/* <h4> <span className='font-big'>$</span> Price: {price}</h4> */}

                <div className='flex-center'>
                    <span className='font-big'>$</span>
                    <h4> Price: {price}</h4>
                </div>
                <div className='flex-center'>
                    <BookOpenIcon className='hero-icon' />
                    <h4>  Credit: {credit_hour} hr</h4>
                </div>

            </div>
            <button onClick={() => { handelSelectToAddCourse(course) }} className='btn-select'>Select</button>

        </div>
    );
};

export default Course;