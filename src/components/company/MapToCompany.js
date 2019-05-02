import React from "react"
import Map from "pigeon-maps"
import Marker from "pigeon-marker"
import { Container } from "semantic-ui-react"
const MapToCompany = ({ data }) => {
  const latitude = parseFloat(data.latitude)
  const longitude = parseFloat(data.longitude)
  return (
    <Container fluid>
      <Map
        center={[latitude, longitude]}
        zoom={16}
        height={400}
        metaWheelZoom={true}
      >
        <Marker
          anchor={[latitude, longitude]}
          payload={1}
          onClick={({ event, anchor, payload }) => {}}
        />
      </Map>
    </Container>
  )
}

export default MapToCompany
