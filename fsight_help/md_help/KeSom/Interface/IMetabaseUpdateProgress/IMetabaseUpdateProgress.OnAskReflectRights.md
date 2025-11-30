# IMetabaseUpdateProgress.OnAskReflectRights

IMetabaseUpdateProgress.OnAskReflectRights
-


# IMetabaseUpdateProgress.OnAskReflectRights


## Синтаксис


OnAskReflectRights(Var Cancel: Boolean);


## Параметры


Cancel. Параметр, определяющий
 будет ли осуществляться обновление прав доступа к объектам на уровне СУБД.


По умолчанию передается значение False,
 при этом осуществляется обновление прав доступа к объектам на уровне СУБД
 и на уровне платформы.


Если в качестве значения параметра передавать значение True,
 то права будут обновлены только на уровне платформы.


## Описание


Метод OnAskReflectRights реализует
 событие, возникающее перед обновлением прав на объекты.


## Комментарии


Данное событие генерируется во время применения обновления.


## Пример


Использование свойства приведено в примере для [IMetabaseUpdateProgress.OnProgress](IMetabaseUpdateProgress.OnProgress.htm).


См. также:


[IMetabaseUpdateProgress](IMetabaseUpdateProgress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
