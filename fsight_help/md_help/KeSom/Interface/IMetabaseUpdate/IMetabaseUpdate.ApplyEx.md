# IMetabaseUpdate.ApplyEx

IMetabaseUpdate.ApplyEx
-


# IMetabaseUpdate.ApplyEx


## Синтаксис


		ApplyEx(Progress: [IMetabaseUpdateProgress](../IMetabaseUpdateProgress/IMetabaseUpdateProgress.htm);
		 Context: [IMetabaseUpdateContext](../IMetabaseUpdateContext/IMetabaseUpdateContext.htm));


## Параметры


Progress. Объект, реализующий
 события, возникающие при выполнении обновления;


Context. Дополнительные настройки
 объекта обновления.


## Описание


Метод ApplyEx осуществляет обновление
 объектов репозитория с использованием дополнительных настроек.


## Комментарии


Метод ApplyEx используется для
 обновления объектов репозитория с учетом настроек, определяемых методами
 интерфейса [IMetabaseUpdateContext](../IMetabaseUpdateContext/IMetabaseUpdateContext.htm).


Если параметру Context придать
 значение Null, то обновление произойдет
 без учёта дополнительных настроек.


## Пример


Пример использования приведён в описании метода [IMetabaseUpdateContext.RegisterIdChange](../IMetabaseUpdateContext/IMetabaseUpdateContext.RegisterIdChange.htm).


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm) | [IMetabaseUpdate.Apply](IMetabaseUpdate.Apply.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
