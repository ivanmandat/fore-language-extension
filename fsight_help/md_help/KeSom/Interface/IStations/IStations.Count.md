# IStations.Count

IStations.Count
-


# IStations.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 рабочих станций в коллекции.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Sec: IMetabaseSecurity;

	    User: IMetabaseUser;

	    Stations: IStations;

	    Station: IStation;

	    i, c: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Sec := MB.Security;

	    User := Sec.ResolveName("ADMIN") As IMetabaseUser;

	    Stations := User.Stations;

	    For i := 0 To c - 1 Do

	        Station := Stations.Item(i);

	        Debug.WriteLine(Station.Name + '(' + Station.FullName + ')' + ". Comment: " + Station.Comment + ". Access: " + Station.Access.ToString);

	    End For;

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 о рабочих станциях, для которых настроен доступ для указанного пользователя
 репозитория.


См. также:


[IStations](IStations.htm)
 | [IDomainStations](../IDomainStations/IDomainStations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
