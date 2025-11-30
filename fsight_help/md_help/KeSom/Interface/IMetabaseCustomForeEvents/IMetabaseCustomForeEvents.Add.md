# IMetabaseCustomForeEvents.Add

IMetabaseCustomForeEvents.Add
-


# IMetabaseCustomForeEvents.Add


## Синтаксис


Add(Id: String): [IMetabaseCustomForeEvent](../IMetabaseCustomForeEvent/IMetabaseCustomForeEvent.htm);


## Параметры


Id. Идентификатор пользовательского
 события.


## Описание


Метод Add добавляет новое пользовательское
 событие в коллекцию.


## Комментарии


Для очистки коллекции пользовательских событий используйте метод [IMetabaseCustomForeEvents.Clear](IMetabaseCustomForeEvents.Clear.htm).


## Примеры


Добавьте ссылку на системную сборку Metabase.


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

		    ForeEvent := Events.Add("EVENT_ENTER");

		    ForeEvent.Name := "Вход в приложение";

		    (CustomClassExtender As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера будет создано новое пользовательское событие.


См. также:


[IMetabaseCustomForeEvents](IMetabaseCustomForeEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
