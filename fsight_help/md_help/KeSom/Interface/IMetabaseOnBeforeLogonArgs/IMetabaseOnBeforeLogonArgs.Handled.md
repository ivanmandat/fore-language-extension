# IMetabaseOnBeforeLogonArgs.Handled

IMetabaseOnBeforeLogonArgs.Handled
-


# IMetabaseOnBeforeLogonArgs.Handled


## Синтаксис


		Handled: Boolean;


## Описание


Свойство Handled определяет,
 будет ли переопределено подключение к репозиторию.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом осуществляется подключение к тому репозиторию и с теми параметрами,
 какие были переданы в операции веб-сервиса. Если требуется изменить параметры
 подключения или полностью переопределить репозиторий, к которому будет
 осуществлено подключение, установите в свойстве значение True.


## Пример


Пример использования приведён в описании метода [IMetabaseCustomEvents.OnBeforeLogon](../IMetabaseCustomEvents/IMetabaseCustomEvents.OnBeforeLogon.htm).


См. также:


[IMetabaseOnBeforeLogonArgs](IMetabaseOnBeforeLogonArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
