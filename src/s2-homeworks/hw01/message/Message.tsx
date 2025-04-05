import React from 'react'
import s from './Message.module.css'
import { MessageType } from '../HW1'

// нужно создать правильный тип вместо any Done
type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные Done
const Message = ({ message }: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + message.id}
                    // создаёт студент
                   src={message.user.avatar}

                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + message.id} className={s.name}>
                        {/*создаёт студент*/}

                        {message.user.name}
                    </div>
                    <pre id={'hw1-text-' + message.id} className={s.messageText}>
                        {/*создаёт студент*/}

                        {message.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + message.id} className={s.time}>
                {/*создаёт студент*/}

                {message.message.time}
            </div>
        </div>

        // <div className='message'>

        //     <div className='img'>
        //         <img src="a" alt="" />
        //     </div>

        //     <div className='nameAndText'>
        // <div className='name'>name</div>
        // <div className='text'>
        //     <pre>text</pre>
        // </div>
        //     </div>

        // <div className='time'>time</div>
        // </div>
    )
}

export default Message
