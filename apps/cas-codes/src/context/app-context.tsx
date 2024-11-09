// @deno-types="@types/react"
import {
    createContext,
    type Dispatch,
    ReactNode,
    type SetStateAction,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { API_HOST } from "~/env.ts";

const AppContext = createContext<
    {
        visitorCount: number | null;
        enableSquiggle: boolean;
        setEnableSquiggle: Dispatch<SetStateAction<boolean>>;
    }
>({
    visitorCount: null,
    enableSquiggle: true,
    setEnableSquiggle: () => {},
});

interface Props {
    children: ReactNode;
}
export const AppContextProvider = ({ children }: Props) => {
    const [visitorCount, setVisitorCount] = useState<number | null>(null);
    const [enableSquiggle, setEnableSquiggle] = useState(true);

    useEffect(() => {
        (async () => {
            const req = await fetch(`${API_HOST}/visitors`, {
                method: "GET",
            });
            const visitors = await req.json() as { count: number };
            setVisitorCount(visitors.count);
        })();
    }, []);

    const contextValue = useMemo(
        () => ({ visitorCount, enableSquiggle, setEnableSquiggle }),
        [
            visitorCount,
            enableSquiggle,
            setEnableSquiggle,
        ],
    );

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
