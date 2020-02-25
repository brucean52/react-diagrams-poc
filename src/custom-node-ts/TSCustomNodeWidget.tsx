import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TSCustomNodeModel } from './TSCustomNodeModel';
import { Button, Icon } from 'antd'

export interface TSCustomNodeWidgetProps {
	node: TSCustomNodeModel;
	engine: DiagramEngine;
}

export interface TSCustomNodeWidgetState { hide: boolean }

export class TSCustomNodeWidget extends React.Component<TSCustomNodeWidgetProps, TSCustomNodeWidgetState> {
	constructor(props: TSCustomNodeWidgetProps) {
		super(props);
		this.state = { hide: true };
	}

	render() {
		return (
			<div className="custom-node">
        <div className="node-header">
        <PortWidget engine={this.props.engine} port={this.props.node.getPort('in')}>
					<div className="circle-port" ></div>
				</PortWidget>
          <Icon className="node-icon" type="info-circle" />
          <Icon className="node-icon" onClick={() => this.setState({ hide: !this.state.hide })} type="caret-right" />
          <div className="entity-name">{this.props.node.name}</div>
          <Icon className="node-icon" type="star" />
          <Icon className="node-icon" type="edit" />
          <PortWidget engine={this.props.engine} port={this.props.node.getPort('out')}>
					<div className="circle-port" />
				</PortWidget>
        </div>
        <div  className={this.state.hide ? 'hidden': 'show'}>
          <ul>
            <li>98765432</li>
            <li>123 Fake Street</li>
            <li>3/13/2020</li>
          </ul>
          <div className="footer">
            <div className="footer-container">
              <Icon type="question-circle" />
              <div>2 Help Tickets</div>
            </div>
            <div className="footer-container">
              <Icon type="profile" />
              <div>4 Orders</div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}
