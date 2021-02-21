import React from 'react'
import './contacts.scss'

const Contacts = () => {

   const contacts= [
        {
            id: 1,
            head: 'Name',
            subTitle: 'Volovlikov Evgeny',
        },
        {
            id: 2,
            head: 'Address',
            subTitle: 'Prospect Lenina, 7',
        },
        {
            id: 3,
            head: 'Mail',
            subTitle: 'Volovlikov97@gmail.com',
        },
        {
            id: 4,
            head: 'Phone',
            subTitle: '8-977-285-04-61',
        },
    ]

    return (
        <section className='contact'>
                <div className='container'>
                    <h2 className='title'>Contact me</h2>
                    <div className='contact-content'>
                        <div className='column left'>
                            <div className='text'>Get in Touch</div>
                            <p>If you have any questions or projects that you weant to discuss. Feel free to write me on any time.</p>

                            <div className='icons'>
                                {
                                    contacts.map(item => (
                                        <a className='row' key={item.id} >
                                         😊
                                            <div className='info'>
                                                <div className='head'>{item.head}</div>
                                                <div className='sub-title'>{item.subTitle}</div>
                                            </div>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='column right'>
                            <div className='text'>Message me</div>
                            <form className='form' >
                                <div className='fields'>
                                    <div className='field name'>
                                        <input type="text" name='name' placeholder='Name' required />
                                    </div>
                                    <div className='field email'>
                                        <input type="email" name='email' placeholder='Email' required />
                                    </div>

                                </div>
                                <div className='field textarea'>
                                    <textarea cols="30" rows="10" name='message' placeholder='Describe project...' required />
                                </div>

                                <div className='button'>
                                    <button type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Contacts
