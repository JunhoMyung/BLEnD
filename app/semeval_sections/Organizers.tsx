import { Section } from "../components/Section"

export const Organizers = () => {
    return <Section title="Organizers" className="flex-1 pt-0" id="semeval_organizers">
        <div className="w-[90%] mx-auto">
            <img
            alt="languages table"
            className="w-full"
            src={require('../../public/images/semeval_organizers.jpg')}
            />
        </div>
    </Section>
}