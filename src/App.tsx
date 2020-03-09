import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';

import createEngine, { DefaultLinkModel, DiagramModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';

import { TSCustomNodeFactory } from './custom-node-ts/TSCustomNodeFactory';
import { AdvancedLinkFactory } from './custom-link/AdvancedLinkFactory';

import { TSCustomNodeModel } from './custom-node-ts/TSCustomNodeModel';
import AdvancedLinkModel from './custom-link/AdvancedLinkModel';

function App() {
  // create an instance of the engine
  const engine = createEngine();

  // register the engines
  engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());
  engine.getLinkFactories().registerFactory(new AdvancedLinkFactory());

  // create a diagram model
  const model = new DiagramModel();

  const node1: any = new TSCustomNodeModel({ color: 'rgb(192,255,0)', name: 'Order' });
  node1.setPosition(50, 50);

  const node2: any = new TSCustomNodeModel({ color: 'rgb(0,192,255)', name: 'Product' });
  node2.setPosition(200, 50);

  // Arrow/ Custom Link
  const link2 = new AdvancedLinkModel();
  link2.setSourcePort(node1.getPort('out'));
  link2.setTargetPort(node2.getPort('in'));
  link2.addLabel('Bought X amount of');

  model.addAll(node1, node2, link2);

  // ****** Uncomment this for loop to generate large number of nodes ********
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      generateNodes(model, i * 300, j * 300);
    }
  }
  
  // Generates 3 nodes with links
  function generateNodes(model: DiagramModel, offsetX: number, offsetY: number) {
    const node1: any = new TSCustomNodeModel({ color: 'rgb(192,255,0)', name: 'Order' });
    node1.setPosition(offsetX, offsetY);
  
    const node2: any = new TSCustomNodeModel({ color: 'rgb(0,192,255)', name: 'Product' });
    node2.setPosition(300 + offsetX, 100 + offsetY);

    const node3: any = new TSCustomNodeModel({ color: 'rgb(192,255,0)', name: 'Customer' });
    node3.setPosition(150 + offsetX, 200 + offsetY);
  
    const link1 = new DefaultLinkModel();
    link1.setSourcePort(node1.getPort('out'));
    link1.setTargetPort(node2.getPort('in'));

    const link2 = new DefaultLinkModel();
    link2.setSourcePort(node2.getPort('out'));
    link2.setTargetPort(node3.getPort('out'));

    const link3 = new DefaultLinkModel();
    link3.setSourcePort(node2.getPort('in'));
    link3.setTargetPort(node3.getPort('in'));
  
    model.addAll(node1, node2, node3, link1, link2, link3);
  }

  engine.setModel(model);

  return (
    <CanvasWidget className="diagram-container" engine={engine} />
  );
}

export default App;
