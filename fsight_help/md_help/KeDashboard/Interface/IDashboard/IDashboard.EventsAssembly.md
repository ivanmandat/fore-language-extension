# IDashboard.EventsAssembly

IDashboard.EventsAssembly
-


# IDashboard.EventsAssembly


## Синтаксис


EventsAssembly: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство EventsAssembly определяет
 описание объекта среды разработки, который будет использоваться для обработки
 событий информационной панели.


## Комментарии


Класс для обработки событий указывается в свойстве [EventsClass](IDashboard.EventsClass.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие информационной
 панели с идентификатором DASHBOARD. Также предполагается наличие модуля
 M_DASH_EVENTS, содержащего класс CUserEvents.


Добавьте ссылки на системные сборки: Dashboard, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Dashboard: IDashboard;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие на редактирование информационной панели

	    Dashboard := Mb.ItemById("DASHBOARD").Edit As IDashboard;

	    // Подключение обработчика событий

	    Dashboard.EventsAssembly := Mb.ItemById("M_DASH_EVENTS");

	    Dashboard.EventsClass := "CUserEvents";

	    // Сохранение изменений

	    Dashboard.MetabaseObject.Save;

	End Sub UserProc;


При выполнении примера для информационной панели будет задан обработчик
 событий.


См. также:


[IDashboard](idashboard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
