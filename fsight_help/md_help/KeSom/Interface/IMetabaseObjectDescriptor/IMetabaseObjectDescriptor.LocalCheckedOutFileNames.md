# IMetabaseObjectDescriptor.LocalCheckedOutFileNames

IMetabaseObjectDescriptor.LocalCheckedOutFileNames
-


# IMetabaseObjectDescriptor.LocalCheckedOutFileNames


## Синтаксис


		LocalCheckedOutFileNames: Array;


## Описание


Свойство LocalCheckedOutFileNames
 возвращает строковый массив, содержащий список локальных файлов, в которых
 хранятся измененные данные объекта.


## Комментарии


Свойство актуально для объектов, добавленных в [систему
 управления версиями](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Introduction.htm) и может использоваться в качестве
 параметра FileNames для метода
 [IMetabase.CheckInFiles](../IMetabase/IMetabase.CheckInFiles.htm)
 или [IMetabase.UndoCheckOutFiles](../IMetabase/IMetabase.UndoCheckOutFiles.htm).
 При добавлении объектов в систему управления версиями автоматически создаются
 файлы, которые хранят локальные версии объектов. Набор файлов зависит
 от типа объектов.


Для получения подробной информации обратитесь к разделу «[Добавление
 объектов в систему управления версиями](UiDevEnv.chm::/01_Development_Environment/06_Version_Control_System/VSC_Add_Object.htm)».


## Пример


Использование свойства приведено в примере для [IMetabase.CheckInFiles](../IMetabase/IMetabase.CheckInFiles.htm).


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
