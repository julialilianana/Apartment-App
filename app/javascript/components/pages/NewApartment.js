import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect} from "react-router-dom"


class NewApartment extends Component{
    constructor(props){
        super(props)
        this.state = {
          success: false,
          form:{
            street: '',
            city: '',
            zip: '',
            state: '',
            country: ''

          }
        }
      }
      handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.form)
        this.setState({ success: true })
      }

  render(){
    return(
      <React.Fragment>
        <Form>
            <FormGroup>
                <Label htmlFor="street" id="street">Street</Label>
                    <Input
                        type="text"
                        street="street"
                        onChange={ this.handleChange }
                        value={ this.state.form.street }
                    />
                <Label htmlFor="city" id="city">City</Label>
                        <Input
                            type="text"
                            name="city"
                            onChange={ this.handleChange }
                            value={ this.state.form.city }
                        />
                <Label htmlFor="zip" id="zip">Zip</Label>
                        <Input
                            type="text"
                            name="zip"
                            onChange={ this.handleChange }
                            value={ this.state.form.zip }
                        />
                <Label htmlFor="state" id="state">State</Label>
                        <Input
                            type="text"
                            name="state"
                            onChange={ this.handleChange }
                            value={ this.state.form.state }
                        />
                 <Label htmlFor="country" id="country">Country</Label>
                        <Input
                            type="text"
                            name="country"
                            onChange={ this.handleChange }
                            value={ this.state.form.country }
                        />
            </FormGroup>
              <Button name="submit" id="submit" onClick={ this.handleSubmit }>
              Create a New Listing
              </Button>
              { this.state.success && <Redirect to="/"/> }
              <Button id="home" href= "/" >Home</Button>
        </Form>
      </React.Fragment>
    )}
}


export default NewApartment