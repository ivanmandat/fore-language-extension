# IEtlObject.Task

IEtlObject.Task
-


# IEtlObject.Task


## Синтаксис


Task: [IEtlTask](../IEtlTask/IEtlTask.htm);


## Описание


Свойство Task возвращает задачу
 ETL, в которой создан объект.


## Комментарии


Использование свойства может привести к утечке памяти.


Для предотвращения утечки памяти:


	- не используйте [глобальные
	 переменные](KeFore.chm::/Interface/ISharedParams/ISharedParams.htm) для хранения значения свойства;


	- при работе со свойством в классе используйте локальные переменные
	 свойств/методов класса.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором OBJ_ETL.


Добавьте ссылки на системные сборки: Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Etl: IEtlTask;

	    EtlObj: IEtlObject;

	    Count: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим задачу ETL

	    Etl := MB.ItemById("OBJ_ETL").Edit As IEtlTask;

	    EtlObj := Etl.Item(0);

	    // Выведем в консоль количество объектов в задаче ETL

	    Count := EtlObj.Task.Count;

	    Debug.WriteLine("Количество объектов в задаче ETL: " + Count.ToString);

	End Sub UserProc;


В результате выполнения примера в консоль будет выведено количество
 объектов, содержащихся в задаче ETL.


См. также:


[IEtlObject](IEtlObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
