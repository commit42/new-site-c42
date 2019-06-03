import React from "react"
import "./CompanyPage.scss"
import Image from "gatsby-image"
import { Grid, Header, Container, Icon, Card, Label } from "semantic-ui-react"
import Fade from "react-reveal/Fade"

const TeamList = ({ data }) => {
  return (
    <Container fluid className="primary">
      <Grid as={Container} id="team-container">
        <Grid.Row>
          <Header as="h2" className="secondary">
            <Fade top cascade duration={800}>
              L'équipe
            </Fade>
          </Header>
        </Grid.Row>
        <Grid.Row className="team-list" centered>
          {data.members &&
            data.members.length > 0 &&
            data.members.map(member => {
              const { avatar, name, job, presentation, socials } = member
              const altText = avatar.childImageSharp.fluid.originalName.slice(
                0,
                -4
              )
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
                  computer={4}
                  textAlign="center"
                  className="team-item"
                  key={name}
                >
                  <Fade cascade>
                    <Card fluid className="team-item--card">
                      <Card.Content>
                        <Image
                          fluid={avatar.childImageSharp.fluid}
                          alt={altText}
                        />
                        <Header as="h3" className="team-item--header">
                          {name}
                        </Header>
                        <Card.Meta className="employee-job">{job}</Card.Meta>
                        <p>{presentation}</p>
                      </Card.Content>
                      <Card.Content extra>
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

export default TeamList
