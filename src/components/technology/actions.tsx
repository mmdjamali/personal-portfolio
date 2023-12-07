import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Button from "../ui/button";
import Icon from "../icon";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useCustomFetch } from "@/hooks/use-custom-fetch";
import { TechnologyEntity } from "@/types/entity";
import { ApiResponse } from "@/types/api";
import toast from "../ui/toast";

type Props = {
  technology: TechnologyEntity;
  onDelete: () => void;
};

const Actions = ({ onDelete, technology }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="flex h-9 items-center bg-foreground/5 px-4 text-xs text-foreground transition-colors duration-300 hover:bg-foreground/20">
          Actions
          <Icon name="ArrowDownS" className="text-[16px]" />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="z-[100] mt-1 bg-background py-2 shadow-[0px_0px_30px_0px] shadow-foreground/20"
        >
          <DeleteButton technology={technology} onDelete={onDelete} />

          <Button
            className={cn(
              "flex w-full cursor-pointer items-center gap-3 p-2 px-4 text-sm capitalize outline-none hover:bg-foreground/5",
            )}
          >
            <Icon name="Pencil" className="text-[18px]" />
            Edit
          </Button>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Actions;

type DeleteButtonProps = {
  onDelete?: () => void;
  technology?: TechnologyEntity;
};

const DeleteButton = ({ onDelete, technology }: DeleteButtonProps) => {
  const [loading, setLoading] = useState(false);
  const fetch = useCustomFetch();

  const handleDelete = async () => {
    if (!technology?.id) return;

    setLoading(true);

    try {
      const res: ApiResponse<null> = await fetch(
        "/api/technology/" + technology.id,
        {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        },
      ).then((res) => res?.json());

      if (!res?.success) {
        setLoading(false);
        return;
      }

      setLoading(false);

      onDelete?.();
    } catch (err) {
      setLoading(false);
      toast({
        varinat: "error",
        title: "Error",
      });
    }
  };

  return (
    <Button
      onClick={handleDelete}
      loading={loading}
      className={cn(
        "flex w-full cursor-pointer items-center gap-3 p-2 px-4 text-sm capitalize text-error outline-none hover:bg-error/10",
      )}
    >
      {!loading ? (
        <Icon name="DeleteBin" className="text-[18px] text-error" />
      ) : null}
      Delete
    </Button>
  );
};
