"use client";

import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, Send } from "lucide-react";

export default function AIChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <Card className="w-full max-w-2xl mx-auto border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="w-6 h-6" />
          Ask Ali's AI
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-[300px] overflow-y-auto border rounded-md p-4 space-y-4 bg-muted/50">
          {messages.length === 0 && (
            <p className="text-center text-muted-foreground pt-10">
              Start a conversation to see AI in action.
            </p>
          )}
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${
                m.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`p-2 rounded-full ${
                  m.role === "user" ? "bg-primary" : "bg-secondary"
                }`}
              >
                {m.role === "user" ? (
                  <User className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <Bot className="w-4 h-4 text-secondary-foreground" />
                )}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-background border rounded-tl-none"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-secondary">
                <Bot className="w-4 h-4 text-secondary-foreground animate-pulse" />
              </div>
              <div className="max-w-[80%] p-3 rounded-2xl bg-background border rounded-tl-none">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce"></span>
                </span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            placeholder="Ask anything..."
            onChange={handleInputChange}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

