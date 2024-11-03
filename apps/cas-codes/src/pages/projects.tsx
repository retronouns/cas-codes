import { Link } from "react-router-dom";
import { Page } from "../components/page.tsx";

export const Projects = () => {
    return (
        <Page>
            <div className="flex flex-col gap-4 p-2">
                <p className="italic font-bold text-xl">Notable Projects</p>
                <Link
                    to="https://github.com/retronouns/sql-ts-map"
                    target="_blank"
                    className="cursor-pointer hover:underline underline-offset-2"
                >
                    <div className="flex flex-col gap-2 bg-cas-light border-2 border-cas-text rounded-lg p-4 h-min">
                        <p className="font-bold text-lg">sql-ts-map</p>
                        <p className="border-cas-text border-t pt-2">
                            A proof of concept method for inferring Typescript
                            types from a string literal containing raw SQL.
                        </p>
                        <p>
                            It is assuming database introspection was used to
                            create a generated Typescript type that corresponds
                            to the database's schema.
                        </p>
                        <p>
                            No other code generation is used.
                        </p>
                        <img src="./sql-ts-map.png"></img>
                    </div>
                </Link>
            </div>
        </Page>
    );
};
