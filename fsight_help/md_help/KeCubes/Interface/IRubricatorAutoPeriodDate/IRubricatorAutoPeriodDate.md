# IRubricatorAutoPeriodDate

IRubricatorAutoPeriodDate
-


# IRubricatorAutoPeriodDate


Сборка: Cubes;


## Описание


Интерфейс IRubricatorAutoPeriodDate
 предназначен для работы с датой временного периода в базе данных
 временных рядов.


## Иерархия наследования


           IRubricatorAutoPeriodDate


## Комментарии


В зависимости от значения [IRubricatorAutoPeriodDate.AutoDateType](IRubricatorAutoPeriodDate.AutoDateType.htm)
 дата может быть задана в абсолютных или относительных величинах.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoDateType](IRubricatorAutoPeriodDate.AutoDateType.htm)


		 Свойство AutoDateType
		 определяет способ задания даты.


		 ![](../../Property_Image.gif)
		 [ExactDate](IRubricatorAutoPeriodDate.ExactDate.htm)


		 Свойство ExactDate
		 определяет дату.


		 ![](../../Property_Image.gif)
		 [Fixed](IRubricatorAutoPeriodDate.Fixed.htm)


		 Свойство Fixed возвращает
		 дату периода.


		 ![](../../Property_Image.gif)
		 [IsFixed](IRubricatorAutoPeriodDate.IsFixed.htm)


		 Свойство IsFixed возвращает
		 признак того, что дата периода задана абсолютно или относительно
		 текущей даты.


		 ![](../../Property_Image.gif)
		 [Offset](IRubricatorAutoPeriodDate.Offset.htm)


		 Свойство Offset определяет
		 смещение для расчёта относительной даты.


		 ![](../../Property_Image.gif)
		 [ShiftDateInwardsPeriod](IRubricatorAutoPeriodDate.ShiftDateInwardsPeriod.htm)


		 Свойство ShiftDateInwardsPeriod
		 определяет, смещать ли дату на одну точку внутрь периода, если
		 она выходит за границы периода.


		 ![](../../Property_Image.gif)
		 [ShiftDateInwardsPeriodLevel](IRubricatorAutoPeriodDate.ShiftDateInwardsPeriodLevel.htm)


		 Свойство ShiftDateInwardsPeriodLevel
		 определяет уровень календарной динамики, для которого проверяется:
		 выходит ли дата за границы периода.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
