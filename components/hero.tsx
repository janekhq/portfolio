'use client'

import { useTheme } from "next-themes";
import { Button, buttonVariants } from "./ui/button";
import { Container } from "./ui/container";
import { Flex } from "./ui/flex";
import { Particles } from "./ui/particles";
import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";
import Link from "next/link";

function HeroTerminal() {
    return (
        <Terminal className="bg-background/50">
            {/* <TypingAnimation>&gt; kto to Janek Zagórski?</TypingAnimation> */}
            <TypingAnimation className="text-blue-500 dark:text-blue-400">$ ./build-developer.sh --name "Jan Zagórski"</TypingAnimation>

            <AnimatedSpan>&gt; Frontend .............. Next.js</AnimatedSpan>
            <AnimatedSpan>&gt; Backend ............... FastAPI</AnimatedSpan>
            <AnimatedSpan>&gt; Database .............. PostgreSQL</AnimatedSpan>
            <AnimatedSpan>&gt; AI .................... Claude Code</AnimatedSpan>
            <AnimatedSpan>&gt; Automation ............ n8n</AnimatedSpan>
            <AnimatedSpan>&gt; Infrastructure ........ Docker</AnimatedSpan>

            <AnimatedSpan className="text-green-500 dark:text-green-400">✔ Application built</AnimatedSpan>
            <AnimatedSpan className="text-green-500 dark:text-green-400">✔ Tests passed</AnimatedSpan>
            <AnimatedSpan className="text-green-500 dark:text-green-400">✔ Docker image created</AnimatedSpan>
            <AnimatedSpan className="text-green-500 dark:text-green-400">✔ Deployed to production</AnimatedSpan>

            <TypingAnimation className="text-blue-500 dark:text-blue-400">$ echo $STATUS</TypingAnimation>

            <AnimatedSpan className="text-muted-foreground">READY TO HIRE.</AnimatedSpan>
            {/* <AnimatedSpan className="text-blue-500">
                <span>ℹ Updated 1 file:</span>
                <span className="pl-2">- lib/utils.ts</span>
            </AnimatedSpan> */}

            {/* <TypingAnimation className="text-muted-foreground">Ready to hire.</TypingAnimation> */}

        </Terminal>
    )
}

export function Hero() {

    const { theme } = useTheme()

    return (
        <Flex className="relative w-full items-center justify-center overflow-hidden scroll-mt-32" id='hero'>

            <Particles className="absolute inset-0 z-0" color={theme === 'light' ? '#000' : '#fff'} />

            <Container className="md:flex-row justify-between items-center">

                <Flex className="gap-4">
                    <Flex as="h1" className="flex-row text-3xl font-bold text-black dark:text-white items-center gap-2">
                        Full-Stack Developer budujący rozwiązania od pomysłu do produkcji.
                    </Flex>

                    <p className="max-w-2xl text-muted-foreground">
                        Tworzę nowoczesne aplikacje webowe, backendy, rozwiązania oparte o AI oraz automatyzacje.
                        Łączę frontend, backend i infrastrukturę, aby dostarczać kompletne, działające produkty.
                    </p>

                    <Flex className="flex-row gap-2">
                        <Link href='#projects' className={buttonVariants({ variant: 'default' })}>
                            Zobacz projekty
                        </Link>
                        <Button variant='outline' render={<Link href='#contact'>Skontaktuj się</Link>}></Button>
                    </Flex>
                </Flex>

                <HeroTerminal />
            </Container>
        </Flex>
    )
}