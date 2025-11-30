# IMetabaseUser.StationIPs

IMetabaseUser.StationIPs
-


# IMetabaseUser.StationIPs


## Синтаксис


StationIPs: [IDomainStations](../IDomainStations/IDomainStations.htm);


## Описание


Свойство StationIPs возвращает
 коллекцию, содержащую IP-адреса компьютеров, с которых разрешен доступ
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

    // Зададим разрешенный IP-адрес

    User := MS.ResolveName("USER") As IMetabaseUser;

    User.StationIPs.Add("10.0.2.158");

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера для пользователя USER будет разрешен доступ
 только с IP-адреса «10.0.2.158». По умолчанию пользователю разрешен доступ
 в систему с любых рабочих станции, IP и MAC-адресов.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
