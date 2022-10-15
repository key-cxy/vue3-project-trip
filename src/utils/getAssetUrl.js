export const getAssetUrl = (asset) => {
    return new URL(`../assets/img/tabbar/${asset}`,import.meta.url).href
}  