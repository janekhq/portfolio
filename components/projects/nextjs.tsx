'use client'

import { useRef } from "react";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectsRow } from "./projects-row";
import { ProjectCard } from "./project-card";
import { SearchIcon, SearchIconHandle } from "../ui/search";
import { ScanTextIcon, ScanTextIconHandle } from "../ui/scan-text";
import { PaletteIcon, PaletteIconHandle } from "../ui/palette";

export function NextJSProjects() {

    const searchIconRef = useRef<SearchIconHandle>(null)
    const scanTextIconRef = useRef<ScanTextIconHandle>(null)
    const paletteIconRef = useRef<PaletteIconHandle>(null)

    return (
        <ProjectsRow>
            <ProjectCard
                href='https://search.varely.co/'
                title="Wyszukiwarka internetowa"
                description='Varely Search czyli moja własna wyszukiwarka internetowa.'
                cardContent={<Button variant='secondary'>Sprawdź <ExternalLink /></Button>}
                backgroundIcon={<SearchIcon ref={searchIconRef} size={128} className="brightness-0 invert opacity-10 mx-auto my-auto" />}
                onMouseEnter={() => searchIconRef.current?.startAnimation()}
                onMouseLeave={() => searchIconRef.current?.stopAnimation()}
            />
            <ProjectCard
                href='https://seoscraper.io/'
                title="SEO Scraper"
                description="Alternatywa dla Screaming Frog'a - crawluje do 1000 stron na sekundę i pozwala wyciągnąć dowolne dane. DOSŁOWNIE. Backend w Pythonie."
                cardContent={<Button variant='secondary'>Sprawdź <ExternalLink /></Button>}
                backgroundIcon={<ScanTextIcon ref={scanTextIconRef} size={128} className="brightness-0 invert opacity-10 mx-auto my-auto" />}
                onMouseEnter={() => scanTextIconRef.current?.startAnimation()}
                onMouseLeave={() => scanTextIconRef.current?.stopAnimation()}
            />
            <ProjectCard
                href='https://github.com/janekhq/portfolio'
                title="Ta stronka"
                description="Mi się podoba ;)"
                cardContent={<Button variant='secondary'>Sprawdź <ExternalLink /></Button>}
                backgroundIcon={<PaletteIcon ref={paletteIconRef} size={128} className="brightness-0 invert opacity-10 mx-auto my-auto" />}
                onMouseEnter={() => paletteIconRef.current?.startAnimation()}
                onMouseLeave={() => paletteIconRef.current?.stopAnimation()}
            />
        </ProjectsRow>
    )
}