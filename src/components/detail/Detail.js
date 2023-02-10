import './Detail.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function Detail(props) {
    const {name,discription,gitHubLink,liveDomo,img,technologies} = props.project;
    const {hidePopUpWindow} =  props;
    return (
        <div className={props.show? 'detail' : 'hide'}>
               <div>
               <FontAwesomeIcon
                 className='close'
                 icon={faClose} 
                onClick={() => {hidePopUpWindow()}} />
                <div className='div1'>
                  <h1>{name}</h1>                  
                </div>
                <div className='div2'>
                  {technologies.map(el => {
                    return <span key={el}>{el}</span>
                  })}
                </div>
                <div className='div3'>
                  <img src={img} alt='project' />
                  <div className='div31'>
                    <p>{discription}</p>
                    <div className='div311'>
                      <a href={liveDomo} target="_blank" rel="noreferrer" >See Live</a>
                      <a href={gitHubLink} target="_blank" rel="noreferrer" >GitHub Sourse</a>
                    </div>
                  </div>
                </div>
                
               </div>
               
            </div>
    );
}

export default Detail;