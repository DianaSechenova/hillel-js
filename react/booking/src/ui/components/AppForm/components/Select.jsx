import {FormControl, InputLabel, Select as SelectMUI, MenuItem, FormHelperText} from "@mui/material";
import PropTypes from "prop-types";

export default function Select(props) {
    const {meta, options, label, input: { onChange, value }, disabled} = props;
    const error = meta.touched && meta.error;

    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <SelectMUI
                error={!!error}
                label={label}
                onChange={onChange}
                value={value}
                disabled={disabled}
            >
                {options.map(item => <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>)}
            </SelectMUI>
            {error && <FormHelperText error>{error}</FormHelperText>}
        </FormControl>
    )
}

Select.propTypes = {
    options: PropTypes.instanceOf(Array),
    label: PropTypes.string,
    input: PropTypes.object,
    disabled: PropTypes.bool,
    meta: PropTypes.object
};

