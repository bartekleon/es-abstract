'use strict';

var ES = require('../').ES2016;

var ops = require('../operations/2016');

var expectedMissing = ['AddRestrictedFunctionProperties', 'AllocateArrayBuffer', 'AllocateTypedArray', 'AllocateTypedArrayBuffer', 'ArraySetLength', 'BlockDeclarationInstantiation', 'BoundFunctionCreate', 'Canonicalize', 'CharacterRange', 'CharacterRangeOrUnion', 'CharacterSetMatcher', 'CloneArrayBuffer', 'Completion', 'Construct', 'CopyDataBlockBytes', 'CreateArrayFromList', 'CreateArrayIterator', 'CreateBuiltinFunction', 'CreateByteDataBlock', 'CreateDynamicFunction', 'CreateHTML', 'CreateIntrinsics', 'CreateListFromArrayLike', 'CreateListIterator', 'CreateMapIterator', 'CreateMappedArgumentsObject', 'CreatePerIterationEnvironment', 'CreateRealm', 'CreateResolvingFunctions', 'CreateSetIterator', 'CreateStringIterator', 'CreateUnmappedArgumentsObject', 'DateFromTime', 'Day', 'DayFromYear', 'DayWithinYear', 'DaysInYear', 'Decode', 'DetachArrayBuffer', 'Encode', 'EnqueueJob', 'EnumerateObjectProperties', 'EscapeRegExpPattern', 'EvalDeclarationInstantiation', 'EvaluateCall', 'EvaluateDirectCall', 'EvaluateNew', 'ForBodyEvaluation', 'ForIn/OfBodyEvaluation', 'ForIn/OfHeadEvaluation', 'FulfillPromise', 'FunctionAllocate', 'FunctionCreate', 'FunctionDeclarationInstantiation', 'FunctionInitialize', 'GeneratorFunctionCreate', 'GeneratorResume', 'GeneratorResumeAbrupt', 'GeneratorStart', 'GeneratorValidate', 'GeneratorYield', 'GetActiveScriptOrModule', 'GetFunctionRealm', 'GetGlobalObject', 'GetIdentifierReference', 'GetModuleNamespace', 'GetNewTarget', 'GetOwnPropertyKeys', 'GetPrototypeFromConstructor', 'GetSubstitution', 'GetSuperConstructor', 'GetTemplateObject', 'GetThisEnvironment', 'GetThisValue', 'GetValue', 'GetValueFromBuffer', 'GetViewValue', 'GlobalDeclarationInstantiation', 'HostPromiseRejectionTracker', 'HostReportErrors', 'HostResolveImportedModule', 'HourFromTime', 'HoursPerDay', 'IfAbruptRejectPromise', 'ImportedLocalNames', 'InLeapYear', 'InitializeBoundName', 'InitializeHostDefinedRealm', 'InitializeReferencedBinding', 'InstanceofOperator', 'IntegerIndexedElementGet', 'IntegerIndexedElementSet', 'IntegerIndexedObjectCreate', 'InternalizeJSONProperty', 'IsAnonymousFunctionDefinition', 'IsCompatiblePropertyDescriptor', 'IsDetachedBuffer', 'IsInTailPosition', 'IsLabelledFunction', 'IsWordChar', 'IterableToArrayLike', 'LocalTime', 'LoopContinues', 'MakeArgGetter', 'MakeArgSetter', 'MakeClassConstructor', 'MakeConstructor', 'MakeDate', 'MakeDay', 'MakeMethod', 'MakeSuperPropertyReference', 'MakeTime', 'MinFromTime', 'MinutesPerHour', 'ModuleNamespaceCreate', 'MonthFromTime', 'NewDeclarativeEnvironment', 'NewFunctionEnvironment', 'NewGlobalEnvironment', 'NewModuleEnvironment', 'NewObjectEnvironment', 'NewPromiseCapability', 'NextJob', 'NormalCompletion', 'ObjectDefineProperties', 'OrdinaryCallBindThis', 'OrdinaryCallEvaluateBody', 'OrdinaryCreateFromConstructor', 'OrdinaryDelete', 'OrdinaryGet', 'OrdinaryGetOwnProperty', 'OrdinaryGetPrototypeOf', 'OrdinaryHasProperty', 'OrdinaryIsExtensible', 'OrdinaryOwnPropertyKeys', 'OrdinaryPreventExtensions', 'OrdinarySet', 'OrdinarySetPrototypeOf', 'ParseModule', 'ParseScript', 'PerformEval', 'PerformPromiseAll', 'PerformPromiseRace', 'PerformPromiseThen', 'PrepareForOrdinaryCall', 'PrepareForTailCall', 'PromiseReactionJob', 'PromiseResolveThenableJob', 'ProxyCreate', 'PutValue', 'QuoteJSONString', 'RegExpAlloc', 'RegExpBuiltinExec', 'RegExpCreate', 'RegExpInitialize', 'RejectPromise', 'RepeatMatcher', 'ResolveBinding', 'ResolveThisBinding', 'ReturnIfAbrupt', 'ScriptEvaluation', 'ScriptEvaluationJob', 'SecFromTime', 'SecondsPerMinute', 'SerializeJSONArray', 'SerializeJSONObject', 'SerializeJSONProperty', 'SetDefaultGlobalBindings', 'SetFunctionName', 'SetRealmGlobalObject', 'SetValueInBuffer', 'SetViewValue', 'SortCompare', 'SplitMatch', 'StringCreate', 'SymbolDescriptiveString', 'TimeClip', 'TimeFromYear', 'TimeWithinDay', 'ToDateString', 'ToString Applied to the Number Type', 'TopLevelModuleEvaluationJob', 'TriggerPromiseReactions', 'TypedArrayCreate', 'TypedArraySpeciesCreate', 'UTC', 'UTF16Decode', 'UTF16Encoding', 'UpdateEmpty', 'ValidateTypedArray', 'WeekDay', 'YearFromTime', 'abs', 'floor', 'max', 'min', 'modulo', 'msFromTime', 'msPerDay', 'msPerHour', 'msPerMinute', 'msPerSecond'];

require('./tests').es2016(ES, ops, expectedMissing);
