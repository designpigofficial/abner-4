export function debounce(fn: () => {}, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(), delay);
    }
}

export function throttle(fn:() => {}, delay: number){
    let timerId;

    if (timerId)
        return;
    
    timerId = setTimeout(() => {
        fn();
        timerId = undefined;
    }, delay)
}