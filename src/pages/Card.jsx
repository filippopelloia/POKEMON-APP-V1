import React from 'react'

export default function Card(props) {


  return (
            // <div key={props.id} className="pokemon-section" data-testid="sections">
            <div key={props.id} className="pokemon-section" data-testid='sections'>
              <img
                className="sprite"
                src={props.shiny === true ? props.front_shiny : props.front_default}
                alt={props.name}
                data-testid={props.name}
              />
              <h5 data-testid="legend">#{props.id}</h5>
              <h3>{props.upper + props.slice}</h3>
      
              <div className="pokemon-types">
                <h6 data-testid={props.name + props.firstType} className={props.firstType}>
                  {props.firstType}
                </h6>
                {props.secondType && (
                  <h6 data-testid={props.name + props.secondType} className={props.secondType}>
                    {props.secondType}
                  </h6>
                )}
              </div>
            </div>
  )
}
