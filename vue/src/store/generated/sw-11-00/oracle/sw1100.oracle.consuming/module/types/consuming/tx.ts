/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { CoinRatesCallData } from "../consuming/coin_rates";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { GoldPriceCallData } from "../consuming/gold_price";

export const protobufPackage = "sw1100.oracle.consuming";

export interface MsgCoinRatesData {
  creator: string;
  oracle_script_id: number;
  source_channel: string;
  calldata: CoinRatesCallData | undefined;
  ask_count: number;
  min_count: number;
  fee_limit: Coin[];
  prepare_gas: number;
  execute_gas: number;
  client_id: string;
}

export interface MsgCoinRatesDataResponse {}

export interface MsgGoldPriceData {
  creator: string;
  oracle_script_id: number;
  source_channel: string;
  calldata: GoldPriceCallData | undefined;
  ask_count: number;
  min_count: number;
  fee_limit: Coin[];
  prepare_gas: number;
  execute_gas: number;
  client_id: string;
}

export interface MsgGoldPriceDataResponse {}

const baseMsgCoinRatesData: object = {
  creator: "",
  oracle_script_id: 0,
  source_channel: "",
  ask_count: 0,
  min_count: 0,
  prepare_gas: 0,
  execute_gas: 0,
  client_id: "",
};

