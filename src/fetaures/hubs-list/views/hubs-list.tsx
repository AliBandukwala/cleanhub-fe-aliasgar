import { useEffect } from "react"
import useHubsListStore from "../controller/hubs-list.controller"
import { Hub } from "../models/hub.model"
import HubsListItem from "./hubs-list-item"

const HubsList: React.FC = () => {

    const {loading, error, list, fetchList} = useHubsListStore()

    useEffect(() => {
        fetchList()
    }, [])

    if(loading) return <div>Loading...</div>

    else if(error) return <div>{error}</div>

    return (
        <div>
        {
            list.map((hub: Hub) => {
                return <HubsListItem key={hub.uuid} hub={hub} />
            })
        }
        </div>
    )
}

export default HubsList