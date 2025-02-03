import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import LoginDetails from "./LoginDetails";

const LoginSheet = ({ loginSignUpMenuIsOpen, setLoginSignUpMenuIsOpen }) => {
  return (
    <Sheet open={loginSignUpMenuIsOpen} onOpenChange={setLoginSignUpMenuIsOpen}>
      <SheetContent className="bg-[#efefef]">
        <SheetHeader>
          <SheetTitle className="text-2xl">Log in / Sign up</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col space-y-3 mt-8 max-h-full overflow-y-auto">
          <LoginDetails setLoginSignUpMenuIsOpen={setLoginSignUpMenuIsOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LoginSheet;
