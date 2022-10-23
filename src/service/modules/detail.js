import myRequest from "../request"

export const getHouseDetail = (houseId) => {
    return myRequest.get({
        url:'/detail/infos',
        params:{
            houseId
        }
    })
}