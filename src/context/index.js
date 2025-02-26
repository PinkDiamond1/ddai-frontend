import React from "react";

export const ContextDefaults = {
    selectedRecipe: "",
    DDAI: {},
    notificationDrawerOpen: false,
    transactions: [],
    closeNotificationsDrawer: () => {},
    toggleNotificationsDrawer: () => {},
    setRecipe: (value) => {
        this.selectedRecipe = value;
    },
}

export const Context = React.createContext(ContextDefaults)