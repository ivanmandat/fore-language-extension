# IAuditOperations.IsObjectLabelSupported

IAuditOperations.IsObjectLabelSupported
-


# IAuditOperations.IsObjectLabelSupported


## Синтаксис


IsObjectLabelSupported: Boolean;


## Описание


Свойство IsObjectLabelSupported
 возвращает признак того, установлена ли для объекта, над которым производится
 операция, метка критичности, соответствующая уровню доступа.


## Комментарии


Если для объекта установлена метка критичности, то свойство возвращает
 значение True, иначе - False.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    AL: IAuditLog;

    ALogon: IAuditLogons;

    Operat: IAuditOperations;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Откроем протокол доступа

    Al:=MS.OpenAuditLog;

    ALogon:= AL.OpenLogons(False);

    ALogon.Next;

    Operat:=Al.OpenOperations(ALogon.Session);

    If Operat.IsObjectLabelSupported Then

        Debug.Writeline ("Метка критичности установлена");

        Else

        Debug.Writeline ("Метка критичности не установлена");

    End If;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль будет выведен результат определения
 метки критичности для объекта, над которым была произведена последняя
 операция.


См. также:


[IAuditOperations](IAuditOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
