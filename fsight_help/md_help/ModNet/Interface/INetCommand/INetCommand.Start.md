# INetCommand.Start

INetCommand.Start
-


# INetCommand.Start


## Синтаксис


Start(Var Value: Variant);


## Параметры


Value. Данные или запрос, отправляемые
 сетевому ресурсу для обработки.


## Описание


Метод Start инициализирует отправку
 указанного запроса сетевому ресурсу.


## Комментарии


При выполнении [POST-запросов](../INetHttpCommand/INetHttpCommand.Command.htm)
 в параметре Value указывается
 запрос, который будет передан в теле [POST-запрос](../INetHttpCommand/INetHttpCommand.Command.htm)а
 и обработан сервером.


При выполнении [GET-запросов](../INetHttpCommand/INetHttpCommand.Command.htm)
 в параметре Value может быть
 передана пустая строка, а параметры выполнения указываются в [строке
 адреса](../INetHttpService/INetHttpService.Url.htm) сетевого ресурса.


При завершении выполнения запроса результат выполнения будет доступен
 в свойстве [Result](INetCommand.Result.htm).


## Пример


Для выполнения примера предполагается наличие развёрнутого BI-сервера
 «Форсайт. Аналитическая платформа».


Добавьте ссылку на системную сборку Net.


	Sub UserProc;

	Var

	    Service: INetHttpService;

	    Cmd: INetCommand;

	    HttpCmd: INetHttpCommand;

	    Request: Variant;

	    Response, Id: string;

	    IdPos: Integer;

	Begin

	    Service := New NetHttpService.Create;

	    Service.Url := "http://localhost:9090/axis2/services/PP.SOM.Som";

	    // Подключение к веб-сервису

	    Cmd := Service.Connect;

	    HttpCmd := Cmd As INetHttpCommand;

	    HttpCmd.Command := NetHttpCommandType.Post;

	    HttpCmd.AcceptLanguage := "ru";

	    // Подключение к репозиторию

	    Request := "<OpenMetabase>" +

	        "<tDef><id>WAREHOUSE</id></tDef>" +

	        "<tCreds><user><id>User</id></user><pass>Password</pass></tCreds>" +

	        "</OpenMetabase>" ;

	    Cmd.Start(Request);

	    Response := Cmd.Result As String;

	    IdPos := Response.IndexOf("<id>");

	    Id := Response.SubString(IdPos + 4, Response.IndexOf("</id>") - IdPos - 4);

	    Debug.WriteLine("Response: " + Response);

	    Debug.WriteLine("Moniker: " + Id);

	    Debug.WriteLine("ContentType: " + HttpCmd.ContentType);

	    //...

	    // Дальнейшая работа с репозиторием

	    //...

	    // Отключение от репозитория

	    Request := "<CloseMetabase><tMb><id>" + id + "</id></tMb></CloseMetabase>";

	    Cmd.Start(Request);

	    Response := Cmd.Result As String;

	    Debug.WriteLine("Response: " + Response);

	End Sub UserProc;


При выполнения примера осуществляется подключение к BI-серверу. BI-серверу
 будет направлен SOAP-запрос на открытие соединения с репозиторием, полученный
 моникёр соединения будет выведен в консоль среды разработки. После этого
 отправляется запрос на закрытие соединения с репозиторием.


Пример выполнения Json-запросов:


	Sub UserProc;

	Var

	    Service: INetHttpService;

	    Cmd: INetCommand;

	    HttpCmd: INetHttpCommand;

	    Request: Variant;

	    Response, Id: String;

	    IdPos: Integer;

	Begin

	    Service := New NetHttpService.Create;

	    Service.Url := "http://localhost:9090/axis2/services/PP.SOM.Som";

	    Cmd := Service.Connect;

	    HttpCmd := Cmd As INetHttpCommand;

	    HttpCmd.Command := NetHttpCommandType.Post;

	    HttpCmd.Headers.Add("Content-Type: application/json;charset=utf-8");

	    HttpCmd.OuterBody := True;

	    Request := "{" +

	    """OpenMetabase"" :" +

	    "{" +

	    """tDef"" :" +

	        "{" +

	        """id"" : ""WAREHOUSE""" +

	        "}," +

	    """tCreds"" :" +

	        "{" +

	        """user"" :" +

	        "{" +

	        """id"" : ""User""" +

	        "} ," +

	        """pass"" : ""Password""" +

	        "}," +

	    """tArg"" : """"" +

	    "}" +

	    "}" ;

	    Cmd.Start(Request);

	    Response := Cmd.Result As String;

	    IdPos := Response.IndexOf("""id"":");

	    Id := Response.SubString(IdPos + 7, Response.IndexOf('"', IdPos + 7) - IdPos - 7);

	    Debug.WriteLine("Response: " + Response);

	    Debug.WriteLine("Moniker: " + Id);

	    Debug.WriteLine("ContentType: " + HttpCmd.ContentType);

	    //...

	    // Дальнейшая работа с репозиторием

	    //...

	    // Отключение от репозитория

	    Request := "{" +

	    """CloseMetabase"" :" +

	    "{" +

	    """tMb"" :" +

	        "{" +

	        """id"" :" + "" + Id + "" +

	        "}" +

	    "}" +

	    "}" ;

	    Cmd.Start(Request);

	    Response := Cmd.Result As String;

	    Debug.WriteLine("Response: " + Response);

	End Sub UserProc;


Данный пример также осуществляет подключение к репозиторию, а затем
 отключение.


См. также:


[INetCommand](INetCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
