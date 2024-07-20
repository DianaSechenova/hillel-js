import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import selectors from "../../../../core/swapiSelectors.js";
import {api} from "../../../../core/thunks/api.js";
import {Card, CardContent, CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Body () {
    const isLoad = useSelector(selectors.loader)
    const data = useSelector(selectors.data);
    const action = useSelector(selectors.action);
    const parts = action.match(/^([^/]+)\/(.+)$/) || [];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(api(action));
    }, [dispatch, action]);

  return (
      <Card sx={{ mb: 3 }}>
          <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="body1" component="span" sx={{ mr: 1 }}>Controller:</Typography>
                  <Typography variant="body1" component="span" sx={{ mr: 2, color: 'secondary.main' }}>{parts[1]}</Typography>
                  <Typography variant="body1" component="span" sx={{ mr: 1 }}>ID:</Typography>
                  <Typography variant="body1" component="span" sx={{ color: 'secondary.main' }}>{parts[2]}</Typography>
              </Box>
              {isLoad ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                      <CircularProgress />
                  </Box>
              ) : (
                  <Box sx={{ mt: 2 }}>
                        <pre style={{ backgroundColor: '#333', color: '#fff', padding: '10px', borderRadius: '5px' }}>
                            {JSON.stringify(data, null, 1)}
                        </pre>
                  </Box>
              )}
          </CardContent>
      </Card>
  );
}

export default Body;
