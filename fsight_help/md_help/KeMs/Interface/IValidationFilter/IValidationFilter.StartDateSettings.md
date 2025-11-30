# IValidationFilter.StartDateSettings

IValidationFilter.StartDateSettings
-


# IValidationFilter.StartDateSettings


## Синтаксис


StartDateSettings: [IValidationDateSettings](../IValidationDateSettings/IValidationDateSettings.htm);


## Описание


Свойство StartDateSettings определяет начальную дату расчета правила валидации.


## Комментарии


Если расчёт валидации выполняется для рабочей книги базы данных временных рядов, то в качестве начальной даты расчёта выбирается наибольшее значение из StartDateSettings и из даты начала загрузки данных рабочей книги: свойство [ILaner.StartDate](Laner.chm::/Interface/ILaner/ILaner.StartDate.htm).


Параметры расчёта валидации определяет параметр Settings метода [IValidationFilter.Execute](IValidationFilter.Execute.htm).


## Пример


Использование свойства приведено в примере для [IValidationFilter.Details](IValidationFilter.Details.htm).


См. также:


[IValidationFilter](IValidationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
