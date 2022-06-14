import React, { useState } from 'react';

import { Row, Image, Typography } from 'antd';

import logo from '~/ui/images/logo.png';

import AuthLayout from '../../features/Login/organisms/AuthLayout';
import RestorePassword from '../../features/Login/organisms/RestorePassword';
import SignIn from '../../features/Login/organisms/SignIn';

const { Title, Text } = Typography;

type Props = {
  setUser: (user: boolean) => void;
};

export const Login: React.FC<Props> = ({ setUser }: Props) => {
  const [isUpdate, setUpdate] = useState(false);

  const handleSignIn = () => {
    setUser(true);
  };

  const hanldeRestoreClick = () => {
    setUpdate(true);
  };

  return (
    <AuthLayout>
      <Row justify='center' align='middle' style={{ height: '100%' }}>
        <div>
          <Row align={'middle'} style={{ marginBottom: 10 }}>
            <Image src={logo} width={'35px'} preview={false} />
            <Title
              style={{ margin: 0, marginLeft: 10, textAlign: 'center' }}
              level={2}
            >
              Инфопрофиль
            </Title>
          </Row>
          {!isUpdate ? (
            <SignIn onSubmit={handleSignIn} onRestore={hanldeRestoreClick} />
          ) : (
            <RestorePassword onPress={() => setUpdate(false)} />
          )}
        </div>
        <Text style={{ position: 'absolute', bottom: 10, color: '#A0A5B1' }}>
          ООО «Всевидящее око» | Все права защищиены.
        </Text>
      </Row>
    </AuthLayout>
  );
};