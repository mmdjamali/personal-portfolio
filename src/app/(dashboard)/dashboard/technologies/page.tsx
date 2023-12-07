"use client";

import Icon from "@/components/icon";
import Actions from "@/components/technology/actions";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { ColorKeys, colors } from "@/constants/colors";
import { useCustomFetch } from "@/hooks/use-custom-fetch";
import { cn } from "@/lib/utils";
import { ApiResponse } from "@/types/api";
import { TechnologyEntity } from "@/types/entity";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import Checkbox from "@/components/ui/checkbox";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Page = () => {
  const fetch = useCustomFetch();

  const { data, isLoading } = useQuery({
    queryKey: ["table", "technologies"],
    queryFn: async () => {
      const res: ApiResponse<{ rows: TechnologyEntity[] }> = await fetch(
        "/api/technology",
      ).then((res) => res?.json());

      if (!res?.success) return null;

      return res.data;
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const [deleted, setDeleted] = useState<string[]>([]);

  const columns: ColumnDef<TechnologyEntity>[] = useMemo(
    () => [
      {
        accessorKey: "technology",
        header() {
          return (
            <td className="whitespace-nowrap px-4 py-3 uppercase">
              Technology
            </td>
          );
        },
        cell({ row }) {
          return (
            <td className="px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="relative grid aspect-square w-9 place-items-center items-center bg-foreground/5">
                  <Image
                    src={row.original.icon ?? ""}
                    width={30}
                    height={30}
                    alt="icon"
                  />
                </div>

                <p className="max-w-xs text-ellipsis whitespace-nowrap font-medium">
                  {row.original.name ?? "Unknown"}
                </p>
              </div>
            </td>
          );
        },
      },
      {
        accessorKey: "url",
        header() {
          return <td className="whitespace-nowrap px-4 py-3 uppercase">Url</td>;
        },
        cell({ row }) {
          return (
            <td className="px-4 py-3">
              <Link
                className="text-blue-500 underline"
                href={row.original.url ?? ""}
              >
                {row.original.url}
              </Link>
            </td>
          );
        },
      },
      {
        accessorKey: "used_often",
        header() {
          return (
            <td className="w-0 whitespace-nowrap px-4 py-3 uppercase">
              Used often
            </td>
          );
        },
        cell({ row }) {
          return (
            <td className="px-4 py-3">
              <div className="grid place-items-center">
                <span>{row.original.used_often ? "TRUE" : "FALSE"}</span>
              </div>
            </td>
          );
        },
      },
      {
        accessorKey: "color",
        header() {
          return (
            <td className="w-0 whitespace-nowrap px-4 py-3 uppercase">Color</td>
          );
        },
        cell({ row }) {
          const color = colors[(row.getValue("color") as ColorKeys) ?? "blue"];

          return (
            <td className="px-4 py-3">
              <div className="grid place-items-center">
                <span className={cn("inline-grid h-4 w-4", color["bg"])} />
              </div>
            </td>
          );
        },
      },
      {
        accessorKey: "actions",
        header() {
          return (
            <td className="w-0 whitespace-nowrap px-4 py-3 text-center uppercase">
              Actions
            </td>
          );
        },
        cell({ row }) {
          return (
            <td className="px-4 py-3">
              <Actions
                technology={row.original}
                onDelete={() =>
                  setDeleted((prev) => {
                    if (!row?.original?.id) return prev;

                    const clone = structuredClone(prev);
                    clone.push(row.original.id);
                    return clone;
                  })
                }
              />
            </td>
          );
        },
      },
    ],
    [],
  );

  const table = useReactTable({
    columns,
    data: data?.rows ?? [],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <main className="flex min-h-[calc(100svh_-_54px)] w-full items-start gap-4 bg-foreground/5 p-4 lg:gap-8 lg:p-8">
      <div className="relative grid w-full flex-col gap-5 bg-background p-5">
        <div className="flex items-center justify-between gap-5">
          <Input icon="Search" placeholder="Search..." />

          <Button className="whitespace-nowrap bg-foreground text-background">
            Add Technology
          </Button>
        </div>

        <div className="relative w-full overflow-x-auto">
          <table className="w-full">
            <thead className="w-full">
              {table.getHeaderGroups()?.map(({ headers }, idx) => {
                return (
                  <tr
                    className="h-14 border-b border-dashed border-foreground/10 font-medium text-foreground/60"
                    key={idx}
                  >
                    <td className="relative w-0">
                      <div className="my-auto  inline-flex h-full w-full items-center justify-center px-4 py-3">
                        <Checkbox
                          onClick={() => {
                            table.getToggleAllPageRowsSelectedHandler()({
                              target: {
                                checked: !table.getIsAllPageRowsSelected(),
                              },
                            });
                          }}
                          value={table.getIsAllPageRowsSelected()}
                        />
                      </div>
                    </td>

                    {headers?.map((header, idx) => {
                      return (
                        <Fragment key={idx}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </Fragment>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>

            <tbody className="relative">
              {table?.getPaginationRowModel()?.rows?.map((row, idx) => {
                if (!row?.original?.id) return <></>;

                if (deleted.includes(row.original.id))
                  return (
                    <tr
                      key={row.original.id}
                      className="h-20 w-full border-b border-dashed border-foreground/10 font-semibold"
                    ></tr>
                  );

                return (
                  <tr
                    key={row.original.id}
                    className="h-20 border-b border-dashed border-foreground/10 font-semibold"
                  >
                    <td className="relative w-0">
                      <div className="my-auto  inline-flex h-full w-full items-center justify-center px-4 py-3">
                        <Checkbox
                          onClick={() => {
                            row.getToggleSelectedHandler()({
                              target: { checked: !row.getIsSelected() },
                            });
                          }}
                          value={row.getIsSelected()}
                        />
                      </div>
                    </td>

                    {row
                      .getVisibleCells()
                      ?.map((cell) => (
                        <Fragment key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </Fragment>
                      ))}
                  </tr>
                );
              })}

              {isLoading ? (
                <tr>
                  <td className="grid h-96 w-full place-items-center">
                    <span className="absolute right-[50%] top-[50%] translate-x-[50%] translate-y-[50%]">
                      <Icon
                        name="Spinner"
                        className="animate-spin text-[21px]"
                      />
                    </span>
                  </td>
                </tr>
              ) : null}

              {/* {(() => {
                if (!isLoading && !table?.getRowModel().rows.length)
                  return null;

                const emptyRows = 10 - (table?.getRowModel().rows.length ?? 0);

                return (
                  <>
                    {Array(emptyRows)
                      .fill(" ")
                      .map((_, idx) => (
                        <tr className="h-20 w-full bg-background" key={idx}>
                          <td></td>
                        </tr>
                      ))}
                  </>
                );
              })()} */}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button className="flex h-9 items-center gap-2 whitespace-nowrap border border-foreground/10 bg-background px-3 text-foreground/75">
                10
                <Icon name="ArrowDownS" className="text-[18px]" />
              </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="start"
                className="z-[100] mt-1 min-w-[var(--radix-dropdown-menu-trigger-width)] bg-background py-2 shadow-[0px_0px_30px_0px] shadow-foreground/20"
              >
                {[10, 15, 20, 25].map((n) => {
                  return (
                    <DropdownMenu.Item
                      className={cn(
                        "flex cursor-pointer items-center gap-3 p-2 px-4 text-sm capitalize outline-none hover:bg-foreground/5",
                      )}
                      key={n}
                    >
                      {n}
                    </DropdownMenu.Item>
                  );
                })}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                if (table.getCanPreviousPage()) table.previousPage();
              }}
              className={cn(
                "flex h-9 w-9 items-center justify-center text-foreground/75 ",
                !table.getCanPreviousPage()
                  ? "cursor-not-allowed opacity-75"
                  : "hover:text-foreground",
              )}
            >
              <Icon name="ArrowLeftS" className="text-[21px]" />
            </button>

            {(() => {
              let count = 0;
              let lastOneAdded = false;

              return Array.from({ length: table.getPageCount() })
                .fill("")
                .map((_, idx) => {
                  const pageIndex = table.getState().pagination.pageIndex;

                  if (
                    idx === pageIndex ||
                    idx === pageIndex - 1 ||
                    idx === pageIndex + 1
                  ) {
                    count += 1;

                    if (idx === pageIndex + 1) lastOneAdded = true;

                    return (
                      <Button
                        key={idx}
                        onClick={() => {
                          table.setPageIndex(idx);
                        }}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center p-0 text-sm ",
                          idx === pageIndex
                            ? "bg-foreground text-background"
                            : "hover:bg-foreground/10",
                        )}
                      >
                        {idx + 1}
                      </Button>
                    );
                  }

                  if (
                    pageIndex + 1 === table.getPageCount() &&
                    idx === pageIndex - 2
                  ) {
                    count += 1;
                    return (
                      <Button
                        key={idx}
                        onClick={() => {
                          table.setPageIndex(idx);
                        }}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center p-0 text-sm ",
                          idx === pageIndex
                            ? "bg-foreground text-background"
                            : "hover:bg-foreground/10",
                        )}
                      >
                        {idx + 1}
                      </Button>
                    );
                  }

                  if (count < 3 && lastOneAdded) {
                    count += 1;
                    return (
                      <Button
                        key={idx}
                        onClick={() => {
                          table.setPageIndex(idx);
                        }}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center p-0 text-sm ",
                          idx === pageIndex
                            ? "bg-foreground text-background"
                            : "hover:bg-foreground/10",
                        )}
                      >
                        {idx + 1}
                      </Button>
                    );
                  }

                  return <></>;
                });
            })()}

            <button
              onClick={() => {
                if (table.getCanNextPage()) table.nextPage();
                console.log(table.getState().pagination.pageIndex);
              }}
              className={cn(
                "flex h-9 w-9 items-center justify-center text-foreground/75 ",
                !table.getCanNextPage()
                  ? "cursor-not-allowed opacity-75"
                  : "hover:text-foreground",
              )}
            >
              <Icon name="ArrowRightS" className="text-[21px]" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
