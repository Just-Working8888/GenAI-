import { FC } from "react"
import classes from './FooterComponent.module.scss'
import { useAppSelector } from "store/hook"
import { Link } from "react-router-dom"



const FooterComponent: FC = () => {

    return (
        <footer className={classes.footer}>
            <h2>Get help at support@avgen.me</h2>
            <p>Copyright © 2024 Mook Ltd. All rights reserved.</p>
        </footer >
    )
}
export default FooterComponent