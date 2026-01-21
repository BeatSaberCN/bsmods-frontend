//https://github.com/Saeraphinx/badbsmods/blob/ac26103e29864155c2de20c5b10f484aa1b8f79e/src/shared/Database.ts#L1027
export enum Categories {
  Core = `core`, // BSIPA, SongCore, etc
  Essential = `essential`, // Camera2, BeatSaverDownloader, BeatSaverUpdater, etc
  Library = `library`,
  Cosmetic = `cosmetic`,
  PracticeTraining = `practice`,
  Gameplay = `gameplay`,
  StreamTools = `streamtools`,
  UIEnhancements = `ui`,
  Lighting = `lighting`,
  TweaksTools = `tweaks`,
  Multiplayer = `multiplayer`,
  TextChanges = `text`,
  Editor = `editor`,
  Other = `other`,
}

export function convertCategories(value: string): Categories | undefined {
  return Object.values(Categories).includes(value as Categories)
    ? (value as Categories)
    : undefined;
}

export function categoryTranslate(value: string): string {
  const category = convertCategories(value)
  if(category == undefined)
    return value
  switch(category){
    case Categories.Core:                   return "核心"
    case Categories.Essential:              return "重要"
    case Categories.Library:                return "支持库"
    case Categories.Cosmetic:               return "美化"
    case Categories.PracticeTraining:       return "练习"
    case Categories.Gameplay:               return "游戏性"
    case Categories.StreamTools:            return "串流工具"
    case Categories.UIEnhancements:         return "界面增强"
    case Categories.Lighting:               return "光效"
    case Categories.TweaksTools:            return "调整工具"
    case Categories.Multiplayer:            return "多人"
    case Categories.TextChanges:            return "文本修改"
    case Categories.Editor:                 return "编辑"
    case Categories.Other:                  return "其它"
  }
}