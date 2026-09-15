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

const semevalBibTex = '@inproceedings{ousidhoum-etal-2026-semeval,\n\
&emsp;&emsp;title = "{S}em{E}val-2026 Task 7: Everyday Knowledge Across Diverse Languages and Cultures",\n\
&emsp;&emsp;author = "Ousidhoum, Nedjma and Myung, Junho and Perez-Almendros, Carla and Jin, Jiho and Keleg, Amr and Beloucif, Meriem and Zhou, Yi and Agerri, Rodrigo and Araujo, Vladimir and Baes, Naomi and Barry, James and Boisson, Joanne and Chen, Nancy F. and de Kock, Christine and Edwards, Aleksandra and Fernandez de Landa, Joseba and Fazli Imam, Mohamed and Hakami, Huda and Hsieh, Shu-Kai and Imperial, Joseph Marvin and Lee, Roy Ka-Wei and Liu, Zhengyuan and Lyu, Chenyang and Samih, Younes and Sjons, Johan and Tan, Bryan and Ushio, Asahi and Zheng, Weihua and Oh, Alice and Camacho-Collados, Jose",\n\
&emsp;&emsp;editor = "Kochmar, Ekaterina and Ghosh, Debanjan and North, Kai and Komachi, Mamoru and Zampieri, Marcos",\n\
&emsp;&emsp;booktitle = "Proceedings of the 20th International Workshop on Semantic Evaluation (2026)",\n\
&emsp;&emsp;month = jul,\n\
&emsp;&emsp;year = "2026",\n\
&emsp;&emsp;address = "San Diego, California, USA",\n\
&emsp;&emsp;publisher = "Association for Computational Linguistics",\n\
&emsp;&emsp;url = "https://aclanthology.org/2026.semeval-1.455/",\n\
&emsp;&emsp;doi = "10.18653/v1/2026.semeval-1.455",\n\
&emsp;&emsp;pages = "3823--3837",\n\
&emsp;&emsp;ISBN = "979-8-89176-414-9"\n\
}'

export const Cite = (props: { id?: string }) => {
    return <Section title="Citing This Work" id={props.id ?? "neurips_cite"}>
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
        <div className="mt-8 border-y-[1px] border-slate-400 py-3">
            <div>
                Ousidhoum, Nedjma, et al. "SemEval-2026 Task 7: Everyday Knowledge Across Diverse Languages and Cultures." <i>Proceedings of the 20th International Workshop on Semantic Evaluation (2026)</i> (2026): 3823-3837.
            </div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
                <p
                className="p-3 font-mono text-xs sm:text-sm border border-slate-300 rounded-lg whitespace-pre overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: semevalBibTex }}
                />
            </div>
    </Section>
}
