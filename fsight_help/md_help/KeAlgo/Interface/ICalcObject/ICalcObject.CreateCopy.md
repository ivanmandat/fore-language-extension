# ICalcObject.CreateCopy

ICalcObject.CreateCopy
-


# ICalcObject.CreateCopy


## Синтаксис


CreateCopy(OpenForEdit: Boolean): [ICalcObject](ICalcObject.htm);


## Параметры


OpenForEdit. Разрешение или
 запрет редактирования объекта алгоритма расчёта.


## Описание


Метод CreateCopy создаёт копию
 объекта алгоритма расчёта.


## Комментарии


Допустимые значения параметра OpenForEdit:


	- True. Редактирование
	 объекта алгоритма расчёта доступно;


	- False. Редактирование
	 объекта алгоритма расчёта недоступно.


## Пример


Для выполнения примера в репозитории предполагается наличие алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны содержаться
 настроенные объекты.


Добавьте ссылки на системные сборки: Algo. Также добавьте [ссылку
 на сборку](../../Intro/KeAlgo_Programming.htm), необходимую для работы с алгоритмом расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    CalcAlgo: ICalcAlgorithm;

	    Objects: ICalcObjectsList;

	    Algo, CalcAlgObj, CopyObj: ICalcObject;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Создадим копию первого блока

	    Objects := CalcAlgo.Items;

	    CalcAlgObj := Objects.Item(0);

	    CopyObj := CalcAlgObj.CreateCopy(True);

	    CopyObj.Name := "Копия блока";

	    Objects.Add(CopyObj);

	    // Сохранение изменений

	    CopyObj.SaveObject;

	    Algo.SaveObject;

	End Sub UserProc;


При выполнении примера в алгоритме расчёта будет создана копия первого
 имеющегося объекта.


См. также:


[ICalcObject](ICalcObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
