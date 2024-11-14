export const cacheAsync = async <T>(
    { key, ttl, f }: { key: string; ttl: number; f: () => Promise<T> },
): Promise<T> => {
    const storageRecord = JSON.parse(
        globalThis.localStorage.getItem(key) ?? "null",
    ) as {
        created: string;
        value: T;
    };

    if (
        storageRecord &&
        (Date.now() - Date.parse(storageRecord.created).valueOf()) < ttl
    ) {
        return storageRecord.value;
    }

    const newRecord = { created: new Date().toISOString(), value: await f() };
    globalThis.localStorage.setItem(
        key,
        JSON.stringify(newRecord),
    );
    return newRecord.value;
};
