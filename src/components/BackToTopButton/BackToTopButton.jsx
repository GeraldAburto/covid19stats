import React, { useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './BackToTopButton.styles.scss';

const BackToTopButton = () => {
  const buttonRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        buttonRef.current.style.display = 'block';
      } else {
        buttonRef.current.style.display = 'none';
      }
    });
  }, [buttonRef.current]);

  const backToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      className="back-to-top-button"
      variant="primary"
      ref={buttonRef}
      onClick={() => backToTop()}
    >
      <span role="img" aria-label="top">⬆️</span>
    </Button>
  );
};

export default BackToTopButton;
