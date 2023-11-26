import React from 'react'
import MessagesHeader from './MessagesHeader'
import ContactMessages from './ContactMessages'
import InputMessages from './InputMessages'

const Messages = () => {
  return (
    <div>
        <div className=' '>
          <MessagesHeader/>
          <ContactMessages/>
          <InputMessages/>
        </div>
    </div>
  )
}

export default Messages
