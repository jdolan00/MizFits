import { Avatar, Box, Container, Typography, Grid } from "@mui/material";
import { Banner } from "components/Banner";
import { Paragraph } from "typography";
import { MainHeading } from "typography";

const ProfilePage = () => {
    return (
       <Container>
            <Box sx = {Banner.root}></Box>

            <Container>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Avatar>AL</Avatar>
                </Box>
            </Container>
            
            

       </Container>
        
    )
}

export default ProfilePage;