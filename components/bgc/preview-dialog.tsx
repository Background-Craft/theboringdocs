import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface PreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: string;
  format: string;
}

export function PreviewDialog({
  open,
  onOpenChange,
  content,
  format,
}: PreviewDialogProps) {
  const [copied, setCopied] = useState<"text" | "html" | "markdown" | null>(
    null,
  );

  const handleCopy = async (type: "text" | "html" | "markdown") => {
    let textToCopy = content;

    if (type === "text" && format !== "text") {
      textToCopy = content.replace(/[#*`]/g, "").replace(/<[^>]*>/g, "");
    }

    await navigator.clipboard.writeText(textToCopy);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Preview Terms of Service</DialogTitle>
          <DialogDescription>
            Review your terms before copying or making changes
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 mt-4 min-h-0">
          <ScrollArea className="h-full rounded-md border bg-muted/50">
            <div className="p-4">
              <div className="prose prose-sm dark:prose-invert">
                {format === "markdown" ? (
                  <ReactMarkdown>{content}</ReactMarkdown>
                ) : format === "html" ? (
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                  <pre className="whitespace-pre-wrap font-mono text-sm">
                    {content}
                  </pre>
                )}
              </div>
            </div>
          </ScrollArea>
        </div>

        <DialogFooter className="flex items-center gap-2 mt-4">
          <div className="flex-1 flex items-center gap-2">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => handleCopy("text")}>
              {copied === "text" ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              Copy as Text
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => handleCopy("markdown")}>
              {copied === "markdown" ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              Copy as Markdown
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => handleCopy("html")}>
              {copied === "html" ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              Copy as HTML
            </Button>
          </div>
          <Button variant="default" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
