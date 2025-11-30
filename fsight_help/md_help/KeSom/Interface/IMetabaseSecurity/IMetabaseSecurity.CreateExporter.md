# IMetabaseSecurity.CreateExporter

IMetabaseSecurity.CreateExporter
-


# IMetabaseSecurity.CreateExporter


## Синтаксис


CreateExporter: [IMetabaseSecurityExporter](../IMetabaseSecurityExporter/IMetabaseSecurityExporter.htm);


## Описание


Метод CreateExporter создает
 объект для экспорта настроек политики безопасности и прав доступа.


## Комментарии


Экспорт прав доступа может производить пользователь, обладающий привилегией
 «Изменение метки безопасности и списка контроля доступа любого объекта».


Экспорт настроек политики безопасности может производить пользователь,
 обладающий привилегией «Изменение прав пользователей, раздача ролей, изменение
 политики».


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

    // Экспортируем настройки политики безопасности и прав доступа

    Exporter := MB.Security.CreateExporter;

    Exporter.FileName := "C:\MetabasePolicy.csv";

    Exporter.ExportPolicy;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет произведен экспорт настроек политики
 безопасности в указанный файл. Если файл уже существует, то он будет перезаписан.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
