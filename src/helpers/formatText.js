import React from 'react';

const formatText = (description) => {
  const double = /\n+/g
  return description.split(double).map((p, index) => {
    return (
      <p key={index}>{p}</p>
    )
  })
}

export default formatText;