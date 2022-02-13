const Input = ({ val, onInputChangeSending }) => {

    return (
        <div>
            <input value={val} onChange={onInputChangeSending} />
        </div>
    )
}