/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../consuming/params";
import { CoinRatesResult } from "../consuming/coin_rates";

export const protobufPackage = "sw1100.oracle.consuming";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryCoinRatesRequest {
  request_id: number;
}

export interface QueryCoinRatesResponse {
  result: CoinRatesResult | undefined;
}

export interface QueryLastCoinRatesIdRequest {}

export interface QueryLastCoinRatesIdResponse {
  request_id: number;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryCoinRatesRequest: object = { request_id: 0 };

export const QueryCoinRatesRequest = {
  encode(
    message: QueryCoinRatesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.request_id !== 0) {
      writer.uint32(8).int64(message.request_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCoinRatesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCoinRatesRequest } as QueryCoinRatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request_id = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCoinRatesRequest {
    const message = { ...baseQueryCoinRatesRequest } as QueryCoinRatesRequest;
    if (object.request_id !== undefined && object.request_id !== null) {
      message.request_id = Number(object.request_id);
    } else {
      message.request_id = 0;
    }
    return message;
  },

  toJSON(message: QueryCoinRatesRequest): unknown {
    const obj: any = {};
    message.request_id !== undefined && (obj.request_id = message.request_id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCoinRatesRequest>
  ): QueryCoinRatesRequest {
    const message = { ...baseQueryCoinRatesRequest } as QueryCoinRatesRequest;
    if (object.request_id !== undefined && object.request_id !== null) {
      message.request_id = object.request_id;
    } else {
      message.request_id = 0;
    }
    return message;
  },
};

const baseQueryCoinRatesResponse: object = {};

export const QueryCoinRatesResponse = {
  encode(
    message: QueryCoinRatesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.result !== undefined) {
      CoinRatesResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCoinRatesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCoinRatesResponse } as QueryCoinRatesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = CoinRatesResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCoinRatesResponse {
    const message = { ...baseQueryCoinRatesResponse } as QueryCoinRatesResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = CoinRatesResult.fromJSON(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },

  toJSON(message: QueryCoinRatesResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = message.result
        ? CoinRatesResult.toJSON(message.result)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCoinRatesResponse>
  ): QueryCoinRatesResponse {
    const message = { ...baseQueryCoinRatesResponse } as QueryCoinRatesResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = CoinRatesResult.fromPartial(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },
};

const baseQueryLastCoinRatesIdRequest: object = {};

export const QueryLastCoinRatesIdRequest = {
  encode(
    _: QueryLastCoinRatesIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastCoinRatesIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastCoinRatesIdRequest,
    } as QueryLastCoinRatesIdRequest;
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

  fromJSON(_: any): QueryLastCoinRatesIdRequest {
    const message = {
      ...baseQueryLastCoinRatesIdRequest,
    } as QueryLastCoinRatesIdRequest;
    return message;
  },

  toJSON(_: QueryLastCoinRatesIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryLastCoinRatesIdRequest>
  ): QueryLastCoinRatesIdRequest {
    const message = {
      ...baseQueryLastCoinRatesIdRequest,
    } as QueryLastCoinRatesIdRequest;
    return message;
  },
};

const baseQueryLastCoinRatesIdResponse: object = { request_id: 0 };

export const QueryLastCoinRatesIdResponse = {
  encode(
    message: QueryLastCoinRatesIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.request_id !== 0) {
      writer.uint32(8).int64(message.request_id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryLastCoinRatesIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryLastCoinRatesIdResponse,
    } as QueryLastCoinRatesIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request_id = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastCoinRatesIdResponse {
    const message = {
      ...baseQueryLastCoinRatesIdResponse,
    } as QueryLastCoinRatesIdResponse;
    if (object.request_id !== undefined && object.request_id !== null) {
      message.request_id = Number(object.request_id);
    } else {
      message.request_id = 0;
    }
    return message;
  },

  toJSON(message: QueryLastCoinRatesIdResponse): unknown {
    const obj: any = {};
    message.request_id !== undefined && (obj.request_id = message.request_id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLastCoinRatesIdResponse>
  ): QueryLastCoinRatesIdResponse {
    const message = {
      ...baseQueryLastCoinRatesIdResponse,
    } as QueryLastCoinRatesIdResponse;
    if (object.request_id !== undefined && object.request_id !== null) {
      message.request_id = object.request_id;
    } else {
      message.request_id = 0;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** CoinRatesResult defines a rpc handler method for MsgCoinRatesData. */
  CoinRatesResult(
    request: QueryCoinRatesRequest
  ): Promise<QueryCoinRatesResponse>;
  /** LastCoinRatesId query the last CoinRates result id */
  LastCoinRatesId(
    request: QueryLastCoinRatesIdRequest
  ): Promise<QueryLastCoinRatesIdResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sw1100.oracle.consuming.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  CoinRatesResult(
    request: QueryCoinRatesRequest
  ): Promise<QueryCoinRatesResponse> {
    const data = QueryCoinRatesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sw1100.oracle.consuming.Query",
      "CoinRatesResult",
      data
    );
    return promise.then((data) =>
      QueryCoinRatesResponse.decode(new Reader(data))
    );
  }

  LastCoinRatesId(
    request: QueryLastCoinRatesIdRequest
  ): Promise<QueryLastCoinRatesIdResponse> {
    const data = QueryLastCoinRatesIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sw1100.oracle.consuming.Query",
      "LastCoinRatesId",
      data
    );
    return promise.then((data) =>
      QueryLastCoinRatesIdResponse.decode(new Reader(data))
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
