import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";

const TaskList = ({ tasks }) => {

    const [activeTask, setActiveTask] = useState(null);

    const toggleAccordion = (id) => {
        setActiveTask(activeTask === id ? null : id);
    };

    return (
        <div className='mt-4'>
            <div className='mb-6 flex justify-end'>
                <NavLink to='/add-task' className='flex items-center space-x-1 rounded-full text-white bg-teal-600 py-1.5 ps-2 pe-3'>
                    <CiCirclePlus className='w-7 h-7' />
                    <span className=''>Add Task</span>
                </NavLink>
            </div>
            <div className='mb-4'>
                <div className='flex space-x-2 justify-evenly'>
                    <NavLink to='/' className={({ isActive }) => (`block w-16 text-sm sm:w-24 xl:w-32 sm:text-base text-center py-2 rounded ${isActive ? 'bg-teal-600 text-white' : 'bg-gray-300 dark:bg-gray-200 text-black'}`)}>All</NavLink>
                    <NavLink to='/high' className={({ isActive }) => (`block w-16 text-sm sm:w-24 xl:w-32 sm:text-base text-center py-2 rounded ${isActive ? 'bg-teal-600 text-white' : 'bg-gray-300 dark:bg-gray-200 text-black'}`)}>High</NavLink>
                    <NavLink to='/medium' className={({ isActive }) => (`block w-16 text-sm sm:w-24 xl:w-32 sm:text-base text-center py-2 rounded ${isActive ? 'bg-teal-600 text-white' : 'bg-gray-300 dark:bg-gray-200 text-black'}`)}>Medium</NavLink>
                    <NavLink to='/low' className={({ isActive }) => (`block w-16 text-sm sm:w-24 xl:w-32 sm:text-base text-center py-2 rounded ${isActive ? 'bg-teal-600 text-white' : 'bg-gray-300 dark:bg-gray-200 text-black'}`)}>Low</NavLink>
                    <NavLink to='/done' className={({ isActive }) => (`block w-16 text-sm sm:w-24 xl:w-32 sm:text-base text-center py-2 rounded ${isActive ? 'bg-teal-600 text-white' : 'bg-gray-300 dark:bg-gray-200 text-black'}`)}>Done</NavLink>
                </div>
            </div>
            <div className='space-y-4 dark:text-black'>
                {tasks.map((task) => (
                    <div key={task.id} className='border my-4 rounded-lg shadow-md '>
                        <div className='flex justify-between items-center cursor-pointer bg-gray-200 p-2' onClick={() => toggleAccordion(task.id, task.isdone)}>
                            <div>
                                <h3 className='text-lg font-bold text-'>{task.taskname}</h3>
                                <p className='text-sm'>Due Date: {new Date(task.duedate).toLocaleDateString()}</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <p className='font-bold'>{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</p>
                                <span className={`w-4 h-4 rounded-full ${task.priority === 'high' ? 'bg-red-600' : task.priority === 'medium' ? 'bg-yellow-600' : 'bg-green-600'}`}></span>
                            </div>
                        </div>

                        {activeTask === task.id && (
                            <div className='p-4 bg-teal-50'>
                                <p className='text-sm mb-2 font-semibold text-teal-700'>Description:</p>
                                <p className='text-sm mb-2 ps-4'>{task.taskdescription}</p>
                                <p className='text-sm mb-2 font-semibold text-teal-700'>Due Date: </p>
                                <p className='text-sm mb-2 ps-4'>{task.duedate}</p>
                                {
                                    !task.isdone && (
                                        <div className='flex justify-between space-x-2 pt-2'>
                                            <NavLink to={`/edit-task/${task.id}`} className='bg-teal-500 text-white text-center w-24 py-2 text-sm rounded-lg sm:w-28 sm:px-4 sm:text-base'>Edit</NavLink>
                                            <NavLink to={`/delete-task/${task.id}`} className='bg-red-500 text-white text-center w-24 py-2 text-sm rounded-lg sm:w-28 sm:px-4 sm:text-base'>Delete</NavLink>
                                        </div>
                                    )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;