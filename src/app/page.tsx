"use client"
import Image from "next/image"
import styles from "./page.module.css"
import MyHead from "@/components/MyHead"
import { useRequestData } from "@/useKits"
import DataCard from "@/components/DataCard"
/**
 * 1 纯手写无任何React之外的库依赖，图片Lazy为Nuxt自带。
 * 2 手机版适配未做。
 * 3 根据窗口大小自动调整卡片大小未做,目前是超出自动换行。
 * 4 Loaing动画未做，因为页面中的动画已经可以作为考察内容了。
 * @returns 
 */
export default function Home(){
  let {list,status} = useRequestData()
  function renderContent(){
    return <>
      <MyHead></MyHead>
      <ul className={styles.content}>
        {list.map(card=><li><DataCard {...card}></DataCard></li>)}
      </ul>
      <footer className={styles.footer}>
      COPYRIGHT © SAMURAI INC. ALL RIGHTS RESERVED.
      </footer>
    </>
  }
  function loading(){
    return <>
      Loading...
    </>
  }
  return status == "pending" ? loading() : renderContent()
}