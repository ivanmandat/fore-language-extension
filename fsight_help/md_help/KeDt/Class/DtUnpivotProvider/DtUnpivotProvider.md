# DtUnpivotProvider

DtUnpivotProvider
-


# DtUnpivotProvider


Сборка: Dt;


## Описание


Класс DtUnpivotProvider предназначен
 для работы с табличным источником данных, разделенным на области.


## Комментарии


Особенности разделения на области приведены в описании интерфейса [IDtUnpivotProvider](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.htm).


## Свойства объекта класса, унаследованные от [IDtUnpivotProvider](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataBottom](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.DataBottom.htm)
		 Свойство DataBottom
		 определяет строку, задающую нижнюю границу области A4.


		 ![](../../Property_Image.gif)
		 [DataRight](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.DataRight.htm)
		 Свойство DataRight
		 определяет столбец, задающий правую границу области A4.


		 ![](../../Property_Image.gif)
		 [DataTop](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.DataTop.htm)
		 Свойство DataTop определяет
		 строку, задающую начало данных в области A4.


		 ![](../../Property_Image.gif)
		 [DataWidth](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.DataWidth.htm)
		 Свойство DataWidth
		 определяет количество столбцов в блоке данных, расположенном в
		 области A4.


		 ![](../../Property_Image.gif)
		 [FixedCells](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.FixedCells.htm)
		 Свойство FixedCells
		 определяет двумерный массив с координатами фиксированных ячеек.


		 ![](../../Property_Image.gif)
		 [HeadBottom](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.HeadBottom.htm)
		 Свойство HeadBottom
		 определяет строку, задающую нижнюю границу области A2.


		 ![](../../Property_Image.gif)
		 [HeadColumn](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.HeadColumn.htm)
		 Свойство HeadColumn
		 определяет столбец в области A2,
		 соответствующий блоку данных, по которому будут формироваться
		 столбцы результирующей таблицы.


		 ![](../../Property_Image.gif)
		 [HeadTop](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.HeadTop.htm)
		 Свойство HeadTop определяет
		 строку, задающую верхнюю границу области A2.


		 ![](../../Property_Image.gif)
		 [LeftBegin](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.LeftBegin.htm)
		 Свойство LeftBegin
		 определяет первый столбец с данными, задающий левую границу области
		 A3.


		 ![](../../Property_Image.gif)
		 [LeftEnd](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.LeftEnd.htm)
		 Свойство LeftEnd определяет
		 столбец, задающий правую границу области A3.


		 ![](../../Property_Image.gif)
		 [Provider](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.Provider.htm)


		 Свойство Provider
		 определяет табличный источник данных, содержащий области.


## Методы объекта класса, унаследованные от [IDtUnpivotProvider](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FromSource](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.FromSource.htm)


		 Метод FromSource позволяет
		 определить координаты ячейки в исходной таблице по координатам
		 ячейки в итоговой таблице.


		 ![](../../Sub_Image.gif)
		 [SourceCellPosition](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.SourceCellPosition.htm)


		 Метод SourceCellPosition
		 определяет место расположение ячейки в исходной кросс-таблице
		 по расположению в полученной преобразованной таблице.


		 ![](../../Sub_Image.gif)
		 [ToSource](../../Interface/IDtUnpivotProvider/IDtUnpivotProvider.ToSource.htm)


		 Метод ToSource позволяет
		 определить координаты ячейки в исходной таблице по координатам
		 ячейки в итоговой таблице.


См. также:


[Классы
 сборки Dt](../KeDt_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
