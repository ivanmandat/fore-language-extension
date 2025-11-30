# IDateConverter.CalendarDateFormat

IDateConverter.CalendarDateFormat
-


# IDateConverter.CalendarDateFormat


## Синтаксис


CalendarDateFormat: String;


## Описание


Свойство CalendarDateFormat
 определяет формат дат.


## Комментарии


Допустимые форматы:


	- $Year$. Год;


	- $Halfyear$. Полугодие;


	- $Quarter$. Квартал;


	- $Month$. Месяц;


	- $Week$. Неделя;


	- $Day$. День.


Допускается использование составных форматов. Например, формат «$Year$Q$Quarter$» предназначен
 для разбора дат типа «2015Q4». Данная дата соответствует четвертому кварталу
 2015 года.


## Пример


Использование свойства приведено в примере для [ICubeLoaderFromSource.LoadWithResult](../ICubeLoaderFromSource/ICubeLoaderFromSource.LoadWithResult.htm).


См. также:


[IDateConverter](IDateConverter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
