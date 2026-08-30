import { ProjectCard } from "./project-card";
import { ProjectsRow } from "./projects-row";

export function N8nProjects() {
    return (
        <ProjectsRow>
            <ProjectCard
                title='Auto-updater Wordpressa'
                description='Integracja pozwalająca na dodanie stron Wordpress do pamięci i aktualizowanie wszystkich tych stron jednym kliknięciem.'
                backgroundIcon={<img src='/images/wordpress-icon.svg' alt="wordpress logo" className="max-w-50 max-h-32 mx-auto my-auto" />}
            />
            <ProjectCard
                title='Uptime dowolnej strony'
                description='Cron sprawdzający czy dowolna strona żyje. Jeżeli nie to deweloper dostaje maila z błędem.'
                backgroundIcon={<img src='/images/n8n-logo-white.svg' alt="n8n logo" className="max-w-50 max-h-32 mx-auto my-auto" />}
            />
            <ProjectCard
                title='Woocommerce webhook'
                description='Integracja dodająca wiersze do pliku Google Sheets, gdy klient złoży zamówienie w sklepie internetowym.'
                backgroundIcon={<img src='/images/woocommerce-icon.svg' alt="" className="max-w-50 max-h-32 mx-auto my-auto" />}
            />
        </ProjectsRow>
    )
}