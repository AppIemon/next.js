export function setTimeoutPromise(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

export function setIntervalPromise(delay, callback) {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            try {
                callback();
            } catch (error) {
                clearInterval(interval);
                reject(error);
            }
        }, delay);
    });
}

export function setTimeoutPromiseWithValue(delay, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
}
