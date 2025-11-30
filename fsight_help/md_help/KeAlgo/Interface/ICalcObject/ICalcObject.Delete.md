# ICalcObject.Delete

ICalcObject.Delete
-


# ICalcObject.Delete


## Синтаксис


Delete;


## Описание


Метод Delete удаляет объект
 алгоритма расчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM.


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    Debug.WriteLine("Наименование: " + Algo.Name);

	    Debug.WriteLine("Идентификатор: " + Algo.Id);

	    Debug.WriteLine("Ключ: " + Algo.Key.ToString);

	    // Удаление алгоритма расчёта

	    Algo.Delete;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 об алгоритме расчёта. После этого алгоритм будет удалён из репозитория.


См. также:


[ICalcObject](ICalcObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
