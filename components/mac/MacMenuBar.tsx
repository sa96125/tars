"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import useCurrentTime from "@/hook/useCurrentTime";

function MacMenuBar() {
  const currentTime = useCurrentTime();

  return (
    <Menubar className=" absolute px-3 z-50 w-full backdrop-blur-lg bg-opacity-50">
      <MenubarMenu>
        <MenubarTrigger>
          <img
            src="/apple.svg"
            className="w-[1.1rem] h-[1.1rem] object-cover"
          />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            About this Web<MenubarShortcut>⌘W</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>System Settings...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Sleep</MenubarItem>
          <MenubarItem>Restart...</MenubarItem>
          <MenubarItem>Shut down...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Lock Screen</MenubarItem>
          <MenubarItem>Login</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className=" font-extrabold">Tars</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Chat with Tars <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Version...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Report an issue...</MenubarItem>
          <MenubarItem>Move to repository</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <div className="ml-auto mr-1 flex gap-3 items-center">
        <img src="/wiFi.svg" className="w-[1.5rem] object-cover pt-1" />
        <img src="/battery.svg" className="w-[1.9rem] object-cover  pt-1" />
        <img src="/search.svg" className="w-[1.3rem] object-cover  pt-1" />
        <button className="px-2 flex cursor-default select-none items-center h-7 rounded-sm text-[0.8rem] font-normal outline-none focus:bg-red-300 focus:text-zinc-900 data-[state=open]:bg-zinc-100 data-[state=open]:text-zinc-900 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[state=open]:bg-zinc-800 dark:data-[state=open]:text-zinc-50">
          {currentTime}
        </button>
      </div>
    </Menubar>
  );
}

export default MacMenuBar;
