# INetServiceProxy

INetServiceProxy
-


# INetServiceProxy


Сборка: Net;


## Описание


Интерфейс INetServiceProxy предназначен
 для задания настроек прокси-сервера, которые будут использоваться при
 выполнении внешних запросов в интернет.


## Иерархия наследования


INetServiceProxy


## Комментарии


В «Форсайт. Аналитическая платформа»
 в основе реализации подключения к прокси-серверу лежит сторонняя библиотека
 libcurl. С её назначением, возможностями и ограничениями можно ознакомиться
 на официальном сайте [https://curl.haxx.se/libcurl/](https://curl.haxx.se/libcurl/).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](INetServiceProxy.Active.htm)


		 Свойство Active определяет,
		 используется ли прокси-сервер.


		 ![](../../Property_Image.gif)
		 [Address](INetServiceProxy.Address.htm)


		 Свойство Address определяет
		 адрес прокси-сервера.


		 ![](../../Property_Image.gif)
		 [ConnectionString](INetServiceProxy.ConnectionString.htm)


		 Свойство ConnectionString
		 возвращает полную строку подключения к прокси-серверу.


		 ![](../../Property_Image.gif)
		 [Integrated](INetServiceProxy.Integrated.htm)


		 Свойство Integrated
		 определяет, будут ли использоваться системные настройки прокси-сервера.


		 ![](../../Property_Image.gif)
		 [NeedAuthentication](INetServiceProxy.NeedAuthentication.htm)


		 Свойство NeedAuthentication
		 определяет, требуется ли аутентификация на прокси-сервере.


		 ![](../../Property_Image.gif)
		 [NoProxyString](INetServiceProxy.NoProxyString.htm)


		 Свойство NoProxyString
		 определяет список доменов, доступ к которым будет осуществляться
		 напрямую, а не через прокси-сервер.


		 ![](../../Property_Image.gif)
		 [NoProxyStringOriginal](INetServiceProxy.NoProxyStringOriginal.htm)


		 Свойство NoProxyStringOriginal
		 возвращает системный список доменов, доступ к которым будет осуществляться
		 напрямую, а не через прокси-сервер.


		 ![](../../Property_Image.gif)
		 [Password](INetServiceProxy.Password.htm)


		 Свойство Password определяет
		 пароль пользователя, используемый при аутентификации на прокси-сервере.


		 ![](../../Property_Image.gif)
		 [Port](INetServiceProxy.Port.htm)


		 Свойство Port определяет
		 порт для подключения к прокси-серверу.


		 ![](../../Property_Image.gif)
		 [User](INetServiceProxy.User.htm)


		 Свойство User определяет
		 имя пользователя, используемое при аутентификации на прокси-сервере.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Save](INetServiceProxy.Save.htm)


		 Метод Save сохраняет
		 изменения настроек.


См. также:


[Интерфейсы
 сборки Net](../KeNet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
