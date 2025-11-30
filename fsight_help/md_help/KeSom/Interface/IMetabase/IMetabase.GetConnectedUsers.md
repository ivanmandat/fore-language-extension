# IMetabase.GetConnectedUsers

IMetabase.GetConnectedUsers
-


# IMetabase.GetConnectedUsers


## Синтаксис


GetConnectedUsers: [IConnectedUsersInfo](../IConnectedUsersInfo/IConnectedUsersInfo.htm);


## Описание


Метод GetConnectedUsers позволяет
 получить информацию о пользователях, подключенных к репозиторию.


Примечание.
 Для пользователя, осуществляющего просмотр или отключение подключенных
 к репозиторию пользователей, на сервере Oracle должен быть грант Select
 на представление V_$SESSION.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


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

	        Debug.WriteLine("Пользователь СУБД: " + User.UserOsName + "; Пользователь ОС: " +

	        User.UserOsName);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена информация
 по всем пользователям, подключенным к текущему репозиторию.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
