import { Link, useRouteMatch } from 'react-router-dom';


const buttonStyle = {
    height: "35px",
    width: "35px",
    border: "none"
}
function HeaderBottom(props) {
    const { onSetDefault, onSearch, keyword, setKeyword } = props;
    const matchHome = useRouteMatch({
        path: '/',
        exact: true
    })
    //console.log('matchHome: ', matchHome);

    const matchContact = useRouteMatch('/contact');
    //console.log('matchContact: ', matchContact);
    const matchBlog = useRouteMatch(['/blog-list', '/blog-single']);


    return (
        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="mainmenu pull-left">
                            <ul className="nav navbar-nav collapse navbar-collapse">
                                <li>
                                    <Link
                                        to="/" 
                                        className={matchHome ? "active" : ''}
                                        onClick={onSetDefault}
                                    >Home</Link>
                                </li>
                                <li className="dropdown">
                                    <Link
                                        to="#"
                                        className={matchBlog ? "active" : ''}                            
                                    >Blog<i className="fa fa-angle-down"></i></Link>
                                    <ul role="menu" className="sub-menu">
                                        <li><Link to="/blog-list">Blog List</Link></li>
                                        <li><Link to="/blog-single">Blog Single</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link 
                                        to="/contact"
                                        className={matchContact ? "active" : ''}
                                    >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="search_box pull-right">
                            <input 
                                type="text" placeholder="Search" value={keyword}
                                onChange={e=>setKeyword(e.target.value)}
                            />
                            <Link
                                to="/" 
                                onClick={()=>onSearch(keyword)}
                            >
                                <button style={buttonStyle}><img src="images/home/searchicon.png" alt=""/></button>                                
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;