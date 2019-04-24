import React from "react"
import "./CompanyPage.scss"
import { Grid, Image, Header, Container, Button, Icon } from "semantic-ui-react"

const MembersList = ({ data }) => {
  return (
    <Grid as={Container} className="members-list">
      <Grid.Row>
        <Header as="h2" className="secondary">
          L'équipe
        </Header>
      </Grid.Row>
      <Grid.Row textAlign="center" className="members-list--container">
        {data.members &&
          data.members.length > 0 &&
          data.members.map(member => {
            const { avatar, name, presentation, socials } = member
            const links = socials.map(social => {
              return (
                <Button
                  animated="vertical"
                  key={social.name}
                  as="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button.Content hidden>Go !</Button.Content>
                  <Button.Content visible>
                    <Icon name={social.name} />
                  </Button.Content>
                </Button>
              )
            })
            return (
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={4}
                className="member-list--item"
                key={name}
              >
                <Image src={avatar} circular centered />
                <Header as="h2">{name}</Header>
                <p>{presentation}</p>
                <div>{links}</div>
              </Grid.Column>
            )
          })}
      </Grid.Row>
    </Grid>
  )
}

export default MembersList
