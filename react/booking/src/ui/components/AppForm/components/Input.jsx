import {TextField} from "@mui/material";
import PropTypes from "prop-types";

export default function Input(props) {
    const {meta, input: {value, onChange, type}, disabled, label, fullWidth, inputProps} = props;
    const showError = meta.touched && meta.error;

    return (
        <TextField
            fullWidth={fullWidth}
            error={!!showError}
            helperText={showError ? meta.error : ''}
            value={value}
            onChange={onChange}
            disabled={disabled}
            type={type}
            label={label}
            inputProps={inputProps}
        />
    )
}

Input.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    fullWidth: PropTypes.bool,
    inputProps:PropTypes.object
};


