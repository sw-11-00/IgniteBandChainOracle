package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/sw-11-00/oracle/testutil/keeper"
	"github.com/sw-11-00/oracle/x/consuming/keeper"
	"github.com/sw-11-00/oracle/x/consuming/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ConsumingKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
