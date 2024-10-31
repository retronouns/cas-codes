// @deno-types="@types/react"
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { API_HOST } from "../env.ts";

const AppContext = createContext({ visitorCount: 0 });

interface Props {
    children: ReactNode;
}
export const AppContextProvider = ({ children }: Props) => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        (async () => {
            const req = await fetch(`${API_HOST}/visitors`, {
                method: "GET",
            });
            const visitors = await req.json() as { count: number };
            setVisitorCount(visitors.count);
        })();
    }, []);

    const contextValue = useMemo(() => ({ visitorCount: visitorCount }), [
        visitorCount,
    ]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
