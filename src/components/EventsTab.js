import React from 'react';
import { Formik, Form, Field } from 'formik';
import MUIDataTable from 'mui-datatables';
import eventsData from '../data/events.json';

const EventsTab = () => {
  const columns = ['ID', 'Name', 'Date'];
  const data = eventsData.map((event) => [event.id, event.name, event.date]);

  const options = {
    selectableRows: 'none', // Disable checkbox column
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', date: '', location: '', description: '' }}
        onSubmit={(values) => {
          // Implement logic to add event
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Event Name:</label>
            <Field type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <Field type="date" id="date" name="date" />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <Field type="text" id="location" name="location" />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <Field as="textarea" id="description" name="description" />
          </div>
          <button type="submit">Add Event</button>
        </Form>
      </Formik>
      <MUIDataTable title="Events" data={data} columns={columns} options={options} />
    </div>
  );
};

export default EventsTab;
