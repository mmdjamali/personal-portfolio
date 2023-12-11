"use client";

import { useState } from "react";
import Icon from "../icon";
import Button from "../ui/button";
import Input from "../ui/input";
import Image from "next/image";
import { cn, turnFileIntoBase64 } from "@/lib/utils";
import SelectBoolean from "@/components/shared/input/select-boolean";
import { useQuery } from "@tanstack/react-query";
import { useCustomFetch } from "@/hooks/use-custom-fetch";
import { ApiResponse } from "@/types/api";
import TechnologySpecificationInput from "./technology-specification-input";
import useInputValuePattern from "@/hooks/use-input-value-pattern";
import { ColorKeys } from "@/constants/colors";
import SelectColor from "@/components/shared/input/select-color";
import toast from "../ui/toast";
import { useRouter } from "next/navigation";
import Spinner from "../ui/spinner";

const AddProject = () => {
  const router = useRouter();

  const fetch = useCustomFetch();
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState<string>("");

  const [bool, setBool] = useState(false);

  const [techs, setTechs] = useState<string[]>([]);

  const [color, setColor] = useState<ColorKeys>("foreground");

  const [name, registerName, nameError] = useInputValuePattern({
    defaultValue: "",
    patterns: [
      {
        message: "Name must be least than 64 characters long.",
        pattern: /^.{0,64}$/,
      },
      {
        message: "Can't leave this field empty!",
        pattern: /./,
      },
    ],
  });

  const [description, registerDescription, descriptionError] =
    useInputValuePattern({
      defaultValue: "",
      patterns: [
        {
          message: "Can't leave this field empty!",
          pattern: /./,
        },
      ],
    });

  const [github, registerGithub, githubError] = useInputValuePattern({
    defaultValue: "",
    patterns: [
      {
        message: "Please enter a valid url!",
        pattern:
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      },
    ],
  });

  const [demo, registerDemo, demoError] = useInputValuePattern({
    defaultValue: "",
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

  const { data, isLoading } = useQuery({
    queryKey: ["showcase", "can-create"],
    queryFn: async () => {
      const res: ApiResponse<boolean> = await fetch(
        "/api/project/showcase/can-create",
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      ).then((res) => res?.json());

      if (!res?.success) return null;

      return res.data;
    },
  });

  const handleSubmit = async () => {
    try {
      if (!image || !name || !demo || !color || !description) {
        return toast({
          varinat: "error",
          title: "Please fill all of required fields!",
        });
      }

      if (demoError || nameError || githubError || descriptionError) {
        return toast({
          varinat: "error",
          title: "Please enter valid values.",
        });
      }

      setLoading(true);

      const res: { success: boolean } = await fetch("/api/project", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          thumbnail: image,
          github: github ? github : undefined,
          live: demo,
          technologies: techs,
          showcase: bool,
          color: color,
        }),
      }).then((res) => res?.json());

      if (res?.success) {
        toast({
          varinat: "success",
          title: "Success",
          description: "Technology added successfully.",
        });
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative flex w-full flex-col gap-4 lg:gap-8">
        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <h2 className="text-lg font-semibold">Thumbnail</h2>

          <label
            htmlFor="thumbnail"
            className="relative mx-auto grid aspect-video w-56 cursor-pointer place-items-center shadow-[0px_0px_30px] shadow-foreground/10 transition-all hover:shadow-foreground/20"
          >
            <button
              onClick={(e) => {
                if (image) {
                  setImage("");
                }
              }}
              className="absolute -right-3.5 -top-3.5 z-[5] inline-grid h-7 w-7 place-items-center bg-background shadow-[0px_0px_30px] shadow-foreground/10"
            >
              <Icon
                name={!image ? "Pencil" : "Close"}
                className="pointer-events-none text-[18px]"
              />
            </button>

            {image ? (
              <Image
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="z-[1] object-cover"
                alt="thumbnail"
                src={image}
                fill
                unoptimized
              />
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

                setImage(await turnFileIntoBase64(file));

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
              accept="image/jpg,image/jpeg,image/png"
            />
          </label>

          <span className="text-center text-sm text-foreground/60">
            {
              "Set the project thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted"
            }
          </span>
        </div>

        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-lg font-semibold">Show case</h2>

            <span
              className={cn(
                "inline-flex h-4 w-4",
                bool ? "bg-green-500" : "bg-red-500",
              )}
            />
          </div>

          <div className="relative flex flex-col gap-1">
            {isLoading ? (
              <div className="relative grid h-10 w-full place-items-center border border-foreground/10">
                <Spinner />
              </div>
            ) : (
              <SelectBoolean
                disabled={!data}
                value={bool}
                onChange={(v) => setBool(v)}
              />
            )}

            <span className=" text-sm text-foreground/50">
              Set if this project should be displayed in showcased projects.
            </span>
          </div>
        </div>

        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-lg font-semibold">Technologies</h2>
          </div>

          <div className="relative flex flex-col gap-1">
            <TechnologySpecificationInput
              value={techs}
              onChange={(v) =>
                setTechs((prev) => {
                  let clone = structuredClone(prev);

                  const idx = clone.indexOf(v);

                  if (idx > -1) {
                    clone.splice(idx, 1);
                  } else {
                    clone.push(v);
                  }

                  return clone;
                })
              }
            />

            <span className=" text-sm text-foreground/50">
              Set if this project should be displayed in showcased projects.
            </span>
          </div>
        </div>

        <div className="relative flex w-full flex-col bg-background p-6">
          <h2 className="mb-5 text-lg font-semibold">Color</h2>

          <div className="relative">
            <SelectColor value={color} onChange={(v) => setColor(v)} />
          </div>

          <span className="mt-1 text-sm text-foreground/50">
            Set a color for this project.
          </span>
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-4 lg:gap-8">
        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <h2 className="text-lg font-semibold">General</h2>

          <Input
            {...registerName()}
            error={nameError}
            required
            block
            label="Name"
            description="A name is required and recommended to be unique."
          />

          <Input
            {...registerDescription()}
            error={descriptionError}
            required
            block
            label="Description"
            description="Set a description to the project for it to be more understandable."
          />
        </div>

        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <h2 className="text-lg font-semibold">Links</h2>

          <Input
            {...registerDemo()}
            error={demoError}
            required
            block
            label="Demo"
            description="Set the link for live demo of this project."
          />

          <Input
            error={githubError}
            {...registerGithub()}
            block
            label="Github"
            description="Set the link for github repo of this project."
          />
        </div>

        <div className="flex w-full items-center justify-end">
          <Button
            loading={loading}
            onClick={handleSubmit}
            className="w-full bg-foreground text-background"
          >
            Add Project!
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddProject;
