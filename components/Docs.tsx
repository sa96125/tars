"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

function Docs() {
  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 p-1 rounded-xl backdrop-blur-xl bg-black/30 space-x-1 shadow-2xl z-50 flex">
      <Dialog>
        <DialogTrigger>
          <img src="/Terminal.svg" className="w-12 h-12" />
        </DialogTrigger>
        <DialogContent className="gap-10">
          <DialogHeader className="gap-4">
            <DialogTitle className=" flex justify-center">
              <img src="/Terminal.svg" className="w-20 h-20" />
            </DialogTitle>
            <DialogDescription className=" text-center flex flex-col items-center gap-2">
              <p className=" font-extrabold text-lg text-zinc-600">
                응용 프로그램을 열 수 있는 권한이 없습니다.
              </p>
              <p className=" text-md">
                지원을 받으려면 컴퓨터 또는 관리자에게 문의하십시오.
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="  w-full">
            <DialogClose asChild>
              <Button
                type="button"
                className="w-full text-lg rounded-lg bg-zinc-300 text-zinc-800 hover:text-white hover:bg-blue-500 "
              >
                확인
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <img src="/Safari.svg" className="w-12 h-12" />
      <img src="/Notes.svg" className="w-12 h-12" />
      <img src="/Photos.svg" className="w-12 h-12" />
      <img src="/Calendar.svg" className="w-12 h-12" />
      <img src="/Reminders.svg" className="w-12 h-12" />
      <img src="/Launchpad.svg" className="w-12 h-12" />
      <img src="/Settings.svg" className="w-12 h-12" />
    </div>
  );
}

export default Docs;
