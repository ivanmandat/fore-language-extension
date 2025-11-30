# ICalcAlgorithm.Included

ICalcAlgorithm.Included
-


# ICalcAlgorithm.Included


## Синтаксис


Included(CalcObject: [ICalcObject](../ICalcObject/ICalcObject.htm)):
 Boolean;


## Параметры


CalcObject. Объект алгоритма
 расчёта.


## Описание


Свойство Included определяет
 [включение/исключение](CalculationAlgorithm.chm::/Desktop/Work/CalculationOrder.htm)
 объекта из расчёта алгоритма.


## Комментарии


Допустимые значения:


	- True. Объект включен
	 в расчёт алгоритма;


	- False. Объект исключен
	 из расчёта алгоритма.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должно содержаться
 не менее двух объектов.


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    Block: ICalcObject;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Исключим из расчёта первый объект

	    Block := List.Item(0) As ICalcObject;

	    CalcAlgo.Included(Block) := False;

	    // Выполним проверку на наличие изменений в алгоритме расчёта

	    If CalcAlgo.IsDirty Then

	        // Выведем в консоль наименование исключенного объекта

	        Debug.WriteLine("«" + Block.Name + "»" + " исключен из расчёта");

	        // Сохраним изменения в алгоритме расчёта

	        CalcAlgo.SaveObject;

	    End If;

	End Sub UserProc;


В результате выполнения примера из расчёта будет исключен первый объект
 алгоритма расчёта. В консоль будет выведено наименование исключенного
 объекта, например:


«Блок функции» исключен из расчёта


См. также:


[ICalcAlgorithm](ICalcAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
