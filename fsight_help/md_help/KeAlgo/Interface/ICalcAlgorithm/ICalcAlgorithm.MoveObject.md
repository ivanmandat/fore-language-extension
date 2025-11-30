# ICalcAlgorithm.MoveObject

ICalcAlgorithm.MoveObject
-


# ICalcAlgorithm.MoveObject


## Синтаксис


MoveObject(Source: [ICalcObject](../ICalcObject/ICalcObject.htm),
 Target: [ICalcObject](../ICalcObject/ICalcObject.htm));


## Параметры


Source. Объект алгоритма расчёта,
 который необходимо переместить;


Target. Объект алгоритма расчёта,
 на место которого будет перемещен указанный объект.


## Описание


Метод MoveObject изменяет порядок
 объектов алгоритма расчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должно содержаться
 не менее трёх объектов.


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

	    Source, Target: ICalcObject;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Переместим первый объект на место третьего

	    Source := List.Item(0) As ICalcObject;

	    Target := List.Item(2) As ICalcObject;

	    CalcAlgo.MoveObject(Block1, Block3);

	    // Сохраним изменения в алгоритме расчёта

	    CalcAlgo.SaveObject;

	End Sub UserProc;


В результате выполнения примера в алгоритме расчёта будет изменен порядок
 объектов для расчёта: на место третьего объекта переместится первый, на
 место первого - второй, на место второго - третий.


См. также:


[ICalcAlgorithm](ICalcAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
