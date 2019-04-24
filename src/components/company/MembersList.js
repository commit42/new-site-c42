import React from "react"
import "./CompanyPage.scss"
import { Grid, Image, Header, Container, Button, Icon } from "semantic-ui-react"

const MembersList = () => {
  return (
    <Grid as={Container} className="members-list">
      <Grid.Row>
        <Header as="h2" className="secondary">
          L'équipe
        </Header>
      </Grid.Row>
      <Grid.Row textAlign="center" className="members-list--container">
        <Grid.Column
          mobile={16}
          tablet={8}
          computer={4}
          className="member-list--item"
        >
          <Image src="https://via.placeholder.com/250" circular centered />
          <Header as="h2">Thomas Forest</Header>
          <p>
            Elit nulla dolor aliqua esse minim commodo. Aute laboris laborum
            irure elit qui. Dolor deserunt mollit velit non nisi consectetur
            esse magna ut sunt ipsum. Enim pariatur sint velit labore consequat.
          </p>
          <Button animated="vertical">
            <Button.Content hidden>Go !</Button.Content>
            <Button.Content visible>
              <Icon name="linkedin" />
            </Button.Content>
          </Button>
          <Button animated="vertical">
            <Button.Content hidden>Go !</Button.Content>
            <Button.Content visible>
              <Icon name="github" />
            </Button.Content>
          </Button>
          <Button animated="vertical">
            <Button.Content hidden>Go !</Button.Content>
            <Button.Content visible>
              <Icon name="twitter" />
            </Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column
          mobile={16}
          tablet={8}
          computer={4}
          className="member-list--item"
        >
          <Image src="https://via.placeholder.com/250" circular centered />
          <Header as="h2">Flavien Beninca</Header>
          <p>
            Elit nulla dolor aliqua esse minim commodo. Aute laboris laborum
            irure elit qui. Dolor deserunt mollit velit non nisi consectetur
            esse magna ut sunt ipsum. Enim pariatur sint velit labore consequat.
          </p>
          <Button animated="vertical">
            <Button.Content hidden>Go !</Button.Content>
            <Button.Content visible>
              <Icon name="linkedin" />
            </Button.Content>
          </Button>
          <Button animated="vertical">
            <Button.Content hidden>Go !</Button.Content>
            <Button.Content visible>
              <Icon name="github" />
            </Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column
          mobile={16}
          tablet={8}
          computer={4}
          className="member-list--item"
        >
          <Image src="https://via.placeholder.com/250" circular centered />
          <Header as="h2">Mathieu Haage</Header>
          <p>
            Elit nulla dolor aliqua esse minim commodo. Aute laboris laborum
            irure elit qui. Dolor deserunt mollit velit non nisi consectetur
            esse magna ut sunt ipsum. Enim pariatur sint velit labore consequat.
          </p>
          <Button animated="vertical">
            <Button.Content hidden>Go !</Button.Content>
            <Button.Content visible>
              <Icon name="linkedin" />
            </Button.Content>
          </Button>
          <Button animated="vertical">
            <Button.Content hidden>Go !</Button.Content>
            <Button.Content visible>
              <Icon name="github" />
            </Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column
          mobile={16}
          tablet={8}
          computer={4}
          className="member-list--item"
        >
          <Image src="https://via.placeholder.com/250" circular centered />
          <Header as="h2">Valentin Eutrope</Header>
          <p>
            Elit nulla dolor aliqua esse minim commodo. Aute laboris laborum
            irure elit qui. Dolor deserunt mollit velit non nisi consectetur
            esse magna ut sunt ipsum. Enim pariatur sint velit labore consequat.
          </p>
          <Button animated="vertical">
            <Button.Content hidden>Go !</Button.Content>
            <Button.Content visible>
              <Icon name="linkedin" />
            </Button.Content>
          </Button>
          <Button animated="vertical">
            <Button.Content hidden>Go !</Button.Content>
            <Button.Content visible>
              <Icon name="github" />
            </Button.Content>
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MembersList
