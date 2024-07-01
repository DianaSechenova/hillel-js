import { Button, TextField, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  text: Yup.string().required("Required"),
});

// eslint-disable-next-line react/prop-types
export default function ToDoForm({ handleSubmit }) {
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
