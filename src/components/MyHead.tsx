import styles from "./MyHead.module.css"
import EffectText from "./EffectText"
import {Query} from "@/components/Icons"
export default function MyHead(){
    return <header className={styles.header}>
        <div className={styles.header_block}></div>
        <div className={styles.header_home}>
            <EffectText>
                <a href="/">
                    <span data-effect="KASHIWA SATO">KASHIWA SATO</span>
                    <span data-effect="SAMURAI INC. TOKYO" className={styles.homet}>SAMURAI INC. TOKYO</span>
                </a>
            </EffectText>
        </div>
        <div className={styles.right}>
            <ul className={styles.break} style={{marginRight:"37px"}}>
                <li className={styles.line}>
                    <EffectText>
                        <a href="#" className={styles.black} style={{width:"63px"}}>
                            <span data-effect="PROJECT">PROJECT</span>
                        </a>
                    </EffectText>
                </li>
                <li className={styles.line}>
                    <EffectText>
                        <a href="https://kashiwasato.com/profile" style={{width:"59px"}}>
                            <span data-effect="PROFILE">PROFILE</span>
                        </a>
                    </EffectText>
                </li>
                <li>
                    <EffectText>
                        <a href="https://kashiwasato.com/contact" style={{width:"65px"}}>
                            <span data-effect="CONTACT">CONTACT</span>
                        </a>
                    </EffectText>
                </li>
            </ul>
            <ul className={styles.break}>
                <li className={styles.line}>
                    <EffectText>
                        <a href="#" className={styles.black} style={{width:"59px"}}>
                            <span data-effect="ENGLISH">ENGLISH</span>
                        </a>
                    </EffectText>
                </li>
                <li className={styles.line}>
                    <EffectText>
                        <a href="#" style={{width:"70px"}}>
                            <span data-effect="JAPANESE">JAPANESE</span>
                        </a>
                    </EffectText>
                </li>
                <li>
                    <EffectText>
                        <a href="#" style={{width:"59px"}}>
                            <span data-effect="CHINESE">CHINESE</span>
                        </a>
                    </EffectText>
                </li>
            </ul>
            <div className={styles.query}>
                <input type="text" placeholder="PLEASE INPUT KEYWORD" />
                <div className={styles.query_box}>
                    <Query className={styles.query_icon} />
                </div>
            </div>
        </div>
    </header>
}