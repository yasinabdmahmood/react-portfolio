import React from 'react';
import './project.scss';



function Project(props) {
   
    const lift = () => {
    props.callback(props.id)
    }
    return (
        <div className='project-container'>
           <img src={props.img} alt='project'
           onClick={lift} /> 
          
        </div>
    );
}

export default Project;