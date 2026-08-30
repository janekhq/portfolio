'use client'

import { useRef } from "react"
import { Button } from "../ui/button"
import { ExternalLink } from "lucide-react"
import { CctvIcon, CctvIconHandle } from "../ui/cctv"
import { WaypointsIcon, WaypointsIconHandle } from "../ui/waypoints"
import { ProjectCard } from "./project-card"
import { ProjectsRow } from "./projects-row"

export function PythonProjects() {

    const iconCctvRef = useRef<CctvIconHandle>(null)
    const iconWaypointsRef = useRef<WaypointsIconHandle>(null)

    return (
        <ProjectsRow>
            <ProjectCard
                href='https://github.com/th3poli/steamguard'
                title="Menadżer kont Steam"
                description='Zaawansowany program (napisany przed erą AI 😉) zarządzający tysiącami kont na platformie Steam dziennie. Pozwalał na automatyczny handel, wymiany i zakładanie nowych kont. Polegał w 100% na odtworzeniu ruchu sieciowego stron internetowych.'
                cardContent={<Button variant='secondary'>Sprawdź pozostałości repo<ExternalLink /></Button>}
                backgroundImageSrc='/images/steam.svg'
            />
            <ProjectCard
                href='https://github.com/janekhq/slurp'
                title="Slurp"
                description='Program przechwytujący stream z kamer pogodowych i pozwalający na zapis do storage R2 Cloudflare.'
                cardContent={<Button variant='secondary'>Sprawdź na Github<ExternalLink /></Button>}
                backgroundIcon={<CctvIcon ref={iconCctvRef} size={128} className="brightness-0 invert opacity-10 mb-auto" />}
                onMouseEnter={() => iconCctvRef.current?.startAnimation()}
                onMouseLeave={() => iconCctvRef.current?.stopAnimation()}
            />
            <ProjectCard
                // href='https://github.com/janekhq/slurp'
                title="Ruch sieciowy w małym paluszku"
                description='Piszę web crawlery, serwery FastAPI itd. Potrafię odtworzyć dowolny ruch sieciowy z cookies, sesjami itp.'
                // cardContent={<Button variant='secondary'>Sprawdź na Github<ExternalLink /></Button>}
                backgroundIcon={<WaypointsIcon ref={iconWaypointsRef} size={128} className="brightness-0 invert opacity-10 mx-auto my-auto" />}
                onMouseEnter={() => iconWaypointsRef.current?.startAnimation()}
                onMouseLeave={() => iconWaypointsRef.current?.stopAnimation()}
            />
        </ProjectsRow>
    )
}