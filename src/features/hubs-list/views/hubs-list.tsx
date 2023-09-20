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

    if(loading) return <div className="ml-4">Loading...</div>

    else if(error) return <div className="ml-4">{error}</div>

    return (
        <div className=" flex flex-col items-center">
        {
            (filteredList.length > 0 ? filteredList : list).map((hub: Hub) => {
                return <div className=" md:w-3/4" key={hub.uuid}><HubsListItem hub={hub} /></div>
            })
        }
        </div>
    )
}

export default HubsListView