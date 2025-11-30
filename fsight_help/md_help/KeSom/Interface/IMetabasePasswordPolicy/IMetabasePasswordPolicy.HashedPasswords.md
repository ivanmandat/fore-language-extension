# IMetabasePasswordPolicy.HashedPasswords

IMetabasePasswordPolicy.HashedPasswords
-


# IMetabasePasswordPolicy.HashedPasswords


## Синтаксис


HashedPasswords: [IHashedPasswords](../IHashedPasswords/IHashedPasswords.htm);


## Описание


Свойство HashedPasswords определяет
 параметры хеширования пароля.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MBPolicy: IMetabasePolicy;

    MBPasswordPolicy: IMetabasePasswordPolicy;

    HPass: IHashedPasswords;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MBPolicy := MS.Policy;

    MBPasswordPolicy := MBPolicy.PasswordPolicy;

    HPass := MBPasswordPolicy.HashedPasswords;

    // Установим хеширование паролей

    HPass.IsON := True;

    HPass.ExcludeAdmin := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет включено хеширование паролей, при этом
 пароль администратора хешироваться не будет.


См. также:


[IMetabasePasswordPolicy](IMetabasePasswordPolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
