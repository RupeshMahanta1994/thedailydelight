import { Menu } from 'lucide-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Link from 'next/link'
const DropdownMobileMenu = () => {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>

                <Menu className='bg-gray-400/35 h-8 w-8 p-1.5 rounded-sm' />


            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 uppercase tracking-wide'>
                <Link href={"/"}>
                    <DropdownMenuLabel>
                        Home
                    </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <Link href={"/blog"}>
                    <DropdownMenuLabel>
                        blog
                    </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />

                <DropdownMenuSub>

                    <DropdownMenuSubTrigger>

                        <span>topics</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>

                                <span>Email</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>

                                <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>

                                <span>More...</span>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <Link href={"/blog"}>
                    <DropdownMenuLabel>
                        feature
                    </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <Link href={"/aboutme"}>
                    <DropdownMenuLabel>
                        about me
                    </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <Link href={"/contactme"}>
                    <DropdownMenuLabel>
                        contact me
                    </DropdownMenuLabel>
                </Link>
            </DropdownMenuContent>

        </DropdownMenu>
    )
}
export default DropdownMobileMenu;