import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {
    let courses=props.courses;
 let category=props.category;
    //starting mai course koi bhi liked nhi hai
const [likedCourses,setLikedCourses]=useState([]);

    //returns you a list of all courses received from the  api response
    function getCourses(){
        if(category==="All"){
            let allCourses=[];
         console.log("printing Courses");
        console.log(courses);
        Object.values(courses).forEach(array=>{
            array.forEach(courseData=>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else{
            //mai sirf specific category ka array data pass krunga
            return courses[category]
        }
        
        
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
           getCourses().map((course) => (
           <Card key={course.id} course={course} likedCourses={likedCourses} 
           setLikedCourses={setLikedCourses}/>
            ))
        }
       
       
    </div>
    
  );
}

export default Cards;