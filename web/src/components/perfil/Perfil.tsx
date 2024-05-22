import { Button } from "../commons/button";
import { CircleAvatar } from "../commons/circleAvatar/CircleAvatar";
import { OutlinedContent } from "../outlinedContainer/OutlinedContainer";
import style from "./Perfil.module.scss";

interface Proficiency {
    title: string;
    skills: string[];
}

export function Perfil() {
    const proficiencies: Proficiency[] = [
        {
            title: "Habilidades",
            skills: []
        },
        {
            title: "Ferramentas",
            skills: ["Sketch"]
        },
        {
            title: "Metodologias",
            skills: []
        },
        {
            title: "Habilidades",
            skills: ["Duplo Diamante", "Scrum"]
        },
        {
            title: "Banco de Dados",
            skills: ["Firebase"]
        }
    ]


    return (
        <div className={style.perfil}>
            <CircleAvatar />

            <Button>Entre em Contato</Button>

            <OutlinedContent className={style.perfil__content}>
                <h1>Sobre Mim</h1>
                <p>Qualquer conteúdo textual inventado da sua preferência </p>

                <dl className={style['description-list']}>
                    {proficiencies.map((proficiency, index) => (
                        <div key={index}>
                            <dt>{proficiency.title}</dt>
                            {proficiency.skills.map((skill, skillIndex) => (
                                <dd key={skillIndex}>{skill}</dd>
                            ))}

                            {proficiency.skills.length === 0 && <dd></dd>}
                        </div>
                    ))}
                </dl>
            </OutlinedContent>
        </div>
    );
}