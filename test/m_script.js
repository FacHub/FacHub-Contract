// Mocks
const AppStubScriptRunner = artifacts.require('AppStubScriptRunner')
const ExecutionTarget = artifacts.require('ExecutionTarget')
const EVMScriptExecutorMock = artifacts.require('EVMScriptExecutorMock')
const EVMScriptExecutorNoReturnMock = artifacts.require('EVMScriptExecutorNoReturnMock')
const EVMScriptExecutorRevertMock = artifacts.require('EVMScriptExecutorRevertMock')
const EVMScriptRegistryConstantsMock = artifacts.require('EVMScriptRegistryConstantsMock')

const EMPTY_BYTES = '0x'

contract('EVM Script', ([_, boss, nonContract]) => {
  let kernelBase, aclBase, evmScriptRegBase, dao, acl, evmScriptReg
  let scriptExecutorMock, scriptExecutorNoReturnMock, scriptExecutorRevertMock
  let APP_BASES_NAMESPACE, APP_ADDR_NAMESPACE, APP_MANAGER_ROLE
  let EVMSCRIPT_REGISTRY_APP_ID, REGISTRY_ADD_EXECUTOR_ROLE, REGISTRY_MANAGER_ROLE
  let ERROR_MOCK_REVERT, ERROR_EXECUTION_TARGET

  const SCRIPT_RUNNER_APP_ID = '0x1234'

  before(async () => {
    kernelBase = await Kernel.new(true) // petrify immediately
