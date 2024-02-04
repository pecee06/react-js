import { Card, CardMedia, CardContent, CardActions, Typography, Button, ButtonGroup } from "@mui/material"

const CardComponent = ({src, title, desc}: {src: string, title: string, desc: string}) => {
  return (
    <Card raised>
      <CardMedia
        image={src}
        sx={{
          height: "300px"
        }}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography paragraph>{desc}</Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          <Button>View</Button>
          <Button>Edit</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  )
}

export default CardComponent