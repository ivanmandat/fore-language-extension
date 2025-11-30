# IPivotFilterSource

IPivotFilterSource
-


# IPivotFilterSource


Сборка: Pivot;


## Описание


Интерфейс IPivotFilterSource
 содержит свойства фильтра.


## Иерархия наследования


           IPivotFilterSource


## Комментарии


В кубе, на котором построен отчет, и в [фильтре](DataEntryForms.chm::/Desktop/Table/Table_Area_Structure.htm#filters)
 может быть разное количество измерений. Если в кубе есть измерения, отсутствующие
 в фильтре, то при фильтрации эти измерения не учитываются. Если в фильтре
 есть измерения, которых нет в кубе, то при фильтрации по этим измерениям
 будет учитываться первый выделенный элемент.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataSource](IPivotFilterSource.DataSource.htm)
		 Свойство DataSource
		 возвращает источник данных, по которому будет проходить фильтрация.


		 ![](../../Property_Image.gif)
		 [Enable](IPivotFilterSource.Enable.htm)
		 Свойство Enable определяет
		 возможность применения фильтра.


		 ![](../../Property_Image.gif)
		 [Matrix](IPivotFilterSource.Matrix.htm)
		 Свойство Matrix
		 возвращает результирующую матрицу, по которой будет проходить
		 фильтрация.


		 ![](../../Property_Image.gif)
		 [Selection](IPivotFilterSource.Selection.htm)
		 Свойство Selection
		 возвращает отметку, по которой будет проходить фильтрация.


См. также:


[Интерфейсы
 сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
