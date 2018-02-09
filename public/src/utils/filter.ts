interface WebTrackItem {
  type: number;
  occurTime: string;
  level: string;
  arguments: string;
  tapElement: string;
  requestMethod: string;
  requestURL: string;
  requestResCode: number;
  inputElement: string;
  errorMsg: string;
}
export function formatBehaviour(type: number) {
  let behaviour = '';
  switch (type) {
    case 1:
      behaviour = 'console';
      break;
    case 2:
      behaviour = '请求';
      break;
    case 3:
      behaviour = '点击';
      break;
    case 4:
      behaviour = '输入';
      break;
    case 5:
      behaviour = '错误';
      break;
    default:
      break;
  }
  return behaviour;
}

export function formatValueByType(opt: WebTrackItem, type: number) {
  let value = '';
  switch (type) {
    case 1:
      value = opt.arguments;
      break;
    case 2:
      value = opt.requestMethod;
      break;
    case 3:
      value = opt.tapElement;
      break;
    case 4:
      value = opt.inputElement;
      break;
    case 5:
      value = opt.errorMsg;
      break;
    default:
      break;
  }
  return value;
}
