"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative w-10 h-10 rounded-sm">
          <Avatar className=" w-10 h-10 rounded-sm">
            <AvatarImage src="https://nlsstybgkntilejgohco.supabase.co/storage/v1/object/public/user%20image/avatar.png"></AvatarImage>
            <AvatarFallback className="rounded-sm">Mike</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="font-medium text-sm leading-none">Mike</p>
            <p className="text-xs leading-none text-muted-foreground">
              Mike@Gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
