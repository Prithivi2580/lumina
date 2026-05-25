import { createFileRoute, Outlet } from "@tanstack/react-router";
import { multipleProtectRoute } from "@/utils/protect-route";

export const Route = createFileRoute("/_dashboard")({
	beforeLoad: async ({ location }) =>
		await multipleProtectRoute("/login", location.href),
	component: () => <Outlet />,
});
