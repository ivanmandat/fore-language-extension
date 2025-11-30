# INetServiceProxy.Active

INetServiceProxy.Active
-


# INetServiceProxy.Active


## Синтаксис


Active: Boolean;


## Описание


Свойство Active определяет,
 используется ли прокси-сервер.


## Комментарии


Допустимые значения:


	- True. Прокси-сервер
	 используется;


	- False. Значение по умолчанию.
	 Прокси-сервер не используется.


## Пример


Добавьте ссылки на системные сборки: Net.


					Sub UserProc;

		Var

		    Proxy: INetServiceProxy;

		Begin

		    Proxy := New NetServiceProxy.Create;

		    Proxy.Active := True;

		    Proxy.Address := "proxy.server.ru";

		    Proxy.Port := "8080";

		    Proxy.NeedAuthentication := True;

		    Proxy.User := "User";

		    Proxy.Password := "Password";

		    Proxy.NoProxyString := "*.project.com,localhost";

		    Proxy.Save;

		    Debug.WriteLine(Proxy.ConnectionString);

		End Sub UserProc;


При выполнении примера будет включено использование прокси-сервера при
 работе с сетью Internet. Для прокси-сервера будут заданы необходимые параметры:
 адрес и порт, данные пользователя для аутентификации на прокси-сервере,
 список доменов, работа с которым будет осуществляться напрямую.


В консоль среды разработки будет выведена полная строка подключения
 к прокси-серверу, которая будет сформирована на базе заданных настроек.


См. также:


[INetServiceProxy](INetServiceProxy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
