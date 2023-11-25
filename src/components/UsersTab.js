import React from 'react';
import MUIDataTable from 'mui-datatables';
import usersData from '../data/users.json';

const UsersTab = () => {
  const columns = ['Name', 'Email'];

  const data = usersData.map((user) => [user.name, user.email]);

  const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
  };

  return (
    <div>
      <MUIDataTable title="Users" data={data} columns={columns} options={options} />
    </div>
  );
};

export default UsersTab;
