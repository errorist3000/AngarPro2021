import React from 'react';
import { connect } from 'react-redux';
import styles from './calculator.module.scss';
import PollHeader from '../poll-header/poll-header';
import PollFooter from '../poll-footer/poll-footer';
import { ICalculatorState } from '../../../../store/calculator/types';
import store from '../../../../store/store';
import { togglePopupVisible } from '../../../../store/popup/actions';
import { calculatorBackwardPage, calculatorForwardPage } from '../poll-footer/handlersCalculator';

interface Props {
  children: JSX.Element;
}

const Calculator = ({ ...props }: Props): JSX.Element => {
  const { children } = props;
  const handlerClickCalculatorClose = (): void => {
    store.dispatch(togglePopupVisible(false));
  };

  return (
    <div className={styles.calculator}>
      <PollHeader
        text="Калькулятор цены здания"
        handlerClose={handlerClickCalculatorClose}
        iconClass="fal fa-calculator"
      />
      {children}
      <PollFooter handlerBackwardClick={calculatorBackwardPage} handlerForwardClick={calculatorForwardPage} />
    </div>
  );
};

const mapState = (state: ICalculatorState) => ({
  children: state.calculator.children,
});

export default connect(mapState)(Calculator);
