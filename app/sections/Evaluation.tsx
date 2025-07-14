import { Section } from "../components/Section"
import React from "react"

export const Evaluation = () => {

    return <Section title="LLM Evaluation on BLEnD">
        <p className="mb-4">
        We evaluate state-of-the-art LLMs on BLEND using short-answer and multiple-choice tasks.
        Our evaluation measures accuracy—whether model responses match human answers—and cultural bias, reflected in performance gaps across countries, regions, and languages.
        </p>
        <figure className="w-[90%] mx-auto my-8">
            <img
            alt="phases figure"
            className="w-full"
            src={require('../../public/images/own_lang_graph.png')}
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
            LLMs’ performance on short answer questions for each country/region in the local language. Models constructed from a Western country are shown in shades of blue, whereas those built from a non-Western country are shown in shades of red
            </figcaption>
        </figure>
        <figure className="w-[60%] mx-auto my-8">
            <img
            alt="phases figure"
            className="w-full"
            src={require('../../public/images/own_eng_graph.png')}
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
             Average performance of all LLMs in local language and English on short answer questions. The grey error bars indicate the standard deviations among all models.
            </figcaption>
        </figure>
    </Section>
}