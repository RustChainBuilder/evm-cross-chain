
// generated by foundry_ts/methods/ccmanager/genCode.ts
// Path: foundry_scripts/ccmanager/setCCManagerLedger.s.sol
import { addOperation } from "../../utils/config";
import { ccmanager_deploy_json } from "../../utils/const";
import { set_env_var, foundry_wrapper } from "../../foundry";
import { checkArgs } from "../../helper";
import { setupDeployJson } from "../../utils/setupDeployJson";

// current file name
const method_name = "setCCManagerLedger";

export function setCCManagerLedgerWithArgv(argv: any) {
    const required_flags = ["env", "network"];
    checkArgs(method_name, argv, required_flags);
    setCCManagerLedger(argv.env, argv.network, argv.broadcast, argv.simulate);
}

export function setCCManagerLedger(env: string, network: string, broadcast: boolean, simulate: boolean) {
    

    set_env_var(method_name, "env", env);
    set_env_var(method_name, "network", network);
    foundry_wrapper(method_name, broadcast, simulate);

}

addOperation(method_name, setCCManagerLedgerWithArgv);
