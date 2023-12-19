import React from "react";
import { MessageOutlined} from '@ant-design/icons';
import { FloatButton } from 'antd';
import { Link } from "react-router-dom";


const Floatt = () => {
    return (
        <>
            <Link to="/contact">
                <FloatButton
                    icon={<MessageOutlined style={{ fontSize: '22px' }}  />}
                    type="primary"
                    style={{
                        right: 24,
                        height: 60,
                        width: 60,
                    }}
                />
            </Link>
        </>
    );

};
export default Floatt;