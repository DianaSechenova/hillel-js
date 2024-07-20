import { useSelector } from 'react-redux';
import selectors from "../../../../core/selectors.js";
import Typography from "@mui/material/Typography";

export default function AviableTodos() {
  const items = useSelector(selectors.items);

  return <Typography sx={{ flexGrow: 1 }}>All: {items.length}</Typography>
}