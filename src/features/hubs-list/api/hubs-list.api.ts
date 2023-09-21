import { Hub } from "../models/hub.model"

const HubsListApi = {
    // method to fetch all hubs for the list:
    async fetchHubsList(): Promise<Hub[]> {
        const resp: Response = await fetch('https://marketplace-demo.cleanhub.com/api/public/hubs')

        if(resp.status === 200){
            return await resp.json()
        }
        else{
            throw Error(resp.statusText)
        }
    }
}

export default HubsListApi