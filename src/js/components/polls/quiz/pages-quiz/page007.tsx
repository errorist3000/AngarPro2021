import React, { SyntheticEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import PageSubtitle from '../../page-subtitle/page-subtitle';
import InputTextList from '../../input-text-list/input-text-list';
import store from '../../../../../store/store';
import { buildingChangeRegionStr } from '../../../../../store/building/actions';
import { IBuildingState } from '../../../../../store/building/types';

interface Props {
  region: string;
}

const QuizPage007 = ({ ...props }: Props): JSX.Element => {
  const { region } = props;
  const inputs = [{ id: 'inputRegion', legend: 'Город или область', placeHolder: 'Москва', value: region }];
  const handlerOnChange = (evt: SyntheticEvent) => {
    const e = evt.currentTarget as HTMLInputElement;
    const newValue = e.value;
    store.dispatch(buildingChangeRegionStr(newValue));
  };

  useEffect(() => {
    const buttonForward = document.getElementById('buttonForward');
    if (region === '') {
      buttonForward.classList.add('button__accent--disabled');
    } else {
      buttonForward.classList.remove('button__accent--disabled');
    }
  });

  return (
    <div className="popup__wrapper">
      <PageSubtitle text="Сообщите регион строительства" />
      <InputTextList inputs={inputs} handlerOnChange={handlerOnChange} />
    </div>
  );
};

const mapState = (state: IBuildingState) => ({
  region: state.building.regionStr,
});

export default connect(mapState)(QuizPage007);
