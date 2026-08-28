"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type ScrollProgressItem = {
    id: string
    label: string
    icon: LucideIcon
    href?: string
    circleProgress: number
}

function ScrollProgressIcon({ item, showLine }: { item: ScrollProgressItem, showLine: boolean }) {

    const iconRef = useRef<any>(null)

    return (
        <div key={item.id} className="relative flex-1">

            {/* line */}
            {showLine && (
                <div className="absolute left-1/2 right-[-50%] top-5 h-0.5 bg-muted">
                    <motion.div
                        className="h-full origin-left bg-primary"
                        animate={{ scaleX: item.circleProgress >= 1 ? 1 : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                </div>
            )}

            {/* circle */}
            <div className="flex flex-col items-center">
                <a
                    href={item.href}
                    className={cn(item.href ? 'cursor-pointer' : '', "w-fit px-4 flex flex-col items-center gap-2")}
                    onMouseEnter={() => iconRef.current?.startAnimation()}
                    onMouseLeave={() => iconRef.current?.stopAnimation()}
                >
                    <motion.div className="relative z-10 size-10 rounded-full"
                        animate={{
                            background: `conic-gradient(from 0deg,
                                var(--primary) ${item.circleProgress * 360}deg,
                                var(--muted) ${item.circleProgress * 360}deg)`,
                        }}
                    >
                        <div className="absolute inset-[2px] flex items-center justify-center rounded-full bg-background">
                            <item.icon ref={iconRef} className="size-4" svgClassName='size-4' />
                        </div>
                    </motion.div>

                    <span className="text-xs text-muted-foreground">
                        {item.label}
                    </span>
                </a>
            </div>
        </div>
    )
}

export function ScrollProgress({ items, className }: { items: ScrollProgressItem[], className?: string }) {
    return (
        <div className={cn("flex", className)}>
            {items.map((item, i) => <ScrollProgressIcon item={item} showLine={i < items.length - 1} key={i} />)}
        </div>
    )
}

type Item = {
    id: string
    label: string
    icon: LucideIcon
    href?: string
}

export function ScrollProgressWrapper({ items }: { items: Item[] }) {

    const [progress, setProgress] = useState<ScrollProgressItem[]>(
        items.map((item) => ({ ...item, circleProgress: 0 }))
    )

    useEffect(() => {
        const update = () => {
            const y = scrollY + innerHeight / 2

            const sections = items.map((item) => {
                const el = document.getElementById(item.id)!
                const top = el.offsetTop
                return { ...item, top, bottom: top + el.offsetHeight }
            })

            setProgress(
                sections.map((section, i) => {
                    const next = sections[i + 1]

                    if (y < section.top)
                        return { ...section, circleProgress: 0 }

                    if (y <= section.bottom)
                        return {
                            ...section,
                            circleProgress: (y - section.top) / (section.bottom - section.top),
                        }

                    if (next && y < next.top)
                        return { ...section, circleProgress: 1 }

                    return { ...section, circleProgress: 1 }
                })
            )
        }

        update()
        addEventListener("scroll", update, { passive: true })
        addEventListener("resize", update)

        return () => {
            removeEventListener("scroll", update)
            removeEventListener("resize", update)
        }
    }, [items])

    return <ScrollProgress items={progress} />
}

import { Code2, MessageSquare, PanelsTopLeft } from "lucide-react"

const items = [
    { id: "projekty", label: "Projekty", icon: PanelsTopLeft },
    { id: "technologie", label: "Technologie", icon: Code2 },
    { id: "opinie", label: "Opinie", icon: MessageSquare },
]

export function ScrollBarDemo() {
    return (
        <>
            <ScrollProgressWrapper items={items} />

            <main className="space-y-40">
                {items.map((item) => (
                    <section
                        key={item.id}
                        id={item.id}
                        className="flex min-h-screen items-center justify-center"
                    >
                        <h2 className="text-7xl font-bold">{item.label}</h2>
                    </section>
                ))}
            </main>
        </>
    )
}