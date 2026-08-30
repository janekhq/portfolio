'use client'

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Button, buttonVariants } from "./ui/button";
import { Container } from "./ui/container";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Flex } from "./ui/flex";
import { RainbowButton } from "./ui/rainbow-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { SendIcon, SendIconHandle } from "./ui/send";
import { useRef, useState } from "react";
import { Check, Code2, Copy, MessageSquare, PanelsTopLeft, Phone } from "lucide-react";
import { PhoneCallIcon, PhoneCallIconHandle } from "./ui/phone-call";
import { Grid } from "./ui/grid";
import { BotMessageSquareIcon } from "./ui/bot-message-square";
import { UserIcon } from "./ui/user";
import { AtSignIcon } from "./ui/at-sign";
import { Kbd } from "./ui/kbd";
import { ScrollProgressWrapper } from "./ui/scroll-progress";
import { BlocksIcon } from "./ui/blocks";
import { RocketIcon } from "./ui/rocket";
import { MessageCircleMoreIcon } from "./ui/message-circle-more";
import { TerminalIcon } from "./ui/terminal-icon";

function CallButton() {

    const sendIconRef = useRef<SendIconHandle>(null)

    /* <Send className="group-hover:hidden size-3.5" />
    <MailOpen className="hidden group-hover:flex size-3.5" /> */

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

                    <Grid className="grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
                        <BotCard />
                        <MeCard />
                        <EmailCard />
                    </Grid>

                </DialogContent>
            </Dialog>
        </Flex>
    )
}

function BotCard() {

    const cardIconRef = useRef<SendIconHandle>(null)
    const buttonIconRef = useRef<SendIconHandle>(null)

    return (
        <Card
            onMouseEnter={() => cardIconRef.current?.startAnimation()}
            onMouseLeave={() => cardIconRef.current?.stopAnimation()}
        >
            <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                    <BotMessageSquareIcon ref={cardIconRef} size={20} />
                    Agent AI
                </CardTitle>
                <CardDescription>Zada kilka pytań a po chwili umówi spotkanie</CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant='secondary'>+48 732 17 07 07</Button>
            </CardContent>
        </Card>
    )
}

function MeCard() {

    const cardIconRef = useRef<PhoneCallIconHandle>(null)
    const buttonIconRef = useRef<PhoneCallIconHandle>(null)

    return (
        <Card
            onMouseEnter={() => cardIconRef.current?.startAnimation()}
            onMouseLeave={() => cardIconRef.current?.stopAnimation()}
        >
            <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                    <UserIcon ref={cardIconRef} size={20} />
                    Janek
                </CardTitle>
                <CardDescription>Bezpośredni kontakt do mnie <Kbd>+48 730 355 879<Copy /></Kbd></CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
                <RainbowButton
                    className="rounded-4xl group"
                    onMouseEnter={() => buttonIconRef.current?.startAnimation()}
                    onMouseLeave={() => buttonIconRef.current?.stopAnimation()}
                >
                    <Phone className="group-hover:hidden size-3.5" />
                    <PhoneCallIcon ref={buttonIconRef} className="hidden group-hover:flex" svgClassName="size-3.5" />
                    +48 730 355 879
                </RainbowButton>
            </CardContent>
        </Card>
    )
}

function EmailCard() {

    const cardIconRef = useRef<PhoneCallIconHandle>(null)
    const buttonIconRef = useRef<PhoneCallIconHandle>(null)

    return (
        <Card
            className="col-span-2"
            onMouseEnter={() => cardIconRef.current?.startAnimation()}
            onMouseLeave={() => cardIconRef.current?.stopAnimation()}
        >
            <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                    <AtSignIcon ref={cardIconRef} size={20} />
                    Adres email
                </CardTitle>
                <CardDescription>Zapraszam do kontaktu <KbdCopy>janekzagorski@proton.me</KbdCopy></CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
                <Button variant='outline'>Wyślij wiadomość</Button>
            </CardContent>
        </Card>
    )
}

function KbdCopy({ children, showToast = false }: { children: string, showToast?: boolean }) {

    const [copied, setCopied] = useState(false)

    const timeoutRef = useRef<any>(0)

    const handleClick = async () => {
        clearTimeout(timeoutRef.current)
        await navigator.clipboard.writeText(children)
        setCopied(true)
        timeoutRef.current = setTimeout(() => setCopied(false), 1000)
    }

    if (showToast) return (
        <Kbd onClick={handleClick} className="cursor-pointer pointer-events-auto">
            {children}
            {copied ? <Check /> : <Copy />}
        </Kbd>
    )

    return (
        <Kbd onClick={handleClick} className="cursor-pointer pointer-events-auto">
            {children}
            {copied ? <Check /> : <Copy />}
        </Kbd>
    )
}

export function Header() {

    const items = [
        { id: 'hero', label: 'Start', icon: RocketIcon, href: '#hero' },
        { id: 'projects', label: 'Projekty', icon: BlocksIcon, href: '#projects' },
        { id: "skills", label: "Umiejętności", icon: TerminalIcon, href: '#skills' },
        { id: "contact", label: "Kontakt", icon: MessageCircleMoreIcon, href: '#contact' },
    ]

    return (
        <Container className="my-0! sticky top-0 z-50 gap-2">
            <Flex className='flex-row items-center h-16 gap-4 justify-between bg-background'>
                <img src='./images/logo.svg' className="h-10" />
                <Flex className="flex-row gap-4">
                    <Flex>
                        <AnimatedThemeToggler className={buttonVariants({ variant: 'ghost', size: 'icon' })} />
                    </Flex>
                    <CallButton />
                </Flex>
            </Flex>
            <Flex className="p-1 mx-auto rounded-xl bg-card/10 backdrop-blur-xl border border-border/50">
                <ScrollProgressWrapper items={items} />
            </Flex>
        </Container>
    )
}
