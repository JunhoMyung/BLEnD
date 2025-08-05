import { Section } from "../components/Section"

export const FAQ = () => {
    return <Section title="FAQs" className="flex-1 pt-0" id="semeval_faq" remove_top_padding={true}>
        <ul className="list-disc space-y-4 pl-6 text-gray-800 text-lg">
            <li>
                <strong>Do I have to participate in all languages for a given track?</strong><br />
                No, you can participate in one or more languages.
            </li>
            <li>
                <strong>How will you verify my submitted model?</strong><br />
                To be included in the final team rankings of our shared task, it is mandatory for participants to submit a system description paper describing their approaches and methodologies in detail, therefore ensuring scientific integrity.
            </li>
            <li>
                <strong>Can I use LLMs in the different tracks?</strong><br />
                Yes.
            </li>
            <li>
                <strong>Can I use additional datasets (e.g, publicly provided ones from other sources)?</strong><br />
                Yes. Please do cite them in the system description paper.
            </li>
            <li>
                <strong>How was the data annotated and did you use LLMs to annotate it?</strong><br />
                No. The data was annotated by native speakers (≥5 per instance), not LLMs. Annotators answered the given cultural question based on their cultural background, without aksing the LLM. Different answer options were expected since this is a subjective task. See the task definition for more details.
            </li>
            <li>
                <strong>Will I be included in the final ranking if I do not write a system description paper?</strong><br />
                No. You <strong>MUST</strong> write a system description paper to be included in the final ranking.
            </li>
            <li>
                <strong>I have never written a system description paper. How can I write one?</strong><br />
                We will provide an online writing tutorial and share resources to help you write your paper.
            </li>
            <li>
                <strong>Do I need to pay conference registration fees and/or attend SemEval for my paper to be published?</strong><br />
                No. It is not required to attend SemEval or pay registration fees for your paper to be published. However, if you want to attend, you must pay the attendance fee.
            </li>
            <li>
                <strong>Our system did not perform very well, should I still write a system description paper?</strong><br />
                Yes! We want insights from all participants—even if your system did not perform well. Negative results are still valuable.
            </li>
        </ul>
    </Section>
}
