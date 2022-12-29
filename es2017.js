'use strict';

/* eslint global-require: 0 */
// https://262.ecma-international.org/8.0/#sec-abstract-operations
var ES2017 = {
	'Abstract Equality Comparison': require('./2017/AbstractEqualityComparison'),
	'Abstract Relational Comparison': require('./2017/AbstractRelationalComparison'),
	'Strict Equality Comparison': require('./2017/StrictEqualityComparison'),
	abs: require('./2017/abs'),
	AdvanceStringIndex: require('./2017/AdvanceStringIndex'),
	ArrayCreate: require('./2017/ArrayCreate'),
	ArraySetLength: require('./2017/ArraySetLength'),
	ArraySpeciesCreate: require('./2017/ArraySpeciesCreate'),
	Call: require('./2017/Call'),
	CanonicalNumericIndexString: require('./2017/CanonicalNumericIndexString'),
	CharacterRange: require('./2017/CharacterRange'),
	CompletePropertyDescriptor: require('./2017/CompletePropertyDescriptor'),
	CompletionRecord: require('./2017/CompletionRecord'),
	CreateDataProperty: require('./2017/CreateDataProperty'),
	CreateDataPropertyOrThrow: require('./2017/CreateDataPropertyOrThrow'),
	CreateHTML: require('./2017/CreateHTML'),
	CreateIterResultObject: require('./2017/CreateIterResultObject'),
	CreateListFromArrayLike: require('./2017/CreateListFromArrayLike'),
	CreateMethodProperty: require('./2017/CreateMethodProperty'),
	DateFromTime: require('./2017/DateFromTime'),
	Day: require('./2017/Day'),
	DayFromYear: require('./2017/DayFromYear'),
	DaysInYear: require('./2017/DaysInYear'),
	DayWithinYear: require('./2017/DayWithinYear'),
	DefinePropertyOrThrow: require('./2017/DefinePropertyOrThrow'),
	DeletePropertyOrThrow: require('./2017/DeletePropertyOrThrow'),
	EnumerableOwnProperties: require('./2017/EnumerableOwnProperties'),
	floor: require('./2017/floor'),
	FromPropertyDescriptor: require('./2017/FromPropertyDescriptor'),
	Get: require('./2017/Get'),
	GetGlobalObject: require('./2017/GetGlobalObject'),
	GetIterator: require('./2017/GetIterator'),
	GetMethod: require('./2017/GetMethod'),
	GetOwnPropertyKeys: require('./2017/GetOwnPropertyKeys'),
	GetPrototypeFromConstructor: require('./2017/GetPrototypeFromConstructor'),
	GetSubstitution: require('./2017/GetSubstitution'),
	GetV: require('./2017/GetV'),
	HasOwnProperty: require('./2017/HasOwnProperty'),
	HasProperty: require('./2017/HasProperty'),
	HourFromTime: require('./2017/HourFromTime'),
	InLeapYear: require('./2017/InLeapYear'),
	InstanceofOperator: require('./2017/InstanceofOperator'),
	Invoke: require('./2017/Invoke'),
	IsAccessorDescriptor: require('./2017/IsAccessorDescriptor'),
	IsArray: require('./2017/IsArray'),
	IsCallable: require('./2017/IsCallable'),
	IsCompatiblePropertyDescriptor: require('./2017/IsCompatiblePropertyDescriptor'),
	IsConcatSpreadable: require('./2017/IsConcatSpreadable'),
	IsConstructor: require('./2017/IsConstructor'),
	IsDataDescriptor: require('./2017/IsDataDescriptor'),
	IsExtensible: require('./2017/IsExtensible'),
	IsGenericDescriptor: require('./2017/IsGenericDescriptor'),
	IsInteger: require('./2017/IsInteger'),
	IsPromise: require('./2017/IsPromise'),
	IsPropertyDescriptor: require('./2017/IsPropertyDescriptor'),
	IsPropertyKey: require('./2017/IsPropertyKey'),
	IsRegExp: require('./2017/IsRegExp'),
	IsSharedArrayBuffer: require('./2017/IsSharedArrayBuffer'),
	IterableToList: require('./2017/IterableToList'),
	IteratorClose: require('./2017/IteratorClose'),
	IteratorComplete: require('./2017/IteratorComplete'),
	IteratorNext: require('./2017/IteratorNext'),
	IteratorStep: require('./2017/IteratorStep'),
	IteratorValue: require('./2017/IteratorValue'),
	MakeDate: require('./2017/MakeDate'),
	MakeDay: require('./2017/MakeDay'),
	MakeTime: require('./2017/MakeTime'),
	max: require('./2017/max'),
	min: require('./2017/min'),
	MinFromTime: require('./2017/MinFromTime'),
	modulo: require('./2017/modulo'),
	MonthFromTime: require('./2017/MonthFromTime'),
	msFromTime: require('./2017/msFromTime'),
	NormalCompletion: require('./2017/NormalCompletion'),
	ObjectCreate: require('./2017/ObjectCreate'),
	ObjectDefineProperties: require('./2017/ObjectDefineProperties'),
	OrdinaryCreateFromConstructor: require('./2017/OrdinaryCreateFromConstructor'),
	OrdinaryDefineOwnProperty: require('./2017/OrdinaryDefineOwnProperty'),
	OrdinaryGetOwnProperty: require('./2017/OrdinaryGetOwnProperty'),
	OrdinaryGetPrototypeOf: require('./2017/OrdinaryGetPrototypeOf'),
	OrdinaryHasInstance: require('./2017/OrdinaryHasInstance'),
	OrdinaryHasProperty: require('./2017/OrdinaryHasProperty'),
	OrdinarySetPrototypeOf: require('./2017/OrdinarySetPrototypeOf'),
	OrdinaryToPrimitive: require('./2017/OrdinaryToPrimitive'),
	QuoteJSONString: require('./2017/QuoteJSONString'),
	RegExpCreate: require('./2017/RegExpCreate'),
	RegExpExec: require('./2017/RegExpExec'),
	RequireObjectCoercible: require('./2017/RequireObjectCoercible'),
	SameValue: require('./2017/SameValue'),
	SameValueNonNumber: require('./2017/SameValueNonNumber'),
	SameValueZero: require('./2017/SameValueZero'),
	SecFromTime: require('./2017/SecFromTime'),
	Set: require('./2017/Set'),
	SetFunctionName: require('./2017/SetFunctionName'),
	SetIntegrityLevel: require('./2017/SetIntegrityLevel'),
	SpeciesConstructor: require('./2017/SpeciesConstructor'),
	SplitMatch: require('./2017/SplitMatch'),
	StringCreate: require('./2017/StringCreate'),
	StringGetOwnProperty: require('./2017/StringGetOwnProperty'),
	SymbolDescriptiveString: require('./2017/SymbolDescriptiveString'),
	TestIntegrityLevel: require('./2017/TestIntegrityLevel'),
	thisBooleanValue: require('./2017/thisBooleanValue'),
	thisNumberValue: require('./2017/thisNumberValue'),
	thisStringValue: require('./2017/thisStringValue'),
	thisTimeValue: require('./2017/thisTimeValue'),
	TimeClip: require('./2017/TimeClip'),
	TimeFromYear: require('./2017/TimeFromYear'),
	TimeWithinDay: require('./2017/TimeWithinDay'),
	ToBoolean: require('./2017/ToBoolean'),
	ToDateString: require('./2017/ToDateString'),
	ToIndex: require('./2017/ToIndex'),
	ToInt16: require('./2017/ToInt16'),
	ToInt32: require('./2017/ToInt32'),
	ToInt8: require('./2017/ToInt8'),
	ToInteger: require('./2017/ToInteger'),
	ToLength: require('./2017/ToLength'),
	ToNumber: require('./2017/ToNumber'),
	ToObject: require('./2017/ToObject'),
	ToPrimitive: require('./2017/ToPrimitive'),
	ToPropertyDescriptor: require('./2017/ToPropertyDescriptor'),
	ToPropertyKey: require('./2017/ToPropertyKey'),
	ToString: require('./2017/ToString'),
	ToUint16: require('./2017/ToUint16'),
	ToUint32: require('./2017/ToUint32'),
	ToUint8: require('./2017/ToUint8'),
	ToUint8Clamp: require('./2017/ToUint8Clamp'),
	Type: require('./2017/Type'),
	UTF16Decode: require('./2017/UTF16Decode'),
	UTF16Encoding: require('./2017/UTF16Encoding'),
	ValidateAndApplyPropertyDescriptor: require('./2017/ValidateAndApplyPropertyDescriptor'),
	ValidateAtomicAccess: require('./2017/ValidateAtomicAccess'),
	ValidateTypedArray: require('./2017/ValidateTypedArray'),
	WeekDay: require('./2017/WeekDay'),
	YearFromTime: require('./2017/YearFromTime')
};

module.exports = ES2017;
