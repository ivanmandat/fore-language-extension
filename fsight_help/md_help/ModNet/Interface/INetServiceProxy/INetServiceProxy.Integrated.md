# INetServiceProxy.Integrated

INetServiceProxy.Integrated
-


# INetServiceProxy.Integrated


## Синтаксис


Integrated: Boolean;


## Описание


Свойство Integrated определяет,
 будут ли использоваться системные настройки прокси-сервера.


## Комментарии


Если свойству установлено значение True,
 то будут использоваться настройки прокси-сервера, заданные для браузера
 в операционной системе. По умолчанию свойству установлено значение False, при этом задаются собственные
 настройки с помощью свойств текущего интерфейса.


## Пример


Добавьте ссылки на системные сборки: Net.


					Sub UserProc;

		Var

		    Proxy: INetServiceProxy;

		Begin

		    Proxy := New NetServiceProxy.Create;

		    Proxy.Active := True;

		    Proxy.Integrated := True;

		    Debug.WriteLine("NoProxyString " + Proxy.NoProxyString);

		    Debug.WriteLine("NoProxyStringOriginal " + Proxy.NoProxyStringOriginal);

		    Proxy.Save;

		End Sub UserProc;


При выполнении примера будет включено использование прокси-сервера при
 работе с сетью Internet. Для прокси-сервера будут использоваться системные
 настройки, которые заданы для браузера в операционной системе. В консоль
 среды разработки будет выведен список доменов, доступ к которым осуществляется
 напрямую.


См. также:


[INetServiceProxy](INetServiceProxy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
