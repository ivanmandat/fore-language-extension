# IMetabaseCustomExtender.Events

IMetabaseCustomExtender.Events
-


# IMetabaseCustomExtender.Events


## Синтаксис


		Events: [IMetabaseCustomForeEvents](../IMetabaseCustomForeEvents/IMetabaseCustomForeEvents.htm);


## Описание


Свойство Events возвращает коллекцию
 пользовательских событий.


## Комментарии


Пользовательские события хранятся в метаданных репозитория. Отслеживанием
 наступления событий занимается [планировщик задач](UiAppSrv.chm::/UiAppSrv_purpose.htm).
 Для этого в контейнере задач, который указан в его настройках, должны
 быть задачи, запускаемые при наступлении [настраиваемого
 события](UiAppSrv.chm::/3_Work_Tasks/UiAppSrv_Work_Tasks_CreateTask_TimeTable.htm#customevent).


Событие может наступить в результате выполнения какой-либо другой задачи,
 если для неё задана соответствующая [настройка](UiAppSrv.chm::/3_Work_Tasks/UiAppSrv_Work_Tasks_CreateTask_Rezult.htm#event).
 Также событие может быть сгенерировано из прикладного кода с помощью метода
 [Invoke](KeSom.chm::/Interface/IMetabaseCustomForeEvent/IMetabaseCustomForeEvent.Invoke.htm).


## Пример


Добавьте ссылки на системную сборку Metabase.


Пример создания пользовательского события:


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CustomClassExtender: IMetabaseCustomExtender;

		    Events: IMetabaseCustomForeEvents;

		    ForeEvent: IMetabaseCustomForeEvent;

		Begin

		    MB := MetabaseClass.Active;

		    //Получение контейнера пользовательских классов

		    CustomClassExtender := Mb.SpecialObject(MetabaseSpecialObject.CustomExtender).Edit As IMetabaseCustomExtender;

		    //Получение списка событий

		    Events := CustomClassExtender.Events;

		    ForeEvent := Events.Add("BEGIN_LOAD");

		    ForeEvent.Name := "Вход в приложение";

		    (CustomClassExtender As IMetabaseObject).Save;

		End Sub UserProc;


См. также:


[IMetabaseCustomExtender](IMetabaseCustomExtender.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
