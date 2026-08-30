import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "../ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { NextJSProjects } from "./nextjs";
import { PythonProjects } from "./python";
import { N8nProjects } from "./n8n";
import { AIProjects } from "./ai";
import { CommissionProjects } from "./commission";

export function Projects() {
    return (
        <Section id='projects'>
            <SectionHeader>
                <SectionTitle>Projekty</SectionTitle>
                <SectionDescription>Lista projektów prywatnych jak i zleceń.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                <Tabs defaultValue="nextjs" className='w-full gap-3'>
                    <TabsList className='not-md:sticky top-38.5 z-10 not-md:w-full overflow-x-auto justify-start scrollbar-none'>
                        <TabsTrigger value="nextjs">NextJS</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="n8n">n8n</TabsTrigger>
                        <TabsTrigger value="ai">AI</TabsTrigger>
                        <TabsTrigger value="commission">Zlecenia</TabsTrigger>
                    </TabsList>
                    <TabsContent value="nextjs">
                        <NextJSProjects />
                    </TabsContent>
                    <TabsContent value="python">
                        <PythonProjects />
                    </TabsContent>
                    <TabsContent value="n8n">
                        <N8nProjects />
                    </TabsContent>
                    <TabsContent value="ai">
                        <AIProjects />
                    </TabsContent>
                    <TabsContent value="commission">
                        <CommissionProjects />
                    </TabsContent>
                </Tabs>
            </SectionContent>
        </Section>
    )
}
