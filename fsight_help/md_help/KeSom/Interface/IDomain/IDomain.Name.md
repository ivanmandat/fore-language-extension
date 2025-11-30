# IDomain.Name

IDomain.Name
-


# IDomain.Name


## Синтаксис


		Name: String;


## Описание


Свойство Name возвращает наименование
 домена.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера убедитесь, что в менджере безопасности содержится
 доменный пользователь «DOMAIN_USER» с доступом к [рабочим
 станциям](Admin.chm::/03_Admin/Users/Admin_UserProp_Time.htm#workstations).


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    User: IMetabaseUser;

		    St: IStations;

		    Dm: IDomains;

		    Domain: IDomain;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    // Получим параметры
		 доменного пользователя

		    User := MS.ResolveName("DOMAIN_USER") As IMetabaseUser;

		    St := User.Stations;

		    Dm := St.Domains;

		    // Выведем в консоль параметры доменного пользователя

		    Domain := Dm.Item(0);

		    Debug.WriteLine("Домен: " + Domain.Name);

		    Debug.WriteLine("Описание: " + Domain.Comment);

		    Debug.WriteLine("Доступ к рабочим станциям: ");

		    For i := 0 To Domain.Stations.Count - 1 Do

		        Debug.WriteLine(Domain.Stations.Item(i).Name);

		    End For;

		End Sub UserProc;


После выполнения примера в консоль будет выведен домен пользователя,
 описание и список разрешенных рабочих станций.


См. также:


[IDomain](IDomain.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
