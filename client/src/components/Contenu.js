import React, { Component } from 'react';
import { Container, Button, Header, Image, Modal, Form} from 'semantic-ui-react';


class Contenu extends Component {
    
    
    state = {url:'', descrip:''};
    
    handleChangeUrl = (e) => {this.setState ({url: e.target.value})};
    handleChangeDesc = (e) => this.setState ({descrip: e.target.value})
    
    hanldleSubmit = () => {
        console.log(this.state)
        console.log("Form has been submitted")
    }
    
    
    // this.setState({ submittedUrl: url, submittedDescrip: descrip})
    
    
    render() {
        return (
            <Container>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
                ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi.
                </p>
            
            {this.props.myProps.map((imageList, i) => (
                
                <Modal trigger={<img src={imageList.url} alt="images" floated="left"/>}>
                    <Modal.Header>{imageList.id}</Modal.Header>
                        <Modal.Content image>
                            <Image src={imageList.url} floated="left"/>
                                <Modal.Description>
                                    <Header>{imageList.descrip}</Header>
                                </Modal.Description>
                        </Modal.Content>
                </Modal>  
            ))}
            
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
            
            </Container>
        )
    }
}
export default Contenu;


