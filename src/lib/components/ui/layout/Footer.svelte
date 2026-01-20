<script>
    import { appendURL } from "$lib/utils/url";
</script>

<footer class="mt-10 flex h-[51px] w-fit flex-col">
  <div class="ml-10 mr-auto flex h-[50px] w-fit">
    <div class="ml-5 flex flex-row items-center gap-4">
      <p class="my-auto w-max text-xs">本项目是BeatMods项目的下游中文项目! -></p>
      <div class="flex h-fit flex-col gap-1 sm:flex-row sm:gap-4">
        <a
          class="my-auto !h-fit !w-fit text-xs duration-150 hover:text-brand-foreground-link-hover"
          href="https://github.com/BeatSaberCN/bsmods-frontend"
          target="=_blank"
          rel="no-referrer"
          >前端（源码）</a
        >

        <a
          class="my-auto !h-fit !w-fit text-xs duration-150 hover:text-brand-foreground-link-hover"
          href="https://github.com/BeatSaberCN/beatmods-agent"
          target="=_blank"
          rel="no-referrer"
            >中文后端（源码）</a
        >
        <a
          class="my-auto !h-fit !w-fit text-xs duration-150 hover:text-brand-foreground-link-hover"
          href="https://beatmods.com"
          target="=_blank"
          rel="no-referrer"
          >beatmods.com(上游,api)</a
        >
      </div>
    </div>
  </div>
</footer>
