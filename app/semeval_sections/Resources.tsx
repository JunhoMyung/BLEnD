import { Section } from "../components/Section"

export const Resources = () => {
    return <Section title="Resources" className="flex-1 pt-0" id="semeval_resources">
        <ul className="list-disc pl-6 text-lg text-gray-800 space-y-2">
            <li>
                <a href="https://semeval.github.io/SemEval2026/tasks" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                SemEval 2025 Shared Tasks
                </a>
            </li>
            <li>
                <a href="https://semeval.github.io/faq.html" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                Frequently Asked Questions about SemEval
                </a>
            </li>
            <li>
                <a href="https://semeval.github.io/paper-requirements.html" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                Paper Submission Requirements
                </a>
            </li>
            <li>
                <a href="https://semeval.github.io/system-paper-template.html" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                Guidelines for Writing Papers
                </a>
            </li>
            <li>
                <a href="https://github.com/acl-org/acl-style-files" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                Paper style files
                </a>
            </li>
            {/* <li>
                Previous shared-tasks on emotion detection:&nbsp;
                <a href="https://aclanthology.org/S18-1001/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                SemEval-2018 Task 1: Affect in Tweets
                </a>
            </li>
            <li>
                Resources for Beginners
                <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>
                    <a href="#" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Starter kit
                    </a>{" "}
                    (Note that you need to download the data from CodaBench.)
                </li>
                <li>
                    Writing tutorial:&nbsp;
                    <a href="#" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Blogpost
                    </a>
                </li>
                <li>
                    Examples of additional datasets/lexicons:
                    <ul className="list-square pl-6 space-y-1 mt-1">
                    <li>
                        Emotion lexicons:&nbsp;
                        <a
                        href="http://saifmohammad.com/WebPages/lexicons.html"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        http://saifmohammad.com/WebPages/lexicons.html
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://aclanthology.org/S18-1001/"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        SemEval-2018 Task 1: Affect in Tweets
                        </a>{" "}
                        for arb, eng, esp.
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Emotions in Drama
                        </a>{" "}
                        for deu.
                    </li>
                    <li>
                        <a
                        href="#"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        RESD
                        </a>
                        ,{" "}
                        <a
                        href="#"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        CEDR-M7
                        </a>
                        ,{" "}
                        <a
                        href="#"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Dusha
                        </a>{" "}
                        for rus.
                    </li>
                    </ul>
                </li>
                </ul>
            </li> */}
            <li>
                Paper submission link <span className="text-gray-500">(to be added)</span>
            </li>
            </ul>
    </Section>
}