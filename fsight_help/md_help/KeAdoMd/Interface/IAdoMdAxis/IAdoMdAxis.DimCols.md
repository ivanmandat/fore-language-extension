# IAdoMdAxis.DimCols

IAdoMdAxis.DimCols
-


# IAdoMdAxis.DimCols


## Синтаксис


DimCols(Index: Integer): Integer;


## Параметры


Index.
 Индекс измерения.


## Описание


Свойство DimCols возвращает
 количество атрибутов указанного измерения, характеризующих каждую координату
 оси.


## Комментарии


Количество измерений, атрибуты которых описывают координату оси, доступно
 в свойстве [DimCount](IAdoMdAxis.DimCount.htm).
 Общее число атрибутов, характеризующих каждую координату равно [DimCount](IAdoMdAxis.DimCount.htm)*DimCols.
 Описание и значения атрибутов, описывающих координаты, можно получить
 в курсоре, который возвращает метод [Open](IAdoMdAxis.Open.htm).


## Пример


Пример использования приведен в описании свойства [IAdoMdCellset.AxisInfo](../IAdoMdCellset/IAdoMdCellset.AxisInfo.htm).


См. также:


[IAdoMdAxis](IAdoMdAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
