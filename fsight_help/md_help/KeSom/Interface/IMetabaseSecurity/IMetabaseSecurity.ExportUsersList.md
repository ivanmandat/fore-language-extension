# IMetabaseSecurity.ExportUsersList

IMetabaseSecurity.ExportUsersList
-


# IMetabaseSecurity.ExportUsersList


## Синтаксис


ExportUsersList(FileName:
 String);


## Параметры


FileName. Имя и месторасположение
 файла, в который будет произведен экспорт.


## Описание


Метод ExportUsersList производит
 [экспорт](Admin.chm::/03_Admin/Admin_AdminObjects_AuditTuning.htm#export)
 списка пользователей в файл.


## Комментарии


В файл сохраняется только отображаемая в [списке](Admin.chm::/03_Admin/Users/Admin_Users.htm)
 менеджера безопасности информация, поэтому следует учитывать [настроенное
 отображение столбцов](admin.chm::/03_Admin/admin_adminobjects_audittuning.htm) и используемую фильтрацию.


Для экспорта списка в виде таблицы укажите файл в формате CSV(*.csv).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    // Произведем экспорт списка пользователей в файл

    MB.Security.ExportUsersList("C:\UsersList.csv");

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет произведен экспорт списка пользователей
 в виде таблицы в указанный файл.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
