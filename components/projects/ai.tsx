'use client'

import { useRef } from "react";
import { Button } from "../ui/button";
import { ProjectCard } from "./project-card";
import { ProjectsRow } from "./projects-row";
import { BrainIcon, BrainIconHandle } from "../ui/brain";
import { TimerIcon, TimerIconHandle } from "../ui/timer";
import { BotMessageSquareHandle, BotMessageSquareIcon } from "../ui/bot-message-square";

export function AIProjects() {

    const brainIconRef = useRef<BrainIconHandle>(null)
    const timerIconRef = useRef<TimerIconHandle>(null)
    const botMessageSquareIconRef = useRef<BotMessageSquareHandle>(null)

    return (
        <ProjectsRow>
            <ProjectCard
                title="Poziom obsługi AI"
                description="Wiem, który AI do czego służy, ich słabe i mocne strony oraz potrafię pisać dokładne instrukcje w Markdown."
                backgroundIcon={<BrainIcon ref={brainIconRef} size={128} className="brightness-0 invert opacity-10 mx-auto my-auto" />}
                onMouseEnter={() => brainIconRef.current?.startAnimation()}
                onMouseLeave={() => brainIconRef.current?.stopAnimation()}
            />
            <ProjectCard
                title="Skrócenie czasu pracy z 75h do 8h"
                description="Napisałem program tłumaczący podstrony przedszkola na 2 języki. +300 stron przetłumaczonych bez człowieka."
                backgroundIcon={<TimerIcon ref={timerIconRef} size={128} className="brightness-0 invert opacity-10 mx-auto my-auto" />}
                onMouseEnter={() => timerIconRef.current?.startAnimation()}
                onMouseLeave={() => timerIconRef.current?.stopAnimation()}
            />
            <ProjectCard
                title="Mój własny asystent AI"
                description="Można do niego/niej zadzwonić i porozmawiać. Umawia spotkania, zapamiętuje numery telefonów oraz kto dzwonił. SERIO."
                cardContent={<Button variant='secondary'>Zadzwoń +48 732 17 07 07</Button>}
                backgroundIcon={<BotMessageSquareIcon ref={botMessageSquareIconRef} size={128} className="brightness-0 invert opacity-10 mx-auto my-auto" />}
                onMouseEnter={() => botMessageSquareIconRef.current?.startAnimation()}
                onMouseLeave={() => botMessageSquareIconRef.current?.stopAnimation()}
            />
        </ProjectsRow>
    )
}
