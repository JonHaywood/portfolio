import { createFileRoute } from "@tanstack/react-router";
import { Resume } from "@/features/resume/Resume";

export const Route = createFileRoute("/resume")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Resume />;
}
