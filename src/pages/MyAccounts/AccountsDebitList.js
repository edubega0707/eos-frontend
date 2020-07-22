import React, {useEffect} from 'react';
import {List} from 'antd'
import AccountDebitCard from '../../components/AccountDebitCard';
import {useSelector, useDispatch} from 'react-redux'
import { AccountDebitActions} from '../../redux/actions/actionsAccounts';
const AccountsDebitList = (props) => {
  
  const { typeAccount } = props
  const accounts= useSelector(state => state.accountsDebitReducer.accounts)
  const dispatch=useDispatch()


  useEffect(()=>{
      if(typeAccount) dispatch(AccountDebitActions.accountsRequest(typeAccount))
  },[dispatch, typeAccount])

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

export default AccountsDebitList;