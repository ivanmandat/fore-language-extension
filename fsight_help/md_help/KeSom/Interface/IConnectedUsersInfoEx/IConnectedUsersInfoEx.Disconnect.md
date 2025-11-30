# IConnectedUsersInfoEx.Disconnect

IConnectedUsersInfoEx.Disconnect
-


# IConnectedUsersInfoEx.Disconnect


## Синтаксис


		Disonnect(Value: [IConnectedUserInfoEx](../IConnectedUserInfoEx/IConnectedUserInfoEx.htm));


## Описание


Метод Disconnect отключает активного
 пользователя от репозитория.


## Пример


Для выполнения примера предполагается наличие компонента Button с идентификатором
 Button1.


Добавьте ссылку на системную сборку Metabase.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    MB: IMetabase;

		    User: IConnectedUserInfoEx;

		    Users: IConnectedUsersInfoEx;

		Begin

		    MB := MetabaseClass.Active;

		    Users := MB.GetConnectedUsersEx;

		    If Users.Count < 5 Then

		            Debug.Write("Количество подключённых пользователей меньше 5");

		    Else

		        User := Users.Item(5);

		        Users.Disconnect(User);

		    End If;

		End Sub Button1OnClick;


В результате выполнения примера, после нажатия
 кнопки будет произведена проверка на количество активных пользователей
 репозитория. Если количество активных пользователей меньше 5, то в консоли
 будет выведено сообщение «Количество подключённых пользователей меньше
 5». Если количество подключённых пользователей больше 5, то будет произведено
 отключение пользователя с идентификатором 5.


См. также:


[IConnectedUsersInfoEx](IConnectedUsersInfoEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
