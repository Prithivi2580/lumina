import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(web)")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
