import './Course.css'

const Course = ({ course, handelSelectToAddCourse }) => {
    const { id, image, title, description, price, credit_hour } = course;
    return (
        <div className='course-card'>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='card-footer'>
                <h4>Price: {price}</h4>
                <h4>Credit: {credit_hour}</h4>
            </div>
            <button onClick={() => { handelSelectToAddCourse(course) }} className='btn-select'>Select</button>

        </div>
    );
};

export default Course;