import { useEffect } from "react"
import useHubsListStore from "../controller/hubs-list.controller"
import { Hub } from "../models/hub.model"
import HubsListItem from "./hubs-list-item"

const HubsListView: React.FC = () => {

    const loading: boolean = useHubsListStore(state => state.loading)
    const error: string | null = useHubsListStore(state => state.error)
    const list: Hub[] = useHubsListStore(state => state.list)
    const filteredList: Hub[] = useHubsListStore(state => state.filteredList)
    const fetchList = useHubsListStore(state => state.fetchList)

    useEffect(() => {
        fetchList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(loading) return <div>Loading...</div>

    else if(error) return <div>{error}</div>

    return (
        <div>
        {
            (filteredList.length > 0 ? filteredList : list).map((hub: Hub) => {
                return <HubsListItem key={hub.uuid} hub={hub} />
            })
        }
        </div>
    )
}

export default HubsListView