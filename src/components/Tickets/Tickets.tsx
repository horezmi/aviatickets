import React, { FC } from "react";
import { Ticket } from "components";

import './index.scss'

export const Tickets: FC = () => {
    return (
        <div className="tickets">
            <Ticket />
            <Ticket />
        </div>
    );
};
