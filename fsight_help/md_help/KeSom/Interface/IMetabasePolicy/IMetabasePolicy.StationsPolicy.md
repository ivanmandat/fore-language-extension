# IMetabasePolicy.StationsPolicy

IMetabasePolicy.StationsPolicy
-


# IMetabasePolicy.StationsPolicy


## Синтаксис


StationsPolicy: [IStations](../IStations/IStations.htm);


## Описание


Свойство StationsPolicy возвращает
 список станций, с которых запрещен вход в текущий репозиторий.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Lic: Object;

    Stat: IStations;

    St: IStation;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Добавим в список станций новую рабочую станцию

    Stat := Policy.StationsPolicy;

    Stat.Refresh;

    St := Stat.FindByName("TEST_PC");

    St.Access := StationAccessType.Forbidden;

    St.Included := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в список станций, с которых запрещен вход в
 текущий репозиторий, будет добавлена рабочая станция «TEST_PC».


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
