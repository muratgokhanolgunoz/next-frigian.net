import React, { useContext } from "react";
import CampaignDiscount from "./CampaignDiscount";
import CampaignInput from "./CampaignInput";

import { Row, Col } from "react-bootstrap";
import PricingContext from "../../../../../../../../_store/PricingContext";

const Index = (_) => {
    const pricingContext = useContext(PricingContext);

    return (
        <div id="campaign">
            <Row>
                <Col lg={6}>
                    <CampaignInput />
                </Col>

                <Col lg={6}>
                    {pricingContext.state.campaignCodeStatusOfInput === true ? (
                        <CampaignDiscount />
                    ) : null}
                </Col>
            </Row>
        </div>
    );
};

export default Index;
