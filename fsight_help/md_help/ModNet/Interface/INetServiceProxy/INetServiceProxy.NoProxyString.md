# INetServiceProxy.NoProxyString

INetServiceProxy.NoProxyString
-


# INetServiceProxy.NoProxyString


## Синтаксис


NoProxyString: String;


## Описание


Свойство NoProxyString определяет
 список доменов, доступ к которым будет осуществляться напрямую, а не через
 прокси-сервер.


## Комментарии


Домены в списке разделяются запятой. Если свойству [Integrated](INetServiceProxy.Integrated.htm)
 установлено значение True, то
 свойство вернёт список, сохранённый в системных настройках, но список
 будет модифицирован - домены будут разделены между собой с помощью запятой.


## Пример


Пример использования приведён в описании свойства [INetServiceProxy.Active](INetServiceProxy.Active.htm).


См. также:


[INetServiceProxy](INetServiceProxy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
