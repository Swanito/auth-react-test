import React, { useState } from 'react';
import { Form, Input, Button, Card, Menu, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';

const PasswordRecovery = () => {
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
    // Aquí puedes llamar al servidor para enviar el formulario de recuperación de contraseña
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
          zIndex: -1,
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

        <Form name="password-recovery" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: t('form.email.required'),
              },
              {
                type: 'email',
                message: t('form.email.invalid'),
              },
            ]}
          >
            <Input placeholder={t('form.email.placeholder')} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              {t('passwordRecovery.submitButton')}
            </Button>
          </Form.Item>
        </Form>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <a href="/">{t('passwordRecovery.returnToLogin')}</a>
          <a href="/signup">{t('passwordRecovery.createAccount')}</a>
        </div>
      </Card>
    </div>
  );
};

export default PasswordRecovery;
