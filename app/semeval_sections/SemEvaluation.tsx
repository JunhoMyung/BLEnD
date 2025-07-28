import { Section } from "../components/Section"

export const SemEvaluation = () => {
    return <Section title="Evaluation" className="flex-1 pt-0" id="semeval_evaluation" remove_top_padding={true}>
        <p>
        We will evaluate each submission using accuracy based on the alignment of the generated answer with human annotations. Notably, our evaluation accounts for variations in responses, which ensures a more robust assessment. Specifically, in the SAQ track, a model-generated answer is marked as correct if it matches any of the responses provided by human annotators for the same question, and in the MCQ track, accuracy is calculated based on the correctness of the selected answer. More details about the evaluation protocol can be found in{' '} 
            <a
                href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/8eb88844dafefa92a26aaec9f3acad93-Abstract-Datasets_and_Benchmarks_Track.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
            >
                (Myung et al., 2024)
            </a>.
        </p>
    </Section>
}