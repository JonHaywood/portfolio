import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/features/about/About";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <About />;
}
