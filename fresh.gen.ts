// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_500 from "./routes/_500.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $account_index from "./routes/account/index.tsx";
import * as $account_manage from "./routes/account/manage.ts";
import * as $account_upgrade from "./routes/account/upgrade.ts";
import * as $api_items_id_ from "./routes/api/items/[id].ts";
import * as $api_items_index from "./routes/api/items/index.ts";
import * as $api_me_votes from "./routes/api/me/votes.ts";
import * as $api_stripe_webhooks from "./routes/api/stripe-webhooks.ts";
import * as $api_users_login_index from "./routes/api/users/[login]/index.ts";
import * as $api_users_login_items from "./routes/api/users/[login]/items.ts";
import * as $api_users_index from "./routes/api/users/index.ts";
import * as $api_vote from "./routes/api/vote.ts";
import * as $blog_slug_ from "./routes/blog/[slug].tsx";
import * as $blog_index from "./routes/blog/index.tsx";
import * as $dashboard_index from "./routes/dashboard/index.tsx";
import * as $dashboard_stats from "./routes/dashboard/stats.tsx";
import * as $dashboard_users from "./routes/dashboard/users.tsx";
import * as $diary_date_ from "./routes/diary/[date].tsx";
import * as $feed from "./routes/feed.ts";
import * as $index from "./routes/index.tsx";
import * as $new from "./routes/new.tsx";
import * as $pricing from "./routes/pricing.tsx";
import * as $submit from "./routes/submit.tsx";
import * as $users_login_ from "./routes/users/[login].tsx";
import * as $welcome from "./routes/welcome.tsx";
import * as $Chart from "./islands/Chart.tsx";
import * as $ItemsList from "./islands/ItemsList.tsx";
import * as $UsersTable from "./islands/UsersTable.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_500.tsx": $_500,
    "./routes/_app.tsx": $_app,
    "./routes/account/index.tsx": $account_index,
    "./routes/account/manage.ts": $account_manage,
    "./routes/account/upgrade.ts": $account_upgrade,
    "./routes/api/items/[id].ts": $api_items_id_,
    "./routes/api/items/index.ts": $api_items_index,
    "./routes/api/me/votes.ts": $api_me_votes,
    "./routes/api/stripe-webhooks.ts": $api_stripe_webhooks,
    "./routes/api/users/[login]/index.ts": $api_users_login_index,
    "./routes/api/users/[login]/items.ts": $api_users_login_items,
    "./routes/api/users/index.ts": $api_users_index,
    "./routes/api/vote.ts": $api_vote,
    "./routes/blog/[slug].tsx": $blog_slug_,
    "./routes/blog/index.tsx": $blog_index,
    "./routes/dashboard/index.tsx": $dashboard_index,
    "./routes/dashboard/stats.tsx": $dashboard_stats,
    "./routes/dashboard/users.tsx": $dashboard_users,
    "./routes/diary/[date].tsx": $diary_date_,
    "./routes/feed.ts": $feed,
    "./routes/index.tsx": $index,
    "./routes/new.tsx": $new,
    "./routes/pricing.tsx": $pricing,
    "./routes/submit.tsx": $submit,
    "./routes/users/[login].tsx": $users_login_,
    "./routes/welcome.tsx": $welcome,
  },
  islands: {
    "./islands/Chart.tsx": $Chart,
    "./islands/ItemsList.tsx": $ItemsList,
    "./islands/UsersTable.tsx": $UsersTable,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
