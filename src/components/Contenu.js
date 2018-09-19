import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';


class Contenu extends Component {

    //state = {url:"", descrip:""}


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
    <div>
        <img src={imageList.url} alt="images"/>
        <Modal trigger={<Button>Show Image</Button>}>
        <Modal.Header>{imageList.id}</Modal.Header>
        <Modal.Content image>
            <Image wrapped size='medium' src={imageList.url}/>
            <Modal.Description>
                <Header>{imageList.descrip}</Header>
            </Modal.Description>
        </Modal.Content>
    </Modal>
    </div>
        ))}




    <Modal trigger={<Button>Ajouter une nouvelle image</Button>}>
    <Modal.Header>Ajouter une nouvelle image</Modal.Header>
    <Modal.Content form>
    <Form>
        <Form.Field>
            <label>Url de l'image</label>
            <input placeholder="Image url" />
        </Form.Field>
        <Form.Field>
            <label>Description de l'image</label>
            <input placeholder="Description" />
        </Form.Field>
        <Button type="submit">Submit</Button>
    </Form>
    </Modal.Content>
    </Modal>


        </Container>
        )
    }
}
export default Contenu;


