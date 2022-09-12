import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
    /*instead of ...otherProps, inputOptions can be passed in*/
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : null} form-input-label`}>{label}</label>
            )}
        </div>
    )
};

export default FormInput;