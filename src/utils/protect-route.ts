import { redirect } from "@tanstack/react-router";
import { getSession } from "@/features/auth/functions/auth.functions";

export const protectRoute = async (redirectTo: string) => {
	const session = await getSession();

	if (!session) {
		throw redirect({ to: redirectTo });
	}

	return { user: session.user };
};

export const multipleProtectRoute = async (
	redirectTo: string,
	locationHref: string,
) => {
	const session = await getSession();

	if (!session) {
		throw redirect({ to: redirectTo, search: { redirect: locationHref } });
	}

	return { user: session.user };
};
