# IDomains.Add

IDomains.Add
-


# IDomains.Add


## Синтаксис


Add(Name: String): [IDomain](../IDomain/IDomain.htm);


## Параметры


Name. Имя добавляемого домена.


## Описание


Метод Add добавляет домен в
 коллекцию.


## Пример


Для выполнения примера убедитесь, что в менджере безопасности содержится
 доменный пользователь «DOMAIN_USER» и рабочая станция «WORKSTATION» в
 домене «DOMAIN_TEST».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    User: IMetabaseUser;

    Dms: IDomains;

    Dm: IDomain;

    Sts: IStations;

    St: IStation;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Получим параметры
 доменного пользователя

    User := MS.ResolveName("DOMAIN_USER") As IMetabaseUser;

    Sts := User.Stations;

    Dms := Sts.Domains;

    // Откроем доступ пользователю к рабочей станции в заданном домене

    Dm := Dms.Add("DOMAIN_TEST");

    Sts := Dm.Stations;

    Sts.Refresh;

    St := Sts.FindByName("WORKSTATION");

    St.Included := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера для пользователя «DOMAIN_USER» будет изменена
 политика доступа. Доступ под этим пользователем будет разрешен только
 с рабочей станции «WORKSTATION», входящей в домен «DOMAIN_TEST».


См. также:


[IDomains](IDomains.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
