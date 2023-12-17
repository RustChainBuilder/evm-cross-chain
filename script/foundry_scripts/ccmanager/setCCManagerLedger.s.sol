// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "evm-cross-chain/script/baseScripts/BaseScript.s.sol";
import "evm-cross-chain/script/baseScripts/ConfigHelper.s.sol";
import "evm-cross-chain/script/baseScripts/CCManagerHelper.s.sol";
import "evm-cross-chain/contracts/VaultCrossChainManagerUpgradeable.sol";
import "evm-cross-chain/contracts/LedgerCrossChainManagerUpgradeable.sol";
import "evm-cross-chain/contracts/CrossChainManagerProxy.sol";
import "evm-cross-chain/contracts/interface/ICrossChainManager.sol";

contract SetCCManagerLedger is BaseScript, ConfigHelper, CCManagerHelper {
    using StringUtils for string;

    function run() external {
        string memory env = vm.envString("FS_setCCManagerLedger_env");
        string memory network = vm.envString("FS_setCCManagerLedger_network");

        CCManagerDeployData memory managerData = getCCManagerDeployData(env, network);

        address ledger = getLedgerAddress(env, network);

        vmSelectRpcAndBroadcast(network);

        setLedgerAddress(managerData.proxy, ledger);

        vm.stopBroadcast();
    }
}
