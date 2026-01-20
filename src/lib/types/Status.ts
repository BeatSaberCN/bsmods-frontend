export enum Status {
  Private = `private`,
  Pending = `pending`,
  Removed = `removed`,
  Unverified = `unverified`,
  Verified = `verified`,
}

export function StatusTranslate(status:Status){
  switch(status){
    case Status.Private:      return "私有";
    case Status.Pending:      return "挂起"; // 如果翻译不当请修改
    case Status.Removed:      return "已移除";
    case Status.Unverified:   return "未验证";
    case Status.Verified:     return "已验证";
  }
}