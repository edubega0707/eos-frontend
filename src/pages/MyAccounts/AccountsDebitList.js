import React, {useEffect} from 'react';
import {List} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import { AccountDebitActions} from '../../redux/actions/actionsAccounts';
import DebitCardActions from '../../containers/DebitCardActions';
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
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 4,
      }}
      dataSource={accounts}
      renderItem={account => (
        <List.Item>
          <DebitCardActions account={account} />
        </List.Item>
      )}
    />
  );
};

export default AccountsDebitList;