# IMetabaseUser.Stations

IMetabaseUser.Stations
-


# IMetabaseUser.Stations


## Синтаксис


Stations: [IStations](../IStations/IStations.htm);


## Описание


Свойство Stations возвращает
 коллекцию, содержащую список рабочих станций, с которых разрешен
 доступ для пользователя.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь USER.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    User: IMetabaseUser;

    DM: IDomain;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Зададим разрешенную рабочую станцию

    User := MS.ResolveName("USER") As IMetabaseUser;

    DM := User.Stations.Domains.Add("GROUP");

    DM.Stations.Add("1C");

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера для пользователя USER будет разрешен доступ
 только с рабочей станции «1C», расположенной в домене «GROUP». По умолчанию
 пользователю разрешен доступ в систему с любых рабочих станции, IP и MAC-адресов.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
