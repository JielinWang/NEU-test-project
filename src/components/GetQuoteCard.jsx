import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const GetQuoteCard = () => {
  return (
    <Form className="card p-2">
      {/* name input */}
      <FormGroup>
        <Input id="name" name="name" placeholder="Name" type="text" />
      </FormGroup>
      {/* email input */}
      <FormGroup>
        <Input id="email" name="email" placeholder="Email" type="email" />
      </FormGroup>
      {/* capacity select */}
      <FormGroup>
        <Input id="capability" name="capability" type="select">
          <option>select a capability</option>
          <option>Design</option>
          <option>Production</option>
          <option>Certification</option>
        </Input>
      </FormGroup>
      {/* comment input */}
      <FormGroup>
        <Input
          id="comment"
          name="comment"
          type="textarea"
          placeholder="Comments"
        />
      </FormGroup>
      {/* check box */}
      <FormGroup check>
        <Input type="checkbox" />{" "}
        <Label check>I'd like to receive the newsletter </Label>
      </FormGroup>
      {/* submit button */}
      <Button className="bg-primary">Get a quote</Button>
    </Form>
  );
};

export default GetQuoteCard;
