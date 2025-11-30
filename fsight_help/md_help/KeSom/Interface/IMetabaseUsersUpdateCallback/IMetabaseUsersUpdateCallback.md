# IMetabaseUsersUpdateCallback

IMetabaseUsersUpdateCallback
-


# IMetabaseUsersUpdateCallback


Сборка: Metabase;


## Описание


Интерфейс IMetabaseUsersUpdateCallback
 содержит свойства и методы для работы с действием, выполняемым при возникновении
 критической ошибки при обновлении пользователей.


## Иерархия наследования


           IMetabaseUsersUpdateCallback


## Комментарии


Свойства и методы интерфейса должны быть переопределены в пользовательском
 классе. Экземпляр объекта пользовательского класса может быть задан в
 качестве значения свойства [IMetabaseUsersUpdate.Callback](../IMetabaseUsersUpdate/IMetabaseUsersUpdate.Callback.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CallbackResult](IMetabaseUsersUpdateCallback.CallbackResult.htm)
		 Свойство CallbackResult
		 определяет действие при возникновении критической ошибки.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Process](IMetabaseUsersUpdateCallback.Process.htm)
		 Метод Process возвращает
		 пользователя, который обновляется в данный момент.


		 ![](../../Sub_Image.gif)
		 [RequestAction](IMetabaseUsersUpdateCallback.RequestAction.htm)
		 Метод RequestAction
		 запрашивает действие в случае возникновения ошибки при обновлении
		 пользователя.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
