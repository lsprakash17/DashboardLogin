import React from 'react';
import { Formik, Form, Field } from 'formik';
import MUIDataTable from 'mui-datatables';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import newsArticlesData from '../data/newsArticles.json';

const NewsArticlesTab = () => {
  const columns = ['ID', 'Title'];
  const data = newsArticlesData.map((article) => [article.id, article.title]);

  const options = {
    selectableRows: 'none', // Disable checkbox column
  };

  return (
    <div>
      <Formik
        initialValues={{ title: '', content: '' }}
        onSubmit={(values) => {
          // Implement logic to add news/article
        }}
      >
        <Form>
          <div>
            <label htmlFor="title">Title:</label>
            <Field type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <Field
              as={ReactQuill}
              id="content"
              name="content"
              modules={{ toolbar: [['bold', 'italic', 'underline', 'link']] }}
            />
          </div>
          <button type="submit">Add News/Article</button>
        </Form>
      </Formik>
      <MUIDataTable title="News/Articles" data={data} columns={columns} options={options} />
    </div>
  );
};

export default NewsArticlesTab;
