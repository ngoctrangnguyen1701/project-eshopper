function Details(props) {
    const { error, showLoading } = props;

    return (
        <div className="col-sm-9 padding-right">
            {showLoading}
            {error}
            {/* ↓ nếu không có loading và không có error thì mới hiện 2 component con là <DetailsTop/> và <DetailsBottom/> */}
            {(!showLoading && !error) ? props.children : ''}            
        </div>
    );
}

export default Details;