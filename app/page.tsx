import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Container } from "@/components/ui/container"
import { Flex } from "@/components/ui/flex"

export default function Page() {
    return (
        <Flex>

            <Header />

            <Hero />

            <Container id="projects" className="bg-secondary h-200">
                projekty
            </Container>

            <Container id="skills" className="h-200">
                umiejętności
            </Container>

            <Container id="contact" className="bg-secondary h-200">
                kontakt
            </Container>

        </Flex>
    )
}
