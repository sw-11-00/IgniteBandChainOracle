package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/sw-11-00/oracle/testutil/keeper"
	"github.com/sw-11-00/oracle/x/consuming/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ConsumingKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
