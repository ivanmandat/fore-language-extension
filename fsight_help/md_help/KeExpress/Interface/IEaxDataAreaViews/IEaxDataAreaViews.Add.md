# IEaxDataAreaViews.Add

IEaxDataAreaViews.Add
-


# IEaxDataAreaViews.Add


## Синтаксис


Add(Value: [IEaxObject](../IEaxObject/IEaxObject.htm)):
 Boolean;


## Параметры


Value. Объект для работы с
 представлением аналитической области данных.


## Описание


Метод Add добавляет в коллекцию
 существующий объект для работы с представлением аналитической области
 данных.


## Комментарии


Если представление было создано, то метод вернет значение True.


Для удаления объекта для работы с представлением аналитической области
 данных по его индексу используйте [IEaxDataAreaViews.Remove](IEaxDataAreaViews.Remove.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором REG_REPORT, содержащего аналитическую область
 данных.


Добавьте ссылки на системные сборки: Express, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Grid: IEaxObject;

	    Views: IEaxDataAreaViews;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Report := MB.ItemById("REG_REPORT").Edit As IPrxReport;

	    // Получим представление таблицы

	    Views := Report.DataArea.Views;

	    Grid := Views.Item(0);

	    // Добавим представление в коллекцию

	    Views.Add(Grid);

	    // Выведем в окно консоли идентификатор объекта-родителя представления

	    Debug.WriteLine("Идентификатор объекта-родителя представлений - " + Views.Slice.Id);

	    // Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в регламентном отчете:


	- в коллекцию будет добавлено представление аналитической области
	 данных;


	- в окно консоли выведется идентификатор объекта-родителя представления.


См. также:


[IEaxDataAreaViews](IEaxDataAreaViews.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
