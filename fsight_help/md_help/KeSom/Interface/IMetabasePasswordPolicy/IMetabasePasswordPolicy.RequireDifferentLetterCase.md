# IMetabasePasswordPolicy.RequireDifferentLetterCase

IMetabasePasswordPolicy.RequireDifferentLetterCase
-


# IMetabasePasswordPolicy.RequireDifferentLetterCase


## Синтаксис


RequireDifferentLetterCase: Boolean;


## Описание


Свойство RequireDifferentLetterCase
 определяет запрет использования пароля из букв одного регистра.


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

    // Установим запрет использования пароля из букв одного регистра

    PassPol.RequireDifferentLetterCase := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет установлен запрет на использование пароля
 из букв одного регистра.


См. также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
