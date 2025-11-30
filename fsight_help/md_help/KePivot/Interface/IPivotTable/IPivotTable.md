# IPivotTable

IPivotTable
-


# IPivotTable


Сборка: Pivot;


## Описание


Интерфейс IPivotTable содержит
 свойства и методы для работы с данными таблицы.


## Иерархия наследования


IPivotTable


## Комментарии


Для работы с коллекцией вариантов таблиц с данными используйте
 интерфейс [IPivotTables](../IPivotTables/IPivotTables.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attachments](IPivotTable.Attachments.htm)
		 Свойство Attachments
		 возвращает вложения, содержащиеся в ячейке с указанными координатами.


		 ![](../../Property_Image.gif)
		 [CanEdit](IPivotTable.CanEdit.htm)
		 Свойство CanEdit возвращает
		 признак возможности редактирования таблицы.


		 ![](../../Property_Image.gif)
		 [Cell](IPivotTable.Cell.htm)
		 Свойство Cell определяет
		 значение ячейки таблицы.


		 ![](../../Property_Image.gif)
		 [ColumnCount](IPivotTable.ColumnCount.htm)
		 Свойство ColumnCount
		 возвращает количество столбцов с данными в таблице.


		 ![](../../Property_Image.gif)
		 [Coord](IPivotTable.Coord.htm)
		 Свойство Coord возвращает
		 координату в матрице с данными по индексу строки и столбца таблицы.


		 ![](../../Property_Image.gif)
		 [CoordByMatrix](IPivotTable.CoordByMatrix.htm)
		 Свойство CoordByMatrix
		 возвращает индекс строки и столбца таблицы по координате в матрице
		 с данными.


		 ![](../../Property_Image.gif)
		 [DataRights](IPivotTable.DataRights.htm)
		 Свойство DataRights
		 возвращает права доступа на данные указанной ячейки.


		 ![](../../Property_Image.gif)
		 [DataType](IPivotTable.DataType.htm)
		 Свойство DataType возвращает
		 тип ячейки.


		 ![](../../Property_Image.gif)
		 [HasAttachments](IPivotTable.HasAttachments.htm)
		 Свойство HasAttachments
		 возвращает признак наличия вложений для ячейки с указанными координатами.


		 ![](../../Property_Image.gif)
		 [HasAttachmentsSupport](IPivotTable.HasAttachmentsSupport.htm)
		 Свойство HasAttachmentsSupport
		 возвращает признак возможности работы с вложениями для таблицы.


		 ![](../../Property_Image.gif)
		 [Highlight](IPivotTable.Highlight.htm)
		 Свойство Highlight
		 возвращает признак подсветки данных в ячейке, значение которой
		 соответствует указанному условию.


		 ![](../../Property_Image.gif)
		 [IsChanged](IPivotTable.IsChanged.htm)
		 Свойство IsChanged
		 возвращает признак наличия измененных данных в таблице.


		 ![](../../Property_Image.gif)
		 [IsChangedCell](IPivotTable.IsChangedCell.htm)
		 Свойство IsChangedCell
		 возвращает признак наличия измененных данных в указанной ячейке
		 таблицы.


		 ![](../../Property_Image.gif)
		 [IsDataChanged](IPivotTable.IsDataChanged.htm)
		 Свойство IsDataChanged
		 возвращает признак наличия измененных данных по элементам, входящим
		 в указанную отметку.


		 ![](../../Property_Image.gif)
		 [IsEditing](IPivotTable.IsEditing.htm)
		 Свойство IsEditing
		 возвращает признак режима редактирования таблицы.


		 ![](../../Property_Image.gif)
		 [IsEvaluatedCell](IPivotTable.IsEvaluatedCell.htm)
		 Свойство IsEvaluatedCell
		 возвращает признак того, что данная ячейка является вычисляемой.


		 ![](../../Property_Image.gif)
		 [IsHighlighted](IPivotTable.IsHighlighted.htm)
		 Свойство IsHighlighted
		 возвращает признак подсветки данных в ячейке, значение которой
		 соответствует какому-либо установленному условию.


		 ![](../../Property_Image.gif)
		 [IsStairCell](IPivotTable.IsStairCell.htm)
		 Свойство IsStairCell возвращает
		 признак использования в ячейке [ступенчатой
		 иерархии](uianalyticalarea.chm::/tableview/layout/layout_dim.htm#stairs_hierarchy).


		 ![](../../Property_Image.gif)
		 [LeftHeader](IPivotTable.LeftHeader.htm)
		 Свойство LeftHeader
		 возвращает параметры заголовков строк таблицы.


		 ![](../../Property_Image.gif)
		 [RowCount](IPivotTable.RowCount.htm)
		 Свойство RowCount возвращает
		 количество строк с данными в таблице.


		 ![](../../Property_Image.gif)
		 [Selection](IPivotTable.Selection.htm)
		 Свойство Selection
		 возвращает отметку таблицы с учетом фильтрации.


		 ![](../../Property_Image.gif)
		 [SupportWriteAttachments](IPivotTable.SupportWriteAttachments.htm)
		 Свойство SupportWriteAttachments
		 возвращает признак возможности работы с вложениями для указанной
		 ячейки.


		 ![](../../Property_Image.gif)
		 [TopHeader](IPivotTable.TopHeader.htm)
		 Свойство TopHeader
		 возвращает параметры заголовков столбцов таблицы.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Cancel](IPivotTable.Cancel.htm)
		 Метод Cancel осуществляет
		 выход из режима редактирования без сохранения внесенных изменений.


		 ![](../../Sub_Image.gif)
		 [DropCacheCoord](IPivotTable.DropCacheCoord.htm)
		 Метод DropCacheCoord
		 очищает кеш ячеек таблицы.


		 ![](../../Sub_Image.gif)
		 [Edit](IPivotTable.Edit.htm)
		 Метод Edit переводит
		 таблицу в режим редактирования данных.


		 ![](../../Sub_Image.gif)
		 [GetSourceCoord](IPivotTable.GetSourceCoord.htm)
		 Метод GetSourceCoord
		 возвращает координату в матрице с данными по индексу строки и
		 столбца таблицы.


		 ![](../../Sub_Image.gif)
		 [Post](IPivotTable.Post.htm)
		 Метод Post осуществляет
		 выход из режима редактирования с сохранением измененных данных
		 таблицы.


		 ![](../../Sub_Image.gif)
		 [PostAttachments](IPivotTable.PostAttachments.htm)
		 Метод PostAttachments
		 возвращает признак изменения коллекции вложений в указанной ячейке
		 таблицы.


		 ![](../../Sub_Image.gif)
		 [PostEx](IPivotTable.PostEx.htm)
		 Метод PostEx осуществляет
		 выход из режима редактирования с сохранением измененных данных
		 и возможностью указания тех данных, которые будут исключены.


		 ![](../../Sub_Image.gif)
		 [StartCacheCoord](IPivotTable.StartCacheCoord.htm)
		 Метод StartCacheCoord
		 осуществляет кеширование ячеек таблицы.


См. также:


[Интерфейсы
 сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
