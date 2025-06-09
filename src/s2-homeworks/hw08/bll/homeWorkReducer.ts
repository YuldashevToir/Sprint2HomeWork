import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any Done
    switch (action.type) {
        case 'sort': { // by name
           const sorted = [...state].sort((a:any,b:any)=>{
            const nameA = a.name.toLocaleLowerCase()
            const nameB = b.name.toLocaleLowerCase()

            if (action.payload === 'up') {
                return nameA.localeCompare(nameB)
            }
            if (action.payload === 'down') {
                return nameB.localeCompare(nameA)
            }
            return 0;
           })
            return sorted // need to fix
        }
        case 'check': {

            return state.filter(u=> u.age > action.payload) // need to fix
        }
        default:
            return state
    }
}
