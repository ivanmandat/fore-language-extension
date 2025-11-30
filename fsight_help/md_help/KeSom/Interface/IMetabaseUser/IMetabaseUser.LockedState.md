# IMetabaseUser.LockedState

IMetabaseUser.LockedState
-


# IMetabaseUser.LockedState


## Синтаксис


LockedState: [MetabaseUserLockedState](../../Enums/MetabaseUserLockedState.htm);


## Описание


Свойство LockedState определяет
 состояние блокировки пользователя.


## Комментарии


При установке состояния «LockedForever» не будет возможности произвести
 разблокировку пользователя. Блокировать другого пользователя может пользователь,
 обладающий привилегией «Создание, удаление пользователей». По умолчанию
 данной привилегией обладает ADMIN.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    User: IMetabaseUser;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Заблокируем пользователя USER

    User := MS.ResolveName("USER") As IMetabaseUser;

    User.LockedState := MetabaseUserLockedState.LockedForever;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера пользователь USER будет заблокирован навсегда.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
