import { useState } from "react";
import { Upload, Maximize2, ZoomIn, ZoomOut, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ImageCanvas() {
  const [hasImage, setHasImage] = useState(false);
  const [zoom, setZoom] = useState(100);

  const handleImageUpload = () => {
    // Placeholder for image upload functionality
    setHasImage(true);
  };

  return (
    <div className="flex-1 h-full flex flex-col bg-background">
      {/* Canvas Header */}
      <div className="h-14 border-b border-border flex items-center justify-between px-6 bg-card">
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-medium text-foreground">Canvas</h2>
          {hasImage && (
            <div className="text-xs text-muted-foreground">
              1920 × 1080px • {zoom}%
            </div>
          )}
        </div>
        
        {hasImage && (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setZoom(Math.max(25, zoom - 25))}>
              <ZoomOut className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setZoom(Math.min(400, zoom + 25))}>
              <ZoomIn className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="sm">
              <RotateCw className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="sm">
              <Maximize2 className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>

      {/* Canvas Area */}
      <div className="flex-1 overflow-hidden bg-gradient-to-br from-muted/20 to-muted/5">
        {!hasImage ? (
          <div className="h-full flex items-center justify-center">
            <Card className="p-12 text-center border-dashed border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <Upload className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">Upload an Image</h3>
                  <p className="text-muted-foreground max-w-md">
                    Drag and drop your image here, or click the button below to start processing
                  </p>
                </div>
                <Button 
                  className="bg-gradient-primary hover:shadow-glow transition-smooth"
                  onClick={handleImageUpload}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Image
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center p-6">
            <div 
              className="bg-white rounded-lg shadow-strong border border-border"
              style={{ 
                width: `${Math.min(600, (600 * zoom) / 100)}px`,
                height: `${Math.min(400, (400 * zoom) / 100)}px`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-gray-600 text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <div className="text-sm">Sample Image</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}