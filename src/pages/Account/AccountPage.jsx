import React,{useState, useEffect }  from 'react';
import {Layout} from 'antd';
//import {useSelector, useDispatch} from 'react-redux'
import SiderNav from '../../containers/SiderNav';
import HeaderAccount from '../../containers/HeaderAccount';

const {
    Content,  Sider
   } = Layout;
const AccountPage = (props) => {
    const [MargenIzq, setMargen]=useState(null)

    useEffect(()=>{
        //getUserLogged()
    },[])
    return (
        <Layout>
            <Sider style={{
                overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            }}
                width="220"
                breakpoint="xs"
                collapsedWidth="80"
                onBreakpoint={(broken) => {
                    if (broken) {
                        setMargen(80)
                    }
                    else {
                        setMargen(220)
                    }
                }}
            >
                <SiderNav />
            </Sider>

            <Layout style={{ marginLeft: MargenIzq }} >
                <HeaderAccount />
                <Content style={{ overflow: 'initial' }}>
                    <div style={{ padding: 20, background: "#fff", marginTop: "10px", boxSizing: "border-box" }} >
                        assdsddas
                    </div>
                </Content>

            </Layout>
        </Layout>

    )
};

export default AccountPage; 