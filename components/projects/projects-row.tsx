import { Flex } from "../ui/flex";

type Props = {
    children?: React.ReactNode
}

export function ProjectsRow({ children }: Props) {
    return (
        <Flex className="md:flex-row flex-wrap gap-6 items-center md:justify-evenly">
            {children}
        </Flex>
    )
}