import React from 'react';
import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

const Footer = ({ t }) => {
  const handleChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-screen-xl mx-auto">
        <Row gutter={[16, 16]} justify="space-between">
          <Col xs={24} sm={12} md={8}>
            <h3 className="text-lg font-bold mb-4">{t('Contact')}</h3>
            <p className="mb-4">{t('Do you have any questions? Feel free to reach out.')}</p>
            <a href="mailto:l.qqbadze@gmail.com" className="text-cyan-400 hover:text-cyan-300">
              {t('Let\'s Chat')}
            </a>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h3 className="text-lg font-bold mb-4">{t('Policy')}</h3>
            <p className="mb-2">{t('Application Security')}</p>
            <p className="mb-2">{t('Software Principles')}</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h3 className="text-lg font-bold mb-4">{t('Support')}</h3>
            <p className="mb-2">{t('Support Center')}</p>
            <p className="mb-2">{t('Customer Support')}</p>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="space-between" className="mt-8">
          <Col xs={24} sm={12} md={8}>
            <h3 className="text-lg font-bold mb-4">{t('Address')}</h3>
            <p className="mb-2">Rancho Santa Margarita</p>
            <p className="mb-2">2131 Elk Street</p>
            <p>California</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h3 className="text-lg font-bold mb-4">{t('Company')}</h3>
            <p className="mb-2">{t('About')}</p>
            <p className="mb-2">{t('Blog')}</p>
            <p className="mb-2">{t('Press')}</p>
            <p>{t('Careers & Culture')}</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h3 className="text-lg font-bold mb-4">{t('Language')}</h3>
            <div className="space-x-2">
              <button
                onClick={() => handleChange('en')}
                className="bg-transparent border border-white text-white py-2 px-4 rounded-md hover:bg-white hover:text-gray-900 transition duration-300"
              >
                English
              </button>
              <button
                onClick={() => handleChange('es')}
                className="bg-transparent border border-white text-white py-2 px-4 rounded-md hover:bg-white hover:text-gray-900 transition duration-300"
              >
                Español
              </button>
            </div>
          </Col>
        </Row>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm mb-2">© 2024 Modern Utilities. All rights reserved.</p>
          <p className="text-sm">
            <a href="/terms" className="text-cyan-400 hover:text-cyan-300">
              Terms of Service
            </a>{' '}
            |{' '}
            <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default withTranslation()(Footer);
