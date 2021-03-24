import React, { memo } from 'react';

import Table from '@eduzz/houston-ui/Table';

const TableSimple = memo(() => {
  return (
    <Table>
      <Table.Column field='id' label='ID' />
      <Table.Column field='name' label='Nome' />
      <Table.Column field='age' label='Idade' />

      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>John Doe</Table.Cell>
        <Table.Cell>35</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>Jon Snow</Table.Cell>
        <Table.Cell>30</Table.Cell>
      </Table.Row>
    </Table>
  );
});

export default TableSimple;
