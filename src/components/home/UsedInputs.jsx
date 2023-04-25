export const Message = ({label, placeholder})=>{
    return(
        <div className="text-sm w-full">
            <label className="text-zinc-200 font-medium ">{label}</label>
            <textarea className="w-full h-40 mt-2 p-6 bg-gray-800 border border-zinc-600 rounded" placeholder={placeholder}>

            </textarea>
        </div>
    )
}



export const Select =({label, options , onChange})=>{
    return(
        <>
            <label className="text-zinc-500 font-medium ">{label}</label>
            <select className="w-full mt-2 px-6 py-4 border border-zinc-200 rounded text-white bg-gray-500" onChange={onChange}>
                {options.map((o, i)=>(
                    <options key={i} value={o.value}>
                        {o.title}
                    </options>
                )
                
                )}
            </select>
        </>
    )
}