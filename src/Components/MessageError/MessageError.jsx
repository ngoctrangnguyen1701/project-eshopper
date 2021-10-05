function MessageError(props) {
    return (
        <div>
            <h3 className="text-danger">{props.error}</h3>
        </div>
    );
}

export default MessageError;