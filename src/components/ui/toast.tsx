import { cn } from "@/lib/utils";
import { toast as OGtoast } from "sonner";
import Icon from "../icon";
import { IconKeyType } from "@/types";

type ToastProps = {
  varinat?: "success" | "error" | "normal";
  title: string;
  description?: string;
  className?: string;
};

const toast = ({
  varinat = "normal",
  title,
  description,
  className,
}: ToastProps) => {
  return OGtoast.custom((t) => {
    return (
      <div
        className={cn(
          "relative !z-[9999] !flex w-full !flex-row !items-start gap-4 bg-background p-6 py-4 shadow-[0px_0px_30px_0px] shadow-foreground/10 sm:w-[350px]",
          varinat === "error" ? "bg-error" : "",
          varinat === "success" ? "bg-success" : "",
          className,
        )}
      >
        {["success", "error"].includes(varinat) ? (
          <Icon
            name={toastIcons[varinat]}
            className={cn(
              " inline-grid aspect-square shrink-0 place-items-center text-[21px] ",
            )}
          />
        ) : null}

        <div className="flex w-full flex-col text-start">
          <h4 className="text-sm font-semibold">{title}</h4>
          {description ? (
            <p className="text-sm text-opacity-75">{description}</p>
          ) : null}
        </div>

        <button
          className="pointer-events-auto relative z-[9999] text-sm"
          onMouseUp={() => {
            OGtoast.dismiss(t);
          }}
        >
          <Icon
            name="Close"
            className="aspect-square place-items-center text-[21px] "
          />
        </button>
      </div>
    );
  });
};

export default toast;

const toastIcons: Record<string, IconKeyType> = {
  success: "CheckboxCircle",
  error: "ErrorWarning",
};
