'use client'
import { School } from './School';
import styles from './style.module.scss';

const schools = [

    {
        title1: "Universidad",
        title2: "Tecnológica Nacional",
        src: "logo-1.png",
        link: 'https://www.linkedin.com/in/lucassingh/details/education/'
    },
    {
        title1: "Universidad de la",
        title2: "Defensa Nacional",
        src: "logo-2.png",
        link: 'https://www.linkedin.com/in/lucassingh/details/education/'
    },
    {
        title1: "Universidad",
        title2: "Del CEMA",
        src: "logo-3.png",
        link: 'https://www.linkedin.com/in/lucassingh/details/education/'
    },
]

export const SchoolGrid = () => {
    return (
        <main className={styles.main}>
            <div className={styles.gallery}>
                {
                    schools.map(school => {
                        return (
                            <div key={school.title2}>
                                <School school={school} />
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}
