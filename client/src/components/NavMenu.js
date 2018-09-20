import React, { Component } from 'react';
import { Menu, Modal, Button, Form } from 'semantic-ui-react';


class NavMenu extends Component{

  //formulaire
  state = {url:'', descrip:''};
    
  handleChangeUrl = (e) => {this.setState ({url: e.target.value})};
  handleChangeDesc = (e) => this.setState ({descrip: e.target.value})
  
  hanldleSubmit = () => {
      console.log(this.state)
      console.log("Form has been submitted")
  }
  
  

//navbar
state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 
  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item name='formulaire' active={activeItem === 'formulaire'} onClick={this.handleItemClick}>
        Accueil
        </Menu.Item>

        <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
        Autre
        </Menu.Item>

        <Menu.Item>
          <div>
            <Modal trigger={<Button>Ajouter une nouvelle image</Button>}>
              <Modal.Header>Ajouter une nouvelle image</Modal.Header>
                <Modal.Content form>
                  <Form onSubmit={this.hanldleSubmit}>
                    <Form.Field>
                      <label>Url de l'image</label>
                      <input placeholder="Url" name="url" onChange={this.handleChangeUrl}/>
                    </Form.Field>
                    <Form.Field>
                      <label>Description de l'image</label>
                      <input placeholder="Description" name="descrip" onChange={this.handleChangeDesc}/>
                    </Form.Field>
                      <Button type="submit">Submit</Button>
                  </Form>
                </Modal.Content>
            </Modal>
          </div>   
        </Menu.Item>
      </Menu>
    )
  }
}
export default NavMenu;