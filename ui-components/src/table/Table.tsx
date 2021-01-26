import * as React from "react";
import "./Table.scss";

const ColGroup: React.FunctionComponent = ({ children }) => <colgroup>{children}</colgroup>;

const THead: React.FunctionComponent = ({ children }) => (
  <thead>
    <tr>{children}</tr>
  </thead>
);

const TBody: React.FunctionComponent = ({ children }) => <tbody>{children}</tbody>;

const TFoot: React.FunctionComponent = ({ children }) => <tfoot>{children}</tfoot>;

class Table extends React.Component {
  static ColGroup = ColGroup;
  static THead = THead;
  static TBody = TBody;
  static TFoot = TFoot;

  render() {
    return <table className="table-wrapper">{this.props.children}</table>;
  }
}

export default Table;
