import { Button, Container, Typography, styled } from "@mui/material"
import IMG from "../../../assets/images/imagem.jpg"
import { Grid } from "@mui/material"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DraftsIcon from '@mui/icons-material/Drafts';




const  Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor:"black",
        height:"100vh"

    }))

    const StyledImage = styled("img")(() => ({

        width:"100%",
        borderRadius:"50%",

    }))

    return (
      <>
        <StyledHero>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <StyledImage src={IMG} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography color="primary" variant="h1" textAlign={"center"}>Lucas Miguel</Typography>
                    <Typography color="primary" variant="h2" textAlign={"center"}>Desenvolvedor Front-End</Typography>
                    <Grid container display={"flex"} justifyContent={"center"}>
                        <Grid item xs={12} md ={4} display={"flex"} justifyContent={"center"}>
                        <Button>
                            <CloudDownloadIcon/>
                            Download CV
                        </Button>

                        </Grid>
                        <Grid item xs={12} md ={4} display={"flex"} justifyContent={"center"}>
                        <Button>
                            <DraftsIcon/>
                            Contato
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            </Container>
            </StyledHero>

      </>
    )
  }

  export default Hero
