import React, { useState }  from "react";
import { Link } from "react-router-dom";

import { Collapse, Button, CardBody, Card } from 'reactstrap';

function CustomerCard({onDelete, id, companyName, companyAddress, city}) {

  function handleDelete() {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm("are you sure?")) {
        return;
    }
    onDelete(id);
}
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => setIsOpen(!isOpen);

    
    return (
        <>
        <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        <i className="icon">people</i>
        <h1>{companyName}</h1>
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
                        <p>{companyAddress}</p>
                        <p>{city}</p>
          </CardBody>
        </Card>
      </Collapse>
      <Link to={`/updatecustomer/${id}`}>
          <i className="icon card-action-icon">edit</i>
      </Link>
      <i className="icon card-action-icon" onClick={handleDelete}>delete</i>
    </div>
        </>
    )
}

export default CustomerCard;