# ISaveMetabaseObjectHandlers.RemoveByClassId

ISaveMetabaseObjectHandlers.RemoveByClassId
-


# ISaveMetabaseObjectHandlers.RemoveByClassId


## Синтаксис


RemoveByClassId(ClassId: [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm)):
 Boolean;


## Параметры


ClassId. Класс объектов репозитория,
 для которого создан обработчик события на изменение метаданных.


## Описание


Метод RemoveByClassId удаляет
 из коллекции обработчик событий для указанного класса объектов.


## Комментарии


Метод возвращает значение True,
 если удаление завершилось успешно и False,
 если удаление по каким-либо причинам невозможно.


См. также:


[ISaveMetabaseObjectHandlers](ISaveMetabaseObjectHandlers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
