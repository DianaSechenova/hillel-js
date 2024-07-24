import {Button, TextField, Stack} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch}  from 'react-redux';
import {todoAsyncAction} from "../../core/saga/asyncActions.js";

const validationSchema = Yup.object({
  text: Yup.string().required("Required"),
});

export default function ToDoForm() {
  const dispatch = useDispatch();

  const handleSubmit = (text) => {
    dispatch(todoAsyncAction.getTiDoItem({ id: new Date().toISOString(), text, checked: false, edit: false }));
  };

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values.text);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <TextField
          fullWidth
          label="To Do"
          name="text"
          type="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.text && Boolean(formik.errors.text)}
          helperText={formik.touched.text && formik.errors.text}
        />
        <Button variant="contained" type="submit" size="large">
          Add
        </Button>
      </Stack>
    </form>
  );
}
