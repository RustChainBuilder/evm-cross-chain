
// generated by foundry_ts/methods/ccmanager/genCode.ts
// Path: foundry_scripts/ccmanager/setCCManagerChainId.s.sol
import { addOperation } from "../../utils/config";
import { ccmanager_deploy_json } from "../../utils/const";
import { set_env_var, foundry_wrapper } from "../../foundry";
import { checkArgs } from "../../helper";
import { setupDeployJson } from "../../utils/setupDeployJson";

// current file name
const method_name = "sendTestWithdraw";

export function sendTestWithdrawWithArgv(argv: any) {
    const required_flags = ["env", "network", "toNetwork"];
    checkArgs(method_name, argv, required_flags);
    sendTestWithdraw(argv.env, argv.network, argv.toNetwork, argv.broadcast, argv.simulate);
}

export function sendTestWithdraw(env: string, network: string, toNetwork: string, broadcast: boolean, simulate: boolean) {
    

    set_env_var(method_name, "env", env);
    set_env_var(method_name, "network", network);
    set_env_var(method_name, "toNetwork", toNetwork);
    foundry_wrapper(method_name, broadcast, simulate);

}

addOperation(method_name, sendTestWithdrawWithArgv);