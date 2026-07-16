import React from "react";
import { Timeline } from "@/components/ui/timeline";
import experiences from "@/data/experiences.json";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function TimelineDemo() {
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Present";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  const domainLabels: Record<string, string> = {
    web: "Web Development",
    app: "App Development",
    software: "Software Engineering",
    security: "Cybersecurity",
  };

  const domainColors: Record<string, string> = {
    web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    app: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    software: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    security: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  };

  // Sort experiences: current first (endDate is null), then by endDate descending
  const sortedExperiences = [...experiences].sort((a, b) => {
    if (!a.endDate && b.endDate) return -1;
    if (a.endDate && !b.endDate) return 1;
    if (!a.endDate && !b.endDate) {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    }
    return new Date(b.endDate!).getTime() - new Date(a.endDate!).getTime();
  });

  const data = sortedExperiences.map((exp) => {
    const period = `${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`;
    
    const startYear = new Date(exp.startDate).getFullYear();
    const endYear = exp.endDate ? new Date(exp.endDate).getFullYear() : "Present";
    const title = startYear === endYear ? `${startYear}` : `${startYear} - ${endYear}`;

    return {
      title,
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className={domainColors[exp.domain] || "bg-primary/10 text-primary"}>
                {domainLabels[exp.domain] || exp.domain}
              </Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {period}
              </span>
            </div>
            
            <h4 className="text-xl md:text-2xl font-bold text-foreground flex flex-wrap items-center gap-2">
              <Briefcase className="w-5 h-5 text-muted-foreground" />
              <span>{exp.title}</span>
              <span className="text-muted-foreground font-normal text-base md:text-lg">at {exp.company}</span>
            </h4>
          </div>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {exp.description}
          </p>

          {exp.highlights && exp.highlights.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-border">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Contributions</h5>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    };
  });

  return (
    <div className="relative w-full overflow-clip">
      <Timeline 
        data={data} 
        title="Professional Experience"
        description="A timeline of my professional journey, highlighting key achievements and skills gained across different technology domains."
      />
    </div>
  );
}
