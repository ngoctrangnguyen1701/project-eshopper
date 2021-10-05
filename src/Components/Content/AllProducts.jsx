import './sortProduct.scss';

const showPagination = (pagesNumber, page, onSetPage) => {
    let pagination = [];
    for (let i = 0; i < pagesNumber; i++) {
        pagination.push(
            <li
                key={i}
                onClick={()=>{onSetPage(i + 1)}}
                className={page === i + 1 ? 'active' : ''}
            >
                <span style={{ cursor: 'pointer' }}>{i + 1}</span>
            </li>
        )
    };
    if(page < pagesNumber){
        //nếu page nhỏ hơn pagesNumber thì mới cho hiện cái dấu next-page
        pagination.push(
            <li
                key={pagesNumber}
                onClick={()=>{onSetPage(page + 1)}}
            >
                <span style={{ cursor: 'pointer' }}>&raquo;</span>
            </li>
        )
    }
    //console.log('pagination: ', pagination);
    return pagination;
};


function AllProducts(props) {
    const {
        products,
        error,
        showLoading,
        page,
        pagesNumber,
        onSetPage,
        onSort,
        sorting,
        no_result_for_searching,
        search,
        onRemoveSearch,
        filter,
        onFilterPrice,
    } = props;
    
    const elementPagination = (
        <ul className="pagination">
            {showPagination(pagesNumber, page, onSetPage)}
        </ul>
    );

    const active = <i className="fas fa-check"></i>
    const showButtonSort = (label, sortType) => (
        <button
            onClick={()=>onSort(sortType)}
            className="btn btn-secondary">{label} {sorting === sortType ? active : ''}
        </button>
    );
    
    const removeSearch = search ? (
        <button
            onClick={onRemoveSearch}
        >Remove searching: {search} 
            <i className="fas fa-times"></i>
        </button>
    ) : '';


    return (
        <div className="col-sm-9 padding-right">
            <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                {
                    showLoading ? (
                        <>
                            <div style={{marginBottom: "500px"}}>
                                {showLoading}
                            </div>
                            {showLoading}
                        </>
                    ): ''
                }
                
                {!showLoading && error}

                {
                    (!showLoading && !error) ? (
                        <>
                            <div className="filter">
                                <label>Range price: </label>
                                <select
                                    value={filter}
                                    onChange={e=>onFilterPrice(e.target.value)}>
                                    <option value="all">All</option>
                                    <option value="under 50">Under $50</option>
                                    <option value="50 - 100">$50 ~ $100</option>
                                    <option value="above 100">Above $100</option>
                                </select>
                            </div>
                            <div className="search-sort-product">
                            {removeSearch}
                                <div className="sort-product">
                                    {showButtonSort('Default', 'default')}
                                    {showButtonSort('Pirce ascending', 'ascending')}
                                    {showButtonSort('Pirce descending', 'descending')}
                                </div>
                            </div>
                            <div style={{float: "left"}}>
                                {products}
                            </div>
                            {no_result_for_searching}
                            {elementPagination}
                        </>
                    ): ''
                }
            </div>
            {/* ↑ khi không có showLoading error thì mới hiện ra cái nội dung bên dưới */} 
        </div>
    );
};

export default AllProducts;