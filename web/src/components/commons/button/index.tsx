import React from "react";
import style from "./Button.module.scss";

interface Props {
    children?: React.ReactNode
}

export function Button({children}: Props) {
    return (
        <button className={style.button}>
            {children}
        </button>
    )
}