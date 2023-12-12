"use client";

import Icon from "../icon";
import Button from "../ui/button";
import Input from "../ui/input";
import Image from "next/image";
import { cn, turnFileIntoBase64 } from "@/lib/utils";
import { useState } from "react";
import useInputValuePattern from "@/hooks/use-input-value-pattern";
import SelectBoolean from "@/components/shared/input/select-boolean";
import toast from "../ui/toast";
import { useCustomFetch } from "@/hooks/use-custom-fetch";
import SelectColor from "@/components/shared/input/select-color";
import { ColorKeys } from "@/constants/colors";
import SelectDate, { DateDataType } from "./select-date";
import { TechnologyEntity } from "@/types/entity";
import { date } from "zod";

type Props = {
  defaultData: TechnologyEntity;
};

const EditTechnology = ({ defaultData }: Props) => {
  const fetch = useCustomFetch();

  const [loading, setLoading] = useState(false);

  const [icon, setIcon] = useState<string>(defaultData?.icon ?? "");

  const [name, registerName, nameError, resetName] = useInputValuePattern({
    defaultValue: defaultData?.name ?? "",
    patterns: [
      {
        message: "Can't leave this field empty!",
        pattern: /./,
      },
    ],
  });

  const [url, registerUrl, urlError, resetUrl] = useInputValuePattern({
    defaultValue: defaultData.url ?? "",
    patterns: [
      {
        message: "Can't leave this field empty!",
        pattern: /./,
      },
      {
        message: "Please enter a valid url!",
        pattern:
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      },
    ],
  });

  const [usedOften, setUsedOften] = useState(defaultData?.used_often ?? false);
  const [color, setColor] = useState<ColorKeys>(
    defaultData?.color ?? "foreground",
  );

  const [date, setDate] = useState<DateDataType>(
    defaultData?.started_using_at
      ? (() => {
          const d = new Date(defaultData.started_using_at);

          return {
            year: d.getFullYear(),
            month: d.getMonth(),
          };
        })()
      : {
          month: null,
          year: null,
        },
  );

  const handleSubmit = async () => {
    if (
      !icon ||
      !name ||
      !url ||
      date.year === null ||
      date.month === null ||
      !color
    ) {
      return toast({
        varinat: "error",
        title: "Please fill all of required fields!",
      });
    }

    if (urlError || nameError) {
      return toast({
        varinat: "error",
        title: "Please enter valid values.",
      });
    }

    setLoading(true);
    const body: TechnologyEntity = {} as TechnologyEntity;

    body.id = defaultData.id;
    if ((defaultData.name ?? "") !== name) body.name = name;
    if (defaultData.color !== color) body.color = color;
    if ((defaultData.icon ?? "") !== icon) body.icon = icon;
    if ((defaultData.url ?? "") !== url) body.url = url;
    if ((defaultData.used_often ?? false) !== usedOften)
      body.used_often = usedOften;
    if (
      !isDateSame(
        new Date(defaultData.started_using_at ?? "").toISOString(),
        new Date(date.year, date.month, 15).toISOString(),
      )
    )
      body.started_using_at = new Date(date.year, date.month, 15).toISOString();

    const res: { success: boolean } = await fetch("/api/technology", {
      method: "PATCH",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res?.json());

    if (res?.success) {
      toast({
        varinat: "success",
        title: "Success",
        description: "Technology added successfully.",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <div className="relative flex w-full flex-col gap-4 lg:gap-8">
        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <h2 className="text-lg font-semibold">Icon</h2>

          <label
            htmlFor="thumbnail"
            className="relative mx-auto grid aspect-square w-40 cursor-pointer place-items-center p-5 shadow-[0px_0px_30px] shadow-foreground/10 transition-all hover:shadow-foreground/20"
          >
            <button
              onClick={(e) => {
                if (icon) {
                  setIcon("");
                }
              }}
              className="absolute -right-3.5 -top-3.5 z-[5] inline-grid h-7 w-7 place-items-center bg-background shadow-[0px_0px_30px] shadow-foreground/10"
            >
              <Icon
                name={!icon ? "Pencil" : "Close"}
                className="pointer-events-none text-[18px]"
              />
            </button>

            {icon ? (
              <div className="relative h-full w-full">
                <Image
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="z-[1] object-cover"
                  alt="thumbnail"
                  src={icon}
                  fill
                  unoptimized
                />
              </div>
            ) : (
              <Icon name="ImageLine" className=" text-[44px]" />
            )}

            <input
              onChange={async (e) => {
                const file = e.target.files?.[0];

                if (!file) {
                  console.error("no file");
                  return;
                }

                setIcon(await turnFileIntoBase64(file));

                // const data = new FormData();
                // data.append("file", file);

                // await fetch("/api/v1/file-upload", {
                //   method: "POST",
                //   body: data,
                // });
              }}
              id="thumbnail"
              className="hidden"
              type="file"
              accept="image/svg"
            />
          </label>

          <span className="text-center text-sm text-foreground/60">
            {"Set the technology icon. Only *.svg image files are accepted"}
          </span>
        </div>

        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-lg font-semibold">Used often</h2>

            <span
              className={cn(
                "inline-flex h-4 w-4",
                usedOften ? "bg-green-500" : "bg-red-500",
              )}
            />
          </div>

          <div className="relative flex flex-col gap-1">
            <SelectBoolean
              value={usedOften}
              onChange={(v) => setUsedOften(v)}
            />
            <span className=" text-sm text-foreground/50">
              Set if this project should be displayed in often used
              technologies.
            </span>
          </div>
        </div>

        <div className="relative flex w-full flex-col bg-background p-6">
          <h2 className="mb-5 text-lg font-semibold">Color</h2>

          <div className="relative">
            <SelectColor value={color} onChange={(v) => setColor(v)} />
          </div>

          <span className="mt-1 text-sm text-foreground/50">
            Set a color for this technology if you want to display it as
            recently used.
          </span>
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-4 lg:gap-8">
        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <h2 className="text-lg font-semibold">General</h2>

          <Input
            required
            {...registerName()}
            error={nameError}
            block
            label="Name"
            description="Set the name of the techonology."
          />

          <div className="relative flex w-full flex-col gap-1">
            <span className="text-sm font-medium text-foreground">
              Started using at <span className="text-sm text-error">*</span>
            </span>

            <SelectDate value={date} onChange={(v) => setDate(v)} />

            <span className="text-sm text-foreground/60">
              Set when did you started using it.
            </span>
          </div>
        </div>

        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <h2 className="text-lg font-semibold">Links</h2>

          <Input
            {...registerUrl()}
            error={urlError}
            block
            required
            label="Website"
            description="Set the link for official website of this technology."
          />
        </div>

        <div className="flex w-full items-center justify-end">
          <Button
            onClick={handleSubmit}
            loading={loading}
            className="flex w-full items-center justify-center bg-foreground text-background"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditTechnology;

const isDateSame = (dateString1: string, dateString2: string) => {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);

  return (
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};
