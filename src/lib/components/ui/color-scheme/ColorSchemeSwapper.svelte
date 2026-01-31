<script lang="ts">
  import { Button, Icon, Menu } from "@svelte-fui/core";
  import { WeatherSunnyRegular, WeatherMoonRegular } from "@svelte-fui/icons";
  import { webLightTheme, webDarkTheme } from "@svelte-fui/themes";

  //props
  let { theme = $bindable(webLightTheme), showCursor = $bindable(false) } =
    $props();
</script>

<Button class="aspect-square h-full w-full rounded-xl p-0">
  <Icon>
    <svg viewBox="0 0 20 20">
      {#if theme.colorBackgroundOverlay == webDarkTheme.colorBackgroundOverlay}
        <WeatherMoonRegular />
      {:else}
        <WeatherSunnyRegular />
      {/if}
    </svg>
  </Icon>
  <Menu.Root>
    <Menu.Group class="p-2">
      <Menu.Item
        on:click={() => {
          theme = webLightTheme;
          localStorage.setItem("theme", "light");
        }}
      >
        <div>日间模式</div>
      </Menu.Item>
      <Menu.Item
        on:click={() => {
          theme = webDarkTheme;
          localStorage.setItem("theme", "dark");
        }}
      >
        <div>夜间模式</div>
      </Menu.Item>
      <Menu.Item
        on:click={() => {
          showCursor = !showCursor;
          localStorage.setItem("showCursor", showCursor.toString());
        }}
      >
        <div>切换鼠标方块</div>
      </Menu.Item>
    </Menu.Group>
  </Menu.Root>
</Button>
