# IStation.IsAllowed

IStation.IsAllowed
-


# IStation.IsAllowed


## Синтаксис


IsAllowed: Boolean;


## Описание


Метод IsAllowed возвращает признак
 доступа у пользователя с рабочей станции.


## Комментарии


Метод возвращает значение True,
 если текущий пользователь имеет доступ с рабочей станции и False,
 если не имеет.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Sec: IMetabaseSecurity;

	    User: IMetabaseUser;

	    Stations: IStations;

	    Station: IStation;

	Begin

	    MB := MetabaseClass.Active;

	    Sec := MB.Security;

	    User := Sec.ResolveName("ADMIN") As IMetabaseUser;

	    Stations := User.Stations;

	    Station := Stations.Item(0);

	    Debug.WriteLine(Station.IsAllowed);

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен признак
 возможности доступа с первой рабочей станцией из коллекции пользователя
 «ADMIN».


См. также:


[IStation](IStation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
