import { Members } from "./sections/Members";
import { Cite } from "./sections/Cite";
import { Abstract } from "./sections/Abstract";
import { Footer } from "./sections/Footer";
import { Dataset } from "./sections/Dataset";
import { Evaluation } from "./sections/Evaluation";

export function App() {
  return (<>
    <main className="container mx-auto px-4 sm:px-12 pt-6">
      <div>
        <div className="font-bold text-lg text-[#ff9164] mb-3">NeurIPS 2024 - Datasets & Benchmarks</div>
        <div className="text-4xl mb-2 font-bold text-[#f45e9b]">BLE<span className="text-3xl align-baseline">N</span>D</div> 
        <div className="font-light leading-8 sm:leading-[2.5rem] text-2xl sm:text-3xl">A Benchmark for LLMs on Everyday Knowledge in Diverse Cultures and Languages</div>
      </div>
      <Abstract/>
      <Dataset/>
      <Evaluation/>
      <Cite/>
      <Members/>
    </main><Footer/></>
  );
}
