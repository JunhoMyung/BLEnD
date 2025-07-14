import { Section } from "../components/Section"
import { HomeIcon } from '@heroicons/react/20/solid'
import React, { useRef, useEffect } from 'react'
import Logo from 'uilab-logo.js/lib/uilab-logo'

const members = [
    {
        name: "Junho Myung*",
        affiliation: "KAIST",
        web: "https://junhomyung.github.io/",
    },
    {
        name: "Nayeon Lee*",
        affiliation: "KAIST",
    },
    {
        name: "Yi Zhou*",
        affiliation: "Cardiff University",
        web: "https://jodiechou.github.io/",
    },
    {
        name: "Jiho Jin",
        affiliation: "KAIST",
        web: "https://jinjh0123.github.io/",
    },
    {
        name: "Rifki Afina Putri",
        affiliation: "KAIST",
    },
    {
        name: "Dimosthenis Antypas",
        affiliation: "Cardiff University",
    },
    {
        name: "Hsuvas Borkakoty",
        affiliation: "Cardiff University",
    },
    {
        name: "Eunsu Kim",
        affiliation: "KAIST",
    },
    {
        name: "Carla Perez-Almendros",
        affiliation: "Cardiff University",
    },
    {
        name: "Abinew Ali Ayele",
        affiliation: "Universität Hamburg, Bahir Dar University",
    },
    {
        name: "Víctor Gutiérrez-Basulto",
        affiliation: "Cardiff University",
    },
    {
        name: "Yazmín Ibáñez-García",
        affiliation: "Cardiff University",
    },
    {
        name: "Hwaran Lee",
        affiliation: "NAVER AI Lab",
    },
    {
        name: "Shamsuddeen Hassan Muhammad",
        affiliation: "Imperial College London",
    },
    {
        name: "Kiwoong Park",
        affiliation: "KAIST",
    },
    {
        name: "Anar Sabuhi Rzayev",
        affiliation: "KAIST",
    },
    {
        name: "Nina White",
        affiliation: "Cardiff University",
    },
    {
        name: "Seid Muhie Yimam",
        affiliation: "Universität Hamburg",
    },
    {
        name: "Mohammad Taher Pilehvar",
        affiliation: "Cardiff University",
    },
    {
        name: "Nedjma Ousidhoum",
        affiliation: "Cardiff University",
        web: "https://nedjmaou.github.io/",
    },
    {
        name: "Jose Camacho-Collados",
        affiliation: "Cardiff University",
        web: "https://josecamachocollados.com/",
    },
    {
        name: "Alice Oh",
        affiliation: "KAIST",
        web: "https://aliceoh9.github.io/",
    },
];

export const Members = () => {
    const logoRef = useRef(null);

    useEffect(() => {
        if (logoRef.current) {
            const logo = new Logo(logoRef.current, { defaultColor: '#222222' });

            return () => {
                logoRef.current = null;
            };
        }
    }, []);

    const styles = {
        logodrawingcontainer: {
            "float": "left"
        } as React.CSSProperties,
        logodrawing: {
            "width": 55,
            "height": 55,
            "color": "black"
        } as React.CSSProperties,
        logotext: {
            "display": "block",
            "float": "left",
            "padding": "0.5rem 0.5rem",
            "color": "black",
            "font-size": "1.2rem",
            "font-weight": "bold",
            "line-height": "1.2em"
        } as React.CSSProperties
      }

    return <Section title="Contributors">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
        {
            members.map(member => {
                return <div key={member.name} className="flex items-center">
                    <div className="flex-1 ml-4">
                        <div className="text-sm font-semibold flex items-center">
                            <span>{member.name}</span>
                            {
                                member.web != null ? <a href={member.web} target="_blank"><HomeIcon className="w-5 h-5 text-gray-500 mb-0.5 ml-1"/></a> : null
                            }
                        </div>
                        <div className="text-xs font-light">{member.affiliation}</div>
                    </div>
                </div>
            })
        }
        </div>
        <div className="text-sm mt-5">
            <b>Main Contact:</b>{' '}
            <a href="mailto:junho00211@kaist.ac.kr" className="text-blue-600 underline">
                junho00211@kaist.ac.kr
            </a>
            </div>
        <div className="mt-8 flex items-center gap-6 gap-y-8 flex-wrap">
            <img className="w-[150px]" alt="KAIST logo" src={require("../../public/images/KAIST_logo_small.svg")} />
            <div className="uilab-logo">
                <div className="logo-drawing-container" style={styles.logodrawingcontainer}>
                    <div className="logo-drawing" ref={logoRef} style={styles.logodrawing}></div>
                </div>
                <div className="logo-text" style={styles.logotext}>USERS &amp;<br />INFORMATION</div>
            </div>
            <img className="w-[80px]" alt="CardiffNLP logo" src={require("../../public/images/cardiff_logo.jpg")} />
        </div>
    </Section>
}