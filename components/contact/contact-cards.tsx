'use client'

import { useRef } from "react";
import { Grid } from "../ui/grid";
import { SendIconHandle } from "../ui/send";
import { useState } from "react";
import { Check, Copy, Phone } from "lucide-react";
import { PhoneCallIcon, PhoneCallIconHandle } from "../ui/phone-call";
import { BotMessageSquareIcon } from "../ui/bot-message-square";
import { UserIcon } from "../ui/user";
import { AtSignIcon } from "../ui/at-sign";
import { Kbd } from "../ui/kbd";
import { Item, ItemContent, ItemDescription, ItemTitle } from "../ui/item";
import { Flex } from "../ui/flex";
import { Button, buttonVariants } from "../ui/button";
import { RainbowButton } from "../ui/rainbow-button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function BotCard() {

    const cardIconRef = useRef<SendIconHandle>(null)

    return (
        <Item
            variant='outline'
            onMouseEnter={() => cardIconRef.current?.startAnimation()}
            onMouseLeave={() => cardIconRef.current?.stopAnimation()}
        >
            <ItemContent>
                <ItemTitle>
                    <BotMessageSquareIcon ref={cardIconRef} size={18} />
                    Agent AI
                </ItemTitle>
                <ItemDescription className="mb-3">Zada kilka pytań a po chwili umówi spotkanie</ItemDescription>
                <Flex className="flex-row mt-auto">
                    <Link href='tel:+48732170707' className={buttonVariants({ variant: 'secondary', size: 'sm' })}>
                        +48 732 17 07 07
                    </Link>
                </Flex>
            </ItemContent>
        </Item>
    )
}

function MeCard() {

    const cardIconRef = useRef<PhoneCallIconHandle>(null)
    const buttonIconRef = useRef<PhoneCallIconHandle>(null)

    return (
        <Item
            variant='outline'
            onMouseEnter={() => cardIconRef.current?.startAnimation()}
            onMouseLeave={() => cardIconRef.current?.stopAnimation()}
        >
            <ItemContent>
                <ItemTitle>
                    <UserIcon ref={cardIconRef} size={18} />
                    Janek
                </ItemTitle>
                <ItemDescription className="mb-3">Bezpośredni kontakt do mnie <KbdCopy showToast>+48 730 355 879</KbdCopy></ItemDescription>
                <Flex className="flex-row mt-auto">
                    <Link
                        href='tel:+48730355879'
                        className="group"
                        onMouseEnter={() => buttonIconRef.current?.startAnimation()}
                        onMouseLeave={() => buttonIconRef.current?.stopAnimation()}
                    >
                        <RainbowButton className="rounded-4xl">
                            <Phone className="group-hover:hidden size-3.5" />
                            <PhoneCallIcon ref={buttonIconRef} className="hidden group-hover:flex" svgClassName="size-3.5" />
                            +48 730 355 879
                        </RainbowButton>
                    </Link>
                </Flex>
            </ItemContent>
        </Item>
    )
}

function EmailCard() {

    const cardIconRef = useRef<PhoneCallIconHandle>(null)

    return (
        <Item
            variant='outline'
            className="xl:col-span-2"
            onMouseEnter={() => cardIconRef.current?.startAnimation()}
            onMouseLeave={() => cardIconRef.current?.stopAnimation()}
        >
            <ItemContent>
                <ItemTitle>
                    <AtSignIcon ref={cardIconRef} size={18} />
                    Adres email
                </ItemTitle>
                <ItemDescription className="mb-3">Zapraszam do kontaktu <KbdCopy showToast>janekzagorski@proton.me</KbdCopy></ItemDescription>
                <Flex className="flex-row mt-auto">
                    <Link href='mailto:janekzagorski@proton.me'>
                        <Button variant='outline' size='sm'>Napisz email</Button>
                    </Link>
                </Flex>
            </ItemContent>
        </Item>
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
        <Tooltip>
            <TooltipTrigger delay={0}>
                <Kbd onClick={handleClick} className="cursor-pointer pointer-events-auto">
                    {children}
                    {copied ? <Check /> : <Copy />}
                </Kbd>
            </TooltipTrigger>
            <TooltipContent>
                Kliknij by skopiować
            </TooltipContent>
        </Tooltip>
    )

    return (
        <Kbd onClick={handleClick} className="cursor-pointer pointer-events-auto">
            {children}
            {copied ? <Check /> : <Copy />}
        </Kbd>
    )
}

export function ContactCards() {
    return (
        <Grid className="grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
            <BotCard />
            <MeCard />
            <EmailCard />
        </Grid>
    )
}
