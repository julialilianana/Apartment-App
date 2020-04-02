import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


class ApartmentIndex extends Component{
  render(){
    return(
      <React.Fragment>
      { this.props.apartments.map((apartment, index) => {
        return(
          <ListGroup key={ index }>
            <ListGroupItem>
            <ListGroupItemHeading><a href={`./apartments/${apartment.id}`}>{ apartment.street }</a></ListGroupItemHeading>
            <ListGroupItemText>:{ apartment.city } - { apartment.zip } - {apartment.state} - {apartment.country} </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
          )
      })}
      </React.Fragment>
      
      )
  }
}
export default ApartmentIndex