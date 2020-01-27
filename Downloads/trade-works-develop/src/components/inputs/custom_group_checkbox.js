/**
 * Custom Group checkbox component derived from Material UI button.
 */
import React, { useState } from 'react';

import CustomCheckbox from './custom_checkbox';

/**
 * Group Checkbox Component to be used accross applications
 * @param {*} props
 */
function CustomGroupCheckbox(props) {
  const [checkedList, setCheckedList] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  //on group selection, we are triggering the below function
  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? props.options : []);
    setCheckAll(e.target.checked);
  };
  //on single selection we are triggrering the below function
  const onSingleCheckboxChange = (value, idx) => e => {
    let checkedValues = [...checkedList];
    if (e.target.checked) {
      if (checkedValues.indexOf(value) <= -1) {
        checkedValues.push(value);
      }
    } else {
      if (checkedValues.indexOf(value) > -1) {
        checkedValues.splice(checkedValues.indexOf(value), 1);
      }
    }
    setCheckedList(checkedValues);
    setCheckAll(checkedValues.length === props.options.length);
  };

  return (
    <>
      <div style={{ borderBottom: '1px solid #E9E9E9' }}>
        <CustomCheckbox
          checked={checkAll}
          onChange={onCheckAllChange}
          label={props.isLabeled ? (props.label ? props.label : 'Select All') : ''}
          {...props}
        />
      </div>
      <br />
      {props &&
        props.options &&
        props.options.length &&
        props.options.map((value, index) => (
          <CustomCheckbox
            {...props}
            label={props.isLabeled ? (value.Title ? value.Title : '') : ''}
            onChange={onSingleCheckboxChange(value, index)}
            value={value}
            checked={checkedList.indexOf(value) > -1}
          />
        ))}
    </>
  );
}

export default CustomGroupCheckbox;
