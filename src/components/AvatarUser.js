import React, {useState} from 'react';
import { Popover, Button, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const styles={
    containerAvatar:{
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
    }
}


const AvatarUser = (props) => {
    const{onClick}=props
    const [visible, setVisible]=useState(false)
    const handleVisibleChange = visible => {
        setVisible(visible);
    };

    return (
        <div style={styles.containerAvatar}>
            <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Popover
                content={
                <div>
                    
                    <Button type="primary" onClick={onClick}>Salir</Button>
                </div>}
                title="Title"
                trigger="hover"
                visible={visible}
                onVisibleChange={handleVisibleChange}
            >
                  <Button type="primary" shape="circle" style={{background:"transparent", border:0}} icon={<DownOutlined />} />
            </Popover>
        </div>
        
    );
};

export default AvatarUser;