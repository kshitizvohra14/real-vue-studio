import { TooltipProvider } from "@/components/ui/tooltip";
import { MainSidebar } from "./MainSidebar";
import { MiniToolbar } from "./MiniToolbar";
import { ImageCanvas } from "./ImageCanvas";

export function ImageProcessingLayout() {
  return (
    <TooltipProvider>
      <div className="h-screen w-screen flex bg-background overflow-hidden">
        {/* Main Sidebar - 1/3 of screen */}
        <div className="w-1/3 min-w-80 h-full">
          <MainSidebar />
        </div>

        {/* Center Canvas Area */}
        <ImageCanvas />

        {/* Mini Right Toolbar */}
        <MiniToolbar />
      </div>
    </TooltipProvider>
  );
}