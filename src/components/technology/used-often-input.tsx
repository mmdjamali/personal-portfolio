"use client";

import { cn } from "@/lib/utils";
import { Listbox } from "@headlessui/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Button from "../ui/button";

type Props = {
  onChange: (value: boolean) => void;
  value: boolean;
};

const UsedOftenInput = ({ onChange, value }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="inline-flex w-full items-center justify-between border border-foreground/10 px-3 text-start capitalize">
          <span className="text-foreground/75">{value ? "True" : "False"}</span>
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="z-[100] mt-1 w-[var(--radix-dropdown-menu-trigger-width)] bg-background py-2 shadow-[0px_0px_30px_0px] shadow-foreground/10">
        {([true, false] as const).map((v, idx) => {
          return (
            <DropdownMenu.DropdownMenuItem
              key={idx}
              onClick={() => {
                onChange(v);
              }}
              className={cn(
                "cursor-pointer p-2 px-4 text-sm capitalize hover:bg-foreground/5 hover:text-purple-500",
                v === value ? "bg-foreground/5 text-purple-500/75" : "",
              )}
            >
              {v ? "True" : "False"}
            </DropdownMenu.DropdownMenuItem>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UsedOftenInput;
