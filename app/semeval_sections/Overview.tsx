import { Section } from "../components/Section"

export const Overview = () => {
    return <Section title="Overview" className="flex-1 pt-0" id="semeval_overview" >
        <p>
        The global deployment of large language models (LLMs) necessitates cultural awareness and competence. However, LLMs often exhibit a significant deficiency in culture-specific knowledge, particularly concerning under-resourced languages and regions. They tend to generate responses that reflect Western-centric perspectives or the stereotypes present in their training data. Given that existing benchmarks predominantly rely on monolingual datasets or online resources like Wikipedia, which often fail to capture the nuanced realities of everyday life across diverse cultural contexts, our team has developed BLEnD, a benchmark that comprehensively evaluates LLMs’ understanding of everyday knowledge in multilingual and multicultural contexts. In this shared task, we will provide an extended version of BLEnD, enabling the evaluation of language models’ cultural competence across 26 languages and 30 countries.
        </p>
        <div className="text-xl font-light text-[#4592ec] mb-4 mt-8">Task Description</div>
        <p>This shared task aims to evaluate cultural awareness of language models and NLP systems in different languages. The manually constructed BLEnD benchmark will serve as the validation and test sets for the existing languages and will not include training data because it is specifically designed for evaluation purposes. By withholding BLEnD from the training process, we can ensure that the results truly reflect a model’s ability to generalise to unseen, diverse cultural and linguistic contexts. BLEnD currently includes 13 languages and 16 cultures. In this shared task, we will expand it to cover 17 additional pairs of languages and cultures as shown in Table 1. Participants will be asked to participate in one or all of the following tracks:</p>
        <figure className="mx-auto my-8">
            <div className="w-[40%] mx-auto">
                <img
                alt="languages table"
                className="w-full"
                src={require('../../public/images/semeval_languages.jpg')}
                />
            </div>
            <figcaption className="w-[80%] mx-auto text-center text-sm text-gray-500 mt-2">
                Table 1: Languages included in our shared task. Datasets with completed annotations in the original BLEnD are indicated in bold. The data for the remaining languages and regions will be created specifically for this shared task.
            </figcaption>
        </figure>
        <div className="text-xl font-light text-[#4592ec] mb-4 mt-8">Track 1: Short Answer Questions (SAQ)</div>
        <p>Participants will test their models on short-answer questions (SAQs) to ensure they can accurately generate responses while accounting for cultural and linguistic diversity. This track will include 26 languages. Given questions in a given language, responses will be tested in that language, and correctness will be determined based on alignment with human-annotated answers from BLEnD.</p>
        <div className="text-xl font-light text-[#4592ec] mb-4 mt-8">Track 2: Multiple-Choice Questions (MCQ)</div>
        <p>In this track, questions are provided in English only. Each question will come with four answer options, each representing a cultural perspective from a different country or region, i.e., the one that received the highest number of votes for a given country. To ensure fairness, questions are filtered to exclude those marked as culturally irrelevant or unclear by human annotators. Each multiple-choice question includes four answer options, with no more than one option representing any of the other countries or regions. The developed model is assessed based on its ability to identify the culturally appropriate choice for each question per region.</p>
    </Section>
}