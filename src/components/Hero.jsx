import React from 'react';
import styled from 'styled-components';

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: #ccd6f6;
  overflow: hidden;
  padding: 200px 2rem 2rem 2rem;
  background: radial-gradient(
    closest-side, 
    rgba(81, 185, 200, 0.4) 0%,
    rgba(81, 185, 200, 0.1) 50%,
    rgba(81, 185, 200, 0) 100%
  );

  @media (max-width: 700px) {
    padding: 200px 0 0 0;
  }

`;


const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #64ffda;
`;

const ExperienceBubble = styled.div`
  position: absolute;
  top: -10px;
  left: -110px;
  background: transparent;
  color: #ccd6f6;
  padding: 5px 10px;
  border: 2px solid #ccd6f6;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    top: -40px;
    left: 80px;

    .expLabel {
      display: none; /* Hide expLabel on small screens */
    }
  }
`;


const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.h3`
  color: #ccd6f6;
  font-size: clamp(1rem, 5vw, 1.5rem);
  font-weight: bold;
  margin: 0;
`;

const Location = styled.span`
  font-size: clamp(0.7rem, 4vw, 1rem);
  color: #ccd6f6;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FlagIcon = styled.img`
  width: 20px;
  height: 15px;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: clamp(1rem, 5vw, 6rem);
  color: #ccd6f6;
  margin: 10px 0;
  line-height: 1.1;
  font-weight: bold;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #ccd6f6;
  font-size: 1.5rem;
  transition: color 0.3s, transform 0.3s;
  text-shadow: 0px 0px 8px rgba(100, 255, 218, 0.8);

  &:hover {
    color: #64ffda;
    transform: scale(1.1);
    text-shadow: 0px 0px 12px rgba(100, 255, 218, 1), 0px 0px 30px rgba(100, 255, 218, 0.8);
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  margin-left: 20px;
  margin-top:10px;
  font-size: clamp(16px, 8vw, 1rem);
  color: #ccd6f6;
  border: 1px solid #ccd6f6;
  border-radius: 30px;
  text-decoration: none;
  background-color: transparent;
  font-weight: 600;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 0px 8px rgba(100, 255, 218, 0.6), 0px 0px 20px rgba(100, 255, 218, 0.4);

  &:hover {
    color: #ccd6f6;
    transform: scale(1.05);
    background-color: rgba(100, 255, 218, 0.1);
    box-shadow: 0px 0px 12px rgba(100, 255, 218, 1), 0px 0px 30px rgba(100, 255, 218, 0.8);
  }

  span {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

const TitleContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 100px;

  @media (max-width: 600px) {
    margin-left: 10px;

  }
`;

const Hero = () => {
  // const { t, i18n } = useTranslation();
  const resumeLink = '/data/amalresume.pdf';
  const resumeDownloadName ='Amal_resume.pdf';

  return (
    <HeroSection>
      <ProfileContainer>
        <ProfileImage src="./images/me_in_grad.jpg" alt="Profile" />
        
        <NameContainer>
          <Name>{("Amal Sharma")}</Name>
          <Location>
            <FlagIcon src="/images/world.png" alt="Indian Flag" />
            {("Delhi Ncr, India")}
          </Location>
        </NameContainer>
      </ProfileContainer>

      <TitleContactContainer>

        <TitleContact>
          <Title>{('Web Developer')}</Title>

          <ContactButton href="mailto:amalkumar2904@@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{('Contact Me')}</span>
          </ContactButton>
        </TitleContact>
      </TitleContactContainer>

      <SocialContainer>
        <SocialIcon href="https://www.linkedin.com/in/theamalsharma/" target="_blank" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
        <SocialIcon href="https://github.com/Amal-Sharma" target="_blank" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </SocialIcon>
        <SocialIcon 
          href={resumeLink} 
          download={resumeDownloadName} 
          aria-label={('header.resume')}
        >
          <FontAwesomeIcon icon={faFileAlt} />
        </SocialIcon>
      </SocialContainer>
    </HeroSection>
  );
};

export default Hero;
