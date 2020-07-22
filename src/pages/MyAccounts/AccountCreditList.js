import React, {useEffect} from 'react';
import {List} from 'antd'

import {useSelector, useDispatch} from 'react-redux'
import AccountCreditCard from '../../components/AccountCreditCard';
import { AccountCreditActions} from '../../redux/actions/actionsAccounts';

const AccountCreditList = (props) => {
  
  const { typeAccount } = props
  const accounts= useSelector(state => state.accountsCreditReducer.accounts)
  const dispatch=useDispatch()


  useEffect(()=>{
    if(typeAccount) dispatch(AccountCreditActions.accountsCreditRequest(typeAccount))
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
          <AccountCreditCard account={account} />
        </List.Item>
      )}
    />
  );
};

export default AccountCreditList;