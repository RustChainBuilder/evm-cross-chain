
// generated by foundry_ts/methods/ccmanager/genCode.ts
// Path: foundry_scripts/relay/setCrossChainFee.s.sol
import { addOperation } from "../../utils/config";
import { ccmanager_deploy_json } from "../../utils/const";
import { set_env_var, foundry_wrapper } from "../../foundry";
import { checkArgs } from "../../helper";
import { setupDeployJson } from "../../utils/setupDeployJson";

// current file name
const method_name = "setCrossChainFee";

export function setCrossChainFeeWithArgv(argv: any) {
    const required_flags = ["env", "network", "ccmethod", "fee"];
    checkArgs(method_name, argv, required_flags);
    setCrossChainFee(argv.env, argv.network, argv.ccmethod, argv.fee, argv.broadcast, argv.simulate);
}

export function setCrossChainFee(env: string, network: string, ccmethod: string, fee: number, broadcast: boolean, simulate: boolean) {
    

    set_env_var(method_name, "env", env);
    set_env_var(method_name, "network", network);
    set_env_var(method_name, "ccmethod", ccmethod);
    set_env_var(method_name, "fee", fee.toString());
    foundry_wrapper(method_name, broadcast, simulate);

}

addOperation(method_name, setCrossChainFeeWithArgv);
