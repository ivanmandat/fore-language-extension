# ISaveMetabaseObjectHandlers.ItemByClassId

ISaveMetabaseObjectHandlers.ItemByClassId
-


# ISaveMetabaseObjectHandlers.ItemByClassId


## Синтаксис


ItemByClassId(ClassId: [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm)):
 [ISaveMetabaseObjectHandler](../ISaveMetabaseObjectHandler/ISaveMetabaseObjectHandler.htm);


## Параметры


ClassId. Класс объектов репозитория,
 для которого создан обработчик события на изменение метаданных.


## Описание


Свойство ItemByClassId возвращает
 настройки обработчика событий для указанного класса объектов.


## Комментарии


Метод возвращает значение Null,
 если для указанного класса объектов не настроен обработчик событий.


См. также:


[ISaveMetabaseObjectHandlers](ISaveMetabaseObjectHandlers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
