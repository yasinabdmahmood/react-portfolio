import React from 'react';
import './MyWorks.scss';
import projectsdb from '../../projectsdb';
import Detail from '../detail/Detail';
import Project from '../project/Project';
import { useState } from 'react';


function MyWorks(props) {
    const projects = projectsdb;
    const [show, setShow] = useState(false)
    const [currentId, setCurrentId] = useState(0);
    const hidePopUpWindow = () => {
        setShow(false)
    }
    const showPopUp = (id) => {
        setShow(true)

        setCurrentId(id)

    }

    return (
        <div className='projects-container'>
            {[...projects].reverse().map(el => {
                return (
                    <Project
                        img={el.img}
                        name={el.name}
                        id={el.id}
                        callback={showPopUp}
                        key={el.id}
                    />
                );
            })}

            <Detail
                show={show}
                project={projects[projects.findIndex(el => el.id === currentId)]}
                hidePopUpWindow={hidePopUpWindow}
            />
        </div>

    );
}

export default MyWorks;