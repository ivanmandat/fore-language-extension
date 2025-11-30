# IMetabaseSecurityExporter

IMetabaseSecurityExporter
-


# IMetabaseSecurityExporter


## Описание


Интерфейс IMetabaseSecurityExporter предназначен для экспорта настроек политики безопасности и прав доступа.


## Комментарии


Экспорт прав доступа может производить пользователь, обладающий привилегией «Изменение метки безопасности и списка контроля доступа любого объекта».


Экспорт настроек политики безопасности может производить пользователь, обладающий привилегией «Изменение прав пользователей, раздача ролей, изменение политики».


## Свойства


 Имя свойства
 Краткое описание


 ![](../../Property_Image.gif)
 [FileAppend](IMetabaseSecurityExporter.FileAppend.htm)
 Свойство FileAppend определяет, будет ли дополнен файл, в который производится экспорт.


 ![](../../Property_Image.gif)
 [FileName](IMetabaseSecurityExporter.FileName.htm)
 Свойство FileName определяет имя и месторасположение файла, в который будет произведен экспорт.


## Методы


 Имя метода
 Краткое описание


 ![](../../Sub_Image.gif)
 [ExportObjectsRights](IMetabaseSecurityExporter.ExportObjectsRights.htm)
 Метод ExportObjectsRights производит экспорт прав доступа на объекты.


 ![](../../Sub_Image.gif)
 [ExportPolicy](IMetabaseSecurityExporter.ExportPolicy.htm)
 Метод ExportPolicy производит экспорт настроек политики безопасности.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
