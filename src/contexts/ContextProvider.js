import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notofication: false,
}

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);
	const [themeSettings, setThemeSettings] = useState(false);
	const [currentMode, setCurrentMode] = useState('Light');
	const [currentColor, setCurrentColor] = useState('#03C9D7');

	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem('themeMode', e.target.value);
		setThemeSettings(false);
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem('colorMode', color);
		setThemeSettings(false);
	};

	const handleClick = (clicked) => {
		setIsClicked({ ...initialState, [clicked]: true });
	}

	return (
		<StateContext.Provider
			value={{
				activeMenu, setActiveMenu,
				isClicked, setIsClicked,
				handleClick,
				screenSize, setScreenSize,
				themeSettings, setThemeSettings,
				currentMode, setCurrentMode, setMode,
				currentColor, setCurrentColor, setColor,
			}}>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext);