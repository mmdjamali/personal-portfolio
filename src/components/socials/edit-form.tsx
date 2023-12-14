"use client";

import { IconKeyType, SocialsType } from "@/types";
import Icon from "../icon";
import Input from "../ui/input";
import Button from "../ui/button";
import useInputValuePattern from "@/hooks/use-input-value-pattern";
import toast from "../ui/toast";
import { useState } from "react";
import { SocialsEntity } from "@/types/entity";
import { useCustomFetch } from "@/hooks/use-custom-fetch";

type Props = {
  defaultData: Record<SocialsType, SocialsEntity>;
};

const EditSocials = ({ defaultData }: Props) => {
  const fetch = useCustomFetch();

  const [loading, setLoading] = useState(false);

  const [github, registerGithub, githubError, resetGithub] =
    useInputValuePattern({
      defaultValue: defaultData?.Github?.url ?? "",
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
  const [telegram, registerTelegram, telegramError, resetTelegram] =
    useInputValuePattern({
      defaultValue: defaultData?.Telegram?.url ?? "",
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
  const [twitterX, registerTwitterX, twitterXError, resetTwitterX] =
    useInputValuePattern({
      defaultValue: defaultData?.TwitterX?.url ?? "",
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
  const [discord, registerDiscord, discordError, resetDiscord] =
    useInputValuePattern({
      defaultValue: defaultData?.Discord?.url ?? "",
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

  const props = {
    Discord: {
      ...registerDiscord(),
      error: discordError,
    },
    Github: {
      ...registerGithub(),
      error: githubError,
    },
    TwitterX: {
      ...registerTwitterX(),
      error: twitterXError,
    },
    Telegram: {
      ...registerTelegram(),
      error: telegramError,
    },
  };

  const returnPorps = (name: SocialsType) => {
    return {
      ...props[name],
      name: name.toLowerCase(),
    };
  };

  const handleSubmit = async () => {
    if (!github || !telegram || !discord || !twitterX) {
      return toast({
        varinat: "error",
        title: "Please fill all of required fields!",
      });
    }

    if (githubError || discordError || telegramError || twitterXError) {
      return toast({
        varinat: "error",
        title: "Please enter valid values.",
      });
    }

    setLoading(true);
    const body: SocialsEntity[] = [];

    if ((defaultData.Github.url ?? "") !== github)
      body.push({ platform: "Github", url: github });
    if ((defaultData.Discord.url ?? "") !== discord)
      body.push({ platform: "Discord", url: discord });
    if ((defaultData.TwitterX.url ?? "") !== twitterX)
      body.push({ platform: "TwitterX", url: twitterX });
    if ((defaultData.Telegram.url ?? "") !== telegram)
      body.push({ platform: "Telegram", url: telegram });

    if (!body.length)
      return toast({
        title: "Nothing has been changed.",
        varinat: "error",
      });

    const res: { success: boolean } = await fetch("/api/socials", {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ socials: body }),
    }).then((res) => res?.json());

    if (res?.success) {
      toast({
        varinat: "success",
        title: "Success",
        description: "Saved successfully.",
      });
    }

    setLoading(false);
  };

  return (
    <div className="relative grid w-full bg-background p-8">
      <div className="mb-7 grid w-full gap-5 sm:grid-cols-12">
        <div className="hidden items-center justify-end gap-3 sm:col-span-3 sm:flex"></div>

        <div className="sm:col-span-9">
          <h2 className="text-lg font-semibold">Social media links</h2>
        </div>
      </div>

      {(["TwitterX", "Github", "Telegram", "Discord"] as const).map((v) => (
        <div
          key={v}
          className="mb-7 grid w-full gap-1 sm:grid-cols-12 sm:gap-8"
        >
          <div className="mb-auto flex h-10 items-center  gap-3 sm:col-span-3 sm:justify-end">
            <span className="text-sm font-medium">{v}</span>
            <Icon className="text-[21px]" name={v} />
          </div>

          <div className="sm:col-span-9">
            <Input {...returnPorps(v)} />
          </div>
        </div>
      ))}

      <div className="mt-3 grid w-full gap-5 sm:grid-cols-12">
        <div className="hidden items-center justify-end gap-3 sm:col-span-3 sm:flex"></div>

        <div className="w-full sm:col-span-9">
          <Button
            loading={loading}
            onClick={handleSubmit}
            className="w-full bg-foreground text-background sm:w-36"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditSocials;
