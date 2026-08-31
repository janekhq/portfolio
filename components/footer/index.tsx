import Link from "next/link";
import { Container } from "../ui/container";
import { Flex } from "../ui/flex";
import { Grid } from "../ui/grid";
import { Item, ItemContent, ItemTitle } from "../ui/item";
import { Separator } from "../ui/separator";
import { buttonVariants } from "../ui/button";
import { Bot, Mail, Phone } from "lucide-react";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";

export function Footer() {
    return (
        <Flex className="bg-secondary relative overflow-hidden border-t border-border">
            <div className="absolute inset-0 z-1 shadow-[inset_0_0_80px_40px] shadow-secondary" />
            <AnimatedGridPattern duration={2} className="w-full skew-y-12 inset-x-0 inset-y-[-50%] h-[200%] z-0 opacity-30" />
            <Container className="my-6! z-2">
                <Grid className="grid-cols-1 md:grid-cols-3 items-start">
                    <Item>
                        <ItemContent>
                            <ItemTitle className="text-lg">Janek Zagórski</ItemTitle>
                            <p className="text-muted-foreground mb-2">Osoba od zadań specjalnych.</p>
                            <Flex className="flex-row gap-3">
                                <Link href='https://pl.linkedin.com/in/janek-zagorski' target='_blank'>
                                    <img src='/images/linkedin-icon.svg' className="size-4" />
                                </Link>
                                <Link href='https://github.com/janekhq' target='_blank'>
                                    <img src='/images/github-icon.svg' className="size-4 dark:invert" />
                                </Link>
                            </Flex>
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemContent>
                            <ItemTitle className="text-base">Nawigacja</ItemTitle>
                            <Flex className="gap-2 items-start">
                                <Link href='#hero' className="hover:underline">Start</Link>
                                <Link href='#projects' className="hover:underline">Projekty</Link>
                                <Link href='#skills' className="hover:underline">Umiejętności</Link>
                                <Link href='#contact' className="hover:underline">Kontakt</Link>
                            </Flex>
                        </ItemContent>
                    </Item>
                    <Item>
                        <ItemContent className="items-start">
                            <ItemTitle className="text-base">Kontakt</ItemTitle>
                            <Link href='tel:+48730355879' className={buttonVariants({ variant: 'link' }) + ' px-0!'}>
                                <Phone /> +48 730 355 879
                            </Link>
                            <Link href='mailto:janekzagorski@proton.me' className={buttonVariants({ variant: 'link' }) + ' px-0!'}>
                                <Mail /> janekzagorski@proton.me
                            </Link>
                            <Link href='tel:+48732170707' className={buttonVariants({ variant: 'link' }) + ' px-0!'}>
                                <Bot /> +48 732 17 07 07 (agent AI)
                            </Link>
                        </ItemContent>
                    </Item>
                </Grid>
                <Separator />
                <Flex className="items-center text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Janek Zagórski</p>
                </Flex>
            </Container>
        </Flex>
    )
}