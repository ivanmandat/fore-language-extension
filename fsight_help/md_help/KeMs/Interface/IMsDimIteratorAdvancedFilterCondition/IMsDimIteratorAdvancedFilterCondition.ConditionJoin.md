# IMsDimIteratorAdvancedFilterCondition.ConditionJoin

IMsDimIteratorAdvancedFilterCondition.ConditionJoin
-


# IMsDimIteratorAdvancedFilterCondition.ConditionJoin


## Синтаксис


ConditionJoin: [MsLogicalOperator](../../Enums/MsLogicalOperator.htm);


## Описание


Свойство ConditionJoin определяет
 логический оператор при объединении условий расширенного фильтра.


## Пример


Для выполнения примера в репозитории предполагается наличие алгоритма
 расчёта с идентификатором ALGORITHM, в котором содержится блок расчёта.
 Для блока расчёта должен быть выбран приёмник, в котором содержится хотя
 бы два измерения. Для первого измерения задан расширенный фильтр и добавлены
 несколько условий фильтрации.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms. Также добавьте
 ссылки на сборки, которые [необходимы](KeAlgo.chm::/Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObjectDescriptor;

    Algo, CalcBlock: ICalcObject;

    List: ICalcObjectsList;

    CalcAlgo: ICalcAlgorithm;

    Block: ICalcBlock;

    AdvancedFilter: IMsDimIteratorAdvancedFilter;

    Condition: IMsDimIteratorAdvancedFilterCondition;

    MultiDimIter: IMsCalculationChainMultiDimIterator;

    Dims: IMsDimIteratorDimensions;

    Dim: IMsDimIteratorDimension;

    Filter: IMsDimIteratorFilter;

    CountDims: Integer;

Begin

    MB := MetabaseClass.Active;

    // Получим алгоритм расчёта

    MObj := MB.ItemById("ALGORITHM");

    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

    CalcAlgo := Algo As ICalcAlgorithm;

    // Получим список объектов алгоритма расчёта

    List := CalcAlgo.Items;

    // Получим блок расчёта

    CalcBlock := List.Item(0);

    Block := CalcBlock As ICalcBlock;

    // Получим многомерный итератор блока расчёта

    MultiDimIter := Block.Iterator;

    // Получим коллекцию измерений приёмника данных

    Dims := MultiDimIter.Dimensions;

    // Получим первое измерение приёмника данных

    CountDims := Dims.Count;

    Dim := Dims.Item(CountDims - 1);

    // Настроим расширенный фильтр для полученного измерения

    Filter := Dim.Filter;

    AdvancedFilter := Filter.AdvancedFilter;

    // Получим второе условие фильтрации

    Condition := AdvancedFilter.Item(1);

    // Изменим логический оператор

    Condition.ConditionJoin := MsLogicalOperator.Or_;

    // Сохраним изменения в блоке расчёта

    Block.SaveObject;

End Sub UserProc;


В результате выполнения примера для второго условия фильтрации, заданного
 в расширенном фильтре, будет изменен логический оператор с «И» на «ИЛИ».


См. также:


[IMsDimIteratorAdvancedFilterCondition](IMsDimIteratorAdvancedFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
