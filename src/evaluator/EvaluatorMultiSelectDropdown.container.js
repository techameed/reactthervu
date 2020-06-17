import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DropdownArrow from '@material-ui/icons/ArrowDropDown';

import classes from './evaluatorMultiSelectDropdown.css';
import Input from '../controls/input.component';

class MultiSelectDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      selectedOptions: [this.props.placeholder],
      options: this.props.options,
    }
    this.onToggleDropdown = this.onToggleDropdown.bind(this);
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
  }

  onToggleDropdown() {
    const { disabled } = this.props;
    if (disabled) return;

    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  }

  onChangeCheckBox(e, selected) {
    const { options, selectedOptions } = this.state;
    const { placeholder, callback } = this.props;
    const checked = e.target.checked;

    const selectedOptionsToUpdate = selectedOptions.indexOf(placeholder) !== - 1 ? (
      selectedOptions.filter(option => option !== placeholder)
    ) : [...selectedOptions];

    const optionsToUpdate = [...options].map(option => {
      if (option.id !== selected.id) {
        return option;
      }
      option.isChecked = checked;

      return option;
    });

    if (checked) {
      selectedOptionsToUpdate.push(selected.value);
    } else {
      selectedOptionsToUpdate.splice(selectedOptionsToUpdate.indexOf(selected.value), 1);
    }

    !selectedOptionsToUpdate.length && selectedOptionsToUpdate.push(placeholder);

    this.setState({
      options: optionsToUpdate,
      selectedOptions: selectedOptionsToUpdate,
    })

    const optionsToReturn = optionsToUpdate.filter(option => option.isChecked);

    callback(optionsToReturn);
  }

  componentDidMount() {
    this.defaultSelected();
  }

  defaultSelected() {
    const { options } = this.state;
    const { placeholder } = this.props;

    const filteredOptions = options.filter(option => option.isChecked);
    const selectedItem = !filteredOptions.length 
      ? [placeholder] 
      : filteredOptions.map(option => option.value)

    this.setState({ selectedOptions : selectedItem });
  }

  render() {
    const {
      options,
      selectedOptions,
      isDropdownOpen
    } = this.state;
    const {
       disabled,
       optionHeight
    } = this.props;

    const getInput = () => {
      return (
        <div
          className={`
            ${classes.select}
            ${disabled && classes['disable-select']}
          `}
          onClick={this.onToggleDropdown}>
          <div
            className={classes['selected-items']}
            title={selectedOptions}>
            {selectedOptions.join()}
          </div>
          <div className={classes['arrow-icon']}>
            {!disabled && <DropdownArrow />}
          </div>
        </div>
      )
    }
    const getOptionList = () => {
      return (
        options.map((option, index) => {
          return (
            <div
              className={classes.option}
              key={index}>
              <div className={classes.input} >
                <Input
                  type="checkbox"
                  checked={option.isChecked}
                  onChange={e => this.onChangeCheckBox(e, option)} />
              </div>
              <div
                className={classes.value}
                title={option.value}>
                {option.value}
              </div>
            </div>
          )
        })
      )
    }

    return (
      <div className={classes.dropdown}>
        {getInput()}
        {
          isDropdownOpen && (
            <div
              className={classes['options-list']}
              style={{ maxHeight: optionHeight }}>
              {getOptionList()}
            </div>
          )
        }
      </div>
    );
  }
}

export default MultiSelectDropdown;

MultiSelectDropdown.propTypes = {
  disabled: PropTypes.bool,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  optionHeight: PropTypes.string,
  callback: PropTypes.func
}
