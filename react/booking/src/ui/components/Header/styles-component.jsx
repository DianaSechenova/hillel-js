import {Box, styled} from "@mui/material";

export const Wrapper = styled(Box)({
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eceff1',
    padding: '20px 24px',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: 'rgba(38, 50, 56, .05) 0px 6px 24px 0px, rgba(38, 50, 56, .08) 0px 0px 0px 1px',
    zIndex: 1000
})

export const Icon = styled(Box)(({theme}) => ({
    width: '50px',
    height: '50px',
    marginRight: '10px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main
}))
