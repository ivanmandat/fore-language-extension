# ICredentials.UseUserOSForDocumentLabels

ICredentials.UseUserOSForDocumentLabels
-


# ICredentials.UseUserOSForDocumentLabels


## Синтаксис


UseUserOSForDocumentLabels: Boolean;


## Описание


Свойство UseUserOSForDocumentLabels определяет, будет ли отображено в маркировке документа имя пользователя ОС.


## Комментарии


По умолчанию свойство имеет значение False и в маркировке документа будет указана информация о пользователе, под которым осуществлялось соединение с репозиторием. При установке значения в True в маркировке документа будет указана информация о пользователе ОС ([UserOS](ICredentials.UserOS.htm)). Штамп маркировки отображается на каждом листе документа в левом нижнем углу. Документы маркируются, если используется мандатный доступ и если для уровня доступа включена маркировка при экспорте и печати.


## Пример


Использование приведено в примере для [ICredentials.UserDescription](ICredentials.UserDescription.htm)


См. также:


[ICredentials](ICredentials.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
