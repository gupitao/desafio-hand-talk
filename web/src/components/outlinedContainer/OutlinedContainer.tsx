import React from "react";
import style from "./OutlinedContainer.module.scss";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export function OutlinedContent({children, className} : Props) {
    return (
        <div className={`${style.outlined_content} ${className || ''}`}>
            {children}
        </div>
    );
}