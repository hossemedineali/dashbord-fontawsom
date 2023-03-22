import { create } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))


interface SliderMenuToggle{
    colapsedMenu:string,
    setColapsedMenu:(x:string)=>void
}

export const useSlideMenuToggle=create<SliderMenuToggle>()((set)=>({
    colapsedMenu:'',
    setColapsedMenu:(x)=>set(()=>({colapsedMenu:x}))
}))