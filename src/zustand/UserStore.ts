import { create } from 'zustand'
export interface User{
    id:string,
    name:string|null,
    avatar: string|null
}
interface UserState{
    user: User
}

export const useUserStore = create<UserState>(() => ({
    user: {id:'',name:'', avatar:''},
}))

export const SetUser = (user:User)=>{
    useUserStore.setState({user:user})
}