import React, { ReactNode } from "react";

interface ComponentConteinerProps {
    children: ReactNode;
}

const ComponentConteiner: React.FC<ComponentConteinerProps> = ({
    children
}) => {
    return <div className="conteiner">{children}</div>;
};

export default ComponentConteiner;
