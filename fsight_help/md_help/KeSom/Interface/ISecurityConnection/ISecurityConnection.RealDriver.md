# ISecurityConnection.RealDriver

ISecurityConnection.RealDriver
-


# ISecurityConnection.RealDriver


## Синтаксис


RealDriver: String;


## Описание


Свойство RealDriver возвращает
 реальный драйвер, с помощью которого осуществлено подключение к БД.


## Комментарии


Если для подключения к репозиторию используется веб-сервис, то фактическое
 соединение с сервером СУБД осуществляется на BI-сервере. При этом свойство
 [ISecurityConnection.Driver](ISecurityConnection.Driver.htm)
 вернёт значение WSF, а RealDriver - реальный драйвер, который использовался
 на BI-сервере.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
