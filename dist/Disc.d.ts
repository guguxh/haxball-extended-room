import { AbstractDisc } from "./AbstractDisc";
import { Room } from "./Room";
/** A class representing a disc. */
export declare class Disc extends AbstractDisc {
    /**
     * The disc's index.
     */
    readonly index: number;
    /**
     * Creates a disc object.
     *
     * @param room The room object.
     * @param discIndex The disc's index.
     */
    constructor(room: Room, discIndex: number);
    /**
     * The number of discs of the map.
     */
    get size(): number;
    /**
     * The DiscObject of the disc.
     */
    protected get _discObject(): DiscPropertiesObject;
    protected set _discObject(properties: DiscPropertiesObject);
    /**
     * The disc's color.
     *
     * Set the value to -1 to make the disc transparent.
     */
    get color(): number | null | undefined;
    set color(value: number | null | undefined);
}