# INetHttpCommand.SOAPAction

INetHttpCommand.SOAPAction
-


# INetHttpCommand.SOAPAction


## Синтаксис


SOAPAction: String;


## Описание


Свойство SOAPAction определяет
 заголовок SOAPAction, который отправляется вместе с запросом.


## Комментарии


В заголовке SOAPAction указывается метод, который будет вызываться веб-сервисом
 при выполнении запроса. Заголовок указывается, если этого требует реализация
 соответствующего веб-сервиса. По умолчанию передаётся пустая строка, при
 этом выполняемый метод определяется по передаваемому [запросу](../INetCommand/INetCommand.Start.htm).


Также дополнительные заголовки могут быть добавлены в коллекцию [Headers](INetHttpCommand.Headers.htm).


## Пример


Для выполнения примера предполагается наличие развёрнутого веб-сервиса.
 Реализация сервиса требует явной передачи выполняемого метода в заголовке
 SOAPAction.


Добавьте ссылку на системную сборку Net.


					Sub UserProc;

		Var

		    Service: INetHttpService;

		    Cmd: INetCommand;

		    HttpCmd: INetHttpCommand;

		    Request, Response: Variant;

		Begin

		    Service := New NetHttpService.Create;

		    Service.Url := "http://www.sample.com/InfoServer/Info.asmx";

		    Cmd := Service.Connect;

		    HttpCmd.Command := NetHttpCommandType.Post;

		    HttpCmd.OuterBody := True;

		    HttpCmd.Headers.Add("Host: www.sample.com");

		    HttpCmd.SOAPAction := "http://www.sample.com/InfoServer/GetData";

		    Request := "...Запрос, отправляемый серверу...";

		    Cmd.Start(Request);

		    Response := Cmd.Result;

		    //...

		    // Дальнейшая работа с полученным ответом

		    //...

		End Sub UserProc;


Указанный пример в общем виде показывает каким образом задаются параметры
 для выполнения запросов, требующих указание заголовка SOAPAction.


См. также:


[INetHttpCommand](INetHttpCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
