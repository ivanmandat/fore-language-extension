# IMetabasePasswordPolicy.MaxAge

IMetabasePasswordPolicy.MaxAge
-


# IMetabasePasswordPolicy.MaxAge


## Синтаксис


MaxAge: Integer;


## Описание


Свойство MaxAge определяет максимальный
 срок действия пароля (дней).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MU: IMetabasePolicy;

    PassPol: IMetabasePasswordPolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MU := MS.Policy;

    PassPol := MU.PasswordPolicy;

    // Установим максимальный срок действия пароля (в днях)

    PassPol.MaxAge := 90;

    PassPol.WarningMaxAge := 5;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет задан максимальный срок действия пароля
 - 90 дней и включено предупреждение о необходимости смены пароля за 5
 дней до конца срока.


См. также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
