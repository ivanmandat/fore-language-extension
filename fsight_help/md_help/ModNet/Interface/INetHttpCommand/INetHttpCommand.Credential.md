# INetHttpCommand.Credential

INetHttpCommand.Credential
-


# INetHttpCommand.Credential


## Синтаксис


Credential: [INetHttpCommandCredential](../INetHttpCommandCredential/INetHttpCommandCredential.htm);


## Описание


Свойство Credential возвращает
 учётные данные, которые используются для аутентификации пользователя на
 сетевом ресурсе.


## Пример


Для выполнения примера предполагается наличие развёрнутого веб-сервиса,
 созданного на базе REST-технологии. Сервис должен содержать в своей реализации
 обработчик GET-запросов с указанными в примере параметрами. Также сервис
 предполагает аутентификацию перед выполнением запросов.


Добавьте ссылки на системные сборки: Collections, Dt, IO, Net.


					Sub UserProc;

		Var

		    Service: INetHttpService;

		    Cmd: INetCommand;

		    HttpCmd: INetHttpCommand;

		    Rest: IDtRestProvider;

		    Creds: INetHttpCommandCredential;

		    Request, Response: Variant;

		    MemStream: IIOStream;

		    TReader: ITextReader;

		Begin

		    Service := New NetHttpService.Create;

		    Service.Url := "http://www.sample.com/api/request?key=12345&id=Sample";

		    Cmd := Service.Connect;

		    HttpCmd := Cmd As INetHttpCommand;

		    Rest := New DtRestProvider.Create;

		    Rest.Timeout := 10000;

		    //Учётные данные для аутентификации при подключении

		    Creds := HttpCmd.Credential;

		    Creds.Method := NetHttpCommandAuthentication.Basic;

		    Creds.User := "user";

		    Creds.Password := "password";

		    //Дополнительные параметры выполнения запросов

		    HttpCmd.Command := NetHttpCommandType.Get_;

		    HttpCmd.AcceptLanguage := "ru";

		    HttpCmd.OuterBody := True;

		    HttpCmd.ConnectionTimeout := 10000;

		    HttpCmd.Timeout := 10000;

		    HttpCmd.Headers.Add("Accept: application/json");

		    Request := "";

		    //Выполнение GET-запроса

		    Cmd.Start(Request);

		    Response := Cmd.Result;

		    If (Response.IsNull) Then

		        Debug.WriteLine("Получен пустой ответ");

		    Else

		        If Response Is String Then

		            Debug.WriteLine(Response As String);

		        Else

		            MemStream := New MemoryStream.Create;

		            MemStream.CopyFrom(IOStream.FromVariant(Response), -1);

		            MemStream.Position := 0;

		            TReader := New TextReader.Create(MemStream);

		            TReader.Encoding := CodePage.UTF8;

		            TReader.ReadToEnd;

		            //Дальнейшая работа с полученным потоком данных

		        End If;

		    End If;

		End Sub UserProc;


При выполнении примера осуществляется подключение к указанному веб-сервису
 с аутентификацией указанного пользователя. После подключения будет выполнен
 GET-запрос к веб-сервису. На выполнение запроса и получение ответа даётся
 десять секунд. Если полученный результат является строкой, то значение
 будет выведено в консоль среды разработки, иначе будет создан поток для
 работы с полученными данными.


См. также:


[INetHttpCommand](INetHttpCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
