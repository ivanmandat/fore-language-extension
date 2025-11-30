# IDalConnectionDescriptor

IDalConnectionDescriptor
-


# IDalConnectionDescriptor


Сборка: Dal;


## Описание


Интерфейс IDalConnectionDescriptor
 предназначен для работы с описанием соединения с сервером БД.


## Комментарии


Для создания описания соединения используйте метод [IDalDriver.CreateDescriptor](../IDalDriver/IDalDriver.CreateDescriptor.htm).


Полученное соединение также может быть приведено к следующим интерфейсам:


	- [IDalConnectionDescriptor2](../IDalConnectionDescriptor2/IDalConnectionDescriptor2.htm)


	- [IDalConnectionDescriptorExt](../IDalConnectionDescriptorExt/IDalConnectionDescriptorExt.htm)


	- [IDalODBCConnectionDescriptor](../IDalODBCConnectionDescriptor/IDalODBCConnectionDescriptor.htm)


Задайте параметры подключения, используя свойство [Params](IDalConnectionDescriptor.Params.htm)
 или отдельные свойства указанных интерфейсов. Для создания соединения
 с сервером СУБД выполните метод [CreateConnection](IDalConnectionDescriptor.CreateConnection.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [HostString](IDalConnectionDescriptor.HostString.htm)
		 Свойство HostString
		 возвращает наименование сервера БД, к которому осуществляется
		 подключение.


		 ![](../../Property_Image.gif)
		 [Params](IDalConnectionDescriptor.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров, используемых для подключения к серверу БД,
		 с использованием данного драйвера.


		 ![](../../Property_Image.gif)
		 [UserName](IDalConnectionDescriptor.UserName.htm)
		 Свойство UserName возвращает
		 имя пользователя, используемое для подключения к серверу БД, с
		 использованием данного драйвера.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateConnection](IDalConnectionDescriptor.CreateConnection.htm)
		 Метод CreateConnection
		 создаёт соединение с сервером БД.


См. также:


[Интерфейсы сборки Dal](../Dal_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
