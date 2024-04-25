const inputForm = (props) => {
    const {title} = props;
    return(
        <div className="mb-6">
            <Label>{title}</Label>
            <Input type={type}/>
        </div>
    )
}
export default inputForm;