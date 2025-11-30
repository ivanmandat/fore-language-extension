# ICalcAlgorithm.Stubs

ICalcAlgorithm.Stubs
-


# ICalcAlgorithm.Stubs


## Синтаксис


Stubs: [IVariableStubsCollection](../IVariableStubsCollection/IVariableStubsCollection.htm);


## Описание


Свойство Stubs возвращает коллекцию
 приёмников и источников данных [блоков
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm) и [блоков
 контроля](CalculationAlgorithm.chm::/Desktop/Control_Block/Control_Block.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны содержаться
 блоки расчёта и блоки контроля, в которых добавлены [приёмники](CalculationAlgorithm.chm::/Desktop/Calculation_block/Master_calculation_block_page_consumer.htm)
 и [источники
 данных](CalculationAlgorithm.chm::/Desktop/Calculation_block/Page_Sources.htm).


Добавьте ссылки на системные сборки: Algo, Cubes, Metabase. Также добавьте
 [ссылку на сборку](../../Intro/KeAlgo_Programming.htm), необходимую
 для работы с алгоритмом расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    Stubs: IVariableStubsCollection;

	    Stub: IVariableStub;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим коллекцию приёмников и источников данных блоков расчёта и блоков контроля

	    Stubs := CalcAlgo.Stubs;

	    // Выведем в консоль информацию о приёмниках и источниках данных

	    For i := 0 To Stubs.Count-1 Do

	        Stub := Stubs.Item(i);

	        Debug.Write("Наименование: " + Stub.Name + ", ");

	        Debug.WriteLine("количество измерений в кубе: " + Stub.DimensionCount.ToString)

	    End For;

	End Sub UserProc;


В результате выполнения примера в консоль будет выведена информация
 о приёмниках и источниках данных, например:


Наименование: Куб показателей, количество измерений
 в кубе: 2


Наименование: Куб-приёмник, количество измерений
 в кубе: 4


Наименование: Куб с управляемыми измерениями, количество
 измерений в кубе: 3


См. также:


[ICalcAlgorithm](ICalcAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
