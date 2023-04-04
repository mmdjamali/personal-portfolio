import { useAppState } from "@/stores/store";
import { useCallback , useRef } from "react";

export const useChangeSection = (section : string) => {
    const { changeSection } = useAppState()
    const observer = useRef<IntersectionObserver | null>(null);

    const ref = useCallback((node : HTMLElement) => {
        if(observer.current) observer.current.disconnect()
    
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        changeSection && changeSection(section)
      }
    },{
      rootMargin: (node.offsetHeight / 2.5) * -1 + "px 0px"
    })

    if(node) observer.current.observe(node)
    },[changeSection])

    return ref
}