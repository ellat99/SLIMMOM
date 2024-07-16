import { FooterStyled, Team } from './Footer.styled';
import beeCodeTeam from 'images/Team/BeeCodeTeam.png';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Footer = () => {
  const [teamOpened, setTeamOpened] = useState(false);

  const toggleTeam = () => {
    setTeamOpened(!teamOpened);
  };

  const closeModal = e => {
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
};

export default Footer;
