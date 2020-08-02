import React, { useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './BackToTopButton.styles.scss';

const BackToTopButton = () => {
  const buttonRef = useRef();

  useEffect(() => {
    if (!buttonRef || !buttonRef.current) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        buttonRef.current.style.display = 'block';
      } else {
        buttonRef.current.style.display = 'none';
      }
    });
  }, [buttonRef]);

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
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  );
};

export default BackToTopButton;
