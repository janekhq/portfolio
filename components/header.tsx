'use client'

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { buttonVariants } from "./ui/button";
import { Container } from "./ui/container";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Flex } from "./ui/flex";
import { RainbowButton } from "./ui/rainbow-button";
import { SendIcon, SendIconHandle } from "./ui/send";
import { useRef } from "react";
import { ScrollProgressWrapper } from "./ui/scroll-progress";
import { BlocksIcon } from "./ui/blocks";
import { RocketIcon } from "./ui/rocket";
import { MessageCircleMoreIcon } from "./ui/message-circle-more";
import { TerminalIcon } from "./ui/terminal-icon";
import { ContactCards } from "./contact/contact-cards";
import { HyperText } from "./ui/hyper-text";

function CallButton() {

    const sendIconRef = useRef<SendIconHandle>(null)

    return (
        <Flex className="flex-row">
            <Dialog>
                <DialogTrigger render={(
                    <RainbowButton
                        className="group rounded-4xl"
                        onMouseEnter={() => sendIconRef.current?.startAnimation()}
                        onMouseLeave={() => sendIconRef.current?.stopAnimation()}
                    >
                        <SendIcon ref={sendIconRef} svgClassName='size-3.5' />
                        Kontakt
                    </RainbowButton>
                )}>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Wybierz departament</DialogTitle>
                        <DialogDescription>
                            Zadzwoń bezpośrednio do mnie lub do mojego agenta AI.
                        </DialogDescription>
                    </DialogHeader>

                    <ContactCards />

                </DialogContent>
            </Dialog>
        </Flex>
    )
}

const items = [
    { id: 'hero', label: 'Start', icon: RocketIcon, href: '#hero' },
    { id: 'projects', label: 'Projekty', icon: BlocksIcon, href: '#projects' },
    { id: "skills", label: "Umiejętności", icon: TerminalIcon, href: '#skills' },
    { id: "contact", label: "Kontakt", icon: MessageCircleMoreIcon, href: '#contact' },
]

export function Header() {

    return (
        <Container className="my-0! sticky top-0 z-50 gap-2 pointer-events-none">
            <Flex className='flex-row items-center h-16 gap-4 justify-between bg-background pointer-events-auto'>
                {/* <img src='./images/logo.svg' className="h-10" /> */}
                <HyperText className="text-lg">
                    Janek Zagórski
                </HyperText>
                <Flex className="flex-row gap-4">
                    <Flex>
                        <AnimatedThemeToggler className={buttonVariants({ variant: 'ghost', size: 'icon' })} />
                    </Flex>
                    <CallButton />
                </Flex>
            </Flex>
            <Flex className="p-1 mx-auto rounded-xl bg-card/10 backdrop-blur-xl border border-border/50 pointer-events-auto">
                <ScrollProgressWrapper items={items} />
            </Flex>
        </Container>
    )
}
