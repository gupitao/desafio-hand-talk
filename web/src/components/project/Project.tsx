import { Button } from "../commons/button";
import { OutlinedContent } from "../outlinedContainer/OutlinedContainer";
import style from "./Project.module.scss";

export function Project() {
    return (
        <div className={style.project}>
            <h1>Projetos</h1>

            <OutlinedContent className={style.project__content}>
                <img src="/assets/img_default.png" alt="imagem do projeto" />

                <h2>Nome do Projeto</h2>
                <p>Descrição do Projeto</p>

                <Button>Ver mais</Button>
            </OutlinedContent>

            <Button>Ver todos os projetos</Button>
        </div>
    );
}