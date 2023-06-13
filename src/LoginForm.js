import React, { useState } from 'react';
import { Form, Input, Button, Card, Menu, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  const languageMenu = (
    <Menu>
      <Menu.Item key="en" onClick={() => handleChangeLanguage('en')}>
        🇬🇧 English
      </Menu.Item>
      <Menu.Item key="es" onClick={() => handleChangeLanguage('es')}>
        🇪🇸 Español
      </Menu.Item>
    </Menu>
  );

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Aquí puedes llamar al servidor para autenticar al usuario
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('https://images.pexels.com/photos/1909014/pexels-photo-1909014.jpeg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 0,
        }}
      />
      <Card style={{ width: 400, boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: 16,
          }}
        >
          <Dropdown overlay={languageMenu} trigger={['click']}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {currentLanguage === 'en' ? '🇬🇧 English' : '🇪🇸 Español'}{' '}
              <DownOutlined />
            </a>
          </Dropdown>
        </div>

        <Form name="login" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: t('email'),
              },
              {
                type: 'email',
                message: t('validEmail'),
              },
            ]}
          >
            <Input size="large" placeholder={t('email')} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t('password'),
              },
            ]}
          >
            <Input.Password size="large" placeholder={t('password')} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" block>
              {t('login')}
            </Button>
          </Form.Item>

          <Form.Item>
            <a href="/recuperar-contrasena">{t('forgotPassword')}</a>
          </Form.Item>

          <Form.Item>
            <span>{t('noAccount')}</span>
            <a href="/crear-cuenta">{t('createAccount')}</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
