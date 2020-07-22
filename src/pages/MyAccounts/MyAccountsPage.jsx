import React from 'react';
import {Row, Col} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import { ProfileActions } from '../../redux/actions/actionsProfile';
import BannerProfile from '../../components/BannerProfile';
import AcountsList from './AcountsList';


const styles={
    containerAcounts:{
        margin: '2em 0 2em 0',
    }
}

const MyAccountsPage = () => {
    const profile= useSelector(state => state.profileReducer.profile)
    const accounts= useSelector(state => state.accountsReducer.accounts)
    const dispatch=useDispatch()

    React.useEffect(()=>{
        dispatch(ProfileActions.getProfileRequest()) 
    },[dispatch])

    return (
        <Row justify="start" align="middle">
            <Col lg={24} md={24} sm={24} xs={24}>
                <BannerProfile profile={profile}/>
            </Col>
            <Col lg={24} md={24} sm={24} xs={24} style={styles.containerAcounts}>
                <AcountsList accounts={accounts}/>
            </Col>
        </Row>
    );
};

export default MyAccountsPage;