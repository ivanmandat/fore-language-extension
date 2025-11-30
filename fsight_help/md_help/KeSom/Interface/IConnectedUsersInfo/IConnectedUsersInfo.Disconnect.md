# IConnectedUsersInfo.Disconnect

IConnectedUsersInfo.Disconnect
-


# IConnectedUsersInfo.Disconnect


## Синтаксис


Disconnect(Value: [IConnectedUserInfo](../IConnectedUserInfo/IConnectedUserInfo.htm));


## Параметры


Value. Пользователь, подключенный
 к репозиторию.


## Описание


Метод Disconnect отключает пользователя
 от репозитория.


## Комментарии


Отключенному пользователю будет выдано сообщение о том, что соединение
 было прервано администратором. Пользователь не будет иметь возможности
 сохранить изменения.


Для пользователя, осуществляющего просмотр или отключение подключенных
 к репозиторию пользователей, на сервере Oracle должен быть грант Select
 на представление V_$SESSION.


## Пример


Для выполнения примера предполагается наличие пользователя USER102,
 подключенного к текущему репозиторию.


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

	        If User.UserName = "USER102" Then

	            Users.Disconnect(User)

	        End If;

	    End For;

	End Sub UserProc;


После выполнения примера будет отключен пользователь, подключенный к
 текущему репозиторию под пользователем USER102.


См. также:


[IConnectedUsersInfo](IConnectedUsersInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
