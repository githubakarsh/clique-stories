import './inputfield.scss';

const InputField = ({
    type,
    onClick,
    onBlur,
    value,
    defaultValue,
    length,
    placeholder,
    disabled
}) => {
    return <>
    <input 
        className="input-field-comp"
        type={type}
        onClick={onClick}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        length={length}
        placeholder={placeholder}
        disabled={disabled}
        />
    </>;
}

export default InputField;
