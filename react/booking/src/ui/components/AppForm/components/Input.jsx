import {TextField} from "@mui/material";
import PropTypes from "prop-types";

export default function Input(props) {
    const {meta, input: {value, onChange, type}, disabled, label, fullWidth} = props;
    const error = meta.touched && meta.error;

    return (
        <TextField
            fullWidth={fullWidth}
            error={error}
            helperText={error}
            value={value}
            onChange={onChange}
            disabled={disabled}
            type={type}
            label={label}
        />
    )
}

Input.propTypes = {
    meta: PropTypes.object,
    input: PropTypes.object,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    fullWidth: PropTypes.bool,
};


