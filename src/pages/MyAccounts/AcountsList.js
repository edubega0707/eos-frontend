import React, {useState,useEffect} from 'react';
import {List} from 'antd'
import AccountDebitCard from '../../components/AccountDebitCard';
import {useSelector, useDispatch} from 'react-redux'
const AcountsList = (props) => {
  
  const { typeAccount } = props
  const accounts= useSelector(state => state.accountsReducer.accounts)
  const dispatch=useDispatch()


  useEffect(()=>{

  },[])

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
          <AccountDebitCard account={account} />
        </List.Item>
      )}
    />
  );
};

export default AcountsList;