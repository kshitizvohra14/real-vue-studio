import { useState } from "react";
import { 
  ImageIcon, 
  Palette, 
  Sliders, 
  Crop, 
  RotateCw, 
  Layers,
  Filter,
  Wand2,
  Upload,
  FolderOpen,
  Save,
  History
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ToolSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tools: { name: string; icon: React.ComponentType<{ className?: string }> }[];
}

const toolSections: ToolSection[] = [
  {
    title: "File Operations",
    icon: FolderOpen,
    tools: [
      { name: "Upload Image", icon: Upload },
      { name: "Open File", icon: FolderOpen },
      { name: "Save Project", icon: Save },
      { name: "History", icon: History },
    ]
  }
];

export function MainSidebar() {
  const [activeSection, setActiveSection] = useState<string | null>("File Operations");
  const [activeTool, setActiveTool] = useState<string | null>(null);

  return (
    <div className="w-full h-full bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <ImageIcon className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-sidebar-foreground">ImagePro</h1>
            <p className="text-sm text-muted-foreground">Real-time Processing</p>
          </div>
        </div>
      </div>

      {/* Tools Navigation */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {toolSections.map((section) => {
            const isActive = activeSection === section.title;
            return (
              <div key={section.title}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start p-3 h-auto text-left transition-smooth ${
                    isActive 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                      : "hover:bg-sidebar-accent/50"
                  }`}
                  onClick={() => setActiveSection(isActive ? null : section.title)}
                >
                  <section.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span className="font-medium">{section.title}</span>
                </Button>
                
                {isActive && (
                  <div className="mt-2 ml-7 space-y-1">
                    {section.tools.map((tool) => (
                      <Button
                        key={tool.name}
                        variant="ghost"
                        size="sm"
                        className={`w-full justify-start p-2 text-sm transition-fast ${
                          activeTool === tool.name
                            ? "bg-primary/20 text-primary-glow border-l-2 border-primary"
                            : "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/30"
                        }`}
                        onClick={() => setActiveTool(tool.name)}
                      >
                        <tool.icon className="w-3 h-3 mr-2" />
                        {tool.name}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* Quick Actions */}
      <div className="p-4 border-t border-sidebar-border bg-gradient-surface">
        <div className="space-y-2">
          <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth">
            <Upload className="w-4 h-4 mr-2" />
            Upload New Image
          </Button>
          <Button variant="outline" className="w-full border-sidebar-border">
            <Wand2 className="w-4 h-4 mr-2" />
            AI Quick Fix
          </Button>
        </div>
      </div>
    </div>
  );
}