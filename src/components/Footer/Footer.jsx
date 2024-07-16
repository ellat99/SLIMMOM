import { useEffect, useState } from 'react';
import { FooterStyled, Team } from './Footer.styled';

const Footer = () => {
  const [teamOpened, setTeamOpened] = useState(false);

  const closeModal = () => {
    setTeamOpened(false);
  };

  const handleCloseModal = e => {
    if (
      (e.type === 'click' && e.target === e.currentTarget) ||
      (e.type === 'keydown' && e.key === 'Escape')
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  return (
    <FooterStyled>
      <ul></ul>
      <Team onClick={closeModal} className={teamOpened ? 'opened' : ''}></Team>
    </FooterStyled>
  );
};

export default Footer;
