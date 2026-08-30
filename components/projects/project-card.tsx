import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Flex } from "../ui/flex";
import { GlareCard } from "../ui/glare-card";

type Props = {
    href?: string
    title: string
    description: string | React.ReactNode
    backgroundIcon?: React.ReactNode
    backgroundImageSrc?: string
    cardContent?: React.ReactNode
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

export function ProjectCard({ href, title, description, backgroundIcon, backgroundImageSrc, cardContent, onMouseEnter, onMouseLeave }: Props) {

    const card = (
        <Flex className="not-md:w-full" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <GlareCard className="relative" wrapperClassName="not-md:w-full max-w-80 not-md:mx-auto">
                {backgroundImageSrc &&
                    <img
                        src={backgroundImageSrc}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-0 invert opacity-10 z-0"
                    />
                }
                <Card className="bg-transparent h-full rounded-lg">
                    <CardHeader className="flex-1 flex flex-col justify-end">
                        {backgroundIcon}
                        <CardTitle className="text-white">
                            {title}
                        </CardTitle>
                        <CardDescription>
                            {description}
                        </CardDescription>
                    </CardHeader>
                    {cardContent && <CardContent>{cardContent}</CardContent>}
                </Card>
            </GlareCard>
        </Flex>
    )

    return href ? <Link href={href} target="_blank" className="not-md:w-full">{card}</Link> : card
}
