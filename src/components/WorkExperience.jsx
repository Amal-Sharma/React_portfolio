import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const Title = styled.h3`
  color: #64FFDB;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 600;

  &:before {
    content: '02.';
    margin-right: 10px;
    color: #f6f7f8;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 400;
  }
`;

const TechStack = styled.span`
  color: #F6BC00;
  font-weight: bold;
`;

const WorkExperience = () => {
  const [activetab, setActivetab] = useState(0);
//   const { t, i18n } = useTranslation();
  const [workExperienceData, setWorkExperience] = useState([]);

  useEffect(() => {
    const loadExperienceData = async () => {
    //   const language = i18n.language;
      const response = await fetch(`/data/experience_.json`);
      const data = await response.json();
      setWorkExperience(data);
    };
    loadExperienceData();
  }, []);

  return (
    <StyledSection id="work-experience">
      <Title className="numbered-heading">{("workExperience.title")}</Title>
      <div className="inner">
        <StyledTabList>
          {workExperienceData.map((job, index) => (
            <StyledTabButton
              key={index}
              isActive={activetab === index}
              onClick={() => setActivetab(index)}
            >
              {job.company}
            </StyledTabButton>
          ))}
          <StyledHighlight activetab={activetab} />
        </StyledTabList>
        <StyledTabPanels>
          {workExperienceData.map((job, index) => (
            <StyledTabPanel key={index} isActive={activetab === index}>
              <h2>
                <span className="jobTitle">{job.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={job.url} className="inline-link" target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                </span>
              </h2>
              <p className="range">
                <CalendarTodayIcon style={{ marginRight: '8px' }} />
                {job.range}
              </p>
              <p className="location">
                <LocationOnIcon style={{ marginRight: '8px' }} />
                {job.location}
              </p>
              <ul>
                {job.description.map((desc, i) => (
                  <li key={i}>
                    {desc.startsWith("Tech Stack :") ? (
                      <TechStack>
                        <ArrowRightIcon />
                        {desc}
                      </TechStack>
                    ) : (
                      <>
                        <ArrowRightIcon />
                        {desc}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </StyledTabPanel>
          ))}
        </StyledTabPanels>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  max-width: 900px;
  height: 100%;
  .inner {
    display: flex;
    @media (max-width: 800px) {
      display: block;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 20px;

  @media (max-width: 800px) {
    display: flex;
    overflow-x: auto;
    width: 100%;
    margin-bottom: 30px;
    border: 2px solid white;
  }

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #112240;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #64FFDB;
    border-radius: 10px;
    border: 2px solid #112240;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #52c8b9;
  }

  scrollbar-width: thin;
  scrollbar-color: #64FFDB #112240;
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  border-left: 2px solid;
  border-left-color: ${({ isActive }) => (isActive ? '#64FFDB' : '#f6f7f8')};
  border-right: none;
  border-top: none;
  border-bottom: none;
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? '#64FFDB' : '#f6f7f8')};
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: #112240;
  }

  @media (max-width: 800px) {
    padding: 10px 20px;
    border-left: 0;
    border-bottom: 2px solid #64FFDB;
    text-align: center;
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activetab }) => activetab} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 800px) {
    top: auto;
    bottom: 0;
    width: 100%;
    height: 2px;
    transform: translateX(calc(${({ activetab }) => activetab} * var(--tab-width)));
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 800px) {
    margin-left: 0;
  }

  .inline-link {
    color: #64FFDB;
    text-decoration: none;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  color: #f6f7f8;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: flex-start; /* Aligns icon at the top of the text */
      font-size: clamp(18px, 5vw, 20px);
      margin-bottom: 10px;

      svg {
        margin-right: 10px;
        color: #ffefd6;
        position: relative;
        top: 2px; /* Adjust this value to align the icon perfectly with your text */
      }
    }
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;
  }

  .range {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-size: clamp(18px, 5vw, 20px);
  }

  .location {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    font-size: clamp(18px, 5vw, 20px);
  }
`;


export default WorkExperience;
