# IDomains.Item

IDomains.Item
-


# IDomains.Item


## Синтаксис


		Item(Index: Integer): [IDomain](../IDomain/IDomain.htm);


## Параметры


Index. Индекс домена в коллекции.


## Описание


Свойство Item возвращает домен
 из коллекции по индексу.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера убедитесь, что в менджере безопасности содержится
 доменный пользователь DOMAIN_USER с доступом к [рабочим
 станциям](Admin.chm::/03_Admin/Users/Admin_UserProp_Time.htm#workstations).


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Sec: IMetabaseSecurity;

		    User: IMetabaseUser;

		    St: IStations;

		    Dm: IDomains;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    Sec := MB.Security;

		    // Получим параметры
		 доменного пользователя

		    User := Sec.ResolveName("DOMAIN_USER") As IMetabaseUser;

		    St := User.Stations;

		    Dm := St.Domains;

		    // Выведем в консоль список доступных доменов

		    For i := 0 To Dm.Count - 1 Do

		        Debug.WriteLine(Dm.Item(i).Name);

		    End For;

		End Sub UserProc;


После выполнения примера в консоль будет выведен список доменов, к которым
 относятся рабочие станции в коллекции пользователя DOMAIN_USER.


См. также:


[IDomains](IDomains.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
