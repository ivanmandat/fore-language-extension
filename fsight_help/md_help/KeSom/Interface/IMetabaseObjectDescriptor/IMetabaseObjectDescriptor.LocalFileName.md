# IMetabaseObjectDescriptor.LocalFileName

IMetabaseObjectDescriptor.LocalFileName
-


# IMetabaseObjectDescriptor.LocalFileName


## Синтаксис


LocalFileName: String;


## Описание


Свойство LocalFileName возвращает
 наименование, используемое для формирования имен локальных файлов, в которых
 хранятся данные объекта.


## Комментарии


Свойство актуально для объектов, добавленных в систему управления версиями.
 Наименования локальных файлов, в которых хранится информация об объекте,
 формируются путем добавления к наименованию LocalFileName
 необходимого расширения. Полный список файлов можно получить в свойстве
 [IMetabaseObjectDescriptor.LocalFileNames](IMetabaseObjectDescriptor.LocalFileNames.htm).


Файлы, создаваемые для объектов, представлены в разделе «[Добавление
 объектов в систему управления версиями](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Add_Object.htm)».


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
