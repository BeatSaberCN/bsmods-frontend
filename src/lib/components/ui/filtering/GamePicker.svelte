<script lang="ts">
  import { insertSpaces, translateGameName } from "$lib/utils/string";
  import { SupportedGames } from "$lib/types/SupportedGames";
  import { Dropdown, InputSkin, Label } from "@svelte-fui/core";

  //props
  let {
    selectedGame = $bindable(null),
    required = false,
  }: {
    selectedGame: string | null;
    required: boolean;
  } = $props();
</script>

<Dropdown.Root bind:value={selectedGame} bind:data={selectedGame} on:change>
  <Dropdown.Trigger
    class="flex w-full items-center justify-center gap-3"
    let:data
  >
    <Label class="flex-2 h-[20px]">游戏名:</Label>
    <InputSkin class="flex-1" ariaInvalid={!selectedGame && required}>
      {#if data}
        <span>{translateGameName(insertSpaces(data as string))}</span>
      {:else}
        <span>选择游戏</span>
      {/if}

      <Dropdown.Arrow />
    </InputSkin>
  </Dropdown.Trigger>

  <Dropdown.Menu>
    {#each Object.values(SupportedGames) as item (item)}
      <Dropdown.Item value={item} data={item} class="min-w-max bg-transparent"
        >{translateGameName(insertSpaces(item))}</Dropdown.Item
      >
    {/each}
  </Dropdown.Menu>
</Dropdown.Root>
