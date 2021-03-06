import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.setting.value,
    };
  }
  render() {
    const { theme } = this.props;
    return (
      <div className="setting slider">
        <span className="setting_label">{this.props.setting.text}</span>
        <div className="setting_option">
          <input
            className="range_input"
            type="range"
            min="-2"
            max="2"
            step="0.5"
            value={this.state.value}
            onChange={(e) => { this.setState({ value: e.target.value }); }}
            onMouseUp={() => this.props.handleChange(this.state.value)}
            style={{
            backgroundColor: theme.plus_notif ?
                      theme.plus_notif.backgroundColor : theme.backgroundColor,
          }}
          />
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  setting: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Slider;
