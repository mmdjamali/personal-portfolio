import Icon from "@/components/icon";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Spinner = ({ className }: Props) => {
  return (
    <Icon
      name="Spinner"
      className={cn("ease-emil animate-spin text-[21px]", className)}
    />
  );
};

export default Spinner;
