import React from 'react'
import { FcLike } from "react-icons/fc";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FcLikePlaceholder } from "react-icons/fc";
const Card = (props) => {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
    //logic
    if(likedCourses.includes(course.id)){
      //pehle se like hua padha hai
      //tp us purane array mai se hta do
      setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
      toast.warning("like removed");

    }
    else{
      //pehle se likha nahi hai ye course
      //insert karna  hai ye course liked course mai
      if(likedCourses.length===0){
        setLikedCourses([course.id]);

      }
      else{
        //non empty pehle se
        setLikedCourses((prev)=>[...prev,course.id]);

      }
      toast.success("Liked successfully")
    }
  }
  return (
    <div className='bg-bgDark bg-opacity-80 w-[300px] 
    rounded-md overflow-hidden'>
            <div className='relative'>
            <img src={course.image.url}/>
            <div className='w-[40px] h-[40px] bg-white 
            rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
              <button onClick={clickHandler}>
              {
                !likedCourses.includes(course.id)?
                (<FcLikePlaceholder />):(<FcLike fontSize="1.75rem"/>)
              }
               
                </button>
              </div>
            </div>
              
                
            
          
        <div className='p-4'>
            <p className='text-white text-lg font-semibold 
            leading-6'>{props.course.title}</p>
            <p className='mt-2 text-white'>{
            course.description.length>100?(course.description.substr(0,100))+"...":(course.description)
            }</p>
        </div>
    </div>
  ) 
}

export default Card
