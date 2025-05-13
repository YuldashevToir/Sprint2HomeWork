import React, { useState } from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType Done
* 2 - указать нужный тип для defaultAffairs Done
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами Done
* 4 - выполнить пункт 3 для функции deleteAffair Done
* 5 - указать нужный тип в useState с affairs Done
* 6 - дописать тип и логику функции deleteAffairCallback Done
* 7 - в файле Affairs.tsx дописать типизацию пропсов Done
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow Done
* 9 - в файле Affair.tsx дописать типизацию пропсов  Done
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать Done
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: number // Done need to fix any
    name: string // Done need to fix any
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // Done need to fix any if it's outside the func. it won't be rewritten when a state updates
    { _id: 1, name: 'React', priority: 'high' }, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions and they are here to enable testing 
export const filterAffairs = (affairs:  AffairType[] , filter: string): AffairType[] => { // Done need to fix any
    if (filter === "all") {
        return affairs
    };
    if (filter === "high") {
        return affairs.filter(a=> a.priority === "high" )    
    }
    if (filter === "middle") {
        return affairs.filter(a=> a.priority === "middle")
    }
    if (filter === "low") {
        return affairs.filter(a=> a.priority === "low")
    }
    return affairs
}
export const deleteAffair = (affairs:  AffairType[], _id: number):  AffairType[] => { // Done need to fix any

    return affairs.filter(a=> a._id !== _id) // Done need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[] >(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { // Done need to fix any
        setAffairs(deleteAffair(affairs,_id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
