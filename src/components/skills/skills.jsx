import React, { useEffect, useState } from 'react'
import { Frontend, Backend, Others } from './data'

import './skills.scss'

const Skills = () => {

    const [accordion, setAccordion] = useState('');
    const [data, setData] = useState(Frontend)

    useEffect(() => {
        if (accordion === 'backend') {
            setData(Backend)
        } else if (accordion === 'others') {
            setData(Others)
        }else if(accordion==='frontend'){
            setData(Frontend)
        }

    }, [accordion])


    console.log(data);
    return (
        <section className='skills' id='skills'>
            <div className='container'>
                <h2 className='title'>My Skills</h2>
                <div className='skills-content'>
                    <div className='column left'>
                        <div className='text'>My creative skills and  experience</div>
                        <p>Excellent knowledge of English, knowledge of Chinese at a high level.
                        Higher education of a translator (IV grade).
                        The desire to speak and work with people, an active life position, There are personal projects. Experience in problem solving and finding effective solutions.</p>
                    </div>
                    <div className='column right'>
                        <div className='tabs'>
                            <button onClick={() => setAccordion('frontend')}>Frontend</button>
                            <button onClick={() => setAccordion('backend')} >Backend</button>
                            <button onClick={() => setAccordion('others')}>Others</button>
                        </div>

                        {data.map((skill) => (
                            <div className='bars' key={skill.id} >
                                <div className='info'>
                                    <span>{skill.skill}</span>
                                    <span>{skill.procent}</span>
                                </div>
                                <div className={`line ${skill.className}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Skills
