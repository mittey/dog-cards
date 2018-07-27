import React from "react";
import { Link } from "react-router-dom";
import { FormGroup, Col} from "react-bootstrap";

const backButton = () => {
    return (
        <FormGroup>
            <Col md={2}>
                <Link
                    className="btn btn-primary"
                    to={`/`}
                >
                    Назад
                    </Link>
            </Col>
        </FormGroup>
    );
};

export default backButton;