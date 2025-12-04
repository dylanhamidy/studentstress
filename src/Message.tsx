import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Language = 'en' | 'ko';

function Message() {
  const [lang, setLang] = useState<Language>('en');
  const [isHovered, setIsHovered] = useState(false);
  const [isLangHovered, setIsLangHovered] = useState(false);
  const navigate = useNavigate();

  const texts: Record<Language, { heading: string; subheading: string; button: string; toggle: string; footer: string; notice: string }> = {
    en: {
      heading: 'Feeling tired from school work? Burned out?',
      subheading: 'Test your stress level now!',
      button: 'Take the Test',
      toggle: '한국어로 보기',
      footer: 'A term project for Fundamentals of Machine Learning (SKKU)', 
      notice: 'Your responses will be submitted anonymously and \n only stored until the end of the term project.'
    },
    ko: {
      heading: '학교 공부 때문에 피곤한가요? 지쳤나요?',
      subheading: '지금 스트레스 수준을 확인해보세요!',
      button: '테스트 시작',
      toggle: 'View in English',
      footer: '성균관대학교 Fundamentals of Machine Learning', 
      notice: '응답은 익명으로 제출되며, 프로젝트 완료 후에만 저장됩니다.'
    }
  };

  const handleTestClick = () => {
    navigate('/test');
  };

  return (
    <>
      {/* Language toggle button - fixed to viewport */}
      <button
        onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
        onMouseEnter={() => setIsLangHovered(true)}
        onMouseLeave={() => setIsLangHovered(false)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '8px 16px',
          fontSize: '14px',
          cursor: 'pointer',
          zIndex: 1000,
          backgroundColor: isLangHovered ? 'var(--bg-secondary)' : 'var(--bg-primary)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)',
          borderRadius: '6px',
          transition: 'all 0.2s ease',
          fontWeight: '500',
          transform: isLangHovered ? 'translateY(-1px)' : 'translateY(0)'
        }}
      >
        {texts[lang].toggle}
      </button>

      {/* Main content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        textAlign: 'center',
        paddingLeft: '5%',
        paddingRight: '5%'
      }}>
        <h2 style={{ 
          margin: 0,
          fontSize: '2rem',
          color: 'var(--text-primary)'
        }}>
          {texts[lang].heading}
        </h2>
        <p style={{ 
          marginTop: '10px', 
          marginBottom: 0,
          fontSize: '1.1rem',
          color: 'var(--text-secondary)'
        }}>
          {texts[lang].subheading}
        </p>

        <p style={{
          fontSize: '0.7rem',
          color: 'var(--text-secondary)',
          fontStyle: 'italic',
          lineHeight: 1.4,
          margin: 0,
          whiteSpace: 'pre-line'
        }}>
          {texts[lang].notice}
        </p>

        
        {/* Enhanced main action button */}
        <button 
          onClick={handleTestClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            marginTop: '30px',
            padding: '14px 32px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            backgroundColor: isHovered ? '#ff8c42' : '#ff9955',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
            boxShadow: isHovered 
              ? '0 8px 16px rgba(255, 153, 85, 0.4)' 
              : '0 4px 8px rgba(255, 153, 85, 0.3)',
          }}
        >
          {texts[lang].button}
        </button>
      </div>

  
      {/* Footer */}
      <footer style={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        padding: '20px',
        fontSize: '14px',
        opacity: '0.7',
        color: 'var(--text-secondary)'
      }}>
        {texts[lang].footer}
      </footer>
    </>
  );
}

export default Message;