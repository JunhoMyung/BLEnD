import { Section } from "../components/Section"
import { ArxivIcon, GithubIcon, HuggingfaceIcon } from "../components/icons"
import { NewspaperIcon } from "@heroicons/react/20/solid"
import { TableCellsIcon } from "@heroicons/react/20/solid"

export const Abstract = () => {
    return <Section title="Abstract" className="flex-1 pt-0" id="neurips_abstract" remove_top_padding={true}>
        <p>
        Large language models (LLMs) often lack culture-specific knowledge of daily life, especially across diverse regions and non-English languages. Existing benchmarks for evaluating LLMs' cultural sensitivities are limited to a single language or collected from online sources such as Wikipedia, which do not reflect the mundane everyday lifestyles of diverse regions. That is, information about the food people eat for their birthday celebrations, spices they typically use, musical instruments youngsters play, or the sports they practice in school is common cultural knowledge but uncommon in easily collected online sources, especially for underrepresented cultures. To address this issue, we introduce BLEnD, a hand-crafted benchmark designed to evaluate LLMs' everyday knowledge across diverse cultures and languages. BLEnD comprises 52.6k question-answer pairs from 16 countries/regions, in 13 different languages, including low-resource ones such as Amharic, Assamese, Azerbaijani, Hausa, and Sundanese. We construct the benchmark to include two formats of questions: short-answer and multiple-choice. We show that LLMs perform better for cultures that are highly represented online, with a maximum 57.34% difference in GPT-4, the best-performing model, in the short-answer format. For cultures represented by mid-to-high-resource languages, LLMs perform better in their local languages, but for cultures represented by low-resource languages, LLMs perform better in English than the local languages.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
            <a className="icon-label-button bg-teal-500 pl-4 text-white" aria-disabled={true} href={"https://proceedings.neurips.cc/paper_files/paper/2024/hash/8eb88844dafefa92a26aaec9f3acad93-Abstract-Datasets_and_Benchmarks_Track.html"} target="_blank">
                <NewspaperIcon className="w-6 h-6 text-white"/>
                <span>Paper</span>
            </a>
            <a className="icon-label-button bg-red-400 pl-4 text-white" href="https://arxiv.org/abs/2406.09948" target="_blank">
                <ArxivIcon size={20}/>
                <span>arXiv</span>
            </a>
            <a className="icon-label-button bg-yellow-400 pl-4 text-white" href="https://huggingface.co/datasets/nayeon212/BLEnD" target="_blank">
                <HuggingfaceIcon size={40}/>
                <span>HuggingFace</span>
            </a>
            <a className="icon-label-button text-white" href="https://github.com/nlee0212/BLEnD" target="_blank">
                <GithubIcon size={28}/>
                <span>Code & Data</span>
            </a>
        </div>
    </Section>
}
