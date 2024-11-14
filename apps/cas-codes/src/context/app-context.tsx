// @deno-types="@types/react"
import {
    createContext,
    type ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { API_HOST } from "~/env.ts";
import { cacheAsync } from "~/utils/cache.ts";

const AppContext = createContext<
    {
        visitorCount: number | null;
    }
>({
    visitorCount: null,
});

const DAY = 1000 * 60 * 60 * 24;
interface Props {
    children: ReactNode;
}
export const AppContextProvider = ({ children }: Props) => {
    const [visitorCount, setVisitorCount] = useState<number | null>(null);

    useEffect(() => {
        (async () => {
            const visitors = await cacheAsync({
                key: "visitorCount",
                ttl: DAY,
                f: async () => {
                    const req = await fetch(`${API_HOST}/visitors`, {
                        method: "GET",
                    });
                    return (await req.json() as { count: number }).count;
                },
            });

            setVisitorCount(visitors);
        })();
    }, []);

    const contextValue = useMemo(
        () => ({ visitorCount }),
        [
            visitorCount,
        ],
    );

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
