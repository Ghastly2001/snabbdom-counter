let state: any = {};

export function createState(initialState: any): void {
  state = initialState;
}

export function updateState(newState: any): void {
  state = { ...state, ...newState };
}
