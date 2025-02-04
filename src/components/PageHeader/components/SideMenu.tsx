import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SideMenu({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>{children}</SheetContent>
    </Sheet>
  );
}
