import { Section } from "../components/Section"

const bibTex = '@inproceedings{myung-etal-2024-blend,\n\
&emsp;&emsp;author = {Myung, Junho and Lee, Nayeon and Zhou, Yi and Jin, Jiho and Putri, Rifki Afina and Antypas, Dimosthenis and Borkakoty, Hsuvas and Kim, Eunsu and Perez-Almendros, Carla and Ayele, Abinew Ali and Guti\'{e}rrez-Basulto, V\'{\i}ctor and Ib\'{a}\~{n}ez-Garc\'{\i}a, Yazm\'{\i}n and Lee, Hwaran and Muhammad, Shamsuddeen Hassan and Park, Kiwoong and Rzayev, Anar Sabuhi and White, Nina and Yimam, Seid Muhie and Pilehvar, Mohammad Taher and Ousidhoum, Nedjma and Camacho-Collados, Jose and Oh, Alice},\n\
&emsp;&emsp;booktitle = {Advances in Neural Information Processing Systems},\n\
&emsp;&emsp;editor = {A. Globerson and L. Mackey and D. Belgrave and A. Fan and U. Paquet and J. Tomczak and C. Zhang},\n\
&emsp;&emsp;pages = {78104--78146},\n\
&emsp;&emsp;publisher = {Curran Associates, Inc.},\n\
&emsp;&emsp;title = {BLEnD: A Benchmark for LLMs on Everyday Knowledge in Diverse Cultures and Languages},\n\
&emsp;&emsp;url = {https://proceedings.neurips.cc/paper_files/paper/2024/file/8eb88844dafefa92a26aaec9f3acad93-Paper-Datasets_and_Benchmarks_Track.pdf},\n\
&emsp;&emsp;volume = {37},\n\
&emsp;&emsp;year = {2024}\n\
}'

export const Cite = () => {
    return <Section title="Citing This Work" id="neurips_cite">
        <div className="border-y-[1px] border-slate-400 py-3">
            <div>
                Myung, Junho, et al. "Blend: A benchmark for llms on everyday knowledge in diverse cultures and languages." <i>Advances in Neural Information Processing Systems</i> 37 (2024): 78104-78146.
            </div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
                <p
                className="p-3 font-mono text-xs sm:text-sm border border-slate-300 rounded-lg whitespace-pre overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: bibTex }}
                />
            </div>
    </Section>
}
