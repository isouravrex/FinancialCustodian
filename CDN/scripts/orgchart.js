ej.diagrams.Diagram.Inject(
  ej.diagrams.DataBinding,
  ej.diagrams.HierarchicalTree,
  ej.diagrams.LayoutAnimation
);
/**
 * hierarchical-model
 */
//Click event for Appearance of the Property Panel.

//sets node default value
function nodeDefaults(obj, diagram) {
  obj.style = {
    fill: '#659be5',
    strokeColor: 'none',
    color: 'white',
    strokeWidth: 2,
  };
  obj.borderColor = '#3a6eb5';
  obj.backgroundColor = '#659be5';
  obj.shape.margin = { left: 5, right: 5, bottom: 5, top: 5 };
  obj.expandIcon = {
    height: 10,
    width: 10,
    shape: 'Minus',
    fill: 'lightgray',
    offset: { x: 0.5, y: 1 },
  };
  obj.expandIcon.verticalAlignment = 'Auto';
  obj.expandIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
  obj.collapseIcon.offset = { x: 0.5, y: 1 };
  obj.collapseIcon.verticalAlignment = 'Auto';
  obj.collapseIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
  obj.collapseIcon.height = 10;
  obj.collapseIcon.width = 10;
  obj.collapseIcon.padding.top = 5;
  obj.collapseIcon.shape = 'Plus';
  obj.collapseIcon.fill = 'lightgray';
  return obj;
}
//sets connector default value
function connectorDefaults(connector, diagram) {
  connector.targetDecorator.shape = 'None';
  connector.type = 'Orthogonal';
  connector.style.strokeColor = '#6d6d6d';
  connector.constraints = 0;
  connector.cornerRadius = 5;
  return connector;
}

// tslint:disable-next-line:max-func-body-length
 var data =[
 {"Name":"Partner Portal","fillColor":"#916DAF","NodeId":"1"},

 {"Name":"Partner 360 Partner <br> 360 Partner 360 Partner <strong>360 Partner 360</strong>","Category":"1","NodeId":"11"},
 {"Name":"Fraud Detection","Category":"11","NodeId":"111"},
 {"Name":"Categorisation","Category":"11","NodeId":"112"},
//  {"Name":"Recommendation","Category":"11","NodeId":"111"},

 {"Name":"Spend Analytics","Category":"1","NodeId":"12"},
 {"Name":"Prediction","Category":"12","NodeId":"121"},
 {"Name":"Statistics","Category":"12","NodeId":"122"},

 {"Name":"Demand Analytics","Category":"1","NodeId":"13"},
 {"Name":"Prediction","Category":"13","NodeId":"131"},
 {"Name":"Statistics","Category":"13","NodeId":"132"},
 {"Name":"Anomalies","Category":"13","NodeId":"133"},

 {"Name":"Quality","Category":"1","NodeId":"14"},
 {"Name":"Partner Quality Based on Image","Category":"14","NodeId":"141"},
 {"Name":"Partner Rating Based on Image","Category":"14","NodeId":"142"},

 {"Name":"Social","Category":"1","NodeId":"15"},
 {"Name":"NLP Querry Engine","Category":"15","NodeId":"151"},
 {"Name":"Feedback","Category":"15","NodeId":"152"},
 {"Name":"DEI Compliance","Category":"15","NodeId":"153"},
 {"Name":"NLP Contracts Engine","Category":"15","NodeId":"154"},
//  {"Name":"Fraud Detection","Category":"1","NodeId":"7"},
//  {"Name":"Categorization","Category":"1","NodeId":"8"},
//  {"Name":"Anomalies","Category":"1","NodeId":"9"},
//  {"Name":"Text Analytics","Category":"1","NodeId":"10"},
//  {"Name":"LR","Category":"9","NodeId":"11"},
//  {"Name":"LR","Category":"3","NodeId":"12"},
//  {"Name":"SLR","Category":"11","NodeId":"13"}
];
//Initializes the nodes for the diagram
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '499px',
  snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
  //configures data source settings
  dataSourceSettings: {
    id: 'NodeId',
    parentId: 'Category',
    dataSource: new ej.data.DataManager(data),
    doBinding: function (nodeModel, data, diagram) {
      nodeModel.shape = { type: 'Text', content: data.Name };
    },
  },
  //Disables all interactions except zoom/pan
  tool: ej.diagrams.DiagramTools.ZoomPan,
  //Configures automatic layout
  layout: {
    type: 'HierarchicalTree',
    verticalSpacing: 30,
    horizontalSpacing: 40,
    enableAnimation: true,
  },
  //Defines the default node and connector properties
  getNodeDefaults: function (obj, diagram) {
    return nodeDefaults(obj, diagram);
  },
  getConnectorDefaults: function (connector, diagram) {
    return connectorDefaults(connector, diagram);
  },
});
diagram.appendTo('#diagram');

var hSpacing = new ej.inputs.NumericTextBox({
  format: '###.##',
  change: function () {
    diagram.layout.horizontalSpacing = Number(hSpacing.value);
    diagram.dataBind();
  },
});
hSpacing.appendTo('#hSpacing');
var vSpacing = new ej.inputs.NumericTextBox({
  format: '###.##',
  change: function () {
    diagram.layout.verticalSpacing = Number(vSpacing.value);
    diagram.dataBind();
  },
});
vSpacing.appendTo('#vSpacing');
document.getElementById('appearance').onclick = function (args) {
  var targetelement = args.target;

  if (targetelement.className === 'image-pattern-style') {
    var id = args.target.id;
    var orientation1 =
      id.substring(0, 1).toUpperCase() + id.substring(1, id.length);
    diagram.layout.orientation = orientation1;
    diagram.dataBind();
    diagram.doLayout();
    args.target.classList.add('e-selected-style');
  }
};
