import { create } from 'zustand'

interface PageState{
    currentPage: number,
    setCurrentPage: (pagenumber: number)=> void
}

export const UsePageStore = create<PageState>((set)=> ({
    currentPage: 0,
    setCurrentPage: (pagenumber: number) => set(()=> ({currentPage: pagenumber}))
}))