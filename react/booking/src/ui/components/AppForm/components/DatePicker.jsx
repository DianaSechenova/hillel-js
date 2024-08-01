import PropTypes from "prop-types";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker as DatePickerMUI} from '@mui/x-date-pickers/DatePicker';

export default function DatePicker(props) {
    const {meta, label, disabled, input: {onChange, value}, fullWidth} = props;
    const error = meta.touched && meta.error;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerMUI
                onError={() => true}
                label={label}
                disabled={disabled}
                onChange={onChange}
                value={value || null}
                slotProps={{
                    textField: {
                        helperText: error,
                        fullWidth,
                        error: !!error,
                    },
                }}
            />
        </LocalizationProvider>
    );
}

DatePicker.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    meta: PropTypes.object,
};


