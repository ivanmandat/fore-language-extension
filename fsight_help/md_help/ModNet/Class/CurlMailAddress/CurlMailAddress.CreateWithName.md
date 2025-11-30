# CurlMailAddress.CreateWithName

CurlMailAddress.CreateWithName
-


# CurlMailAddress.CreateWithName


## Синтаксис


CreateWithName(Address: String; DisplayName: String);


## Параметры


Address. Адрес электронной
 почты.


Примечание.
 Формат электронного адреса должен соответствовать формату, используемому
 при организации электронной почты на основе протоколов SMTP и POP и иметь
 следующий вид: адрес@почтовый_домен,
 где адрес - идентификатор адресата,
 а почтовый_домен - доменное имя
 почтового сервера. Пример: user@samplemail.ru.


DisplayName. Наименование,
 отображаемое вместо адреса при отправке почтовых электронных сообщений.


## Описание


Конструктор CreateWithName создаёт
 экземпляр адреса электронной почты с наименованием, отображаемым вместо
 адреса при отправке почтовых электронных сообщений.


## Комментарии


Наименование, указываемое в параметре DisplayName,
 будет отображаться в различных почтовых клиентах в качестве наименования
 отправителя письма.


## Пример


Добавьте ссылку на системную сборку Net.


					Sub UserProc;

		Var

		    From_, To_: INetMailAddress;

		    Message: INetMailMessage;

		    Client: INetSmtpClient;

		Begin

		    From_ := New CurlMailAddress.CreateWithName("ivanov@server.ru", "Иван Иванов");

		    To_ := New CurlMailAddress.CreateWithName("petrov@mail.ru", "Петров");

		    Message := New CurlMailMessage.CreateWithFromAndTo(From_, To_);

		    Message.Subject := "Тестовое письмо";

		    Message.Body := "Здесь указывается текст письма";

		    Client := New CurlSmtpClient.CreateWithHost("example.server.ru");

		    Client.Send(Message);

		End Sub UserProc;


После выполнения примера будет отправлено письмо через указанный почтовый
 сервер. Для отправки сообщения создается два адреса электронной почты
 с наименованием, отображаемым вместо адреса: From_ - адрес отправителя
 (данный адрес должен быть зарегистрирован на почтовом сервере); To_ -
 адрес, на который необходимо отправить письмо (если адрес не существует
 - на первый адрес будет отправлено соответствующее оповещение с почтового
 сервера).


Данный пример может быть запущен на выполнение при работе в операционных
 системах семейства Linux.


См. также:


[CurlMailAddress](CurlMailAddress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
