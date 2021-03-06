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
import { connect } from "react-redux";
// import { populateAcceptedCommentsStore, changeCommentStatusToRejected } from '../../actions';
import Radium from "radium";
import _ from "lodash";
import {VictoryChart} from "victory-chart";
import {VictoryLine} from "victory-line";
import {VictoryBar} from "victory-bar";
import {VictoryAxis} from "victory-axis";

// @connect(state => state.stats)
@Radium
class CommentersVoters extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    params: React.PropTypes.object,
    data: React.PropTypes.object,
    chartWidth: React.PropTypes.number,
    chartHeight: React.PropTypes.number
  }
  render() {
    return (
      <VictoryChart
        width={this.props.chartWidth}
        height={this.props.chartHeight}
        scale={{
          x: d3.time.scale(this.props.data.firstVoteTimes),
          y: d3.scale.linear()
          }}>
        <VictoryLine
          style={{
            data: {
              strokeWidth: 2,
              stroke: "tomato"
            }
          }}
          data={this.props.data.firstCommentTimes.map((timestamp, i) => {
            return {x: timestamp, y: i};
          })}/>
        <VictoryLine
          style={{
            data: {
              strokeWidth: 2,
              stroke: "gold"
            }
          }}
          data={this.props.data.firstVoteTimes.map((timestamp, i) => {
            return {x: timestamp, y: i}
          })}/>
        <VictoryAxis
          orientation="bottom"/>
        <VictoryAxis
          dependentAxis
          label={"Participants"}
          style={{
            label: {
              fontSize: "8px"
            }
          }}
          orientation={"left"}/>
      </VictoryChart>
    )
  }
}

export default CommentersVoters;
