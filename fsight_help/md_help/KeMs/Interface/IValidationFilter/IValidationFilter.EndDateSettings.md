# IValidationFilter.EndDateSettings

IValidationFilter.EndDateSettings
-


# IValidationFilter.EndDateSettings


## Синтаксис


EndDateSettings: [IValidationDateSettings](../IValidationDateSettings/IValidationDateSettings.htm);


## Описание


Свойство EndDateSettings определяет конечную дату расчета правила валидации.


## Комментарии


Если расчёт валидации выполняется для рабочей книги базы данных временных рядов, то в качестве конечной даты расчёта выбирается наименьшее значение из EndDateSettings и из даты конца загрузки данных рабочей книги: свойство [ILaner.EndDate](Laner.chm::/Interface/ILaner/ILaner.EndDate.htm).


Параметры расчёта валидации определяет параметр Settings метода [IValidationFilter.Execute](IValidationFilter.Execute.htm).


## Пример


Использование свойства приведено в примере для [IValidationFilter.Details](IValidationFilter.Details.htm).


См. также:


[IValidationFilter](IValidationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
