import { Section } from "../components/Section"

export const Communication = () => {
    return <Section title="Communication" className="flex-1 pt-0" id="semeval_communication" remove_top_padding={true}>
        <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Join our Discord Channel to ask questions and receive updates (coming soon).</li>
            <li>If you have any questions or issues, please feel free to create an issue.</li>
            <li>Contact organizers at: semeval-2026-blend-organisers[at]googlegroups[dot]com</li>
        </ul>
    </Section>
}