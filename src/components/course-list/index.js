import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import addCourseAction, { ADD_COURSE } from '../store/actions/course.actions';


export const CourseList = () => {

    const courses = useSelector(({course}) => course.data);
    const dispatch = useDispatch() 


    function addCourse(){
        dispatch({type: ADD_COURSE, title: 'ola mundo'})
    }

    return (
        <div>
            <h1>Cursos</h1>
            <ul>
                {courses.map(course => (
                    <li key={course}>{course}</li>
                ))}
            </ul>
            <button type='button' onClick={addCourse}>Adicionar novo curso</button>
        </div>
    )
}