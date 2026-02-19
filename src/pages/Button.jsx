import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <div>
            <button style={{ backgroundColor: props.bgColor }}>
                {props.buttonContent}
            </button>
        </div>
    );
};

Button.defaultProps = {
    bgColor: "blue",
    buttonContent: "Click Me",
};

Button.propTypes = {
    bgColor: PropTypes.string, 
    buttonContent: PropTypes.string, 
};

export default Button;
