# ISaveMetabaseObjectHandler.ClassId

ISaveMetabaseObjectHandler.ClassId
-


# ISaveMetabaseObjectHandler.ClassId


## Синтаксис


ClassId: Integer;


## Описание


Свойство ClassId определяет
 класс объектов, для которых используется обработчик событий.


## Комментарии


В качестве значения свойства указывается один из элементов перечисления
 [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).
 Если обработчик событий задаётся для [расширений
 продукта «Форсайт. Аналитическая платформа»](Setup.chm::/Extensions/install_or_update_extensions.htm),
 то необходимый класс объекта можно получить в коллекции [IMetabaseCustomExtender.Classes](../IMetabaseCustomExtender/IMetabaseCustomExtender.Classes.htm)
 в свойстве [IMetabaseCustomClass.ClassId](../IMetabaseCustomClass/IMetabaseCustomClass.ClassId.htm).


См. также:


[ISaveMetabaseObjectHandler](ISaveMetabaseObjectHandler.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
