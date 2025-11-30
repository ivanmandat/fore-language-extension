# Как работать с веб-сервисом из Fore?

Как работать с веб-сервисом из Fore?
-


# Как работать с веб-сервисом из Fore?


## Описание


Веб-сервис PP.SOM в первую очередь предназначен для разработки систем
 на базе веб-приложений. Однако иногда может возникнуть необходимость обратиться
 к веб-сервису из разрабатываемых на базе настольного приложения сборок/форм/модулей.
 В языке Fore для взаимодействия
 с различными сетевыми ресурсами посредством POST/GET запросов предназначен
 класс [NetHttpService](ModNet.chm::/Class/NetHttpService/NetHttpService.htm)
 сборки [Net](ModNet.chm::/ModNet_Title.htm). Работа
 с веб-сервисом осуществляется по протоколу SOAP.


Для работы с веб-сервисом:


	- Создайте экземпляр класса [NetHttpService](ModNet.chm::/Class/NetHttpService/NetHttpService.htm),
	 укажите в свойстве [Url](ModNet.chm::/Interface/INetHttpService/INetHttpService.Url.htm)
	 адрес веб-сервиса и выполните метод [Connect](ModNet.chm::/Interface/INetService/INetService.Connect.htm).
	 Правила формирования адреса веб-сервиса представлены подразделе «[Подключение к веб-сервису](../Intro/PP7Service_Using.htm)».


	- Полученный объект, описываемый интерфейсом [INetCommand](ModNet.chm::/Interface/INetCommand/INetCommand.htm),
	 приведите к интерфейсу [INetHttpCommand](ModNet.chm::/Interface/INetHttpCommand/INetHttpCommand.htm)
	 и задайте настройки для работы с веб-сервисом: [Command](ModNet.chm::/Interface/INetHttpCommand/INetHttpCommand.Command.htm)
	 = [NetHttpCommandType.Post](ModNet.chm::/Enums/NetHttpCommandType.htm);


	- Сформируйте SOAP-запрос для выполнения требуемой операции. Описание
	 операций и примеры их использования представлены в подразделе «[Операции веб-сервиса](../Operations/BaseService.htm)»;


	- Сформированный SOAP-запрос передайте в метод [Start](ModNet.chm::/Interface/INetCommand/INetCommand.Start.htm)
	 для отправки запроса веб-сервису.


	- В свойстве [Result](ModNet.chm::/Interface/INetCommand/INetCommand.Result.htm)
	 будет доступен ответ веб-сервиса.


## Пример


Ниже приведён пример подключения к веб-сервису PP.SOM и отправки запроса
 на подключение к репозиторию. После удачного подключения в консоль среды
 разработки будет выведен ответ веб-сервиса и моникёр, через который осуществляется
 вся дальнейшая работа с репозиторием. По завершению работы осуществляется
 отключение от репозитория.


Sub TestSOAPRequest;

Var

    Service: INetHttpService;

    Cmd: INetCommand;

    HttpCmd: INetHttpCommand;

    Request: Variant;

    Response, Id: string;

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

        "<tDef><id>TEST_REPOSITORY</id></tDef>" +

        "<tCreds><user><id>user</id></user><pass>password</pass></tCreds>" +

        "</OpenMetabase>" ;

    Cmd.Start(Request);

    Response := Cmd.Result As String;

    Id := Response.SubString(Response.IndexOf("<id>") + 4, Response.IndexOf("</id>") - Response.IndexOf("<id>") - 4);

    Debug.WriteLine("Response: " + Response);

    Debug.WriteLine("Moniker: " + Id);

    //...

    // Дальнейшая работа с репозиторием

    //...

    // Отключение от репозитория

    Request := "<CloseMetabase><tMb><id>" + id + "</id></tMb></CloseMetabase>";

    Cmd.Start(Request);

End Sub TestSOAPRequest;


См. также:


[Вопросы и ответы](FAQ.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
