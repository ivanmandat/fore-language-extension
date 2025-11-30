# IDtFieldDefinition.DateFormat

IDtFieldDefinition.DateFormat
-


# IDtFieldDefinition.DateFormat


## Синтаксис


DateFormat: String;


## Описание


Свойство DateFormat определяет
 формат, в соответствии с которым будет осуществляться разбор дат.


## Комментарии


Формат формируется с помощью подстановок и разделителей. В качестве
 разделителей допускаются буквы: A, M и Q.


Для указания, каким образом будет представлена компонента даты, используются
 следующие подстановки:


		 Параметр
		 Описание


		 $Year$
		 Год.


		 $Halfyear$
		 Полугодие.


		 $Quarter$
		 Квартал.


		 $Month$
		 Месяц.


		 $Weak$
		 Неделя.


		 $Day$
		 День.


Не допускаются следующие сочетания в шаблоне:


	- квартал и месяц;


	- полугодие и месяц;


	- полугодие и квартал;


	- полугодие и неделя;


	- неделя и день;


	- квартал и неделя;


	- месяц и неделя.


## Пример


Пример использования приведен в описании свойства [IDtObjectDataFormat.UsePredefinedDateFormats](../IDtObjectDataFormat/IDtObjectDataFormat.UsePredefinedDateFormats.htm).


См. также:


[IDtFieldDefinition](IDtFieldDefinition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
