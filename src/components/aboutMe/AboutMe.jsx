import '../../assets/style/components/aboutMe/AboutMe.css';
import React from 'react';
import useAboutMe from '../../hooks/aboutMe/useAboutMe';

const AboutMe = () => {
    const {
        isDarkMode,
        toggleDarkMode,
        profileInfo,
        education,
        skills,
        interests
    } = useAboutMe();

    return (
        <div className={`introduce-container ${isDarkMode ? 'dark' : ''}`}>
            <div className="theme-toggle">
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
                </button>
            </div>

            <section className="profile-section">
                <div className="profile-image">
                    <div className="image-placeholder"></div>
                </div>
                <div className="profile-info">
                    <h2>{profileInfo.name}</h2>
                    <p className="profile-title">{profileInfo.title}</p>
                    <p className="profile-description">
                        ㅎㅇ 평범한 수능 포기한 고3임
                        고등학교 졸업장 받는게 제 목표임
                    </p>
                    <p className="profile-description">
                        학교에서 알아먹은게 없어서 실력을 쌓기 어려움요
                        문제 해결 능력 키우고 싶음
                    </p>
                    <div className="contact-info">
                        <p><strong>이메일:</strong>{profileInfo.email}</p>
                        <p><strong>위치:</strong>{profileInfo.location}</p>
                    </div>
                </div>
            </section>

            <section className="education-section">
                <h2>교육</h2>
                <div className="education-list">
                    {education.map(item => (
                        <div className="education-item" key={item.id}>
                            <div className="education-details">
                                <h3>{item.school}</h3>
                                <h3>{item.description}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="skills-section">
                <h2>기술 스택</h2>
                <div className="skills-list">
                    {skills.map(skill => (
                        <div className="skill-item" key={skill.id}>
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="interests-section">
                <h2>관심 분야</h2>
                <div className="interests-list">
                    {interests.map(interest => (
                        <div className="interest-item" key={interest.id}>
                            <h3>{interest.title}</h3>
                            <p>{interest.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );

}
export default AboutMe;