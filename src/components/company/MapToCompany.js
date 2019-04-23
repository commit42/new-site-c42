import React from "react"
import Map from "pigeon-maps"
import Marker from "pigeon-marker"
import { Container } from "semantic-ui-react"
class MapToCompany extends React.Component {
  render() {
    return (
      <Container fluid>
        <Map
          center={[43.584412, 1.441882]}
          zoom={16}
          height={600}
          metaWheelZoom={true}
        >
          <Marker
            anchor={[43.584412, 1.441882]}
            payload={1}
            onClick={({ event, anchor, payload }) => {}}
          />
        </Map>
      </Container>
    )
  }
}

export default MapToCompany
