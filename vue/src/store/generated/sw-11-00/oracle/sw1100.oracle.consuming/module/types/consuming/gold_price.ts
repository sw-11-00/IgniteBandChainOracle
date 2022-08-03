/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sw1100.oracle.consuming";

export interface GoldPriceCallData {
  multiplier: number;
}

export interface GoldPriceResult {
  price: number;
}

const baseGoldPriceCallData: object = { multiplier: 0 };

export const GoldPriceCallData = {
  encode(message: GoldPriceCallData, writer: Writer = Writer.create()): Writer {
    if (message.multiplier !== 0) {
      writer.uint32(16).uint64(message.multiplier);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GoldPriceCallData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGoldPriceCallData } as GoldPriceCallData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.multiplier = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GoldPriceCallData {
    const message = { ...baseGoldPriceCallData } as GoldPriceCallData;
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = Number(object.multiplier);
    } else {
      message.multiplier = 0;
    }
    return message;
  },

  toJSON(message: GoldPriceCallData): unknown {
    const obj: any = {};
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },

  fromPartial(object: DeepPartial<GoldPriceCallData>): GoldPriceCallData {
    const message = { ...baseGoldPriceCallData } as GoldPriceCallData;
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = object.multiplier;
    } else {
      message.multiplier = 0;
    }
    return message;
  },
};

const baseGoldPriceResult: object = { price: 0 };

export const GoldPriceResult = {
  encode(message: GoldPriceResult, writer: Writer = Writer.create()): Writer {
    if (message.price !== 0) {
      writer.uint32(8).uint64(message.price);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GoldPriceResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGoldPriceResult } as GoldPriceResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GoldPriceResult {
    const message = { ...baseGoldPriceResult } as GoldPriceResult;
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    return message;
  },

  toJSON(message: GoldPriceResult): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<GoldPriceResult>): GoldPriceResult {
    const message = { ...baseGoldPriceResult } as GoldPriceResult;
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
