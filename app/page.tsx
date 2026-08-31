import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Container } from "@/components/ui/container"
import { Flex } from "@/components/ui/flex"

export default function Page() {
    return (
        <Flex>

            <Header />

            <Hero />

            <Projects />

            <Skills />

            <Contact />

        </Flex>
    )
}
