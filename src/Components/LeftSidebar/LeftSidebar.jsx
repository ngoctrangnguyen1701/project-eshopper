import CategoryContainer from '../../Containers/CategoryContainer';
import Brand from './Brand';
import Shiping from './Shiping';

function LeftSidebar(props) {
    return (
        <div className="col-sm-3">
            <div className="left-sidebar">
                <CategoryContainer />
                <Brand />
                <Shiping />
            </div>
        </div>
    );
}

export default LeftSidebar;