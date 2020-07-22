import React from 'react';
import {List} from 'antd'
import AccountCard from '../../components/AccountCard';
const AcountsList = (props) => {
    const{accounts}=props
    return (
        <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 4,
      xxl: 4,
    }}
    dataSource={accounts}
    renderItem={account => (
      <List.Item>
        <AccountCard account={account}/>
      </List.Item>
    )}
  />
    );
};

export default AcountsList;