export const MsgCoinRatesData = {
  encode(message: MsgCoinRatesData, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracle_script_id !== 0) {
      writer.uint32(16).uint64(message.oracle_script_id);
    }
    if (message.source_channel !== "") {
      writer.uint32(26).string(message.source_channel);
    }
    if (message.calldata !== undefined) {
      CoinRatesCallData.encode(
        message.calldata,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.ask_count !== 0) {
      writer.uint32(40).uint64(message.ask_count);
    }
    if (message.min_count !== 0) {
      writer.uint32(48).uint64(message.min_count);
    }
    for (const v of message.fee_limit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.prepare_gas !== 0) {
      writer.uint32(64).uint64(message.prepare_gas);
    }
    if (message.execute_gas !== 0) {
      writer.uint32(72).uint64(message.execute_gas);
    }
    if (message.client_id !== "") {
      writer.uint32(82).string(message.client_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCoinRatesData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCoinRatesData } as MsgCoinRatesData;
    message.fee_limit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.oracle_script_id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.source_channel = reader.string();
          break;
        case 4:
          message.calldata = CoinRatesCallData.decode(reader, reader.uint32());
          break;
        case 5:
          message.ask_count = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.min_count = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.fee_limit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.prepare_gas = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.execute_gas = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.client_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCoinRatesData {
    const message = { ...baseMsgCoinRatesData } as MsgCoinRatesData;
    message.fee_limit = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.oracle_script_id !== undefined &&
      object.oracle_script_id !== null
    ) {
      message.oracle_script_id = Number(object.oracle_script_id);
    } else {
      message.oracle_script_id = 0;
    }
    if (object.source_channel !== undefined && object.source_channel !== null) {
      message.source_channel = String(object.source_channel);
    } else {
      message.source_channel = "";
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = CoinRatesCallData.fromJSON(object.calldata);
    } else {
      message.calldata = undefined;
    }
    if (object.ask_count !== undefined && object.ask_count !== null) {
      message.ask_count = Number(object.ask_count);
    } else {
      message.ask_count = 0;
    }
    if (object.min_count !== undefined && object.min_count !== null) {
      message.min_count = Number(object.min_count);
    } else {
      message.min_count = 0;
    }
    if (object.fee_limit !== undefined && object.fee_limit !== null) {
      for (const e of object.fee_limit) {
        message.fee_limit.push(Coin.fromJSON(e));
      }
    }
    if (object.prepare_gas !== undefined && object.prepare_gas !== null) {
      message.prepare_gas = Number(object.prepare_gas);
    } else {
      message.prepare_gas = 0;
    }
    if (object.execute_gas !== undefined && object.execute_gas !== null) {
      message.execute_gas = Number(object.execute_gas);
    } else {
      message.execute_gas = 0;
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = String(object.client_id);
    } else {
      message.client_id = "";
    }
    return message;
  },

  toJSON(message: MsgCoinRatesData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.oracle_script_id !== undefined &&
      (obj.oracle_script_id = message.oracle_script_id);
    message.source_channel !== undefined &&
      (obj.source_channel = message.source_channel);
    message.calldata !== undefined &&
      (obj.calldata = message.calldata
        ? CoinRatesCallData.toJSON(message.calldata)
        : undefined);
    message.ask_count !== undefined && (obj.ask_count = message.ask_count);
    message.min_count !== undefined && (obj.min_count = message.min_count);
    if (message.fee_limit) {
      obj.fee_limit = message.fee_limit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.fee_limit = [];
    }
    message.prepare_gas !== undefined &&
      (obj.prepare_gas = message.prepare_gas);
    message.execute_gas !== undefined &&
      (obj.execute_gas = message.execute_gas);
    message.client_id !== undefined && (obj.client_id = message.client_id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCoinRatesData>): MsgCoinRatesData {
    const message = { ...baseMsgCoinRatesData } as MsgCoinRatesData;
    message.fee_limit = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.oracle_script_id !== undefined &&
      object.oracle_script_id !== null
    ) {
      message.oracle_script_id = object.oracle_script_id;
    } else {
      message.oracle_script_id = 0;
    }
    if (object.source_channel !== undefined && object.source_channel !== null) {
      message.source_channel = object.source_channel;
    } else {
      message.source_channel = "";
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = CoinRatesCallData.fromPartial(object.calldata);
    } else {
      message.calldata = undefined;
    }
    if (object.ask_count !== undefined && object.ask_count !== null) {
      message.ask_count = object.ask_count;
    } else {
      message.ask_count = 0;
    }
    if (object.min_count !== undefined && object.min_count !== null) {
      message.min_count = object.min_count;
    } else {
      message.min_count = 0;
    }
    if (object.fee_limit !== undefined && object.fee_limit !== null) {
      for (const e of object.fee_limit) {
        message.fee_limit.push(Coin.fromPartial(e));
      }
    }
    if (object.prepare_gas !== undefined && object.prepare_gas !== null) {
      message.prepare_gas = object.prepare_gas;
    } else {
      message.prepare_gas = 0;
    }
    if (object.execute_gas !== undefined && object.execute_gas !== null) {
      message.execute_gas = object.execute_gas;
    } else {
      message.execute_gas = 0;
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    } else {
      message.client_id = "";
    }
    return message;
  },
};

const baseMsgCoinRatesDataResponse: object = {};

export const MsgCoinRatesDataResponse = {
  encode(
    _: MsgCoinRatesDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCoinRatesDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCoinRatesDataResponse,
    } as MsgCoinRatesDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCoinRatesDataResponse {
    const message = {
      ...baseMsgCoinRatesDataResponse,
    } as MsgCoinRatesDataResponse;
    return message;
  },

  toJSON(_: MsgCoinRatesDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCoinRatesDataResponse>
  ): MsgCoinRatesDataResponse {
    const message = {
      ...baseMsgCoinRatesDataResponse,
    } as MsgCoinRatesDataResponse;
    return message;
  },
};

const baseMsgGoldPriceData: object = {
  creator: "",
  oracle_script_id: 0,
  source_channel: "",
  ask_count: 0,
  min_count: 0,
  prepare_gas: 0,
  execute_gas: 0,
  client_id: "",
};

export const MsgGoldPriceData = {
  encode(message: MsgGoldPriceData, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.oracle_script_id !== 0) {
      writer.uint32(16).uint64(message.oracle_script_id);
    }
    if (message.source_channel !== "") {
      writer.uint32(26).string(message.source_channel);
    }
    if (message.calldata !== undefined) {
      GoldPriceCallData.encode(
        message.calldata,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.ask_count !== 0) {
      writer.uint32(40).uint64(message.ask_count);
    }
    if (message.min_count !== 0) {
      writer.uint32(48).uint64(message.min_count);
    }
    for (const v of message.fee_limit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.prepare_gas !== 0) {
      writer.uint32(64).uint64(message.prepare_gas);
    }
    if (message.execute_gas !== 0) {
      writer.uint32(72).uint64(message.execute_gas);
    }
    if (message.client_id !== "") {
      writer.uint32(82).string(message.client_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGoldPriceData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgGoldPriceData } as MsgGoldPriceData;
    message.fee_limit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.oracle_script_id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.source_channel = reader.string();
          break;
        case 4:
          message.calldata = GoldPriceCallData.decode(reader, reader.uint32());
          break;
        case 5:
          message.ask_count = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.min_count = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.fee_limit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.prepare_gas = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.execute_gas = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.client_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGoldPriceData {
    const message = { ...baseMsgGoldPriceData } as MsgGoldPriceData;
    message.fee_limit = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.oracle_script_id !== undefined &&
      object.oracle_script_id !== null
    ) {
      message.oracle_script_id = Number(object.oracle_script_id);
    } else {
      message.oracle_script_id = 0;
    }
    if (object.source_channel !== undefined && object.source_channel !== null) {
      message.source_channel = String(object.source_channel);
    } else {
      message.source_channel = "";
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = GoldPriceCallData.fromJSON(object.calldata);
    } else {
      message.calldata = undefined;
    }
    if (object.ask_count !== undefined && object.ask_count !== null) {
      message.ask_count = Number(object.ask_count);
    } else {
      message.ask_count = 0;
    }
    if (object.min_count !== undefined && object.min_count !== null) {
      message.min_count = Number(object.min_count);
    } else {
      message.min_count = 0;
    }
    if (object.fee_limit !== undefined && object.fee_limit !== null) {
      for (const e of object.fee_limit) {
        message.fee_limit.push(Coin.fromJSON(e));
      }
    }
    if (object.prepare_gas !== undefined && object.prepare_gas !== null) {
      message.prepare_gas = Number(object.prepare_gas);
    } else {
      message.prepare_gas = 0;
    }
    if (object.execute_gas !== undefined && object.execute_gas !== null) {
      message.execute_gas = Number(object.execute_gas);
    } else {
      message.execute_gas = 0;
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = String(object.client_id);
    } else {
      message.client_id = "";
    }
    return message;
  },

  toJSON(message: MsgGoldPriceData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.oracle_script_id !== undefined &&
      (obj.oracle_script_id = message.oracle_script_id);
    message.source_channel !== undefined &&
      (obj.source_channel = message.source_channel);
    message.calldata !== undefined &&
      (obj.calldata = message.calldata
        ? GoldPriceCallData.toJSON(message.calldata)
        : undefined);
    message.ask_count !== undefined && (obj.ask_count = message.ask_count);
    message.min_count !== undefined && (obj.min_count = message.min_count);
    if (message.fee_limit) {
      obj.fee_limit = message.fee_limit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.fee_limit = [];
    }
    message.prepare_gas !== undefined &&
      (obj.prepare_gas = message.prepare_gas);
    message.execute_gas !== undefined &&
      (obj.execute_gas = message.execute_gas);
    message.client_id !== undefined && (obj.client_id = message.client_id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgGoldPriceData>): MsgGoldPriceData {
    const message = { ...baseMsgGoldPriceData } as MsgGoldPriceData;
    message.fee_limit = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.oracle_script_id !== undefined &&
      object.oracle_script_id !== null
    ) {
      message.oracle_script_id = object.oracle_script_id;
    } else {
      message.oracle_script_id = 0;
    }
    if (object.source_channel !== undefined && object.source_channel !== null) {
      message.source_channel = object.source_channel;
    } else {
      message.source_channel = "";
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = GoldPriceCallData.fromPartial(object.calldata);
    } else {
      message.calldata = undefined;
    }
    if (object.ask_count !== undefined && object.ask_count !== null) {
      message.ask_count = object.ask_count;
    } else {
      message.ask_count = 0;
    }
    if (object.min_count !== undefined && object.min_count !== null) {
      message.min_count = object.min_count;
    } else {
      message.min_count = 0;
    }
    if (object.fee_limit !== undefined && object.fee_limit !== null) {
      for (const e of object.fee_limit) {
        message.fee_limit.push(Coin.fromPartial(e));
      }
    }
    if (object.prepare_gas !== undefined && object.prepare_gas !== null) {
      message.prepare_gas = object.prepare_gas;
    } else {
      message.prepare_gas = 0;
    }
    if (object.execute_gas !== undefined && object.execute_gas !== null) {
      message.execute_gas = object.execute_gas;
    } else {
      message.execute_gas = 0;
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    } else {
      message.client_id = "";
    }
    return message;
  },
};

const baseMsgGoldPriceDataResponse: object = {};

export const MsgGoldPriceDataResponse = {
  encode(
    _: MsgGoldPriceDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgGoldPriceDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgGoldPriceDataResponse,
    } as MsgGoldPriceDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgGoldPriceDataResponse {
    const message = {
      ...baseMsgGoldPriceDataResponse,
    } as MsgGoldPriceDataResponse;
    return message;
  },

  toJSON(_: MsgGoldPriceDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgGoldPriceDataResponse>
  ): MsgGoldPriceDataResponse {
    const message = {
      ...baseMsgGoldPriceDataResponse,
    } as MsgGoldPriceDataResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CoinRatesData(request: MsgCoinRatesData): Promise<MsgCoinRatesDataResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  GoldPriceData(request: MsgGoldPriceData): Promise<MsgGoldPriceDataResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CoinRatesData(request: MsgCoinRatesData): Promise<MsgCoinRatesDataResponse> {
    const data = MsgCoinRatesData.encode(request).finish();
    const promise = this.rpc.request(
      "sw1100.oracle.consuming.Msg",
      "CoinRatesData",
      data
    );
    return promise.then((data) =>
      MsgCoinRatesDataResponse.decode(new Reader(data))
    );
  }

  GoldPriceData(request: MsgGoldPriceData): Promise<MsgGoldPriceDataResponse> {
    const data = MsgGoldPriceData.encode(request).finish();
    const promise = this.rpc.request(
      "sw1100.oracle.consuming.Msg",
      "GoldPriceData",
      data
    );
    return promise.then((data) =>
      MsgGoldPriceDataResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
