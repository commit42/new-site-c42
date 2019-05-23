import React from "react"
import "./Share.scss"
import { Icon, Grid, Button, Header } from "semantic-ui-react"

const Share = props => {
  const twitter = `https://twitter.com/intent/tweet?url=${props.url +
    props.pathname}&text=${props.title} by @saigowthamr`

  const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
    props.pathname}`

  return (
    <Grid.Row id="blogpost-share-buttons-container">
      <Grid.Column>
        <Header as="h4" textAlign="center">
          Cet article vous a plu ? N'hésitez pas à le partager !
        </Header>
        <div className="blogpost-share-buttons">
          <Button
            href={twitter}
            target="blank"
            className="rs-button"
            color="blue"
          >
            <Icon name="twitter" />
            Twitter
          </Button>
          <Button href={fb} target="blank" className="rs-button" color="yellow">
            <Icon name="facebook" />
            Facebook
          </Button>
        </div>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Share
