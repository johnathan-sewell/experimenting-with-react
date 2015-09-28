var ContactItemClass = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		email: React.PropTypes.string.isRequired,
		description: React.PropTypes.string
	},

	render: function() {
		return React.createElement('l1', {},
			React.createElement('h2', {}, this.props.name),
			React.createElement('a', {
				href: 'mailto:' + this.props.email
			}, this.props.email)
		);
	}
});