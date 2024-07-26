const course = {
    coursename : "Javascript",
    duration : "3 months",
    courseInstructor : "Hitesh"
}

//course.courseInstryctor
const {courseInstructor } = course
console.log(courseInstructor);

// 2nd way
const {courseInstructor : instructor} = course
console.log(instructor);



// const navbar = ({conpany}) => {//destructuring

// }
// navbar (company = "hitesh")


// Api is in json format
//json format 
// {
//     "name" : "hitesh",
//     "age" : 25,
//     "address" : "delhi"

// }

//json is not object in this keys are string and the values are also string in json


//json in array format

// [
//     {};
//     {};
//     {};

// ]