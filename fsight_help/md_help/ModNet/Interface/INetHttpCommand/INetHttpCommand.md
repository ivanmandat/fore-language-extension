# INetHttpCommand

INetHttpCommand
-


# INetHttpCommand


Сборка: Net;


## Описание


Интерфейс INetHttpCommand предназначен
 для настройки параметров работы с сетевым ресурсом по протоколу HTTP/HTTPS.


## Иерархия наследования


INetHttpCommand


## Комментарии


При выполнении метода [Connect](../INetService/INetService.Connect.htm)
 создаётся соединение с сетевым ресурсом и возвращается контекст для работы
 с ним. Для настройки параметров работы приведите результат метода [Connect](../INetService/INetService.Connect.htm)
 к интерфейсу INetHttpCommand.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AcceptLanguage](INetHttpCommand.AcceptLanguage.htm)
		 Свойство AcceptLanguage
		 задаёт языки, на которых предпочтительны ответы сервера на запрос.


		 ![](../../Property_Image.gif)
		 [Command](INetHttpCommand.Command.htm)
		 Свойство Command определяет
		 тип команды, которая будет отправляться сетевому ресурсу.


		 ![](../../Property_Image.gif)
		 [ConnectionTimeout](INetHttpCommand.ConnectionTimeout.htm)
		 Свойство ConnectionTimeout
		 определяет время ожидания подключения к GET-запросу.


		 ![](../../Property_Image.gif)
		 [ContentType](INetHttpCommand.ContentType.htm)
		 Свойство ContentType
		 возвращает тип содержимого, полученного в результате выполнения
		 запроса.


		 ![](../../Property_Image.gif)
		 [Credential](INetHttpCommand.Credential.htm)
		 Свойство Credential
		 возвращает учётные данные, которые используются для аутентификации
		 пользователя на сетевом ресурсе.


		 ![](../../Property_Image.gif)
		 [Headers](INetHttpCommand.Headers.htm)
		 Свойство Headers возвращает
		 коллекцию, в которой формируется список дополнительных заголовков.


		 ![](../../Property_Image.gif)
		 [OuterBody](INetHttpCommand.OuterBody.htm)
		 Свойство OuterBody
		 определяет признак получения результатов в теле запроса.


		 ![](../../Property_Image.gif)
		 [SOAPAction](INetHttpCommand.SOAPAction.htm)
		 Свойство SOAPAction
		 определяет заголовок SOAPAction, который отправляется вместе с
		 запросом.


		 ![](../../Property_Image.gif)
		 [Timeout](INetHttpCommand.Timeout.htm)
		 Свойство Timeout определяет
		 время ожидания выполнения GET-запроса.


См. также:


[Интерфейсы
 сборки Net](../KeNet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
