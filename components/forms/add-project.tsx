"use client";

import { useState } from "react";
import Icon from "../icon";
import Button from "../ui/button";
import Input from "../ui/input";
import Image from "next/image";

const AddProject = () => {
  const [image, setImage] = useState<string>("");

  return (
    <>
      <div className="relative flex w-full flex-col gap-8">
        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <h2 className="text-lg font-semibold">Thumbnail</h2>

          <label
            htmlFor="thumbnail"
            className="relative mx-auto grid aspect-video w-56 cursor-pointer place-items-center shadow-[0px_0px_30px] shadow-foreground/10 transition-all hover:shadow-foreground/20"
          >
            <button
              onClick={(e) => {
                if (image) {
                  e.stopPropagation();
                  setImage("");
                }
              }}
              className="absolute -right-3.5 -top-3.5 z-[5] inline-grid h-7 w-7 place-items-center bg-background shadow-[0px_0px_30px] shadow-foreground/10"
            >
              <Icon
                name={!image ? "Pencil" : "Close"}
                className="text-[18px]"
              />
            </button>

            {image ? (
              <Image
                className="object-cover"
                alt="thumbnail"
                src={image}
                fill
                unoptimized
              />
            ) : (
              <Icon name="ImageLine" className=" text-[44px]" />
            )}

            <input
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (!file) {
                  console.error("no file");
                  return;
                }

                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);

                fileReader.onload = () => {
                  setImage(fileReader.result?.toString() ?? "");
                };

                fileReader.onerror = () => {
                  console.error("something went wrong");
                };
              }}
              id="thumbnail"
              className="hidden"
              type="file"
              accept="image/jpg,image/jpeg,image/png"
            />
          </label>

          <span className="text-center text-xs text-foreground/60">
            {
              "Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted"
            }
          </span>
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-8">
        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <h2 className="text-lg font-semibold">General</h2>

          <Input
            block
            label="Name"
            description="A name is required and recommended to be unique."
          />

          <Input
            block
            label="Description"
            description="Set a description to the project for it to be more understandable."
          />
        </div>

        <div className="relative flex w-full flex-col gap-5 bg-background p-6">
          <h2 className="text-lg font-semibold">Links</h2>

          <Input
            block
            label="Demo"
            description="Set the link for live demo of this project."
          />

          <Input
            block
            label="Github"
            description="Set the link for github repo of this project."
          />
        </div>

        <div className="flex w-full items-center justify-end">
          <Button className="w-fit bg-foreground text-background">
            Add Project!
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddProject;
