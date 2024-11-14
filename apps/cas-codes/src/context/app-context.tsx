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
import { useSearchParams } from "react-router-dom";

const AppContext = createContext<
    {
        visitorCount: number | null;
    }
>({
    visitorCount: null,
});

interface Props {
    children: ReactNode;
}
export const AppContextProvider = ({ children }: Props) => {
    const [params] = useSearchParams();
    const queryVisitors = !(params.get("queryVisitors") === "false");

    const [visitorCount, setVisitorCount] = useState<number | null>(null);

    useEffect(() => {
        if (queryVisitors) {
            (async () => {
                const req = await fetch(`${API_HOST}/visitors`, {
                    method: "GET",
                });
                const visitors = await req.json() as { count: number };
                setVisitorCount(visitors.count);
            })();
        }
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
