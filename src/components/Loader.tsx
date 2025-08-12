// Update the import path below if the file is located elsewhere
import { Component as LumaSpin } from "../components/ui/luma-spin";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <LumaSpin color="green" />
    </div>
  );
}
