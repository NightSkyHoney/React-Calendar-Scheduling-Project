import { Time } from './time';
import State from 'deep-state-observer';
import DeepState from 'deep-state-observer';
import dayjs from 'dayjs';
import { Config, Period, DataChartTime, ScrollTypeHorizontal, Row, Item, Vido, Items, ScrollTypeVertical, Rows, GridCell, GridRow, DataItems, ItemData, ItemDataUpdate, ColumnData } from '../gstc';
import { generateSlots } from './slots';
import { lithtml } from '@neuronet.io/vido/src/vido';
export declare function getClass(name: string, appendix?: string): string;
export declare function getId(name: string, id: string): string;
export declare function prepareState(userConfig: Config): {
    config: any;
};
export declare function stateFromConfig(userConfig: Config): State;
export declare function wasmStateFromConfig(userConfig: Config, wasmFile?: string): Promise<any>;
export declare const publicApi: {
    name: string;
    GSTCID(originalId: string): string;
    isGSTCID(id: string): boolean;
    sourceID(id: string): string;
    fromArray(array: any): {};
    stateFromConfig: typeof stateFromConfig;
    wasmStateFromConfig: typeof wasmStateFromConfig;
    merge: typeof import("@neuronet.io/vido/src/helpers").mergeDeep;
    lithtml: typeof lithtml;
    html: typeof lithtml;
    date(time: any): dayjs.Dayjs;
    setPeriod(period: Period): number;
    dayjs: typeof dayjs;
};
export interface WheelResult {
    x: number;
    y: number;
    z: number;
    event: WheelEvent;
}
export interface IconsCache {
    [key: string]: string;
}
export declare type Unsubscribes = (() => void)[];
export declare class Api {
    name: string;
    debug: boolean;
    state: DeepState;
    time: Time;
    vido: Vido;
    plugins: any;
    iconsCache: IconsCache;
    unsubscribes: Unsubscribes;
    constructor(state: DeepState);
    setVido(Vido: Vido): void;
    log(...args: any[]): void;
    generateSlots: typeof generateSlots;
    mergeDeep: typeof import("@neuronet.io/vido/src/helpers").mergeDeep;
    getClass: typeof getClass;
    getId: typeof getId;
    GSTCID: any;
    isGSTCID: any;
    sourceID: any;
    allActions: any[];
    getActions(name: string): any;
    isItemInViewport(item: Item, leftGlobal?: number, rightGlobal?: number): boolean;
    private getChildrenLinkedItemsIds;
    collectAllLinkedItems(items: Items, itemsData: DataItems): void;
    getChildrenDependantItemsIds(item: Item, items: Items, allDependant?: string[]): string[];
    getRow(rowId: string): Row;
    getRows(rowsId: string[]): Row[];
    getAllRows(): Rows;
    getVisibleRowsId(): string[];
    getItem(itemId: string): Item;
    getItems(itemsId?: string[]): Item[];
    getAllItems(): Items;
    getItemData(itemId: string): ItemData;
    getItemsData(): DataItems;
    setItemData(itemId: string, data: ItemDataUpdate): void;
    setItemsData(data: DataItems): void;
    prepareDependantItems(item: Item, items: Items): string[];
    prepareItems(items: Items): Items;
    sortRows(rowsArray: Row[]): Rows;
    fillEmptyRowValues(rows: Rows): Rows;
    itemsOnTheSameLevel(item1: Item, item2: Item): boolean;
    itemsOverlaps(item1: Item, item2: Item): boolean;
    itemOverlapsWithOthers(item: Item, items: Item[]): Item;
    fixOverlappedItems(rowItems: Item[]): void;
    recalculateRowHeight(row: Row): number;
    recalculateRowsHeights(rowsId: string[]): number;
    recalculateRowsPercents(rowsId: string[], verticalAreaHeight: number): void;
    generateParents(rows: Rows | Items, parentName?: string): {};
    fastTree(rowParents: any, node: any, parents?: any[]): any;
    makeTreeMap(rows: Rows, items: Items): any;
    getRowsWithParentsExpanded(rows: Rows): any[];
    getVisibleRows(rowsWithParentsExpanded: string[]): string[];
    private getSortableValue;
    sortRowsByColumn(column: ColumnData, asc?: boolean): void;
    normalizeMouseWheelEvent(event: WheelEvent): WheelResult;
    scrollToTime(toTime: number, centered?: boolean, time?: DataChartTime): number;
    setScrollLeft(dataIndex: number | undefined, time?: DataChartTime, multi?: any, recalculateTimesLastReason?: string): any;
    getScrollLeft(): ScrollTypeHorizontal;
    setScrollTop(dataIndex: number | undefined, offset?: number): void;
    getScrollTop(): ScrollTypeVertical;
    getGridCells(cellIds?: string[]): GridCell[];
    getGridRows(rowIds?: string[]): GridRow[];
    getGridCell(cellId: string): GridCell;
    getGridRow(rowId: string): GridRow;
    muteMethod(methodName: string): void;
    unmuteMethod(methodName: string): void;
    isMutedMethod(methodName: string): boolean;
    getSVGIconSrc(svg: any): string;
    destroy(): void;
}
//# sourceMappingURL=api.d.ts.map