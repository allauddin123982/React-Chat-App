import React from 'react'
import chatBack from '../images/chatBack2.jpg'
import Message from './Message'
const ContactMessages = () => {
  return (
    <div className='h-[540px] bg-no-repeat bg-cover overflow-auto p-3 '
    style={{ backgroundImage: `url(${chatBack})` }}
    >
    <Message isOwner={true}/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    </div>
  )
}

export default ContactMessages
