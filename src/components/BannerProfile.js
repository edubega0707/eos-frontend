import React from 'react';
import {Row, Col,Card, Avatar} from 'antd'
import { UserOutlined } from '@ant-design/icons';


const styles={
    containerPhoto:{
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
    }
}
const BannerProfile = (props) => {
    const {profile}=props
    const {profile_usuario}=profile
    return (
        <Row>
             <Col lg={6} md={6} sm={12} xs={24} style={styles.containerPhoto}>
                {profile_usuario && profile_usuario.foto ?
                    <Avatar src={profile_usuario.foto} />
                    :
                    <Avatar shape="square" size={120} icon={<UserOutlined />} />
                }
             </Col>
            <Col lg={18} md={18} sm={12} xs={24}>
                <Card title={profile.username} extra={<div>asd</div>} >
                    <p><span>Cliente: </span>{`${profile.first_name} ${profile.last_name}`}</p>
                    <p><span>Email: </span>{profile.email}</p>
                    {
                        profile_usuario ?
                            <>
                                <p><span>Telefono: </span>{profile_usuario.telefono}</p>
                                <p><span>Domicilio: </span>{profile_usuario.domicilio}</p>
                            </>
                            : null
                    }

                </Card>
            </Col>
        </Row>
    );
};

export default BannerProfile;