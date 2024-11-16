function Button({className="", text}) {
    return (
        <button className={`btn btn-primary btn-sm ${className}`}> {text}</button>
    
    );
}

export default Button;