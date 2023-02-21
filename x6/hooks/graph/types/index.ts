export interface callbackOption {
  type: string,
  isRender?: boolean
}
export interface callback1 {
  (option: callbackOption): void
}