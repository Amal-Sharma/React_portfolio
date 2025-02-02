import React from 'react';
import styled, { keyframes } from 'styled-components';


const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const ContactSection = styled.section`
  text-align: center;
  padding: 100px 0;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactTitle = styled.h4`
  color: #64ffda;
  font-size: clamp(1.5rem, 5vw, 2.5rem);

  font-weight: 400;
  margin-bottom: 20px;
  &:before {
    content: '06. ';
    color: #64ffda;
  }
`;

const MainTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3rem);
  margin-bottom: 20px;
  animation: ${bounce} 2s infinite;
`;


const ContactDescription = styled.p`
  font-size: clamp(18px, 5vw, 2rem);

  color: #8892b0;
  margin-bottom: 40px;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease-in-out;

  &:hover {
    color: #64ffda;
    background: rgba(100, 255, 218, 0.1);
  }
`;

const Contact = () => {
  // const { t } = useTranslation();

  return (
    <ContactSection id="contact">
      <ContactTitle>{'Get In Touch'}</ContactTitle>
      <MainTitle>{'Hi There'}</MainTitle>
      <ContactDescription>
        {('I’m currently looking for a Web Developer role. My inbox is always open. Whether you are interested in my profile, have a question or just want to say hi. Feel free to reach out.')}
      </ContactDescription>
      <ContactButton href="mailto:amalkumar2904@@gmail.com" target='_blank' rel="noopener noreferrer">
        {"Contact Me"}
      </ContactButton>
    </ContactSection>
  );
};

export default Contact;
