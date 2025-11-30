# IMetabaseSecurityExporter.ExportObjectsRights

IMetabaseSecurityExporter.ExportObjectsRights
-


# IMetabaseSecurityExporter.ExportObjectsRights


## Синтаксис


ExportObjectsRights(Order: [MetabaseExportObjectsRightsOrder](../../Enums/MetabaseExportObjectsRightsOrder.htm));


## Параметры


Order. Определяет порядок записей
 в файле.


## Описание


Метод ExportObjectsRights производит
 экспорт прав доступа на объекты.


## Комментарии


Перед вызовом метода следует определить имя и расположение файла (свойство
 [FileName](IMetabaseSecurityExporter.FileName.htm)), в который
 будет произведен экспорт.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Exporter: IMetabaseSecurityExporter;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    // Экспортируем права доступа

    Exporter := MB.Security.CreateExporter;

    Exporter.FileName := "C:\MetabaseObjectsRights.csv";

    Exporter.ExportObjectsRights(MetabaseExportObjectsRightsOrder.Hierarchical);

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет произведен экспорт прав доступа в указанный
 файл. Если файл уже существовал, то он будет перезаписан.


См. также:


[IMetabaseSecurityExporter](IMetabaseSecurityExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
