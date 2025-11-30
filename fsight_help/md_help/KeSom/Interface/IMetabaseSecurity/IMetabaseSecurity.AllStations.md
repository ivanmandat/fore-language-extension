# IMetabaseSecurity.AllStations

IMetabaseSecurity.AllStations
-


# IMetabaseSecurity.AllStations


## Синтаксис


		AllStations: [IStations](../IStations/IStations.htm);


## Описание


Свойство AllStations возвращает
 коллекцию рабочих станций, имеющихся в сети, в которой осуществляется
 работа с платформой.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    Stat: IStations;

		    St: IStation;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    // Получим список рабочих станций

		    Stat := MS.AllStations;

		    Stat.Refresh;

		    Debug.WriteLine("Список рабочих станций: ");

		    For Each St In Stat Do

		        Debug.WriteLine(St.Name + " " + St.FullName);

		    End For;

		End Sub UserProc;


После выполнения примера в консоль будет выведен список всех рабочих
 станций, входящих в сеть. Для этих станций в дальнейшем можно ограничить
 доступ полностью или частично для конкретных пользователей.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
