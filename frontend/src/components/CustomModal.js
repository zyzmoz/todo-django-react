import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });

  }

  render() {
    const { toggle, onSave } = this.props;
    const { activeItem } = this.state;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Todo Item </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                value={activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Todo Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                value={activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter Todo Description"

              />
            </FormGroup>
            <FormGroup>
              <Label for="completed">
                <Input
                  type="checkbox"
                  name="completed"
                  onChange={this.handleChange}
                  checked={activeItem.completed}
                />
                Completed
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default CustomModal;