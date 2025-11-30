# ISecurityConnection.SingleUserMode

ISecurityConnection.SingleUserMode
-


# ISecurityConnection.SingleUserMode


## Синтаксис


SingleUserMode: Boolean;


## Описание


Свойство SingleUserMode возвращает
 признак возможности работы с сервером БД только под одной учетной записью.


## Комментарии


Свойство возвращает значение True,
 если текущее подключение создано с СУБД, которая не поддерживает разграничение
 прав доступа и организацию политики безопасности. В текущей реализации
 такой СУБД является - SQLite.


Для всех других видов СУБД свойство вернет значение False.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
