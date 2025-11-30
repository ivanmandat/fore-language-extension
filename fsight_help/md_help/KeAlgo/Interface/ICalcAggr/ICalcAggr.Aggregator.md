# ICalcAggr.Aggregator

ICalcAggr.Aggregator
-


# ICalcAggr.Aggregator


## Синтаксис


Aggregator(DimModel: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm)):
 [IBasicMatrixAggregator](KeMatrix.chm::/Interface/IBasicMatrixAggregator/IBasicMatrixAggregator.htm);


## Параметры


DimModel. Структура справочника.


## Описание


Свойство Aggregator возвращает
 настройки основного механизма агрегации.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM и стандартного куба с идентификатором
 CUBE. В алгоритме расчёта должен содержаться [блок
 агрегации](CalculationAlgorithm.chm::/Desktop/Aggregation_block/Aggregation_block.htm), в кубе - измерение с идентификатором DIMENSIONS.


Добавьте ссылки на системные сборки: Algo, Cubes, Dimensions, Matrix,
 Metabase. Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
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

    Lvl: IDimLevels;

    BasicAggr: IBasicMatrixAggregator;

    LevAggr: IBasicMatrixLevelAggregator;

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

    // Настроим основной механизм агрегации для указанного измерения

    Dim := StandCub.Dimensions.FindById("DIMENSIONS");

    BasicAggr := Block.Aggregator(Dim.Dimension);

    // Получим уровни измерения

    Lvl := Dim.Dimension.Levels;

    // Зададим параметры для уровня по умолчанию

    LevAggr := BasicAggr.DefaultLevelAggregation;

    LevAggr.Operation := BasicAggregatorOperation.ArithmeticalMean;

    LevAggr.PreserveExistingData := True;

    LevAggr.PreserveMethod := ExistingDataPreserveMethod.OnNull;

    // Сохраним изменения в блоке агрегации

    Block.SaveObject;

End Sub UserProc;


В результате выполнения примера для блока агрегации будет задан стандартный
 куб в качестве приёмника данных и настроена агрегация данных для измерения
 с идентификатором DIMENSIONS.


См. также:


[ICalcAggr](ICalcAggr.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
