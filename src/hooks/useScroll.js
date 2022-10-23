import {
    onMounted,
    onUnmounted,
    ref
} from "vue";

import {throttle} from "underscore"

// export function useScroll(reachBottomCB) {
export function useScroll(elRef) {
    let el = window
    const isReachBottom = ref(false)

    const clientHeight = ref(0)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)

    const  scrollListenerHandler = throttle(() => {
        if (el === window) {
            clientHeight.value = document.documentElement.clientHeight
            scrollTop.value = document.documentElement.scrollTop
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            clientHeight.value = el.clientHeight
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
        }
        if ((scrollHeight.value - clientHeight.value - scrollTop.value) < 1) {
            isReachBottom.value = true
        }
    },300)

    onMounted(() => {
        if (elRef) el = elRef.value
        el.addEventListener('scroll', scrollListenerHandler)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', scrollListenerHandler)
    })


    return {
        isReachBottom,
        clientHeight,
        scrollTop,
        scrollHeight
    }
}