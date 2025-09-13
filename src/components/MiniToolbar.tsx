import { Home, Info, Settings, HelpCircle, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const toolbarItems = [
  { icon: Home, label: "Home", action: "home" },
  { icon: Info, label: "About", action: "about" },
  { icon: Zap, label: "Quick Actions", action: "quick" },
  { icon: User, label: "Profile", action: "profile" },
  { icon: Settings, label: "Settings", action: "settings" },
  { icon: HelpCircle, label: "Help", action: "help" },
];

export function MiniToolbar() {
  const handleAction = (action: string) => {
    console.log(`Action triggered: ${action}`);
  };

  return (
    <div className="w-16 h-full bg-sidebar border-l border-sidebar-border flex flex-col items-center py-4">
      {/* Logo/Brand */}
      <div className="mb-6">
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
          <div className="w-3 h-3 bg-primary-foreground rounded-sm"></div>
        </div>
      </div>

      {/* Toolbar Items */}
      <div className="flex-1 flex flex-col gap-2">
        {toolbarItems.map((item) => (
          <Tooltip key={item.action}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-fast"
                onClick={() => handleAction(item.action)}
              >
                <item.icon className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-popover border-border">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* Status Indicator */}
      <div className="mt-auto">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}