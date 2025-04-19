import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any Done
    addUserCallback: (name: string) => void // need to fix any Done
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: any) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут Done

    if (name.trim() !== "") {
        addUserCallback(name.trim())
        setName("")
    } else {
        setError("Ошибка! Введите имя!")
    }

}

export const pureOnBlur = (name: string, setError: any) => { // если имя пустое - показать ошибку Done
    return name.trim() === "" ? setError("Ошибка! Введите имя!") : setError("")
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => { // если нажата кнопка Enter - добавить Done
    if (e.key === "Enter") {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any Done
    const [error, setError] = useState<string>('') // need to fix any Done

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any Done
        setName(e.currentTarget.value) // need to fix Done
        console.log(users);


        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }


    let totalUsers = users.length // need to fix Done
    const lastUserName = totalUsers > 0 ? users[totalUsers-1].name : "" // need to fix Done

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
