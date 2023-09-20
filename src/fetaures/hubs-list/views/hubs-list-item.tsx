import Card from "../../../ui-library/card/card"
import { Hub } from "../models/hub.model"

const HubsListItem: React.FC<{hub: Hub}> = ({ hub }) => {
    return (
        <Card>
            <div>{ hub.displayName }</div>
        </Card>
    )
}

export default HubsListItem