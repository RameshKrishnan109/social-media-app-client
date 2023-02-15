import { create } from 'zustand'

export interface User{
    id:string,
    name:string|null,
    avatar: string|null
}

interface UserState{
    user: User,
    SetUser: (user: User)=> void
}

export const useUserStore = create<UserState>((set) => ({
    user: {id:'',name:'', avatar:''},
    SetUser: (user:User)=> set(() => ({user: user}))
}))