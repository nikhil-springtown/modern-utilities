import React from 'react';
import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

const Footer = ({ t }) => {
  const handleChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[16, 16]} justify="space-between">
          <Col xs={24} sm={12} md={8}>
            <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>{t('Contact')}</h3>
            <p style={{ marginBottom: '1rem' }}>{t('Do you have any questions? Feel free to reach out.')}</p>
            <a
              href="mailto:l.qqbadze@gmail.com"
              style={{ color: '#00bfff', textDecoration: 'none' }}
            >
              {t('Let\'s Chat')}
            </a>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>{t('Policy')}</h3>
            <p style={{ marginBottom: '0.5rem' }}>{t('Application Security')}</p>
            <p style={{ marginBottom: '0.5rem' }}>{t('Software Principles')}</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>{t('Support')}</h3>
            <p style={{ marginBottom: '0.5rem' }}>{t('Support Center')}</p>
            <p style={{ marginBottom: '0.5rem' }}>{t('Customer Support')}</p>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="space-between" style={{ marginTop: '2rem' }}>
          <Col xs={24} sm={12} md={8}>
            <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>{t('Address')}</h3>
            <p style={{ marginBottom: '0.5rem' }}>Rancho Santa Margarita</p>
            <p style={{ marginBottom: '0.5rem' }}>2131 Elk Street</p>
            <p>California</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>{t('Company')}</h3>
            <p style={{ marginBottom: '0.5rem' }}>{t('About')}</p>
            <p style={{ marginBottom: '0.5rem' }}>{t('Blog')}</p>
            <p style={{ marginBottom: '0.5rem' }}>{t('Press')}</p>
            <p>{t('Careers & Culture')}</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>{t('Language')}</h3>
            <button
              onClick={() => handleChange('en')}
              style={{
                marginRight: '10px',
                background: 'none',
                border: '1px solid #fff',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              English
            </button>
            <button
              onClick={() => handleChange('es')}
              style={{
                background: 'none',
                border: '1px solid #fff',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Español
            </button>
          </Col>
        </Row>
        <div
          style={{
            borderTop: '1px solid #333',
            marginTop: '2rem',
            paddingTop: '1rem',
            textAlign: 'center',
          }}
        >
          <p style={{ marginBottom: '0.5rem' }}>© 2024 Modern Utilities. All rights reserved.</p>
          <p>
            <a href="/terms" style={{ color: '#00bfff', textDecoration: 'none' }}>
              Terms of Service
            </a>{' '}
            |{' '}
            <a href="/privacy" style={{ color: '#00bfff', textDecoration: 'none' }}>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default withTranslation()(Footer);
