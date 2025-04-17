  import React, { useState, useContext } from 'react';
  import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
  import AccountInfo from '../Pages/User/Account/Account';
  import MyReviews from './User/Reviews/ReviewDetails';
  import '../Styles/UserProfile.css';
  import AccessDenied from '../Components/AccessDenied/AccesDenid';
  import { AuthContext } from '../context/AuthContext';

  const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('account');
    const { user } = useContext(AuthContext);


    return (
      <Container fluid className="user-profile-container mt-0">
        <Row className="min-vh-100">
          <Col md={2} className="sidebarr d-flex flex-column">
            <Nav variant="pills" className="flex-column flex-grow-1">
              <h5 className='top_name d-flex align-items-center py-2 px-3 user-profile-heading'>My Account</h5>
              <Nav.Item className="mb-3">
                  <Nav.Link
                    eventKey="account"
                    active={activeTab === 'account'}
                    onClick={() => setActiveTab('account')}
                    className="d-flex align-items-center py-2 px-3 rounded-pill transition-all hover:bg-primary hover:text-white"
                  >
                    <i className="fas fa-user-circle me-2"></i>
                    Account
                  </Nav.Link>
              </Nav.Item>
               
              <Nav.Item className="mb-3">
                  <Nav.Link
                    eventKey="reviews"
                    active={activeTab === 'reviews'}
                    onClick={() => setActiveTab('reviews')}
                    className="d-flex align-items-center py-2 px-3 rounded-pill transition-all hover:bg-primary hover:text-white"
                  >
                    <i className="fas fa-star me-2"></i>
                    My Reviews
                  </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={10}>
            <Tab.Content className="tab-contents">
              <Tab.Pane active={activeTab === 'account'}>
                <AccountInfo />
              </Tab.Pane>
              <Tab.Pane active={activeTab === 'reviews'}>
                <MyReviews />
              </Tab.Pane>  
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    );
  };
  export default UserProfile;