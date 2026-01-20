import type { AuthedUser } from "$lib/types/AuthedUser";
import axios from "axios";
import type { LayoutLoad } from "./$types";
import { env } from "$env/dynamic/public";
import { appendURL } from "$lib/utils/url";

export const load: LayoutLoad = async () => {
  let userData: AuthedUser = {
    hasAttempted: false,
    authenticated: false,
    username: "Guest",
    userId: -1,
    roles: null,
  };
  userData = {
    hasAttempted: true,
    authenticated: false,
    username: "Guest",
    userId: -1,
    roles: null,
  };

  return userData;
};
