import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - описать тип UserType Done
* 2 - указать нужный тип в useState с users Done
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами Done
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error Done
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback Done
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами Done
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName) Done
* 9 - в файле Greeting.tsx дописать типизацию пропсов Done
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки Done
* 11 - сделать стили в соответствии с дизайном Done
* */

// types
export type UserType = {
    _id: string // need to fix any Done
    name: string // need to fix any Done
}

export const pureAddUserCallback = (name: string, setUsers: (users:UserType[])=>void, users: UserType[]) => { // need to fix any
    const user = { // need to fix Done
        name:name,
        _id:v1()
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any Done

    const addUserCallback = (name: string) => { // need to fix any Done
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}><h2>Homework #3</h2></div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
