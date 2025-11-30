# IMetabasePolicy.AuditClipboardOperations

IMetabasePolicy.AuditClipboardOperations
-


# IMetabasePolicy.AuditClipboardOperations


## Синтаксис


AuditClipboardOperations: Boolean;


## Описание


Свойство AuditClipboardOperations
 определяет признак протоколирования операций копирования в буфер обмена.


## Комментарии


При значении True [операции
 копирования в буфер обмена](Admin.chm::/03_Admin/Access_control_settings.htm#clipboard) будут протоколироваться.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MPolicy: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MPolicy := MS.Policy;

    // Установим протоколирование операций копирования в буфер обмена

    MPolicy.AuditClipboardOperations := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет включено протоколирование операций копирования
 в буфер обмена.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
