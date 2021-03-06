import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import {Row, Col, Collapse} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import { ProfileActions } from '../../redux/actions/actionsProfile';
import BannerProfile from '../../components/BannerProfile';
import {AccountTypeActions, AccountDebitActions, AccountCreditActions } from '../../redux/actions/actionsAccounts';
import AccountsDebitList from './AccountsDebitList';
import AccountCreditList from './AccountCreditList';
import ModalFormAction from '../../containers/ModalFormAction';
import FormDebitAccount from './Forms/FormDebitAccount';
// import FormCreditAccount from './Forms/FormCreditAccount';
// import FormAccountOthers from './Forms/FormAccountOthers';

const { Panel } = Collapse;
const styles={
    containerAcounts:{
        margin: '2em 0 2em 0',
    },
    containerActions:{
        display:"flex",
        justifyContent: 'space-around',
        alignContent: 'center',
        margin: '2em 0 2em 0',
    }
}

const renderList=(typeAccount)=>{
    switch (typeAccount.title_account) {
        case 'DEBIT':
            return <AccountsDebitList  typeAccount={typeAccount.id}/>
        case 'CREDIT':
                return <AccountCreditList  typeAccount={typeAccount.id}/> 
        default:
            return null;
    }
}

const MyAccountsPage = () => {
    const profile= useSelector(state => state.profileReducer.profile)
    const typeAccounts= useSelector(state => state.typeAccountsReducer.typeAcounts)
    const dispatch=useDispatch()

    React.useEffect(()=>{
        dispatch(ProfileActions.getProfileRequest()) 
        dispatch(AccountTypeActions.typeAccountsRequest())
    },[dispatch])

    return (
        <Row justify="start" align="middle">
            <Col lg={24} md={24} sm={24} xs={24}>
                <BannerProfile profile={profile} />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24} style={styles.containerActions}>
                <ModalFormAction title="Agregar cuenta de Debito" submitFunction={AccountDebitActions.accountDebitCreateRequest}>
                    <FormDebitAccount type="DEBIT"/>
                </ModalFormAction>
                <ModalFormAction title="Agregar cuenta de Credito" submitFunction={AccountCreditActions.accountCreditCreateRequest}>
                    <FormDebitAccount type="CREDIT"/>
                </ModalFormAction>
            </Col>
            <Col lg={24} md={24} sm={24} xs={24} style={styles.containerAcounts}>
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                >
                    {typeAccounts.length > 0 ?
                        typeAccounts.map(typeAccount => (                          
                        <Panel header={typeAccount.title_account} key={typeAccount.id}>
                            {renderList(typeAccount)}
                        </Panel>))

                        : null}
                </Collapse>
            </Col>
        </Row>
    );
};

export default MyAccountsPage;