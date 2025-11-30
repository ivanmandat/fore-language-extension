# IMsFormulaGenTermPoint

IMsFormulaGenTermPoint
-


# IMsFormulaGenTermPoint


Сборка: Ms;


## Описание


Интерфейс IMsFormulaGenTermPoint
 предназначен для получения информации о терме в определённой календарной
 точке расчёта.


## Иерархия наследования


           IMsFormulaGenTermPoint


## Комментарии


Для получения информации о терме используйте свойство [IMsFormulaGenTerm.Point](../IMsFormulaGenTerm/IMsFormulaGenTerm.Point.htm).


Если терм соответствует операнду, для которого настроена [агрегация](../IMsFormulaGenTerm/IMsFormulaGenTerm.Aggregation.htm),
 или получен при использовании модели матричной агрегации, то в каждой
 точке будут доступны различные значения, которые используются при агрегации.
 Количество значений можно получить в свойстве [IMsFormulaGenTermPoint.ValuesCount](IMsFormulaGenTermPoint.ValuesCount.htm),
 сами значения - в свойстве [IMsFormulaGenTermPoint.Value](IMsFormulaGenTermPoint.Value.htm).
 Координату в матрице, которая соответствует значению, можно получить в
 свойстве [IMsFormulaGenTermPoint.Coord](IMsFormulaGenTermPoint.Coord.htm).


Если агрегация не используется, то свойства данного интерфейса позволяют
 получить информацию о текущем значении терма. Для этого в свойствах используйте
 индекс 0.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Coord](IMsFormulaGenTermPoint.Coord.htm)
		 Свойство Coord возвращает
		 координату в матрице для значения с указанными индексом.


		 ![](../../Property_Image.gif)
		 [IsInternal](IMsFormulaGenTermPoint.IsInternal.htm)
		 Свойство IsInternal
		 возвращает признак попадания точки в область расчёта.


		 ![](../../Property_Image.gif)
		 [Value](IMsFormulaGenTermPoint.Value.htm)
		 Свойство Value возвращает
		 значение терма с указанным индексом.


		 ![](../../Property_Image.gif)
		 [ValuesCount](IMsFormulaGenTermPoint.ValuesCount.htm)
		 Свойство ValuesCount
		 возвращает количество значений, используемых при формирования
		 значения терма.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
