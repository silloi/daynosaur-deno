import Head from "@/components/Head.tsx";
import IconCheckCircle from "tabler_icons_tsx/circle-check.tsx";
import IconCircleX from "tabler_icons_tsx/circle-x.tsx";
import { defineRoute, Handlers } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { createDailyItem, getItemByUserAndDate } from "@/utils/db.ts";
import { redirect } from "@/utils/http.ts";
import {
  assertSignedIn,
  type SignedInState,
  State,
} from "@/plugins/session.ts";
import { ulid } from "std/ulid/mod.ts";
import IconInfo from "tabler_icons_tsx/info-circle.tsx";

const SUBMIT_STYLES =
  "w-full text-white text-center rounded-[7px] transition duration-300 px-4 py-2 block hover:bg-white hover:text-black hover:dark:bg-gray-900 hover:dark:!text-white";

export const handler: Handlers<undefined, SignedInState> = {
  async POST(req, ctx) {
    assertSignedIn(ctx);

    const form = await req.formData();
    const date = form.get("date");
    const content = form.get("content");

    if (
      typeof date !== "string" || date === "" ||
      typeof content !== "string" || content === ""
    ) {
      return redirect("/submit?error");
    }

    await createDailyItem({
      id: ulid(),
      date,
      userLogin: ctx.state.sessionUser.login,
      content,
      score: 0,
    });
    return redirect("/new");
  },
};

export default defineRoute<State>(async (_req, ctx) => {
  const today = new Date().toISOString().slice(0, 10);

  const todayDailyItem = await getItemByUserAndDate(ctx.state.sessionUser.login, today);
  console.log(new Date().toISOString());
  console.log("todayDailyItem", todayDailyItem);

  return (
    <>
      <Head title="Today" href={ctx.url.href}>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main class="flex-1 flex flex-col justify-center mx-auto w-full space-y-16 p-4 max-w-6xl">
        <div>
          <h1 class="text-center heading-styles">
            Today's dialy
          </h1>
          <p class="text-gray-500 text-right">{today}</p>
        </div>
        <div class="flex flex-col md:flex-row gap-8 md:gap-16">
          <form
            class="flex-1 flex flex-col justify-center"
            method="post"
          >
            <input
              id="submit_date"
              type="date"
              name="date"
              value={todayDailyItem?.date ??
                new Date().toISOString().slice(0, 10)}
              hidden
            />
            <textarea
              id="submit_content"
              class="input-styles w-full h-60 mt-2"
              type="text"
              name="content"
              value={todayDailyItem?.content ?? ""}
              required
              disabled={!ctx.state.sessionUser}
            >
            </textarea>
            {ctx.url.searchParams.has("error") && (
              <div class="w-full text-red-500 mt-4">
                <IconInfo class="inline-block" />{" "}
                Title and valid URL are required
              </div>
            )}
            <div class="w-full rounded-lg bg-gradient-to-tr from-secondary to-primary p-px mt-8">
              {!ctx.state.sessionUser
                ? (
                  <a href="/signin" class={SUBMIT_STYLES}>
                    Sign in to submit &#8250;
                  </a>
                )
                : (
                  <button class={SUBMIT_STYLES}>
                    Submit
                  </button>
                )}
            </div>
          </form>
          <div class="flex-1">
            <div
              class="mt-4 markdown-body !bg-transparent !dark:text-white"
              data-color-mode="auto"
              data-light-theme="light"
              data-dark-theme="dark"
              dangerouslySetInnerHTML={{
                __html: render(todayDailyItem?.content ?? ""),
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
});
