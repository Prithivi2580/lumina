import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_web/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
