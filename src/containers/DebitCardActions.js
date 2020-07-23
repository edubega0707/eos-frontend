import React from 'react';
import { Card } from 'antd'
import AccountDebitCard from '../components/AccountDebitCard';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const DebitCardActions = (props) => {
    const { account } = props
    return (
        <Card
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <AccountDebitCard account={account} />

        </Card>

    );
};

export default DebitCardActions;