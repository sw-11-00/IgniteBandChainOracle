package keeper

import (
	"github.com/sw-11-00/oracle/x/consuming/types"
)

var _ types.QueryServer = Keeper{}
