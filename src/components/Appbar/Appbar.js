import './appbar.scss';

const Appbar = ({
    name
}) => {
    return <header className="appbar-header">
        <div className="appbar-header-title">{name}</div>
        <nav className="appbar-header-nav">
            <ul className="floater-left">
                <li>Link 1</li>
                <li>Link 2</li>
            </ul>
            <ul className="floater-right">
                <li>Link 3</li>
                <li>Link 4</li>
            </ul>
        </nav>
    </header>
}

export default Appbar;