# IMsFormulaGenTerm

IMsFormulaGenTerm
-


# IMsFormulaGenTerm


Сборка: Ms;


## Описание


Интерфейс IMsFormulaGenTerm
 предназначен для работы с отдельными термами, из которых формируются формулы.


## Иерархия наследования


           IMsFormulaGenTerm


## Комментарии


Отдельные термы возвращают следующие свойства:


	- [IMsFormulaGenInstanceIterator.LeftPart](../IMsFormulaGenInstanceIterator/IMsFormulaGenInstanceIterator.LeftPart.htm).
	 Терм, описывающий точку расчёта;


	- [IMsFormulaGenTermIterator.Term](../IMsFormulaGenTermIterator/IMsFormulaGenTermIterator.Term.htm).
	 Терм, описывающий отдельный операнд формулы.


Информация о терме представляет собой итератор, каждая запись которого
 содержит информацию о терме в определённой календарной точке расчёта.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Aggregation](IMsFormulaGenTerm.Aggregation.htm)
		 Свойство Aggregation
		 возвращает метод агрегации, который использовался при расчёте.


		 ![](../../Property_Image.gif)
		 [Level](IMsFormulaGenTerm.Level.htm)
		 Свойство Level возвращает
		 динамику, которая задана для терма.


		 ![](../../Property_Image.gif)
		 [Point](IMsFormulaGenTerm.Point.htm)
		 Свойство Point возвращает
		 информацию о терме в текущей календарной точке расчёта.


		 ![](../../Property_Image.gif)
		 [Stub](IMsFormulaGenTerm.Stub.htm)
		 Свойство Stub возвращает
		 источник данных, из которого берутся данные для терма.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Eof](IMsFormulaGenTerm.Eof.htm)
		 Метод Eof возвращает
		 признак нахождения на последней записи в итераторе.


		 ![](../../Sub_Image.gif)
		 [Next](IMsFormulaGenTerm.Next.htm)
		 Метод Next осуществляет
		 переход к следующей записи в итераторе.


		 ![](../../Sub_Image.gif)
		 [Reset](IMsFormulaGenTerm.Reset.htm)
		 Метод Reset осуществляет
		 сброс итератора и переводит курсор к первой записи в итераторе.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
