package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sw-11-00/oracle/x/consuming/types"
)

// GoldPriceResult returns the GoldPrice result by RequestId
func (k Keeper) GoldPriceResult(c context.Context, req *types.QueryGoldPriceRequest) (*types.QueryGoldPriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	result, err := k.GetGoldPriceResult(ctx, types.OracleRequestID(req.RequestId))
	if err != nil {
		return nil, err
	}
	return &types.QueryGoldPriceResponse{Result: &result}, nil
}

// LastGoldPriceId returns the last GoldPrice request Id
func (k Keeper) LastGoldPriceId(c context.Context, req *types.QueryLastGoldPriceIdRequest) (*types.QueryLastGoldPriceIdResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	id := k.GetLastGoldPriceID(ctx)
	return &types.QueryLastGoldPriceIdResponse{RequestId: id}, nil
}
