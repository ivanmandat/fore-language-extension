# IMetabaseUpdateUserEvents.OnAskReflectRights

IMetabaseUpdateUserEvents.OnAskReflectRights
-


# IMetabaseUpdateUserEvents.OnAskReflectRights


## Синтаксис


OnAskReflectRights(Var Cancel: Boolean);


## Параметры


Cancel. Признак вывода на экран
 запрос на обновление прав доступа к объектам на уровне СУБД.


## Описание


Метод OnAskReflectRights реализует
 событие, возникающее перед обновлением прав на объекты.


## Комментарии


По умолчанию параметру Cancel
 передается значение False, при
 этом на экран выводится запрос на обновление прав доступа к объектам на
 уровне СУБД. Если в качестве значения параметра передавать значение True, то диалог выводится не будет,
 права будут обновлены только на уровне платформы.


## Пример


Использование свойства приведено в примере для [IMetabaseUpdateUserEvents.OnAskConstraintsHandling](IMetabaseUpdateUserEvents.OnAskConstraintsHandling.htm).


См. также:


[IMetabaseUpdateUserEvents](IMetabaseUpdateUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
