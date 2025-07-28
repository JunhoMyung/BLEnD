import { Members } from "./neurips_sections/Members";
import { Cite } from "./neurips_sections/Cite";
import { Abstract } from "./neurips_sections/Abstract";
import { Footer } from "./neurips_sections/Footer";
import { Dataset } from "./neurips_sections/Dataset";
import { Evaluation } from "./neurips_sections/Evaluation";
import React, { useState } from "react";
import { TableOfContents } from "./components/TableOfContents";
import { Summary } from "./semeval_sections/Summary";
import { Overview } from "./semeval_sections/Overview";
import { SemEvaluation } from "./semeval_sections/SemEvaluation";
import { Communication } from "./semeval_sections/Commuication";
import { FAQ } from "./semeval_sections/FAQ";
import { Resources } from "./semeval_sections/Resources";
import { Organizers } from "./semeval_sections/Organizers";

const tab1Toc = [
  { id: "semeval_overview", label: "Overview" },
  { id: "semeval_evaluation", label: "Evaluation" },
  { id: "semeval_communication", label: "Communication" },
  { id: "semeval_faq", label: "FAQs" },
  { id: "semeval_resources", label: "Resources" },
  { id: "semeval_organizers", label: "Organizers" },
];

const tab2Toc = [
  { id: "neurips_abstract", label: "Abstract" },
  { id: "neurips_dataset", label: "Dataset" },
  { id: "neurips_evaluation", label: "Evaluation" },
  { id: "neurips_cite", label: "Cite" },
  { id: "neurips_members", label: "Members" },
];

export function App() {

  const [activeTab, setActiveTab] = useState("tab1");

  const tocItems = activeTab === "tab1" ? tab1Toc : tab2Toc;

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <>
            <Summary/>
            <Overview />
            <SemEvaluation />
            <Communication />
            <FAQ />
            <Resources/>
            <Organizers />
          </>
        );
      case "tab2":
        return (
          <>
            <Abstract/>
            <Dataset/>
            <Evaluation/>
            <Cite/>
            <Members/>
          </>)
      default:
        return null;
    }
  };
  
  return (<>
    <main className="container mx-auto px-4 sm:px-12 pt-6">
      <div>
        {/* <div className="font-bold text-lg text-[#ff9164] mb-3">NeurIPS 2024 - Datasets & Benchmarks</div> */}
        <div className="text-5xl mb-4 mt-8 font-bold text-[#f45e9b]">BLE<span className="text-4xl align-baseline">N</span>D</div> 
        <div className="font-light leading-8 sm:leading-[2.5rem] text-2xl sm:text-3xl">A Benchmark for LLMs on Everyday Knowledge in Diverse Cultures and Languages</div>
      </div>
      <div className="flex space-x-8 border-b border-gray-200 mt-8 mb-6 text-lg font-medium">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`pb-2 transition-all duration-200 ${
            activeTab === "tab1"
              ? "border-b-4 border-[#f45e9b] text-[#f45e9b]"
              : "text-gray-400 hover:text-[#f45e9b]"
          }`}
        >
          SemEval-2026 Task 7
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          className={`pb-2 transition-all duration-200 ${
            activeTab === "tab2"
              ? "border-b-4 border-[#f45e9b] text-[#f45e9b]"
              : "text-gray-400 hover:text-[#f45e9b]"
          }`}
        >
          NeurIPS 2024 - Datasets & Benchmarks
        </button>
      </div>
      <div className="mt-4">{renderContent()}</div>
      <TableOfContents items={tocItems} />
    </main><Footer/></>
  );
}
