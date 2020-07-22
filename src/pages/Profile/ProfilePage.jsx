import React from 'react';
import {Row, Col} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import { ProfileActions } from '../../redux/actions/actionsProfile';
import BannerProfile from '../../components/BannerProfile';



const ProfilePage = () => {
    const profile= useSelector(state => state.profileReducer.profile)
    const dispatch=useDispatch()

    React.useEffect(()=>{
        dispatch(ProfileActions.getProfileRequest()) 
    },[dispatch])

    return (
        <Row justify="start" align="middle">
            <Col lg={24} md={24} sm={24} xs={24}>
                <BannerProfile profile={profile}/>
            </Col>
        </Row>
    );
};

export default ProfilePage;