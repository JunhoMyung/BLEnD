export const Section = (props: {
    title: string
    remove_top_padding?: boolean
    className?: string
    children?: any
    id?: string
}) => {
    return <div id={props.id} className={`${props.remove_top_padding === true ? "" : "pt-2"} pb-8 ${props.className}`} >
        <div className="section-title text-3xl font-light text-[#4592ec] mb-4">{props.title}</div>
        {
            props.children
        }
    </div>
}