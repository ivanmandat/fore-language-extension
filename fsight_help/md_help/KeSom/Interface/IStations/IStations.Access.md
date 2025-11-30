# IStations.Access

IStations.Access
-


# IStations.Access


## Синтаксис


Access: [StationAccessType](../../Enums/StationAccessType.htm);


## Описание


Свойство Access определяет тип
 доступа для станций из коллекции.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Sec: IMetabaseSecurity;

	    User: IMetabaseUser;

	    Stations: IStations;

	Begin

	    MB := MetabaseClass.Active;

	    Sec := MB.Security;

	    User := Sec.ResolveName("ADMIN") As IMetabaseUser;

	    Stations := User.Stations;

	    Debug.WriteLine(Stations.Access);

	End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведено значение,
 определяющее тип доступа для станций из коллекции пользователя ADMIN.


См. также:


[IStations](IStations.htm)
 | [IDomainStations](../IDomainStations/IDomainStations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
