import React from "react"
import "./MembersList.scss"
import { Grid, Image, Header, Container, Button, Icon } from "semantic-ui-react"
import { isArray } from "util"

const MembersList = ({ data: { members } }) => {
  return (
    <Grid as={Container} className="members-list">
      <Grid.Row>
        <Header as="h2" className="secondary">
          L'équipe
        </Header>
      </Grid.Row>
      <Grid.Row textAlign="center" className="members-list--container">
        {isArray(members) &&
          members.map(member => {
            const buttonLinks = member.socials.map(social => {
              return (
                <Button animated="vertical">
                  <Button.Content hidden>Go !</Button.Content>
                  <Button.Content visible>
                    <Icon name={social.name} />
                  </Button.Content>
                </Button>
              )
            })
            return (
              <Grid.Column width={4}>
                <Image src={member.avatar} circular centered />
                <Header as="h2">{member.name}</Header>
                <p>{member.presentation}</p>
                <div>{buttonLinks}</div>
              </Grid.Column>
            )
          })}
      </Grid.Row>
    </Grid>
  )
}

export default MembersList
