# IMetabaseSecurityExporter.FileName

IMetabaseSecurityExporter.FileName
-


# IMetabaseSecurityExporter.FileName


## Синтаксис


FileName: String;


## Описание


Свойство FileName определяет имя и месторасположение файла, в который будет произведен экспорт.


## Комментарии


Файл должен иметь расширение *.csv. Если задан несуществующий файл, то при экспорте он будет создан. Если задан существующий файл, то в зависимости от значения свойства [FileAppend](IMetabaseSecurityExporter.FileAppend.htm) он будет перезаписан или дополнен.


## Пример


Использование свойства приведено в примере для [IMetabaseSecurityExporter.ExportPolicy](IMetabaseSecurityExporter.ExportPolicy.htm).


См. также:


[IMetabaseSecurityExporter](IMetabaseSecurityExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
