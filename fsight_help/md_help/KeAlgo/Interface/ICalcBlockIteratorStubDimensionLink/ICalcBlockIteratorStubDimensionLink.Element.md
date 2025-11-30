# ICalcBlockIteratorStubDimensionLink.Element

ICalcBlockIteratorStubDimensionLink.Element
-


# ICalcBlockIteratorStubDimensionLink.Element


## Синтаксис


Element: Integer;


## Описание


Свойство Element определяет
 способ фиксации отметки измерения в операндах формул расчёта при удалении
 связи.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM, в котором содержится [блок
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm). Для блока расчёта должны быть выбраны [приёмник](CalculationAlgorithm.chm::/Desktop/Calculation_block/Master_calculation_block_page_consumer.htm)
 и [источники
 данных](CalculationAlgorithm.chm::/Desktop/Calculation_block/Page_Sources.htm), в которых содержатся хотя бы два измерения.
 Для второго измерения источника данных настроена [связь](CalculationAlgorithm.chm::/Desktop/Calculation_block/Page_Sources.htm#link)
 в упрощенном режиме.


Добавьте ссылки на системные сборки: Algo, Dimensions, Metabase. Также
 добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    CalcBlock: ICalcObject;

	    Block: ICalcBlock;

	    IteratorModel: ICalcBlockIteratorModel;

	    IteratorStub: ICalcBlockIteratorStub;

	    IteratorStubs: ICalcBlockIteratorStubs;

	    DelLink: ICalcBlockIteratorStubDimensionLinks;

	    DimensionDelLink: ICalcBlockIteratorStubDimension;

	Begin

	    // Получим алгоритм расчёта

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Получим блок расчёта

	    CalcBlock := List.Item(0);

	    Block := CalcBlock As ICalcBlock;

	    // Настроим связи между измерениями источника и приёмника данных

	    IteratorModel := Block.EditIteratorModel;

	    // Получим коллекцию источников данных

	    IteratorStubs := IteratorModel.Stubs;

	    // Получим первый источник данных

	    IteratorStub := IteratorStubs.Item(0);

	    // Получим второе измерение, для которого будет удалена связь

	    DimensionDelLink := IteratorStub.Dimensions.Item(1);

	    DelLink := DimensionDelLink.Links;

	    // Зафиксируем первый элемент измерения при удалении, если источник используется формуле

	    If IteratorStub.HasUsedFormulesForLinkById = True Then

	        DelLink.Item(0).Element := 0;

	    End If;

	    // Удалим связь второго измерения источника

	    DelLink.RemoveAt(0);

	    // Сохраним изменения параметров связи

	    IteratorModel.Save;

	    // Сохраним блок расчёта

	    Block.SaveObject;

	End Sub UserProc;


В результате выполнения примера будет удалена настроенная связь второго
 измерения источника с измерением приёмника данных. Если при удалении связи
 источник используется в [формуле
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Formula.htm), то будет зафиксирован первый элемент, используемый
 в качестве отметки по измерению.


См. также:


[ICalcBlockIteratorStubDimensionLink](ICalcBlockIteratorStubDimensionLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
