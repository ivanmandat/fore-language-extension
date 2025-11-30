# INetNetworkCredential.CreateWithUserPassword

INetNetworkCredential.CreateWithUserPassword
-


# INetNetworkCredential.CreateWithUserPassword


## Синтаксис


CreateWithUserPassword(UserName: String; Password:
 String);


## Параметры


UserName. Имя пользователя;


Password. Пароль пользователя.


## Описание


Метод CreateWithUserPassword
 определяет учётные данные пользователя для подключения к серверу.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Net.


			Sub UserProc;

Begin

    SmtpClient := New CurlSmtpClient.CreateWithHost("www.host.net");

    Credent := New CurlNetworkCredential.Create("myusername","mypwd","DOMAIN");

    Credent.CreateWithUserPassword("username_2","pwd_2");

    SmtpClient.ThisHostCredentials("PLAIN") := Credent;

End Sub UserProc;


После выполнения примера для подключения к серверу будут использованы
 учётные данные пользователя username_2.


См. также:


[INetNetworkCredential](INetNetworkCredential.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
