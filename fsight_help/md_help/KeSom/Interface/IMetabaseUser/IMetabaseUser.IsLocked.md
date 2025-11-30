# IMetabaseUser.IsLocked

IMetabaseUser.IsLocked
-


# IMetabaseUser.IsLocked


## Синтаксис


IsLocked: Boolean;


## Описание


Свойство IsLocked определяет
 блокировку учетной записи указанного пользователя.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    User: IMetabaseUser;

    MS: IMetabaseSecurity;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Заблокируем пользователя
 USER

    User := MS.ResolveName("USER") As IMetabaseUser;

    User.IsLocked := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера пользователь USER будет заблокирован.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
