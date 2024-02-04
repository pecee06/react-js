import {Nav, CardComponent, Footer} from "./components/components"
import {Container, Typography, Grid} from "@mui/material"
import * as imgs from "./assets/assets.imgs"

const App = () => {
  const cards = [
    {
      src: imgs.one,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem dolores voluptates voluptas ab tempora placeat commodi in non mollitia"
    },
    {
      src: imgs.two,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem dolores voluptates voluptas ab tempora placeat commodi in non mollitia"
    },
    {
      src: imgs.three,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem dolores voluptates voluptas ab tempora placeat commodi in non mollitia"
    },
    {
      src: imgs.four,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem dolores voluptates voluptas ab tempora placeat commodi in non mollitia"
    },
    {
      src: imgs.five,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem dolores voluptates voluptas ab tempora placeat commodi in non mollitia"
    },
    {
      src: imgs.six,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem dolores voluptates voluptas ab tempora placeat commodi in non mollitia"
    },
    {
      src: imgs.seven,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem dolores voluptates voluptas ab tempora placeat commodi in non mollitia"
    },
    {
      src: imgs.eight,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem dolores voluptates voluptas ab tempora placeat commodi in non mollitia"
    },
    {
      src: imgs.nine,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias exercitationem dolores voluptates voluptas ab tempora placeat commodi in non mollitia"
    },
  ]

  return (
    <>
      <Nav/>

      <main>
        <Container maxWidth="sm" sx={{
          minHeight: "100vh",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column"
        }}>
          <Typography variant="h2" align="center" sx={{
            color: "#9c27b0"
          }}>Photo Album</Typography>
          <Typography paragraph align="center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus praesentium modi saepe odio neque doloremque incidunt atque, iste nesciunt veniam quaerat voluptatem officiis veritatis voluptate quis cupiditate dolor reiciendis at?
          </Typography>
        </Container>

        <Container maxWidth="lg">
          <Grid container columns={3} spacing={2}>
              {
                cards.map((card, index) => (
                  <Grid item key={index} sm={1} xs={3}>
                    <CardComponent src={card.src} title={card.title} desc={card.desc}/>
                  </Grid>
                ))
              }
          </Grid>
        </Container>
      </main>

      <Footer/>
    </>
  )
}

export default App