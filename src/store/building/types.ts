export const BUILDING_WIDTH_CHANGE = 'BUILDING_WIDTH_CHANGE';
export const BUILDING_LENGTH_CHANGE = 'BUILDING_LENGTH_CHANGE';
export const BUILDING_HEIGHT_CHANGE = 'BUILDING_HEIGHT_CHANGE';
export const BUILDING_REGION_CHANGE = 'BUILDING_REGION_CHANGE';
export const BUILDING_REGION_STR_CHANGE = 'BUILDING_REGION_STR_CHANGE';
export const BUILDING_ARCHTYPE_CHANGE = 'BUILDING_ARCHTYPE_CHANGE';
export const BUILDING_FOUNDATION_CHANGE = 'BUILDING_FOUNDATION_CHANGE';
export const BUILDING_FLOOR_CHANGE = 'BUILDING_FLOOR_CHANGE';
export const BUILDING_FENCES_CHANGE = 'BUILDING_FENCES_CHANGE';
export const BUILDING_SANDWICH_TYPE_CHANGE = 'BUILDING_SANDWICH_TYPE_CHANGE';
export const BUILDING_TENT_TYPE_CHANGE = 'BUILDING_TENT_TYPE_CHANGE';
export const BUILDING_GATE_COUNT_CHANGE = 'BUILDING_GATE_COUNT_CHANGE';
export const BUILDING_GATE_TYPE_CHANGE = 'BUILDING_GATE_TYPE_CHANGE';
export const BUILDING_GATE_WIDTH_CHANGE = 'BUILDING_GATE_WIDTH_CHANGE';
export const BUILDING_GATE_HEIGHT_CHANGE = 'BUILDING_GATE_HEIGHT_CHANGE';
export const BUILDING_DOOR_COUNT_CHANGE = 'BUILDING_DOOR_COUNT_CHANGE';
export const BUILDING_DOOR_TYPE_CHANGE = 'BUILDING_DOOR_TYPE_CHANGE';
export const BUILDING_WINDOWS_TYPE_CHANGE = 'BUILDING_WINDOWS_TYPE_CHANGE';

export interface IBuildingState {
  building: {
    width: number;
    length: number;
    height: number;
    angle: number;
    region: number;
    regionStr: string;
    archType: number;
    foundation: number;
    floor: number;
    fences: number;
    sandwichType: number;
    tentType: number;
    gatesCount: number;
    gatesType: number;
    gatesWidth: number;
    gatesHeight: number;
    doorsCount: number;
    doorsType: number;
    windowsRows: number;
  };
}

interface BuildingChangeWidth {
  type: typeof BUILDING_WIDTH_CHANGE;
  payload: number;
}
interface BuildingChangeLength {
  type: typeof BUILDING_LENGTH_CHANGE;
  payload: number;
}
interface BuildingChangeHeight {
  type: typeof BUILDING_HEIGHT_CHANGE;
  payload: number;
}
interface BuildingChangeRegion {
  type: typeof BUILDING_REGION_CHANGE;
  payload: number;
}
interface BuildingChangeRegionStr {
  type: typeof BUILDING_REGION_STR_CHANGE;
  payload: string;
}
interface BuildingChangeArchType {
  type: typeof BUILDING_ARCHTYPE_CHANGE;
  payload: number;
}
interface BuildingChangeFoundation {
  type: typeof BUILDING_FOUNDATION_CHANGE;
  payload: number;
}
interface BuildingChangeFloor {
  type: typeof BUILDING_FLOOR_CHANGE;
  payload: number;
}
interface BuildingChangeFences {
  type: typeof BUILDING_FENCES_CHANGE;
  payload: number;
}
interface BuildingChangeSandwichType {
  type: typeof BUILDING_SANDWICH_TYPE_CHANGE;
  payload: number;
}
interface BuildingChangeTentType {
  type: typeof BUILDING_TENT_TYPE_CHANGE;
  payload: number;
}
interface BuildingChangeGatesCount {
  type: typeof BUILDING_GATE_COUNT_CHANGE;
  payload: number;
}
interface BuildingChangeGatesType {
  type: typeof BUILDING_GATE_TYPE_CHANGE;
  payload: number;
}
interface BuildingChangeGatesWidth {
  type: typeof BUILDING_GATE_WIDTH_CHANGE;
  payload: number;
}
interface BuildingChangeGatesHeight {
  type: typeof BUILDING_GATE_HEIGHT_CHANGE;
  payload: number;
}
interface BuildingChangeDoorCount {
  type: typeof BUILDING_DOOR_COUNT_CHANGE;
  payload: number;
}
interface BuildingChangeDoorType {
  type: typeof BUILDING_DOOR_TYPE_CHANGE;
  payload: number;
}
interface BuildingChangeWindowsType {
  type: typeof BUILDING_WINDOWS_TYPE_CHANGE;
  payload: number;
}

export type BuildingActionsCreators =
  | BuildingChangeWidth
  | BuildingChangeLength
  | BuildingChangeHeight
  | BuildingChangeRegion
  | BuildingChangeRegionStr
  | BuildingChangeArchType
  | BuildingChangeFoundation
  | BuildingChangeFloor
  | BuildingChangeFences
  | BuildingChangeSandwichType
  | BuildingChangeTentType
  | BuildingChangeGatesCount
  | BuildingChangeGatesType
  | BuildingChangeGatesWidth
  | BuildingChangeGatesHeight
  | BuildingChangeDoorCount
  | BuildingChangeDoorType
  | BuildingChangeWindowsType;
