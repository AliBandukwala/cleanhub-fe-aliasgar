import HubsListView from "./hubs-list"
import HubsListFilters from "./list-filters"
import logo from '../../../assets/images/logo.png'
import Appbar from "../../../ui-library/appbar/appbar"

const HubsList: React.FC = () => {
    return (
        <>
            <Appbar title="Hubs" logoSrc={logo} /> 
            <HubsListFilters />
            <HubsListView />
        </>
    )
}

export default HubsList