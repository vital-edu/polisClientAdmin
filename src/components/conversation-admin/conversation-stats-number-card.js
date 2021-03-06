/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

import React from "react";
import Radium from "radium";
import Awesome from "react-fontawesome";

const style = {
  headline: {
    paddingLeft: 20
  },
  numberCard: {
    width: window.innerWidth < 500 ? (window.innerWidth * .9) : 170,
    minHeight: 90,
    backgroundColor: "rgb(253,253,253)",
    margin: 7,
    borderRadius: 3,
    padding: 10,
    WebkitBoxShadow: "3px 3px 6px -1px rgba(220,220,220,1)",
    BoxShadow: "3px 3px 6px -1px rgba(220,220,220,1)"
  },
  bigNumber: {
    display: "block",
    fontSize: 36,
    color: "rgb(160,160,160)"
  },
  numberAwesome: {
    fontSize: 24,
    marginLeft: 8,
    position: "relative",
    top: -3
  },
  numberSubheading: {
    fontSize: 16,
    fontWeight: 500,
    color: "rgb(160,160,160)"
  }
};

@Radium
class NumberCard extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    params: React.PropTypes.object,
    datum: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    icon: React.PropTypes.string,
    subheading: React.PropTypes.string,
  }
  render() {
    return (
      <div style={style.numberCard}>
        <span style={style.bigNumber}>
          { this.props.datum }
          {
            this.props.icon ? <Awesome
              name={this.props.icon}
              style={style.numberAwesome}/> : ""
          }
        </span>
        <span style={style.numberSubheading}> {this.props.subheading} </span>
      </div>
    );
  }
}

export default NumberCard;
