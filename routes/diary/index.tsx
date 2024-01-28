// Copyright 2023-2024 the Deno authors. All rights reserved. MIT license.
import type { State } from "@/plugins/session.ts";
import { getUser, collectValues, listDailyItemsByUser } from "@/utils/db.ts";
import IconBrandGithub from "tabler_icons_tsx/brand-github.tsx";
import Head from "@/components/Head.tsx";
import GitHubAvatarImg from "@/components/GitHubAvatarImg.tsx";
import ItemsList from "@/islands/ItemsList.tsx";
import { defineRoute } from "$fresh/server.ts";
import { PremiumBadge } from "@/components/PremiumBadge.tsx";

interface UserProfileProps {
  login: string;
  isSubscribed: boolean;
}

function UserProfile(props: UserProfileProps) {
  return (
    <div class="flex flex-col items-center w-[16rem]">
      <GitHubAvatarImg login={props.login} size={200} />
      <div class="flex gap-x-2 px-4 mt-4 items-center">
        <div class="font-semibold text-xl">
          {props.login}
        </div>
        {props.isSubscribed && <PremiumBadge class="w-6 h-6 inline" />}
        <a
          href={`https://github.com/${props.login}`}
          aria-label={`${props.login}'s GitHub profile`}
          class="link-styles"
          target="_blank"
        >
          <IconBrandGithub class="w-6" />
        </a>
      </div>
    </div>
  );
}

export default defineRoute<State>(
  async (_req, ctx) => {
    const { diary } = ctx.params;

    const user = ctx.state.sessionUser;

    const isSignedIn = user !== undefined;
    const endpoint = `/api/users/${user.login}/items`;

    const entries = await listDailyItemsByUser(user.login);
    const list = await collectValues(entries);
    console.log('list', list)

    return (
      <>
        <Head title={user.login} href={ctx.url.href}>
          <link
            as="fetch"
            crossOrigin="anonymous"
            href={endpoint}
            rel="preload"
          />
          {isSignedIn && (
            <link
              as="fetch"
              crossOrigin="anonymous"
              href="/api/me/votes"
              rel="preload"
            />
          )}
        </Head>
        <main class="flex-1 p-4 flex flex-col md:flex-row gap-8">
          {/* <div class="flex justify-center p-4">
            <UserProfile {...user} />
          </div>
          <ItemsList
            endpoint={endpoint}
            isSignedIn={isSignedIn}
          /> */}
          {list.map((item) => {
            return (
              <div class="flex justify-center">
                <a href={`/diary/${item.date}`}>
                  <p>{item.date}</p>
                </a>
              </div>
            );
          })}
        </main>
      </>
    );
  },
);
