# IMetabasePolicy.FailedLogonsCounter_ResetPeriod

IMetabasePolicy.FailedLogonsCounter_ResetPeriod
-


# IMetabasePolicy.FailedLogonsCounter_ResetPeriod


## Синтаксис


FailedLogonsCounter_ResetPeriod: Integer;


## Описание


Свойство FailedLogonsCounter_ResetPeriod
 определяет период (в минутах), после которого сбрасывается счетчик количества
 неудачных попыток входа в систему.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Установим период, после которого сбрасывается счетчик

    Policy.FailedLogonsCounter_ResetPeriod := 10;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера счетчик количества
 неверных входов в систему будет сбрасываться через десять минут.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
