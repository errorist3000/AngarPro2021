import React from 'react';
import styles from './slide.module.scss';
import quizOpen from '../polls/quiz/_handlers';

const ButtonQuiz = (): JSX.Element => (
  <button
    className={`${styles.buttonQuiz} button button__transparent button__transparent--light`}
    type="button"
    onClick={quizOpen}
  >
    <span className="button__text">запрос</span>
    <i className="far fa-arrow-right button__icon" />
  </button>
);

export default ButtonQuiz;
