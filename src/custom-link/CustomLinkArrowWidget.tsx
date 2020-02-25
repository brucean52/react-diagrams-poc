import React from 'react';

const CustomLinkArrowWidget = props => {
	const { point, previousPoint } = props;

	const angle =
		90 +
		(Math.atan2(
			point.getPosition().y - previousPoint.getPosition().y,
			point.getPosition().x - previousPoint.getPosition().x
		) *
			180) /
			Math.PI;

	return (
		<g className="arrow" transform={'translate(' + point.getPosition().x + ', ' + point.getPosition().y + ')'}>
			<g style={{ transform: 'rotate(' + angle + 'deg)' }}>
				<g transform={'translate(0, -11)'}>
					<polygon
						points="0,10 8,30 -8,30"
						fill={props.color}
						onMouseLeave={() => {
							this.setState({ selected: false });
						}}
						onMouseEnter={() => {
							this.setState({ selected: true });
						}}
						data-id={point.getID()}
						data-linkid={point.getLink().getID()}></polygon>
				</g>
			</g>
		</g>
	);
};

export default CustomLinkArrowWidget;