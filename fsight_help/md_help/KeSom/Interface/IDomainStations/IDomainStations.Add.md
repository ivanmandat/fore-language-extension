# IDomainStations.Add

IDomainStations.Add
-


# IDomainStations.Add


## Синтаксис


Add(Name: String): [IStation](../IStation/IStation.htm);


## Параметры


Name. Наименование рабочей
 станции.


## Описание


Метод Add добавляет станцию
 в коллекцию.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    User: IMetabaseUser;

    DS: IDomainStations;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Получим параметры указанного пользователя

    User := MS.ResolveName("USER") As IMetabaseUser;

    DS := User.StationIPs;

    // Добавим IP-адрес, с которого будет разрешен доступ для пользователя

    DS.Add("10.0.0.111");

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера для пользователя USER будет разрешен доступ
 только с IP-адреса «10.0.0.111». По умолчанию пользователю разрешен доступ
 в систему с любых рабочих станции, IP и MAC-адресов.


См. также:


[IDomainStations](IDomainStations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
