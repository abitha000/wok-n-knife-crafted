import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
  "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM",
];

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedPhone || !date || !time || !guests) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    if (trimmedName.length > 100) {
      toast({ title: "Name is too long", variant: "destructive" });
      return;
    }

    if (!/^\+?[\d\s-]{7,15}$/.test(trimmedPhone)) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return;
    }

    const message = `Hi WOK N KNIFE! I'd like to book a table.\n\nName: ${trimmedName}\nPhone: ${trimmedPhone}\nDate: ${format(date, "PPP")}\nTime: ${time}\nGuests: ${guests}`;

    const url = `https://wa.me/918903917600?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    toast({ title: "Redirecting to WhatsApp…", description: "Complete your booking there." });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="book-name" className="text-warm-dark-foreground/70 font-body text-sm">
            Name
          </Label>
          <Input
            id="book-name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            className="bg-warm-dark-foreground/5 border-warm-dark-foreground/15 text-warm-dark-foreground placeholder:text-warm-dark-foreground/30 font-body"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="book-phone" className="text-warm-dark-foreground/70 font-body text-sm">
            Phone
          </Label>
          <Input
            id="book-phone"
            placeholder="+91 XXXXX XXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={15}
            className="bg-warm-dark-foreground/5 border-warm-dark-foreground/15 text-warm-dark-foreground placeholder:text-warm-dark-foreground/30 font-body"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {/* Date */}
        <div className="space-y-2">
          <Label className="text-warm-dark-foreground/70 font-body text-sm">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-body bg-warm-dark-foreground/5 border-warm-dark-foreground/15 text-warm-dark-foreground hover:bg-warm-dark-foreground/10",
                  !date && "text-warm-dark-foreground/30"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PP") : "Pick date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Time */}
        <div className="space-y-2">
          <Label className="text-warm-dark-foreground/70 font-body text-sm">Time</Label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="bg-warm-dark-foreground/5 border-warm-dark-foreground/15 text-warm-dark-foreground font-body">
              <Clock className="mr-2 h-4 w-4 text-warm-dark-foreground/40" />
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <Label className="text-warm-dark-foreground/70 font-body text-sm">Guests</Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="bg-warm-dark-foreground/5 border-warm-dark-foreground/15 text-warm-dark-foreground font-body">
              <Users className="mr-2 h-4 w-4 text-warm-dark-foreground/40" />
              <SelectValue placeholder="Guests" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-chili transition-colors py-6"
      >
        Book via WhatsApp
      </Button>
    </form>
  );
}
