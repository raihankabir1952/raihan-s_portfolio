import { useCallback, useState } from "react";

// The `light` class on <html> is set before first paint by the inline script
// in index.html, so we just read it here instead of re-deriving the preference.
function getInitialTheme() {
    if (typeof document === "undefined") {
        return "dark";
    }
    return document.documentElement.classList.contains("light")
        ? "light"
        : "dark";
}

function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme);

    const toggleTheme = useCallback(() => {
        setTheme((previous) => {
            const next = previous === "dark" ? "light" : "dark";
            document.documentElement.classList.toggle("light", next === "light");
            try {
                localStorage.setItem("theme", next);
            } catch {
                // Storage unavailable (private mode): theme still applies for this session.
            }
            return next;
        });
    }, []);

    return { theme, toggleTheme };
}

export default useTheme;
