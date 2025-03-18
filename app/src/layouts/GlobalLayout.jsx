import { Box, Container, Divider, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

const GlobalLayout = ({ children, title }) => {
    return(
        // disableGutters poistaa reuna-arvot, maxWidth=false ei rajoita leveyttä
        <Container disableGutters maxWidth={false}>
            <ResponsiveAppBar />
            <Box sx={{padding: "1vw"}}>
                <Typography variant="h5">{title}</Typography>
                <Divider />
                {children}
            </Box>
        </Container>
    )
};

export default GlobalLayout;