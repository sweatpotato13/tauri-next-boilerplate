"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle";

export function ModeNav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <ThemeToggle></ThemeToggle>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
