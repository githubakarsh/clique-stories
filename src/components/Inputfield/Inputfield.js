import './inputfield.scss';
import PropTypes from 'prop-types';

const InputField = ({
    type,
    onClick,
    onBlur,
    value,
    defaultValue,
    length,
    placeholder,
    disabled,
    variant
}) => {
    const mode = variant  && `input-field-comp--${variant}`;
    return <>
    <input 
        className={mode ? ['input-field-comp', mode].join(' '): 'input-field-comp'}
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

InputField.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'dark']),
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    length: PropTypes.number,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    placeholder: 'Enter the input Value'
}

export default InputField;
