# IMetabasePasswordPolicy.MaxRepeatedCharCount

IMetabasePasswordPolicy.MaxRepeatedCharCount
-


# IMetabasePasswordPolicy.MaxRepeatedCharCount


## Синтаксис


MaxRepeatedCharCount: Integer;


## Описание


Свойство MaxRepeatedCharCount
 определяет максимальное количество повторяющихся символов, которые могут
 быть использованы в пароле.


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

    // Установим количество повторяющихся символов в пароле

    PassPol.MaxRepeatedCharCount := 2;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в пароле пользователя можно будет использовать
 два повторяющихся символа.


См.
 также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
