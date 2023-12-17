
// generated by foundry_ts/methods/ccmanager/genCode.ts
// Path: foundry_scripts/relay/printRelay.s.sol
import { addOperation } from "../../utils/config";
import { ccmanager_deploy_json } from "../../utils/const";
import { set_env_var, foundry_wrapper } from "../../foundry";
import { checkArgs } from "../../helper";
import { setupDeployJson } from "../../utils/setupDeployJson";

// current file name
const method_name = "printRelay";

export function printRelayWithArgv(argv: any) {
    const required_flags = ["env", "network", "dstNetwork"];
    checkArgs(method_name, argv, required_flags);
    printRelay(argv.env, argv.network, argv.dstNetwork, argv.broadcast, argv.simulate);
}

export function printRelay(env: string, network: string, dstNetwork: string, broadcast: boolean, simulate: boolean) {
    

    set_env_var(method_name, "env", env);
    set_env_var(method_name, "network", network);
    set_env_var(method_name, "dstNetwork", dstNetwork);
    foundry_wrapper(method_name, broadcast, simulate);

}

addOperation(method_name, printRelayWithArgv);
