import bg11Image from '../assets/img/bg/background_1920-11.jpg';
import bg18Image from '../assets/img/bg/background_1920-18.jpg';
import bg1Image from '../assets/img/bg/background_640-1.jpg';
import bg3Image from '../assets/img/bg/background_640-3.jpg';
import user1Image from '../assets/img/users/100_1.jpg';
import { UserCard } from '../components/Card';
import Page from '../components/Page';
import { bgCards, gradientCards, overlayCards } from '../demos/cardPage';
import { getStackLineChart, stackLineChartOptions } from '../demos/chartjs';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { FilePond } from 'react-filepond';
import '../styles/filepond.min.css';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const CardPage = () => {
  return (
    <Page title="Analysis" breadcrumbs={[{ name: 'analysis', active: true }]}>
      <Row>
      <Col>
        <Card>
         <CardHeader>Please select your file</CardHeader>

             <CardBody>
                 <FilePond/>
            </CardBody>
        </Card>

        </Col>
      </Row>
    </Page>
  );
};

export default CardPage;
