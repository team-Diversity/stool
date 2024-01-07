import PropTypes from 'prop-types'

const Button = ({colour, text}) => {
    return (
        <button onClick='onClick' style={{backgroundColor: colour}} className="btn">
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    colour: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button