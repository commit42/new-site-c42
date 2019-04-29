import React from "react"
import { Link } from "gatsby"
import { Header, Container } from "semantic-ui-react"
export default ({ close }) => (
  <div className="menu">
    <Link to="/">
      <Header as="h2" onClick={close}>
        Home
      </Header>
    </Link>
    <Link to="/blog">
      <Header as="h2" onClick={close}>
        Blog
      </Header>
    </Link>
    <Link to="/la-societe">
      <Header as="h2" onClick={close}>
        Societe
      </Header>
    </Link>
  </div>
)
