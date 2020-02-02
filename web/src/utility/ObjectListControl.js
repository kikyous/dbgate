import React from 'react';
import useFetch from '../utility/useFetch';
import styled from 'styled-components';
import theme from '../theme';
import TableControl, { TableColumn } from './TableControl';
import { AppObjectControl } from '../appobj/AppObjects';
import columnAppObject from '../appobj/columnAppObject';

const ObjectListWrapper = styled.div`
  margin-bottom: 20px;
`;

const ObjectListHeader = styled.div`
  background-color: #ebedef;
  padding: 5px;
`;

const ObjectListHeaderTitle = styled.span`
  font-weight: bold;
  margin-left: 5px;
`;

const ObjectListBody = styled.div`
  margin: 20px;
  //   margin-left: 20px;
  //   margin-right: 20px;
  //   margin-top: 3px;
`;

export default function ObjectListControl({ collection = [], title, showIfEmpty = false, children }) {
  if (collection.length == 0 && !showIfEmpty) return null;

  return (
    <ObjectListWrapper>
      <ObjectListHeader>
        <ObjectListHeaderTitle>{title}</ObjectListHeaderTitle>
      </ObjectListHeader>
      <ObjectListBody>
        <TableControl rows={collection}>
          <TableColumn
            fieldName="displayName"
            header="Name"
            formatter={col => <AppObjectControl data={col} makeAppObj={columnAppObject} component="span" />}
          />
          {children}
        </TableControl>
      </ObjectListBody>
    </ObjectListWrapper>
  );
}
