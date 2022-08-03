package consuming_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/sw-11-00/oracle/testutil/keeper"
	"github.com/sw-11-00/oracle/testutil/nullify"
	"github.com/sw-11-00/oracle/x/consuming"
	"github.com/sw-11-00/oracle/x/consuming/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ConsumingKeeper(t)
	consuming.InitGenesis(ctx, *k, genesisState)
	got := consuming.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	// this line is used by starport scaffolding # genesis/test/assert
}
