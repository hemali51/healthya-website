import React from 'react'
import { Button, Input } from "antd";


const CommonForm = () => {
  return (
    <div className="contactform">
      <div className="row">
        <div className="col-md-6">
          <div className="commonfield">
            <Input placeholder="First Name" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="commonfield">
            <Input placeholder="Last Name" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="commonfield">
            <Input placeholder="Job Role" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="commonfield">
            <Input placeholder="Organisation" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="commonfield">
            <Input placeholder="Patient Population Size" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="commonfield">
            <Input placeholder="Email Address" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="commonfield">
            <Input placeholder="Phone  Number" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="commonbtn">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonForm;
