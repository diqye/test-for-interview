import Image from "next/image"
import EffectText from "./EffectText"
import styles from "./DataCard.module.css"

type Props = {
    ID: string,
    title: string,
    acf:{
        mobile_image:{
            sizes:{
                "mobile-thumbnail":string
            }
        },
        credits:{title:string,name:string}[]
    }
}
export default function DataCard(props:Props){
    return <EffectText>
        <a href={"https://kashiwasato.com/project/" + props.ID}>
            <div>
                <Image width="271" height="271" className={styles.image} alt={props.title} loading="lazy" src={"https://kashiwasato.com/" + props.acf.mobile_image.sizes["mobile-thumbnail"]} />
            </div>
            <div className={styles.title}>
                <span data-effect={props.title}> {props.title}</span>
            </div>
            {props.acf.credits.slice(0,4).map(item=><Item {...item}></Item>)}
            <div className={styles.credits + " " + styles.readmore}>
                READ MORE +
            </div>
        </a>
    </EffectText>
}

function Item(props: Props["acf"]["credits"][0]){
    return <div className={styles.credits}>
        {props.title}: {props.name}
    </div>
}