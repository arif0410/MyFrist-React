const label = () => {
    const {htmlFor,text} = props;
    return(
        <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-2">{text}</label>
    )
}

export default label;