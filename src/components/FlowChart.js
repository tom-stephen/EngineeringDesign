import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge
} from 'reactflow';
import 'reactflow/dist/style.css';

// Define descriptions for each node
const designPrinciplesData = {
    functionality: { label: 'Functionality', description: 'A design must solve the problem it was intended to address.' },
    solveProblem: { label: 'Solve Problem', description: 'Ensure the product effectively addresses its primary function.' },
    usability: { label: 'Usability', description: 'Make the product intuitive and easy to use for its target users.' },
  
    safety: { label: 'Safety', description: 'Products should prevent misuse and enhance user protection.' },
    builtInSafeguards: { label: 'Built-in Safeguards', description: 'Incorporate protective measures to prevent hazards.' },
    misuseIdentification: { label: 'Misuse Identified', description: 'Anticipate and address possible misuse scenarios.' },
    easeOfUse: { label: 'Easy to Use', description: 'Minimize complexity to reduce errors and risks.' },
    communicationToUsers: { label: 'Communicated to Users', description: 'Provide clear guidance and warnings.' },
    multipleSafetyLayers: { label: 'Multiple Layers of Safety', description: 'Use redundant safety features to reduce failure points.' },
  
    environment: { label: 'Environment', description: 'Consider sustainability, energy efficiency, and impact on nature.' },
    materialSelection: { label: 'Material Selection', description: 'Use sustainable and recyclable materials while minimizing toxins and non-renuable resources.' },
    energyEfficiency: { label: 'Energy Efficiency', description: 'Minimize power consumption and use renewable sources.' },
    manufacturingProcess: { label: 'Manufacturing & Production', description: 'Reduce waste and minimize emissions.' },
    lifecycle: { label: 'Lifecycle & Durability', description: 'Ensure longevity and repairability to reduce waste.' },
    carbonFootprint: { label: 'Carbon Footprint & Logistics', description: 'Optimize transportation and sourcing for lower emissions.' },
  
    cost: { label: 'Cost', description: 'Balance financial considerations while maintaining quality and sustainability.' },
    economicImpact: { label: 'Economic Impact', description: 'Ensure affordability and the overall impact on society.' },
    longTermViability: { label: 'Long-Term Viability', description: 'Ensure cost-effectiveness over the product lifecycle.' },
  
    completeDesign: { label: 'Complete Design', description: 'A well-rounded design considering all principles.' }
  };
  
  // Define the flowchart nodes
  const initialNodes = [
    { id: 'start', type: 'input', position: { x: 0, y: 50 }, data: { label: 'Start Design' }, style: { background: '#000000', color: 'white', fontWeight: 'bold' } },
  
    { id: 'functionality', position: { x: 0, y: 150 }, data: { label: 'Functionality' } },
    { id: 'solveProblem', position: { x: -200, y: 250 }, data: { label: 'Solve Problem' } },
    { id: 'usability', position: { x: 200, y: 250 }, data: { label: 'Usability' } },
  
    { id: 'safety', position: { x: 0, y: 350 }, data: { label: 'Safety' } },
    { id: 'builtInSafeguards', position: { x: -300, y: 450 }, data: { label: 'Built-in Safeguards' } },
    { id: 'misuseIdentification', position: { x: -100, y: 450 }, data: { label: 'Misuse Identified' } },
    { id: 'easeOfUse', position: { x: 100, y: 450 }, data: { label: 'Easy to Use' } },
    { id: 'communicationToUsers', position: { x: 300, y: 450 }, data: { label: 'Communicated to Users' } },
    { id: 'multipleSafetyLayers', position: { x: 0, y: 550 }, data: { label: 'Multiple Layers of Safeguards' } },
  
    { id: 'environment', position: { x: 0, y: 650 }, data: { label: 'Environment' } },
    { id: 'materialSelection', position: { x: -300, y: 750 }, data: { label: 'Material Selection' } },
    { id: 'energyEfficiency', position: { x: -150, y: 750 }, data: { label: 'Energy Efficiency' } },
    { id: 'manufacturingProcess', position: { x: 0, y: 750 }, data: { label: 'Manufacturing Process' } },
    { id: 'lifecycle', position: { x: 150, y: 750 }, data: { label: 'Lifecycle & Durability' } },
    { id: 'carbonFootprint', position: { x: 300, y: 750 }, data: { label: 'Carbon Footprint' } },
  
    { id: 'cost', position: { x: 0, y: 850 }, data: { label: 'Cost' } },
    { id: 'economicImpact', position: { x: -150, y: 950 }, data: { label: 'Economic Impact' } },
    { id: 'longTermViability', position: { x: 150, y: 950 }, data: { label: 'Long-Term Viability' } },
  
    { id: 'completeDesign', type: 'output', position: { x: 0, y: 1050 }, data: { label: 'Complete Design' }, style: { background: '#000000', color: 'white', fontWeight: 'bold' } }
  ];
  
  // Define connections between nodes
  const initialEdges = [
    { id: 'e1-2', source: 'start', target: 'functionality', animated: true },
    { id: 'e2-3', source: 'functionality', target: 'solveProblem' },
    { id: 'e2-4', source: 'functionality', target: 'usability' },
    { id: 'e3-5', source: 'solveProblem', target: 'safety' },
    { id: 'e4-5', source: 'usability', target: 'safety' },
  
    { id: 'e5-6', source: 'safety', target: 'builtInSafeguards' },
    { id: 'e5-7', source: 'safety', target: 'misuseIdentification' },
    { id: 'e5-8', source: 'safety', target: 'easeOfUse' },
    { id: 'e5-9', source: 'safety', target: 'communicationToUsers' },
    { id: 'e6-10', source: 'builtInSafeguards', target: 'multipleSafetyLayers' },
    { id: 'e7-10', source: 'misuseIdentification', target: 'multipleSafetyLayers' },
    { id: 'e8-10', source: 'easeOfUse', target: 'multipleSafetyLayers' },
    { id: 'e9-10', source: 'communicationToUsers', target: 'multipleSafetyLayers' },
    { id: 'e10-11', source: 'multipleSafetyLayers', target: 'environment' },
  
    { id: 'e11-12', source: 'environment', target: 'materialSelection' },
    { id: 'e11-13', source: 'environment', target: 'energyEfficiency' },
    { id: 'e11-14', source: 'environment', target: 'manufacturingProcess' },
    { id: 'e11-15', source: 'environment', target: 'lifecycle' },
    { id: 'e11-16', source: 'environment', target: 'carbonFootprint' },
    { id: 'e12-17', source: 'materialSelection', target: 'cost' },
    { id: 'e13-17', source: 'energyEfficiency', target: 'cost' },
    { id: 'e14-17', source: 'manufacturingProcess', target: 'cost' },
    { id: 'e15-17', source: 'lifecycle', target: 'cost' },
    { id: 'e16-17', source: 'carbonFootprint', target: 'cost' },
  
    { id: 'e17-18', source: 'cost', target: 'economicImpact' },
    { id: 'e17-19', source: 'cost', target: 'longTermViability' },
    { id: 'e18-20', source: 'economicImpact', target: 'completeDesign' },
    { id: 'e19-20', source: 'longTermViability', target: 'completeDesign' }
  ];

const FlowChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);

  const onNodeClick = useCallback((_, node) => {
    setSelectedPrinciple(designPrinciplesData[node.id] || null);
  }, []);

  return (
    <div style={{ display: 'flex', height: '85vh' }}>
      <div style={{ width: '70%', height: '100%' }}>
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} fitView onNodeClick={onNodeClick}>
          <MiniMap />
          <Controls />
          <Background variant="lines" />
        </ReactFlow>
      </div>
      <div style={{ width: '30%', padding: '1rem', borderLeft: '1px solid #ccc', background: '#f9f9f9' }}>
        {selectedPrinciple ? <><h3>{selectedPrinciple.label}</h3><p>{selectedPrinciple.description}</p></> : <p>Click a node to learn more.</p>}
      </div>
    </div>
  );
};

export default FlowChart;
