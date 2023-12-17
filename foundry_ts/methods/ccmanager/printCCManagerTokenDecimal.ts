
// generated by foundry_ts/methods/ccmanager/genCode.ts
// Path: foundry_scripts/ccmanager/setCCManagerChainId.s.sol
import { addOperation } from "../../utils/config";
import { ccmanager_deploy_json, decimal_config_json } from "../../utils/const";
import { set_env_var, foundry_wrapper } from "../../foundry";
import { checkArgs } from "../../helper";
import { setupDeployJson } from "../../utils/setupDeployJson";

// current file name
const method_name = "printCCManagerTokenDecimal";

export function printCCManagerTokenDecimalWithArgv(argv: any) {
    const required_flags = ["env", "network"];
    checkArgs(method_name, argv, required_flags);
    printCCManagerTokenDecimal(argv.env, argv.network, argv.broadcast, argv.simulate);
}

export function printCCManagerTokenDecimal(env: string, network: string, broadcast: boolean, simulate: boolean) {
    
    const fs = require('fs');
    const filePath = decimal_config_json;
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const decimalConfig = JSON.parse(fileContent);
    if (decimalConfig[env] == undefined) {
        throw new Error(`decimal config not found for env ${env}`);
    } 

    set_env_var(method_name, "env", env);
    set_env_var(method_name, "network", network);
    for (const key in decimalConfig[env]) {
        set_env_var(method_name, "tokenNetwork", key);
        foundry_wrapper(method_name, broadcast, simulate);
    }

}

addOperation(method_name, printCCManagerTokenDecimalWithArgv);
