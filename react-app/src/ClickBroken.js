import React, { Component } from 'react';
import { List, Button, ListItem, ListHeader } from 'semantic-ui-react';

class ClickBroken extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			todos: [ 'meeting', 'homework', 'class', 'workout', 'dinner' ]
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		// this.setState((prevState) => ({
		// 	...prevState,
		// 	clicked: true
		// }));
		this.setState({
			clicked: true
		});
	}

	render() {
		// let done = this.props.done;
		// let taskViewer = this.props.taskViewer;
		//const { done, taskViewer } = this.props;
		const colors = { fontSize: '50px', backgroundColor: 'green' };
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>tutorial</h1>
				<h2>{this.state.clicked ? 'you clicked me' : 'you havent clicked me.'}</h2>
				<Button primary onClick={(e) => this.handleClick()} content="click here" />
				<h1>ToDo list</h1>
				{this.state.todos.map((todo) => (
					<List Divided verticalAlign="middle">
						<strong>
							<ListHeader className="ClickBroken" style={colors}>
								{todo}
							</ListHeader>
						</strong>
					</List>
				))}
				<header>Done by {this.props.taskViewer}</header>
			</div>
		);
	}
}

export default ClickBroken;
