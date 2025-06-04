import { createFileRoute } from "@tanstack/react-router";
import { Project } from "@/features/project/Project";

export const Route = createFileRoute("/project")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Project />;
}
