import React, { Fragment } from "react";

export const GrideLine = () => {
    return (
        <Fragment>
            <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,transparent,transparent_24px,#555555_24px,#555555_25px)] opacity-20 z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_24px,#555555_24px,#555555_25px)] opacity-20 z-0 pointer-events-none"></div>
        </Fragment>
    )
}