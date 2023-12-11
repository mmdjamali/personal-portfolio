"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Button from "../ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useCustomFetch } from "@/hooks/use-custom-fetch";
import { ApiResponse } from "@/types/api";
import { TechnologyEntity } from "@/types/entity";
import { ColorKeys, colors } from "@/constants/colors";
import Image from "next/image";
import Icon from "../icon";

type Props = {
  value?: string[];
  onChange: (v: string) => void;
};

const TechnologySpecificationInput = ({ onChange, value }: Props) => {
  const fetch = useCustomFetch();

  const { isLoading, data } = useQuery({
    queryKey: ["technologies"],
    queryFn: async () => {
      const res: ApiResponse<{ rows: TechnologyEntity[] }> = await fetch(
        "/api/technology",
        {
          headers: {
            "Cotent-Type": "application/json",
          },
        },
      ).then((res) => res?.json());

      if (!res?.success) return null;

      return res.data.rows;
    },
  });

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="inline-flex w-full items-center justify-between border border-foreground/10 px-3 text-start capitalize outline-none">
          <span className="text-foreground/75">Select</span>

          {/* {(() => {
            if(!value?.length) return null



            return <></>
          })()} */}
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="z-[100] mt-1 max-h-80 w-[var(--radix-dropdown-menu-trigger-width)] overflow-y-auto bg-background shadow-[0px_0px_30px_0px] shadow-foreground/10">
        <div className="sticky top-0 flex h-2 w-full bg-background"></div>
        {data?.map(({ color: c, icon, id, name }) => {
          if (!id || !icon || !name) return null;

          const color = colors[c ?? "foreground"];

          return (
            <Button
              key={id}
              onClick={() => {
                onChange(id);
              }}
              className={cn(
                "flex w-full cursor-pointer items-center justify-between gap-4 p-2 px-4 text-sm capitalize outline-none hover:bg-foreground/5",
              )}
            >
              <span className="flex items-center justify-center gap-4">
                <Image alt={name} height={21} width={21} src={icon} />
                {name}
              </span>

              {value?.includes(id) ? (
                <Icon
                  name="Check"
                  className={cn("text-[21px] text-foreground")}
                />
              ) : null}
            </Button>
          );
        })}
        <div className="sticky bottom-0 flex h-2 w-full bg-background"></div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default TechnologySpecificationInput;
