import Card from "../../../ui-library/card/card"
import ProgressBar from "../../../ui-library/progress-bar/progress-bar"
import Tag from "../../../ui-library/tag/tag"
import { Hub } from "../models/hub.model"

const HubsListItem: React.FC<{hub: Hub}> = ({ hub }) => {
    return (
        <Card onClick={() => window.location.href = `https://test.cleanhub.com/hub/${hub.slug}`}>
            <div className="flex flex-col justify-start md:flex-row md:items-start">
                {/* Hub Logo */}
                { 
                    hub.logo &&
                    <img
                        src={hub.logo?.thumbnailDirectLink}
                        alt="hub-logo"
                        width={150}
                        height={150}
                    />
                }
                {/* Hub Details */}
                <div className="flex flex-col ml-3 space-y-4">
                    <span className="text-black font-bold text-xl mb-2 md:mb-4">{hub.displayName}</span>    
                    <p className="text-gray-500 mb-2 md:mb-4">{hub.cardDescription}</p>
                    <div className="flex flex-col">
                        <ProgressBar progress={((hub.totalRecoveredQuantity - hub.unassignedQuantityTotal)/hub.totalRecoveredQuantity) * 100} />
                        <div className="text-indigo-700 text-md mt-2">
                            {(hub.totalRecoveredQuantity - hub.unassignedQuantityTotal).toFixed(2)} / {hub.totalRecoveredQuantity.toFixed(2)} {hub.recoveredQuantityUnit} recycled
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        {
                            hub.parentHubName &&
                            <Tag text={hub.parentHubName} />
                        }
                        <Tag color="green" text={hub.state} />
                        <Tag color="blue" text={hub.stage} />
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default HubsListItem