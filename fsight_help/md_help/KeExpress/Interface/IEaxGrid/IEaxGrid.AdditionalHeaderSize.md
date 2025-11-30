# IEaxGrid.AdditionalHeaderSize

IEaxGrid.AdditionalHeaderSize
-


# IEaxGrid.AdditionalHeaderSize


## Синтаксис


AdditionalHeaderSize: [IGxSize](ModDrawing.chm::/Interface/IGxSize/IGxSize.htm);


## Описание


Свойство AdditionalHeaderSize
 возвращает размер дополнительных заголовков таблицы.


## Комментарии


Дополнительные заголовки формируются при включении различных опций таблицы
 и не содержат фактических элементов измерений. Такими опциями являются:
 [спарклайны](IEaxGrid.SparklinesPosition.htm), [легенда
 диаграммы в таблице](IEaxGrid.DisplayLegend.htm).


Для определения количества дополнительных строк в шапке используйте
 свойство [IGxSize.Height](ModDrawing.chm::/Interface/IGxSize/IGxSize.Height.htm),
 количества дополнительных столбцов в боковике таблицы - [IGxSize.Width](ModDrawing.chm::/Interface/IGxSize/IGxSize.Width.htm).


Размер дополнительных заголовков также учитывается при расчете [общего
 размера](IEaxGrid.HeaderSize.htm) заголовков таблицы.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
