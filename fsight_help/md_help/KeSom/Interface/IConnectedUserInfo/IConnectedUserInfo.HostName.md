# IConnectedUserInfo.HostName

IConnectedUserInfo.HostName
-


# IConnectedUserInfo.HostName


## Синтаксис


HostName: String;


## Описание


Свойство HostName возвращает
 наименование рабочей станции, с которой осуществлено подключение к репозиторию.


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Users: IConnectedUsersInfo;

	    User: IConnectedUserInfo;

	Begin

	    MB := MetabaseClass.Active;

	    Users := MB.GetConnectedUsers;

	    For Each User In Users Do

	        Debug.WriteLine("Станция: " + User.HostName + "; MAC-адрес: " + User.NETAddress);

	        Debug.WriteLine("Пользователь СУБД: " + User.UserName + "; Пользователь ОС: " + User.UserOsName);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 по всем пользователям, подключенным к текущему репозиторию.


См. также:


[IConnectedUserInfo](IConnectedUserInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
