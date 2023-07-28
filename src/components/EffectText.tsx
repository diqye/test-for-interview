'use client'
import { CSSProperties, useCallback, useEffect, useRef } from "react"

type EffectTextProps = {
    children: React.ReactNode,
    updateId?: number,
    style?: CSSProperties
}
export default function EffectText(props:EffectTextProps){
    let ref = useRef<HTMLDivElement>(null)
    let aniRef = useRef({animationId:0,list:[] as (readonly [HTMLSpanElement, string])[]})
    
    useEffect(()=>{
        if(ref.current == null ) return
        let elements = ref.current.querySelectorAll("[data-effect]") as NodeListOf<HTMLSpanElement>
        let elementList = [].slice.call<typeof elements,[],HTMLSpanElement[]>(elements)
        .map(a=>[a,a.getAttribute("data-effect") as string] as const)
        aniRef.current.list = elementList
        return ()=>{
            cancelAnimationFrame(aniRef.current.animationId)
        }
    },[props.updateId])
    let onMouseEnter = useCallback(()=>{
        let material = "IJLNOSTVXY!W|#$# :="
        let list = aniRef.current.list
        let speedUnit = 30
        let calcDuration = ([_,str]:readonly [Element, string]) => str.length * speedUnit
        let maxDuration = list
        .reduce((previousDuration,item)=>{
            let duration = calcDuration(item)
            return  previousDuration > duration ? previousDuration : duration
        },0)
        let ramdomTxt = (n:number,originalStr:string) => {
            let count = n % 8
            let str = originalStr.slice(0,n-count) 
            while(count-- > 0){
                str += material.charAt(Math.trunc(Math.random() * material.length))
            }
            return str.length == 0 ? "-" : str
        }
        let startTimestamp = 0
        let step = (elapsed:number) => {
            if(elapsed > maxDuration) {
                // Restore original text and end animation
                list.forEach(([el,str])=>{
                    el.innerText = str
                })
                return 
            }
            aniRef.current.animationId = requestAnimationFrame((timestamp:number)=>{
                if(startTimestamp == 0) startTimestamp = timestamp
                let elapsed = timestamp - startTimestamp
                list.forEach(item=>{
                    let duration = calcDuration(item)
                    if(elapsed > duration) return
                    let txt = ramdomTxt(Math.trunc(elapsed/speedUnit),item[1])
                    item[0].innerText = txt
                })
                step(elapsed)
            })
        }
        step(0)
    },[])
    let onMouseLeave = useCallback(()=>{
        // cancelAnimationFrame(aniRef.current.animationId)
        // aniRef.current.list.forEach(([el,str])=>{
        //     el.innerText = str
        // })
    },[])
    return <div
    style={props.style}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    ref={ref}
    >{props.children}</div>
}