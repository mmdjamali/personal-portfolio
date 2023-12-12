import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Button from "../ui/button";
import Icon from "../icon";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useCustomFetch } from "@/hooks/use-custom-fetch";
import { ApiResponse } from "@/types/api";
import toast from "../ui/toast";
import { useRouter } from "next/navigation";

type Props = {
  entity: { id?: string };
  onDelete: () => void;
};

const Actions = ({ onDelete, entity }: Props) => {
  const router = useRouter();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="mx-auto flex h-9 w-9 items-center justify-center bg-foreground/5 p-0 text-sm text-foreground transition-colors duration-300 hover:bg-foreground/20">
          <Icon name="MoreLine" className="text-[21px]" />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="z-[100] mt-1 min-w-[200px] bg-background py-2 shadow-[0px_0px_30px_0px] shadow-foreground/20"
        >
          <DeleteButton entity={entity} onDelete={onDelete} />

          <Button
            onClick={() => {
              router.push("/dashboard/projects/edit/" + entity.id);
            }}
            className={cn(
              "flex w-full cursor-pointer items-center justify-start gap-3 p-2 px-4 text-sm capitalize outline-none hover:bg-foreground/5",
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
  entity?: { id?: string };
};

const DeleteButton = ({ onDelete, entity }: DeleteButtonProps) => {
  const [loading, setLoading] = useState(false);
  const fetch = useCustomFetch();

  const handleDelete = async () => {
    if (!entity?.id) return;

    setLoading(true);

    try {
      const res: ApiResponse<null> = await fetch("/api/project/" + entity.id, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res?.json());

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
        "flex w-full cursor-pointer items-center justify-start gap-3 p-2 px-4 text-sm capitalize text-error outline-none hover:bg-error/10",
      )}
    >
      <Icon name="DeleteBin" className="text-[18px] text-error" />
      Delete
    </Button>
  );
};
