import myRequest from "../request"

// 热门建议
export function getHomeHotSuggests() {
    return myRequest.get({
        url:'/home/hotSuggests'
    })
}

// 推荐类别
export function getHomeCategories() {
    return myRequest.get({
        url:'/home/categories'
    })
}

// 服务列表
export function getHomeList(currentPage) {
    return myRequest.get({
        url:'/home/houselist',
        params: {
            page:currentPage
        }
    })
}
