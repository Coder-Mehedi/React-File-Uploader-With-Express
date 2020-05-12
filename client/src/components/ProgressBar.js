import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ percentage }) => {
	return (
		<div className="progress">
			<div
				className="progress-bar .progress-bar-animated progress-bar-striped bg-success"
				role="progressbar"
				style={{ width: `${percentage}%` }}
				aria-valuenow={percentage}
				aria-valuemin="0"
				aria-valuemax="100"
			>
				{percentage}%
			</div>
		</div>
	);
};

ProgressBar.propTypes = {
	percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
