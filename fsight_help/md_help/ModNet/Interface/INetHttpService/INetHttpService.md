# INetHttpService

INetHttpService
-


# INetHttpService


Сборка: Net;


## Описание


Интерфейс INetHttpService содержит
 свойства и методы для работы с сетевыми ресурсами по протоколу HTTP/HTTPS.


## Иерархия наследования


           [INetService](../INetService/INetService.htm)


           INetHttpService


## Комментарии


Интерфейс позволяет подключаться и работать с различными веб-серверами
 и сервисами через сеть по протоколу HTTP/HTTPS с помощью Get/Post-запросов.
 Для создания подключения к сетевым ресурсам выполните следующие действия:


	- создайте экземпляр класса [NetHttpService](../../Class/NetHttpService/NetHttpService.htm);


	- задайте URL-адрес сетевого ресурса в свойстве [INetHttpService.Url](INetHttpService.Url.htm)
	 для полученного объекта;


	- выполните метод [INetService.Connect](../INetService/INetService.Connect.htm)
	 для подключения. Результатом метода будет контекст для работы с сетевым
	 ресурсом с помощью запросов. Для задания дополнительных настроек приведите
	 полученный контекст к интерфейсу [INetHttpCommand](../INetHttpCommand/INetHttpCommand.htm).


Get-запросы указываются в URL-адресе ресурса, который задаётся в свойстве
 [INetHttpService.Url](INetHttpService.Url.htm).


При выполнении Post-запроса необходимые данные/запрос, которые будут
 переданы в теле Post-запроса, указываются в параметре метода [INetCommand.Start](../INetCommand/INetCommand.Start.htm).
 По умолчанию запросы указываются в SOAP-формате. Если предполагается выполнение
 Json-запросов, то добавьте заголовок «Content-Type: application/json;charset=utf-8»
 в коллекцию [INetHttpCommand.Headers](../INetHttpCommand/INetHttpCommand.Headers.htm)
 и свойству [INetHttpCommand.OuterBody](../INetHttpCommand/INetHttpCommand.OuterBody.htm)
 установите значение True.


Если сервисы доступны по протоколу HTTPS, то используйте сертификат
 безопасности в формате PEM:


	- в ОС Linux выполните одно из действий:


		- добавьте содержимое сертификата в файл /etc/ssl/certs/ca-certificates.crt
		 в Debian-подобных дистрибутивах, /etc/pki/tls/certs/ca-bundle.crt
		 в RedHat-подобных дистрибутивах и ALT Linux;


		- добавьте сертификат с расширением *.pem в папку /etc/ssl/certs
		 в Debian-подобных дистрибутивах, /etc/pki/tls/certs в RedHat-подобных
		 дистрибутивах и ALT Linux;


	- в ОС Windows:


		- Запустите встроенное приложение «Управление
		 сертификатами компьютеров».


		- Добавьте сертификат в папку «Доверенные
		 корневые центры сертификации > Сертификаты».


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Url](INetHttpService.Url.htm)
		 Свойство Url определяет
		 URL-адрес сетевого ресурса.


## Методы, унаследованные от [INetService](../INetService/INetService.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Connect](../INetService/INetService.Connect.htm)
		 Метод Connect осуществляет
		 подключение к сетевому ресурсу и возвращает контекст для взаимодействия
		 с ним.


См. также:


[Интерфейсы
 сборки Net](../KeNet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
