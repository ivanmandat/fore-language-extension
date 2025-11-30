# IEtlTask.EventsAssembly

IEtlTask.EventsAssembly
-


# IEtlTask.EventsAssembly


## Синтаксис


EventsAssembly: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство EventsAssembly определяет
 объект репозитория, который будет использоваться для обработки событий.


## Комментарии


Для использования данного свойства определите класс обработчика событий
 через свойство [IEtlTask.EventsClass](IEtlTask.EventsClass.htm).


Обработчиками событий для задачи ETL могут являться объекты Fore.


## Пример


Для выполнения примера в репозитории необходимо наличие:


	- задачи ETL с идентификатором ETL_TASK;


	- объекта Fore с идентификатором IETLTASKEXECUTIONEVENTS, в котором
	 описан класс «[EventsClass](../IEtlTaskExecutionEvents/IEtlTaskExecutionEvents.OnEndBlock.htm)».


Добавьте ссылки на системные сборки: Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Etltask: IEtlTask;

	    Object: IMetabaseObjectDescriptor;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим задачу ETL

	    Etltask := MB.ItemById("ETL_TASK").Edit As IEtlTask;

	    // Получим и установим модуль-обработчик событий

	    Object := MB.ItemById("IEtlTaskExecutionEvents") As IMetabaseObjectDescriptor;

	    Etltask.EventsAssembly := Object;

	    Etltask.EventsClass := "EventsClass";

	    // Сохраним изменения

	    (Etltask As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера указанная задача ETL будет использовать обработчик
 событий.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
