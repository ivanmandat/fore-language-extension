# ObjectUpdateDataBatchMode

ObjectUpdateDataBatchMode
-


# ObjectUpdateDataBatchMode


## Описание


Перечисление ObjectUpdateDataBatchMode содержит варианты обновления данных объекта.


Используется следующими свойствами и методами:


-
 [IMetabaseUpdateDataObjectNode.BatchMode](../Interface/IMetabaseUpdateDataObjectNode/IMetabaseUpdateDataObjectNode.BatchMode.htm);


-
[ICubeMetaUpdateAdditionalObjectDataSettings.BatchMode](KeCubes.chm::/Interface/ICubeMetaUpdateAdditionalObjectDataSettings/ICubeMetaUpdateAdditionalObjectDataSettings.BatchMode.htm).


## Допустимые значения


 Значение
 Краткое описание


 -1
 Default. Новые записи добавляются, имеющиеся будут обновлены, отсутствующие будут удалены.


 0
 Override. Переписывать все данные объекта. Перед обновлением осуществляется очистка обновляемого объекта.


 1
 InsertOnly. Только дополнять новыми записями данные объекта.


 2
 UpdateOnly. Только обновлять данные объекта без добавления новых записей.


 3
 UpdateInsert. Обновлять и дополнять данные объекта. В обновляемом объекте будут оставлены записи/элементы, отсутствующие в исходном объекте.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
