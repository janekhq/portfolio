import Image from "next/image";
import { Section, SectionContent, SectionHeader, SectionTitle } from "../ui/section";
import { Flex } from "../ui/flex";
import { Card, CardContent } from "../ui/card";
import { Lens } from "../ui/lens";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { Separator } from "../ui/separator";
import { ContactCards } from "./contact-cards";

export function Contact() {
    return (
        <Section id="contact">
            <SectionHeader>
                <SectionTitle>Kontakt</SectionTitle>
            </SectionHeader>
            <SectionContent className="md:flex-row">
                <Flex className="flex-1">
                    <Card>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </Flex>

                <Flex className="flex-1">
                    <ImageLens />
                    <About />
                </Flex>
            </SectionContent>
        </Section>
    )
}

function ImageLens() {

    /* <ChromaticImage src='/images/jaaa.jpg' alt="Janek i jego piesek Pixel" className='aspect-3/4 max-w-md w-full rounded-xl' /> */

    return (
        <Flex className="relative flex-1">
            <Lens className="min-h-80 h-full">
                <Image src='/images/jaaa.jpg' alt="Janek" fill loading='eager' className="max-w-full rounded-4xl object-cover" />
                <Flex className="absolute bottom-0 w-full items-center">
                    <Flex className="bg-background flex-row gap-2 items-center rounded-t-md py-2 px-3">
                        <div className="relative">
                            <div className="absolute size-2 animate-ping rounded-full bg-green-600 dark:bg-green-400" />
                            <div className="relative size-2 rounded-full bg-green-700 dark:bg-green-500" />
                        </div>
                        <span className="text-xs font-medium">Dostępny od zaraz</span>
                    </Flex>
                </Flex>
            </Lens>
        </Flex>
    )
}

function About() {
    return (
        <Flex className="pt-6 px-6 gap-4 md:gap-6">
            <Flex className="md:flex-row gap-3 justify-center items-center">
                <Flex className="flex-1 text-lg font-semibold text-right">Jan Zagórski</Flex>
                <div className="not-md:hidden size-2 bg-muted-foreground/75 rounded-full" />
                <Flex className="flex-1 text-lg text-muted-foreground">Full-stack Developer</Flex>
            </Flex>
            <Flex className="flex-row justify-center gap-3">
                <Link href='https://pl.linkedin.com/in/janek-zagorski' target='_blank'>
                    <img src='/images/linkedin-icon.svg' className="size-5" />
                </Link>
                <Link href='https://github.com/janekhq' target='_blank'>
                    <img src='/images/github-icon.svg' className="size-5 dark:invert" />
                </Link>
            </Flex>
            <Separator />
            <ContactCards />
        </Flex>
    )
}
