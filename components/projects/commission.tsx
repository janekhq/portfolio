'use client'

import { useRef } from "react";
import { ProjectCard } from "./project-card";
import { ProjectsRow } from "./projects-row";
import { WorkflowIcon, WorkflowIconHandle } from "../ui/workflow";

export function CommissionProjects() {

    const workflowIconRef = useRef<WorkflowIconHandle>(null)

    return (
        <ProjectsRow>
            <ProjectCard
                title="Integracja LMS z KSEF"
                description={<Description />}
                backgroundIcon={<WorkflowIcon ref={workflowIconRef} size={128} className="brightness-0 invert opacity-10 mx-auto my-auto" />}
                onMouseEnter={() => workflowIconRef.current?.startAnimation()}
                onMouseLeave={() => workflowIconRef.current?.stopAnimation()}
            />
        </ProjectsRow>
    )
}

function Description() {
    return (
        <>
            KSEF to nowoczesny i bezpieczny system fakturowania 😊
            Dlatego stworzyłem integrację dla klienta:<br />LMS (CRM) → Fakturownia → KSEF.
            Zamiast przeklejać 150 faktur miesięcznie - klika 1 przycisk.
        </>
    )
}
