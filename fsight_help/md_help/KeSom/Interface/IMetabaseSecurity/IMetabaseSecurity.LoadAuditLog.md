# IMetabaseSecurity.LoadAuditLog

IMetabaseSecurity.LoadAuditLog
-


# IMetabaseSecurity.LoadAuditLog


## Синтаксис


LoadAuditLog(FileName:
 String): [IAuditLog](../IAuditLog/IAuditLog.htm);


## Параметры


FileName. Путь и наименование
 файла, содержащего архивированный протокол доступа.


## Описание


Метод LoadAuditLog осуществляет
 загрузку [архивированного
 протокола доступа](Admin.chm::/05_AccessProtocol/Admin_AccessProtocol_Save.htm) из файла, передаваемого посредством
 параметра FileName.


## Комментарии


Метод работает с архивированными протоколами доступа, сохраненными в
 формате *.pplog.


Для выполнения архивации протокола доступа в файл используйте метод
 [IAuditLog.Archive](../IAuditLog/IAuditLog.Archive.htm).


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 «C» файла «Log.pplog», содержащего архивированный протокол доступа за
 какой-либо период.


Добавьте ссылку на системную сборку Metabase.


			Sub Main;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Log: IAuditLog;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Загрузим протокол доступа из файла

    Log := MS.LoadAuditLog("C:\Log.pplog");

    // Выведем в консоль количество записей в протоколе

    Debug.WriteLine(Log.CountOperations);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub Main;


После выполнения примера из файла будет загружен архивированный протокол
 доступа. Количество записей, содержащихся в протоколе, будет выведено
 в консоль среды разработки.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
