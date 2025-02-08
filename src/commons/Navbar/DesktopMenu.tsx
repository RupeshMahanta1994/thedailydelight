import React from 'react'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import Link from "next/link"
import { cn } from "@/lib/utils"



const MenuBar = () => {
    const blogItems: { title: string, href: string }[] = [
        {
            title: "home",
            href: "/"
        },
        {
            title: "blogs",
            href: "/blog"
        },
    ]
    return (

        <>
            <NavigationMenu>
                <NavigationMenuList className='uppercase'>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                home
                            </NavigationMenuLink>
                        </Link>

                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contactme" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                blog
                            </NavigationMenuLink>
                        </Link>

                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='uppercase'>
                            topics
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className=" w-[200px] gap-3 p-4 uppercase  ">
                                {blogItems.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.title}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='uppercase'>
                            features
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className=" w-[200px] gap-3 p-4 uppercase  ">
                                {blogItems.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.title}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/aboutme" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                about me
                            </NavigationMenuLink>
                        </Link>

                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contactme" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                contact me
                            </NavigationMenuLink>
                        </Link>

                    </NavigationMenuItem>
                </NavigationMenuList>

            </NavigationMenu>
        </>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>

                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default MenuBar;
