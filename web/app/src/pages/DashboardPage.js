import { AnnouncementCard, TodosCard } from '../components/Card';
import HorizontalAvatarList from '../components/HorizontalAvatarList';
import MapWithBubbles from '../components/MapWithBubbles';
import Page from '../components/Page'
import React from 'react';

import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { getColor } from '../utils/colors';


class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Endoscopy Toolbox Version I"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >


        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Video
                <small className="text-muted text-capitalize"> default</small>
              </CardHeader>
              <CardBody>
                <div>video will place here</div>
              </CardBody>
            </Card>
          </Col>

         </Row>
      </Page>
    );
  }
}
export default DashboardPage;
