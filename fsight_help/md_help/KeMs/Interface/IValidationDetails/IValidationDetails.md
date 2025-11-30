# IValidationDetails

IValidationDetails
-


# IValidationDetails


Сборка: Ms;


## Описание


Интерфейс IValidationDetails
 является базовым и предназначен для работы с настройками правила валидации.


## Иерархия наследования


           IValidationDetails


## Комментарии


Для получения настроек правила валидации используйте свойство [IValidationFilter.Details](../IValidationFilter/IValidationFilter.Details.htm).


Для настройки параметров определенного правила приведите значение, возвращаемое
 свойством [IValidationFilter.Details](../IValidationFilter/IValidationFilter.Details.htm),
 к требуемому интерфейсу.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Kind](IValidationDetails.Kind.htm)


		 Свойство Kind возвращает
		 тип правила валидации.


		 ![](../../Property_Image.gif)
		 [SelectionFilter](IValidationDetails.SelectionFilter.htm)


		 Свойство SelectionFilter
		 возвращает параметры фильтра, ограничивающего проверяемые ряды.


		 ![](../../Property_Image.gif)
		 [SelectionTargetData](IValidationDetails.SelectionTargetData.htm)


		 Свойство SelectionTargetData
		 возвращает объект, определяющий данные, по которым будет выполняться
		 валидация.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
