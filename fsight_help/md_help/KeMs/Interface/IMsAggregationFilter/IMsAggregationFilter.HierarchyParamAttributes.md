# IMsAggregationFilter.HierarchyParamAttributes

IMsAggregationFilter.HierarchyParamAttributes
-


# IMsAggregationFilter.HierarchyParamAttributes


## Синтаксис


		HierarchyParamAttributes: [IMsModelParamAttributes](../IMsModelParamAttributes/IMsModelParamAttributes.htm);


## Описание


Свойство HierarchyParamAttributes
 возвращает настройки привязки альтернативной иерархии к атрибутам параметра.


## Комментарии


Привязка к атрибуту параметра позволяет динамически менять используемую
 при расчёте альтернативную иерархию. Указываемый атрибут должен иметь
 целый тип данных и хранить ключи справочников, являющихся альтернативными
 иерархиями измерения, для которого настраиваются фильтр.


## Пример


Для выполнения примера в репозитории предполагается наличие алгоритма
 расчёта с идентификатором ALGORITHM и стандартного куба с идентификатором
 CUBE. В алгоритме расчёта должен быть создан блок агрегации, в кубе имеются
 измерения с идентификатором PROCESS и VERSION. Для измерения PROCESS настроены
 альтернативные иерархии. В структуре измерения VERSION создан атрибут
 HKEY, содержащий ключи альтернативных иерархий измерения PROCESS.


Добавьте ссылку на пользовательскую сборку «Ядро
 алгоритма расчёта», которая содержится в компоненте «Алгоритмы
 расчёта», и ссылки на системные сборки: Algo, Cubes, Dimensions,
 Metabase, Ms, Transform.


Добавьте ссылки на системные сборки:


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj, Dim: IMetabaseObjectDescriptor;

		    Algo, Aggr: ICalcObject;

		    List: ICalcObjectsList;

		    CalcAlgo: ICalcAlgorithm;

		    Block: ICalcAggr;

		    Stub: IVariableStub;

		    StandCub: IStandardCube;

		    Params: IMsModelParams;

		    Param: IMsModelParam;

		    DimInst: IDimInstance;

		    Filter: IMsAggregationFilter;

		    HieParamAttrs: IMsModelParamAttributes;

		Begin

		    MB := MetabaseClass.Active;

		    // Получим алгоритм расчёта

		    MObj := MB.ItemById("ALGORITHM");

		    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

		    CalcAlgo := Algo As ICalcAlgorithm;

		    // Получим список объектов алгоритма расчёта

		    List := CalcAlgo.Items;

		    // Получим блок агрегации с индексом «0»

		    Aggr := List.Item(0);

		    Block := Aggr As ICalcAggr;

		    // Получим куб

		    StandCub := MB.ItemById("CUBE").Edit As IStandardCube;

		    Stub := StandCub As IVariableStub;

		    // Зададим куб в качестве приёмника данных

		    Block.Stub := Stub;

		    // Добавим параметр

		    Params := Block.Params;

		    Param := Params.Add;

		    Param.Id := "Version";

		    Param.Name := "Версия";

		    Param.ParamType := TsParamType.Selection;

		    Param.LinkedStub := Stub;

		    Dim := MB.ItemById("VERSION");

		    Param.LinkedObject := Dim;

		    // Настроим фильтрацию для указанного измерения

		    DimInst := StandCub.Destinations.Item(0).Dimensions.FindById("PROCESS").OpenDimension;

		    Filter := Block.AggregatorFilter(DimInst);

		    HieParamAttrs := Filter.HierarchyParamAttributes;

		    HieParamAttrs.Parameter := Param;

		    HieParamAttrs.Attributes.Add((Dim.Open(Null) As IDimInstance).Attributes.FindById("HKEY").Attribute);

		    // Сохраним изменения в блоке агрегации

		    Block.SaveObject;

		End Sub UserProc;


В результате выполнения примера будут изменены настройки для блока агрегации
 алгоритма расчёта:


	- будет создан параметр на основе справочника VERSION;


	- в качестве приёмника будет установлен куб CUBE;


	- для измерения PROCESS будет настроено динамическое управление
	 альтернативной иерархией через значения атрибута HKEY измерения VERSION.


См. также:


[IMsAggregationFilter](IMsAggregationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
