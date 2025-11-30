# IMetabaseUser.StationMACs

IMetabaseUser.StationMACs
-


# IMetabaseUser.StationMACs


## Синтаксис


StationMACs: [IDomainStations](../IDomainStations/IDomainStations.htm);


## Описание


Свойство StationMACs возвращает
 коллекцию, содержащую MAC-адреса компьютеров, с которых разрешен доступ
 пользователя.


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

    // Зададим разрешенный MAC-адрес

    User := MS.ResolveName("USER") As IMetabaseUser;

    User.StationMACs.Add("00-14-85-5F-62-D4");

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера для пользователя USER будет разрешен доступ
 только с MAC-адреса «00-14-85-5F-62-D4». По умолчанию пользователю разрешен
 доступ в систему с любых рабочих станции, IP и MAC-адресов.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
