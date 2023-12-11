"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import Button from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { ColorKeys, colors } from "@/constants/colors";

type Props = {
  onChange: (value: ColorKeys) => void;
  value: string;
};

const SelectColor = ({ onChange, value }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="inline-flex w-full items-center justify-between border border-foreground/10 px-3 text-start capitalize outline-none">
          <span className="text-foreground/75">{value}</span>

          <span
            className={cn(
              "inline-flex h-4 w-4",
              colors[value as ColorKeys]?.bg,
            )}
          />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="z-[100] mt-1 max-h-[calc(36px_*_7_+_2_*_8px)] w-[var(--radix-dropdown-menu-trigger-width)] overflow-y-auto bg-background shadow-[0px_0px_30px_0px] shadow-foreground/10">
        <div className="sticky top-0 flex h-2 w-full bg-background"></div>
        {(Object.keys(colors) as ColorKeys[]).sort().map((v) => {
          const color = colors[v as ColorKeys];

          return (
            <DropdownMenu.DropdownMenuItem
              key={v}
              onClick={() => {
                onChange(v);
              }}
              className={cn(
                "flex cursor-pointer items-center justify-between p-2 px-4 text-sm capitalize outline-none hover:bg-foreground/5",
                color["hover:text/75"],
                v === value ? "bg-foreground/5 " + color["text/90"] : "",
              )}
            >
              {v}
              <span className={cn("inline-flex h-4 w-4", color["bg"])} />
            </DropdownMenu.DropdownMenuItem>
          );
        })}
        <div className="sticky bottom-0 flex h-2 w-full bg-background"></div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default SelectColor;
