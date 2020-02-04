import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addCourseAction} from '../../store/actions'

export const CourseList = () => {
    const qty = 3

    const courses = useSelector(state => state.data.slice(0, qty),[qty]);
    const dispatch = useDispatch() 


    function addCourse(){
        dispatch(addCourseAction('novo curso'))
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