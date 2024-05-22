import style from "./CircleAvatar.module.scss";

export function CircleAvatar() {
    return (
        <div className={style.circle_avatar}>
            <img src="/assets/perfil_default.png" alt="imagem de perfil" />
            <h1 className={style['title-lg']}>Fulane</h1>
        </div>
    );
}