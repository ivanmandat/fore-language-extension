# ICalcAggr.AggregatorFilter

ICalcAggr.AggregatorFilter
-


# ICalcAggr.AggregatorFilter


## Синтаксис


AggregatorFilter(DimInst: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)):
 [IMsAggregationFilter](KeMs.chm::/Interface/IMsAggregationFilter/IMsAggregationFilter.htm);


## Параметры


DimInst. Данные справочника.


## Описание


Свойство AggregatorFilter возвращает
 настройки фильтрации измерения приёмника данных.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM и стандартного куба с идентификатором
 CUBE. В алгоритме расчёта должен содержаться [блок
 агрегации](CalculationAlgorithm.chm::/Desktop/Aggregation_block/Aggregation_block.htm), в кубе - измерение с идентификатором DIMENSIONS.


Добавьте ссылки на системные сборки: Algo, Cubes, Dimensions, Metabase,
 Ms. Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObjectDescriptor;

    Algo, Aggr: ICalcObject;

    List: ICalcObjectsList;

    CalcAlgo: ICalcAlgorithm;

    Block: ICalcAggr;

    Stub: IVariableStub;

    StandCub: IStandardCube;

    Dim: IStandardCubeDimension;

    DimInst: IDimInstance;

    Filter: IMsAggregationFilter;

    Selection: IDimSelection;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    // Получим алгоритм расчёта

    MObj := MB.ItemById("ALGORITHM");

    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

    CalcAlgo := Algo As ICalcAlgorithm;

    // Получим список объектов алгоритма расчёта

    List := CalcAlgo.Items;

    // Получим блок агрегации
 с индексом «0»

    Aggr := List.Item(0);

    Block := Aggr As ICalcAggr;

    // Получим куб

    StandCub := MB.ItemById("CUBE").Edit As IStandardCube;

    Stub := StandCub As IVariableStub;

    // Зададим куб в качестве приёмника данных

    Block.Stub := Stub;

    // Настроим фильтрацию для
 указанного измерения

    Dim := StandCub.Dimensions.FindById("DIMENSIONS");

    DimInst := Dim.OpenDimension;

    Filter := Block.AggregatorFilter(DimInst);

    // Зададим отметку измерения

    Selection := DimInst.CreateSelection;

    For i := 0 To 4 Do

        Selection.SelectElement(i, False);

    End For;

    Filter.AggregationSelection := Selection;

    Block.SelectionControl.Apply;

    // Сохраним изменения в блоке агрегации

    Block.SaveObject;

End Sub UserProc;


В результате выполнения примера для блока агрегации будет задан стандартный
 куб в качестве приёмника данных и настроена фильтрация данных для измерения
 с идентификатором DIMENSIONS по первым пяти отмеченным элементам.


См. также:


[ICalcAggr](ICalcAggr.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
