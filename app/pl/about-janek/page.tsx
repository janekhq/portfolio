import { Metadata } from "next"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Flex } from "@/components/ui/flex"

export const metadata: Metadata = {
    title: 'Janek Zagórski - Portfolio',
    description: 'cool.'
}

export default function Page() {
    return (
        <Flex>
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </Flex>
    )
}
