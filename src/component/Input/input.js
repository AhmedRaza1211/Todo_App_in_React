const Input = ({ val, onInputChangeSending }) => {

    return (
        <div>
            <input placeholder="Enter text here" value={val} onChange={onInputChangeSending} />
        </div>
    )
}

export default Input;