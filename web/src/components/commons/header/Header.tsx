import { IoMenu } from "react-icons/io5";
import style from "./Header.module.scss";
import { ThemeToggle } from "../../themeToogle/ThemeToogle";


export function Header() {
    return (
        <header className={style.header}>
            <ThemeToggle></ThemeToggle>
            <IoMenu className={style.header__icon} />
        </header>
    );
}