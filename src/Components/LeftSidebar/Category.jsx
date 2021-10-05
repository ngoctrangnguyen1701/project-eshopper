function Category(props) {
    const { categories, error, showLoading} = props;

    return (
        <div>
            <h2>Category</h2>
            <div className="panel-group category-products" id="accordian">
                {(!showLoading && !error) ? categories : ''}                
                {error}
                {showLoading}
                {/* ↑nếu showLoading có giá trị là true thì sẽ hiển thị biểu tượng loading */}
            </div>
        </div>
    );
}

export default Category;