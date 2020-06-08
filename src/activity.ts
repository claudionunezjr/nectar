import {
    ActivityContext,
    ActivityEffect,
    ActivityHandler,
    ActivityUpdate,
    ActivityWorkers
} from '@framework/types';

export const Activity: <T>(defaultValue?: T) => ActivityWorkers<T> = <T>(
    defaultValue?: T
) => {
    const activities = new Map<ActivityHandler<T>, ActivityContext>();
    const effect: ActivityEffect<T> = (handler) => {
        const ctx = activities.get(handler) || {};
        const result = handler({ ctx, value });

        activities.set(handler, ctx);

        return result;
    };
    const update: ActivityUpdate<T> = (newValue) => {
        value = newValue;
        activities.forEach((ctx, handler) => {
            handler({ value, ctx });
        });
    };
    let value: T = defaultValue;

    return {
        defaultValue,
        effect,
        update,
        get value() {
            console.log('current value', value);
            return value;
        }
    };
};
