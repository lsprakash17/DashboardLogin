import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import {
  AppBar,
  Container,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import UsersTab from './UsersTab';
import NewsArticlesTab from './NewsArticlesTab';
import EventsTab from './EventsTab';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={isSidebarOpen} onClose={handleSidebarClose}>
        {/* Add sidebar content */}
        <List>
          <ListItem button component={Link} to="/dashboard/users" onClick={handleSidebarClose}>
            Users
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/dashboard/news-articles"
            onClick={handleSidebarClose}
          >
            News/Articles
          </ListItem>
          <ListItem button component={Link} to="/dashboard/events" onClick={handleSidebarClose}>
            Events
          </ListItem>
        </List>
      </Drawer>
      <Container>
        <div style={{ marginTop: '70px', padding: '20px' }}>
          <Switch>
            <Route path="/dashboard/users" component={UsersTab} />
            <Route path="/dashboard/news-articles" component={NewsArticlesTab} />
            <Route path="/dashboard/events" component={EventsTab} />
            <Redirect to="/dashboard/users" />
          </Switch>
        </div>
      </Container>
    </Router>
  );
};

export default Dashboard;
