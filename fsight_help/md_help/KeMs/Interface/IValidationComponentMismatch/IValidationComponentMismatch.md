# IValidationComponentMismatch

IValidationComponentMismatch
-


# IValidationComponentMismatch


Сборка: Ms;


## Описание


Интерфейс IValidationComponentMismatch
 предназначен для работы с правилом валидации типа «Анализ
 отклонений в компонентах».


## Иерархия наследования


           [IValidationDetails](../IValidationDetails/IValidationDetails.htm)


           IValidationComponentMismatch


## Комментарии


Данный тип правила валидации сравнивает отклонения между результирующим
 рядом и исходными рядами, на основе которых был получен результирующий
 ряд.


Есть результирующий ряд T, который считается по формуле T = Tx + Ty,
 где Tx и Ty - исходные ряды на основе которых получается результирующий
 ряд. Если в каком-либо из исходных рядов изменились данные (например,
 Tx), то изменится результирующий ряд и будет равен T' = T'x +Ty. Данный
 тип валидации выявляет изменения, которые произошли с результирующим рядом
 T, т.е. сравнивает T и Т'.


Для настройки параметров данного правила приведите значение, возвращаемое
 свойством [IValidationFilter.Details](../IValidationFilter/IValidationFilter.Details.htm),
 к интерфейсу IValidationComponentMismatch.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComparisonType](IValidationComponentMismatch.ComparisonType.htm)
		 Свойство ComparisonType
		 определяет тип изменения значения.


		 ![](../../Property_Image.gif)
		 [ComparisonValue](IValidationComponentMismatch.ComparisonValue.htm)
		 Свойство ComparisonValue
		 возвращает параметры сравнения значения.


## Свойства, унаследованные от [IValidationDetails](../IValidationDetails/IValidationDetails.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Kind](../IValidationDetails/IValidationDetails.Kind.htm)


		 Свойство Kind возвращает
		 тип правила валидации.


		 ![](../../Property_Image.gif)
		 [SelectionFilter](../IValidationDetails/IValidationDetails.SelectionFilter.htm)


		 Свойство SelectionFilter
		 возвращает параметры фильтра, ограничивающего проверяемые ряды.


		 ![](../../Property_Image.gif)
		 [SelectionTargetData](../IValidationDetails/IValidationDetails.SelectionTargetData.htm)


		 Свойство SelectionTargetData
		 возвращает объект, определяющий данные, по которым будет выполняться
		 валидация.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
