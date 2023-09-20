import HubsListView from "./hubs-list"
import HubsListFilters from "./list-filters"

const HubsList: React.FC = () => {
    return (
        <>
            <HubsListFilters />
            <HubsListView />
        </>
    )
}

export default HubsList