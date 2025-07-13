const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeIdType): {themeId:number} => { // fix any Done
    switch (action.type) {
        // дописать Done
        case 'SET_THEME_ID':{
            return {...state, themeId:action.id }
        }
        default:
            return state
    }
}

type ThemeIdType = {
    type: 'SET_THEME_ID'
    id : number
}
export const changeThemeId = (id: number): ThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any Done
