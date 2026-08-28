import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { DotPattern } from "./ui/dot-pattern";
import { Flex } from "./ui/flex";
import { Highlighter } from "./ui/highlighter";
import { Particles } from "./ui/particles";
import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";
import { WordRotate } from "./ui/word-rotate";

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
    return (
        <Flex className="relative w-full items-center justify-center overflow-hidden" id='hero'>
            {/* <DotPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" /> */}
            <Particles className="absolute inset-0 z-0" color={'#000'} />
            <Container className="md:flex-row justify-between items-center">

                <Flex className="gap-4">
                    <Flex as="h1" className="flex-row text-3xl font-bold text-black dark:text-white items-center gap-2">
                        Full-Stack Developer budujący rozwiązania od pomysłu do produkcji.
                        {/* <WordRotate
                            words={["10 sekund", "1 kliknięcie"]}
                            duration={2500}
                        /> */}
                    </Flex>

                    <p className="max-w-2xl text-muted-foreground">

                        Tworzę nowoczesne aplikacje webowe, backendy, rozwiązania oparte o AI oraz automatyzacje.
                        Łączę frontend, backend i infrastrukturę, aby dostarczać kompletne, działające produkty.

                        {/* Cześć, jestem{' '}
                        <Highlighter action='underline' color='#00a6f4'>
                            Janek
                        </Highlighter>{'. '}
                        Od 10 lat buduję automatyzacje, strony, aplikacje mobilne i programy na zlecenie{'. '}
                        To, co robisz{' '}
                        <Highlighter action='strike-through' color="#fb2c36">
                            codziennie przez 2 godziny
                        </Highlighter>, zamieniam w{' '}
                        <Highlighter action='highlight' color='#bbf451'>
                            jedno kliknięcie.
                        </Highlighter> */}
                    </p>

                    <Flex className="flex-row gap-2">
                        <Button>
                            Zobacz projekty
                        </Button>
                        <Button variant='outline'>
                            Skontaktuj się
                        </Button>
                    </Flex>

                </Flex>

                <HeroTerminal />
            </Container>
        </Flex>
    )
}