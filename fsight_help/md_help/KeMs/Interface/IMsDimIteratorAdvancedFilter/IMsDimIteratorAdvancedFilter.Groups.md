# IMsDimIteratorAdvancedFilter.Groups

IMsDimIteratorAdvancedFilter.Groups
-


# IMsDimIteratorAdvancedFilter.Groups


## Синтаксис


Groups: [IMsDimIteratorAdvancedFilterConditionGroups](../IMsDimIteratorAdvancedFilterConditionGroups/IMsDimIteratorAdvancedFilterConditionGroups.htm);


## Описание


Свойство Groups возвращает коллекцию
 групп условий расширенного фильтра.


## Пример


Для выполнения примера в репозитории предполагается наличие алгоритма
 расчёта с идентификатором ALGORITHM, в котором содержится блок расчёта.
 Для блока расчёта должен быть выбран приёмник, в котором содержится хотя
 бы два измерения. Для первого измерения задан расширенный фильтр и добавлены
 четыре условия фильтрации.


Добавьте ссылки на системные сборки: Algo, Dimensions, Metabase, Ms.
 Также добавьте ссылки на сборки, которые [необходимы](KeAlgo.chm::/Intro/KeAlgo_Programming.htm)
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

    Group: IMsDimIteratorAdvancedFilterConditionGroup;

    MultiDimIter: IMsCalculationChainMultiDimIterator;

    Dims: IMsDimIteratorDimensions;

    Dim: IMsDimIteratorDimension;

    Filter: IMsDimIteratorFilter;

    Groups: IMsDimIteratorAdvancedFilterConditionGroups;

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

    // Получим коллекцию групп условий фильтрации

    Groups := AdvancedFilter.Groups;

    // Удалим существующие группы условий

    Groups.Clear;

    // Добавим новую группу условий

    Group := Groups.Add;

    // Добавим в группу условия фильтрации с индексом 2 и 3

    Condition := AdvancedFilter.Item(2);

    Group.AddCondition(Condition);

    Condition := AdvancedFilter.Item(3);

    Group.AddCondition(Condition);

    // Сохраним изменения в блоке расчёта

    Block.SaveObject;

End Sub UserProc;


В результате выполнения примера будут сгруппированы третий и четвёртый
 условия фильтрации, заданные в расширенном фильтре для первого измерения
 приёмника в блоке расчёта.


См. также:


[IMsDimIteratorAdvancedFilter](IMsDimIteratorAdvancedFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
