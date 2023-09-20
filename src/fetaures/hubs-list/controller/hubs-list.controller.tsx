import { create } from "zustand";
import HubsListApi from "../api/hubs-list.api";
import { Hub } from "../models/hub.model";

interface IHubsListStore {
    loading: boolean,
    error: string | null,
    list: Hub[],
    fetchList: () => Promise<void>,
}

const useHubsListStore = create<IHubsListStore>((set) => ({
    loading: false,

    error: null,

    list: [],

    async fetchList() {
        set({loading: true})
        try{
            const hubsList: Hub[] = await HubsListApi.fetchHubsList()
            set({list: hubsList})
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch(e: any){
            set({error: e})
        }
        finally{
            set({loading: false})
        }
    },
}))

export default useHubsListStore