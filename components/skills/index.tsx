'use client'

import { Star } from "lucide-react";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "../ui/section";
import { Grid } from "../ui/grid";
import { MagicCard } from "../ui/magic-card";
import { useTheme } from "next-themes";

export function Skills() {

    const { theme } = useTheme()

    const skills = [
        {
            name: 'Python',
            description: 'Automatyzacje, serwery FastAPI / Flask, odtwarzanie ruchu sieciowego.',
            img: '/images/python.svg',
            stars: 4
        },
        {
            name: 'React / Next.js',
            description: 'SPA, całe strony, używanie bibliotek np. shadcn, zustand.',
            img: '/images/react.svg',
            stars: 4
        },
        {
            name: 'React Native / Expo',
            description: 'Aplikacje mobilne, Firebase / Supabase, optymalizacja, HeroUI.',
            img: '/images/expo-icon.svg',
            stars: 4
        },
        {
            name: 'Bun, TypeScript, Tailwind',
            description: 'Wszystko co istotne :)',
            img: '/images/bun.svg',
            stars: 3
        },
        {
            name: 'Docker + Coolify',
            description: 'Deploy aplikacji z Github\'a, konfiguracja, self-host (VPS), uruchamianie różnych serwisów.',
            img: '/images/docker-icon.svg',
            stars: 3
        },
        {
            name: 'n8n',
            description: 'Najróżniejsze automatyzacje, serwisy i programy.',
            img: '/images/n8n-logo.svg',
            stars: 5
        },
        {
            name: 'AI / Claude / Claude Code',
            description: 'Używam AI codziennie do programowania, analizy danych, automatyzacji itd.',
            img: '/images/claude-icon.svg',
            stars: 4
        },
        {
            name: 'Pozostałe',
            description: 'Cloudflare, Supabase, PostgreSQL, self-host, web-scraping, Google Sheets.',
            img: '/images/cloudflare-icon.svg',
            stars: 0
        },
    ]

    return (
        <Section id="skills">
            <SectionHeader>
                <SectionTitle>Umiejętności</SectionTitle>
                <SectionDescription>
                    Trochę tego jest :) ale nie jest tak, że umiem wszystko po trochu. Gdy tworzy się samemu rożne aplikacje i programy często trzeba sięgnąć po każdą technologię, aby ukończyć projekt.
                </SectionDescription>
            </SectionHeader>
            <SectionContent>
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((item, index) => (
                        <MagicCard key={index} gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"} className="rounded-2xl">
                            <Item className='flex-1' variant='default'>
                                <ItemMedia variant='image'>
                                    <img src={item.img} className="w-full h-full object-contain!" />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle className="w-full flex justify-between">
                                        {item.name}
                                        <ItemActions className='flex-row gap-1'>
                                            {[...Array(item.stars).keys()].map(star => (<Star key={star} className="size-4 fill-amber-400" />))}
                                            {[...Array(5 - (item.stars || 5)).keys()].map(star => (<Star key={star} className="size-4" />))}
                                        </ItemActions>
                                    </ItemTitle>
                                    <ItemDescription>{item.description}</ItemDescription>
                                </ItemContent>
                            </Item>
                        </MagicCard>
                    ))}
                </Grid>
            </SectionContent>
        </Section>
    )
}