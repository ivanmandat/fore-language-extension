# ICalcBlockIteratorStubDimensionLink.StartPosition

ICalcBlockIteratorStubDimensionLink.StartPosition
-


# ICalcBlockIteratorStubDimensionLink.StartPosition


## Синтаксис


StartPosition: [MsDimSelectionOffsetStartPosition](KeMs.chm::/Enums/MsDimSelectionOffsetStartPosition.htm);


## Описание


Свойство StartPosition определяет
 тип смещения элементов.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM, в котором содержится [блок
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm). Для блока расчёта должны быть выбраны [приёмник](CalculationAlgorithm.chm::/Desktop/Calculation_block/Master_calculation_block_page_consumer.htm)
 и [источники
 данных](CalculationAlgorithm.chm::/Desktop/Calculation_block/Page_Sources.htm), в которых содержатся хотя бы два измерения.
 Для второго измерения источника данных настроена [связь](CalculationAlgorithm.chm::/Desktop/Calculation_block/Page_Sources.htm#link)
 в упрощенном режиме.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
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

	    IteratorStubDimension: ICalcBlockIteratorStubDimension;

	    IteratorStubDimensions: ICalcBlockIteratorStubDimensions;

	    Link: ICalcBlockIteratorStubDimensionLink;

	    Links: ICalcBlockIteratorStubDimensionLinks;

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

	    // Получим коллекцию измерений источника данных

	    IteratorStubDimensions := IteratorStub.Dimensions;

	    // Получим второе измерение источника данных, для которого настроена связь

	    IteratorStubDimension := IteratorStubDimensions.Item(1);

	    // Получим расширенные настройки связи

	    Links := IteratorStubDimension.Links;

	    Link := Links.Item(0);

	    // Зададим принцип работы связи при расчёте блока

	    Link.Behaviour := MsLinkBehaviour.EmptyCoordAsEmptyValue;

	    // Зададим тип смещения элементов - первый элемент

	    Link.StartPosition := MsDimSelectionOffsetStartPosition.First;

	    // Зададим смещение элементов

	    Link.OffSet := 1;

	    // Сохраним изменения параметров связи

	    IteratorModel.Save;

	    // Сохраним блок расчёта

	    Block.SaveObject;

	End Sub UserProc;


В результате выполнения примера будет настроена расширенная связь второго
 измерения источника с измерением приёмника данных в соответствии с заданными
 параметрами.


См. также:


[ICalcBlockIteratorStubDimensionLink](ICalcBlockIteratorStubDimensionLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
