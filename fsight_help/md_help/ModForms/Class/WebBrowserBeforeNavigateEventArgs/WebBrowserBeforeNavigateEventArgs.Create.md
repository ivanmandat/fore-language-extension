# WebBrowserBeforeNavigateEventArgs.Create

WebBrowserBeforeNavigateEventArgs.Create
-


# WebBrowserBeforeNavigateEventArgs.Create


## Синтаксис


Create(Url: String; Flags: Integer; TargetFrameName: String; Headers: String; Cancel: Boolean);


## Параметры


Url - Url-адрес страницы, к которой осуществляется переход.


Flags - параметр зарезервирован на будущее.


TargetFrameName - наименование фрейма, который используется для отображения ресурсов.


Headers - дополнительные заголовки, посылаемые серверу.


Cancel - параметр, определяющий будет ли осуществляться переход к указанной Web-странице.


## Описание


Конструктор Create создает аргумент события [OnBeforeNavigate2](../WebBrowserBox/WebBrowserBox.OnBeforeNavigate2.htm).


См. также:


[WebBrowserBeforeNavigateEventArgs](WebBrowserBeforeNavigateEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
