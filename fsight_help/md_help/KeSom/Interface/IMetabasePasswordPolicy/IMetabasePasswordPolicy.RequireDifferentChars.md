# IMetabasePasswordPolicy.RequireDifferentChars

IMetabasePasswordPolicy.RequireDifferentChars
-


# IMetabasePasswordPolicy.RequireDifferentChars


## Синтаксис


RequireDifferentChars: Boolean;


## Описание


Свойство RequireDifferentChars
 определяет запрет использования пароля из одинаковых символов.


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

    // Установим запрет использования пароля из одинаковых символов

    PassPol.RequireDifferentChars := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет установлен запрет на использование пароля
 из одинаковых символов.


См. также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
