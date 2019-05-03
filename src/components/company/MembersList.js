import React from "react"
import "./CompanyPage.scss"
import Image from "gatsby-image"
import {
  Grid,
  Header,
  Container,
  Button,
  Icon,
  Card,
  Label,
} from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const MembersList = ({ data }) => {
  return (
    <Container fluid className="primary">
      <Grid as={Container} className="members-list">
        <Grid.Row>
          <Header as="h2" className="secondary">
            <Fade top cascade duration={800}>
              L'équipe
            </Fade>
          </Header>
        </Grid.Row>
        <Grid.Row className="members-list--container" centered>
          {data.members &&
            data.members.length > 0 &&
            data.members.map(member => {
              const { avatar, name, job, presentation, socials } = member
              const links = socials.map(social => {
                return (
                  <Label as="a" href={social.link} key={social.name}>
                    <Icon name={social.name} size="large" />
                  </Label>
                )
              })
              return (
                <Grid.Column
                  mobile={16}
                  tablet={8}
                  computer={5}
                  textAlign="center"
                  className="member-list--item"
                  key={name}
                >
                  <Fade cascade>
                    <Card fluid>
                      <Card.Content>
                        <Image fluid={avatar.childImageSharp.fluid} />
                        <Header as="h3">{name}</Header>
                        <Card.Meta className="employee-job">{job}</Card.Meta>
                        <p>{presentation}</p>
                        <div className="socials">{links}</div>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Grid.Column>
              )
            })}
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default MembersList
