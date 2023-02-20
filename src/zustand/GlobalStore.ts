import { create } from 'zustand'

interface GlobalState{
    currentPage: number
}

export const UseGlobalStore = create<GlobalState>(()=> ({
    currentPage: 0
}))

export const setCurrentPage = (pagenumber: number)=>{
    UseGlobalStore.setState({currentPage:pagenumber});
}