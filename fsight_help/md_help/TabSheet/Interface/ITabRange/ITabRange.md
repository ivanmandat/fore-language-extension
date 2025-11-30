# ITabRange

ITabRange
-


# ITabRange


Сборка: Tab;


## Описание


Интерфейс ITabRange содержит
 свойства и методы для работы с ячейками и диапазонами ячеек таблицы.


## Иерархия наследования


           ITabRange


## Комментарии


Диапазоны ячеек используются
 для настройки параметров областей данных, областей формул, диаграмм, карт,
 а также для настройки визуального оформления таблиц различных объектов
 репозитория и компонентов среды разработки.


Для получения диапазона ячеек используйте следующие свойства и методы:


	- [ITabSearchResult.Range](../ITabSearchResult/ITabSearchResult.Range.htm)


	- [ITabSelection.Range](../ITabSelection/ITabSelection.Range.htm)


	- [ITabSheet.Cell](../ITabSheet/ITabSheet.Cell.htm)


	- [ITabSheet.Cells](../ITabSheet/ITabSheet.Cells.htm)


	- [ITabSheet.Column](../ITabSheet/ITabSheet.Column.htm)


	- [ITabSheet.Columns](../ITabSheet/ITabSheet.Columns.htm)


	- [ITabSheet.ParseCell](../ITabSheet/ITabSheet.ParseCell.htm)


	- [ITabSheet.ParseCellEx](../ITabSheet/ITabSheet.ParseCellEx.htm)


	- [ITabSheet.ParseRange](../ITabSheet/ITabSheet.ParseRange.htm)


	- [ITabSheet.ParseRangeEx](../ITabSheet/ITabSheet.ParseRangeEx.htm)


	- [ITabSheet.Row](../ITabSheet/ITabSheet.Row.htm)


	- [ITabSheet.Rows](../ITabSheet/ITabSheet.Rows.htm)


	- [ITabSheet.Table](../ITabSheet/ITabSheet.Table.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Address](ITabRange.Address.htm)
		 Свойство Address возвращает
		 адрес диапазона ячеек в строковом виде.


		 ![](../../Property_Image.gif)


		 [AppliedFormatConditions](ITabRange.AppliedFormatConditions.htm)
		 Свойство AppliedFormatConditions
		 возвращает список [условий
		 форматирования](UiAnalyticalArea.chm::/Analysis/Conditional_formatting.htm), которые выполняются для ячейки
		 или диапазона ячеек.


		 ![](../../Property_Image.gif)
		 [Bottom](ITabRange.Bottom.htm)
		 Свойство Bottom возвращает
		 индекс строки, являющейся нижней границей диапазона.


		 ![](../../Property_Image.gif)
		 [ColumnPixelWidth](ITabRange.ColumnPixelWidth.htm)
		 Свойство ColumnPixelWidth
		 определяет ширину столбцов диапазона в пикселях.


		 ![](../../Property_Image.gif)
		 [ColumnWidth](ITabRange.ColumnWidth.htm)
		 Свойство ColumnWidth
		 определяет ширину столбцов диапазона в миллиметрах.


		 ![](../../Property_Image.gif)
		 [Count](ITabRange.Count.htm)
		 Свойство Count возвращает
		 количество ячеек в диапазоне.


		 ![](../../Property_Image.gif)
		 [DistinctCells](ITabRange.DistinctCells.htm)
		 Свойство DistinctCells
		 возвращает составной диапазон, не содержащий пересекающихся частей.


		 ![](../../Property_Image.gif)
		 [EntireColumns](ITabRange.EntireColumns.htm)
		 Свойство EntireColumns
		 возвращает диапазон, состоящий только из столбцов, входящих в
		 текущий диапазон.


		 ![](../../Property_Image.gif)
		 [EntireRows](ITabRange.EntireRows.htm)
		 Свойство EntireRows
		 возвращает диапазон, состоящий только из строк, входящих в текущий
		 диапазон.


		 ![](../../Property_Image.gif)
		 [Footnotes](ITabRange.Footnotes.htm)
		 Свойство Footnotes
		 возвращает коллекцию сносок, попадающих в текущий диапазон.


		 ![](../../Property_Image.gif)
		 [FormatConditions](ITabRange.FormatConditions.htm)
		 Свойство FormatConditions
		 возвращает объект, содержащий коллекцию условных форматирований
		 ячеек.


		 ![](../../Property_Image.gif)
		 [FormattedText](ITabRange.FormattedText.htm)
		 Свойство FormattedText
		 возвращает значение ячейки с учетом заданного формата отображения
		 данных.


		 ![](../../Property_Image.gif)
		 [Formula](ITabRange.Formula.htm)
		 Свойство Formula определяет
		 формулу диапазона ячеек, но возвращает формулу только одной ячейки.


		 ![](../../Property_Image.gif)
		 [Height](ITabRange.Height.htm)
		 Свойство Height возвращает
		 высоту диапазона в миллиметрах.


		 ![](../../Property_Image.gif)
		 [Hidden](ITabRange.Hidden.htm)
		 Свойство Hidden определяет
		 видимость строк или столбцов, в зависимости от использования.


		 ![](../../Property_Image.gif)
		 [IsCell](ITabRange.IsCell.htm)
		 Свойство IsCell возвращает
		 признак, является ли диапазон одной ячейкой.


		 ![](../../Property_Image.gif)
		 [IsColumn](ITabRange.IsColumn.htm)
		 Свойство IsColumn возвращает
		 признак, является ли диапазон одним столбцом.


		 ![](../../Property_Image.gif)
		 [IsRow](ITabRange.IsRow.htm)
		 Свойство IsRow возвращает
		 признак, является ли диапазон одной строкой.


		 ![](../../Property_Image.gif)
		 [IsRtfText](ITabRange.IsRtfText.htm)
		 Свойство IsRtfText
		 определяет, будет ли оформление и текст храниться в RTF-формате.


		 ![](../../Property_Image.gif)
		 [Item](ITabRange.Item.htm)
		 Свойство Item не реализовано.


		 ![](../../Property_Image.gif)
		 [Left](ITabRange.Left.htm)
		 Свойство Left возвращает
		 индекс столбца, являющегося левой границей диапазона.


		 ![](../../Property_Image.gif)
		 [Location](ITabRange.Location.htm)
		 Свойство Location возвращает
		 левую верхнюю точку диапазона.


		 ![](../../Property_Image.gif)
		 [Merged](ITabRange.Merged.htm)
		 Свойство Merged возвращает
		 признак наличия объединения диапазона.


		 ![](../../Property_Image.gif)
		 [Part](ITabRange.Part.htm)
		 Свойство Part возвращает
		 отдельную область из всего диапазона, индекс которой передается
		 в качестве входного параметра.


		 ![](../../Property_Image.gif)
		 [PartCount](ITabRange.PartCount.htm)
		 Свойство PartCount
		 возвращает количество отдельных областей в диапазоне.


		 ![](../../Property_Image.gif)
		 [PixelLocation](ITabRange.PixelLocation.htm)
		 Свойство PixelLocation
		 возвращает верхнюю левую точку диапазона в пикселях, полученную
		 с учетом пиксельной подгонки размеров строк/столбцов.


		 ![](../../Property_Image.gif)
		 [Prefix](ITabRange.Prefix.htm)
		 Свойство Prefix определяет
		 префикс ячейки таблицы.


		 ![](../../Property_Image.gif)
		 [RealColumnWidth](ITabRange.RealColumnWidth.htm)
		 Свойство RealColumnWidth
		 возвращает реальную ширину для скрытых столбцов.


		 ![](../../Property_Image.gif)
		 [RealRowHeight](ITabRange.RealRowHeight.htm)
		 Свойство RealRowHeight
		 возвращает реальную высоту для скрытых строк.


		 ![](../../Property_Image.gif)
		 [Right](ITabRange.Right.htm)
		 Свойство Right возвращает
		 индекс столбца, являющегося правой границей диапазона.


		 ![](../../Property_Image.gif)
		 [RowHeight](ITabRange.RowHeight.htm)
		 Свойство RowHeight
		 определяет высоту строк диапазона в миллиметрах.


		 ![](../../Property_Image.gif)
		 [RowPixelHeight](ITabRange.RowPixelHeight.htm)
		 Свойство RowPixelHeight
		 определяет высоту строк диапазона в пикселях.


		 ![](../../Property_Image.gif)
		 [Style](ITabRange.Style.htm)
		 Свойство Style определяет
		 стиль отображения ячеек диапазона.


		 ![](../../Property_Image.gif)
		 [StyleForDraw](ITabRange.StyleForDraw.htm)
		 Свойство StyleForDraw
		 возвращает стиль ячейки, учитывающий наложение стилей других диапазонов.


		 ![](../../Property_Image.gif)
		 [StyleIndex](ITabRange.StyleIndex.htm)
		 Свойство StyleIndex
		 устанавливает стиль из коллекции стилей.


		 ![](../../Property_Image.gif)
		 [Suffix](ITabRange.Suffix.htm)
		 Свойство Suffix определяет
		 суффикс ячейки таблицы.


		 ![](../../Property_Image.gif)
		 [TabSheet](ITabRange.TabSheet.htm)
		 Свойство TabSheet возвращает
		 таблицу, которой принадлежит данный диапазон.


		 ![](../../Property_Image.gif)
		 [Text](ITabRange.Text.htm)
		 Свойство Text определяет
		 текст диапазона ячеек.


		 ![](../../Property_Image.gif)
		 [Top](ITabRange.Top.htm)
		 Свойство Top возвращает
		 индекс строки, являющейся верхней границей диапазона.


		 ![](../../Property_Image.gif)
		 [Type](ITabRange.Type.htm)
		 Свойство Type возвращает
		 тип диапазона.


		 ![](../../Property_Image.gif)
		 [Value](ITabRange.Value.htm)
		 Свойство Value определяет
		 значение диапазона ячеек.


		 ![](../../Property_Image.gif)
		 [Width](ITabRange.Width.htm)
		 Свойство Width возвращает
		 ширину диапазона в миллиметрах.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AdjustHeight](ITabRange.AdjustHeight.htm)
		 Метод AdjustHeight
		 выполняет автоматическую подгонку высоты строк диапазона в соответствии
		 с содержимым ячеек.


		 ![](../../Sub_Image.gif)
		 [AdjustHeightEx](ITabRange.AdjustHeightEx.htm)
		 Метод AdjustHeightEx
		 выполняет автоматическую подгонку высоты строк диапазона в соответствии
		 с содержимым ячеек, если не установлен пользовательский размер.


		 ![](../../Sub_Image.gif)
		 [AdjustWidth](ITabRange.AdjustWidth.htm)
		 Метод AdjustWidth выполняет
		 автоматическую подгонку ширины столбцов диапазона в соответствии
		 с содержимым ячеек.


		 ![](../../Sub_Image.gif)
		 [AutoFill](ITabRange.AutoFill.htm)
		 Метод AutoFill производит
		 автоматическое заполнение указанного диапазона на основании данных
		 текущего диапазона.


		 ![](../../Sub_Image.gif)
		 [CenterAtView](ITabRange.CenterAtView.htm)
		 Метод CenterAtView
		 прокручивает таблицу таким образом, чтобы диапазон находился в
		 центре таблицы.


		 ![](../../Sub_Image.gif)
		 [Clear](ITabRange.Clear.htm)
		 Метод Clear очищает
		 все данные и форматирование диапазона ячеек.


		 ![](../../Sub_Image.gif)
		 [ClearContent](ITabRange.ClearContent.htm)
		 Метод ClearContent
		 удаляет все данные диапазона без очистки установленного форматирования
		 диапазона.


		 ![](../../Sub_Image.gif)
		 [ClearFormat](ITabRange.ClearFormat.htm)
		 Метод ClearFormat очищает
		 всё установленное форматирование диапазона без удаления данных.


		 ![](../../Sub_Image.gif)
		 [ClearPart](ITabRange.ClearPart.htm)
		 Метод ClearPart осуществляет
		 очистку указанных элементов диапазона ячеек.


		 ![](../../Sub_Image.gif)
		 [Clone](ITabRange.Clone.htm)
		 Метод Clone создает
		 копию диапазона ячеек.


		 ![](../../Sub_Image.gif)
		 [Combine](ITabRange.Combine.htm)
		 Метод Combine изменяет
		 текущий диапазон.


		 ![](../../Sub_Image.gif)
		 [Copy](ITabRange.Copy.htm)
		 Метод Copy копирует
		 данные диапазона в буфер обмена.


		 ![](../../Sub_Image.gif)
		 [CopyToStream](ITabRange.CopyToStream.htm)
		 Метод CopyToStream
		 копирует данные диапазона в указанный поток.


		 ![](../../Sub_Image.gif)
		 [CreateIterator](ITabRange.CreateIterator.htm)
		 Метод CreateIterator
		 создает итератор для навигации по ячейкам таблицы, содержащим
		 значения.


		 ![](../../Sub_Image.gif)
		 [Cut](ITabRange.Cut.htm)
		 Метод Cut вырезает
		 данные диапазона в буфер обмена.


		 ![](../../Sub_Image.gif)
		 [Delete](ITabRange.Delete.htm)
		 Метод Delete удаляет
		 заданный диапазон ячеек.


		 ![](../../Sub_Image.gif)
		 [DependenceCells](ITabRange.DependenceCells.htm)
		 Метод DependenceCells
		 производит поиск ячеек, от которых зависит данная ячейка.


		 ![](../../Sub_Image.gif)
		 [DependentCells](ITabRange.DependentCells.htm)
		 Метод DependentCells
		 производит поиск ячеек, которые зависят от данной ячейки.


		 ![](../../Sub_Image.gif)
		 [Expand](ITabRange.Expand.htm)
		 Метод Expand осуществляет
		 изменение размеров текущего диапазона до размеров объединенного
		 диапазона, в который он входит.


		 ![](../../Sub_Image.gif)
		 [ExtendToAdjacentCells](ITabRange.ExtendToAdjacentCells.htm)
		 Метод ExtendToAdjacentCells
		 возвращает диапазон ячеек, полученный путём расширения текущего
		 на соседние непустые ячейки.


		 ![](../../Sub_Image.gif)
		 [FillDown](ITabRange.FillDown.htm)
		 Метод FillDown заполняет
		 весь диапазон значениями, которые находятся в первой строке диапазона.


		 ![](../../Sub_Image.gif)
		 [FillLeft](ITabRange.FillLeft.htm)
		 Метод FillLeft заполняет
		 весь диапазон значениями, которые находятся в последнем столбце
		 диапазона.


		 ![](../../Sub_Image.gif)
		 [FillRight](ITabRange.FillRight.htm)
		 Метод FillRight заполняет
		 весь диапазон значениями, которые находятся в первом столбце диапазона.


		 ![](../../Sub_Image.gif)
		 [FillUp](ITabRange.FillUp.htm)
		 Метод FillUp заполняет
		 весь диапазон значениями, которые находятся в последней строке
		 диапазона.


		 ![](../../Sub_Image.gif)
		 [IfError](ITabRange.IfError.htm)
		 Метод IfError возвращает
		 значение ячейки, если оно не содержит ошибки, иначе заданное значение.


		 ![](../../Sub_Image.gif)
		 [Insert](ITabRange.Insert.htm)
		 Метод Insert вставляет
		 диапазон ячеек.


		 ![](../../Sub_Image.gif)
		 [MaxValue](ITabRange.MaxValue.htm)
		 Метод MaxValue ищет
		 наибольшее значение в диапазоне.


		 ![](../../Sub_Image.gif)
		 [Merge](ITabRange.Merge.htm)
		 Метод Merge объединяет
		 все ячейки диапазона в одну ячейку.


		 ![](../../Sub_Image.gif)
		 [MinValue](ITabRange.MinValue.htm)
		 Метод MinValue ищет
		 наименьшее значение в диапазоне.


		 ![](../../Sub_Image.gif)
		 [Offset](ITabRange.Offset.htm)
		 Метод Offset возвращает
		 диапазон ячеек, смещенный в соответствии с заданными параметрами.


		 ![](../../Sub_Image.gif)
		 [ParseValue](ITabRange.ParseValue.htm)
		 Метод ParseValue преобразует
		 значение указанной строки в соответствии с его типом и устанавливает
		 данное значение для диапазона.


		 ![](../../Sub_Image.gif)
		 [Paste](ITabRange.Paste.htm)
		 Метод Paste вставляет
		 данные из буфера обмена в текущий диапазон ячеек.


		 ![](../../Sub_Image.gif)
		 [PasteFromStream](ITabRange.PasteFromStream.htm)
		 Метод PasteFromStream
		 вставляет в текущий диапазон данные из указанного потока.


		 ![](../../Sub_Image.gif)
		 [PasteFromStreamEx](ITabRange.PasteFromStreamEx.htm)
		 Метод PasteFromStreamEx
		 вставляет в текущий диапазон данные из указанного потока в соответствии
		 с заданными параметрами вставки.


		 ![](../../Sub_Image.gif)
		 [Recalc](ITabRange.Recalc.htm)
		 Метод Recalc вычисляет
		 данные в текущем диапазоне.


		 ![](../../Sub_Image.gif)
		 [SortColumns](ITabRange.SortColumns.htm)
		 Метод SortColumns осуществляет
		 сортировку диапазона столбцов, в зависимости от значений содержащихся
		 в строке с индексом RowIndex.


		 ![](../../Sub_Image.gif)
		 [SortRows](ITabRange.SortRows.htm)
		 Метод SortRows осуществляет
		 сортировку диапазона строк, в зависимости от значений, содержащихся
		 в столбце с индексом ColumnIndex.


		 ![](../../Sub_Image.gif)
		 [ToArray](ITabRange.ToArray.htm)
		 Метод ToArray создает
		 двумерный массив.


		 ![](../../Sub_Image.gif)
		 [ToDouble2DArray](ITabRange.ToDouble2DArray.htm)
		 Метод ToDouble2DArray
		 осуществляет преобразование диапазона в двумерный массив вещественных
		 чисел.


		 ![](../../Sub_Image.gif)
		 [ToDoubleArray](ITabRange.ToDoubleArray.htm)
		 Метод ToDoubleArray
		 осуществляет преобразование диапазона в вещественный массив.


		 ![](../../Sub_Image.gif)
		 [ToDoubleArrayEx](ITabRange.ToDoubleArrayEx.htm)
		 Метод ToDoubleArrayEx
		 осуществляет преобразование диапазона в вещественный массив с
		 возможностью применения дополнительных параметров преобразования.


		 ![](../../Sub_Image.gif)
		 [ToIntegerArray](ITabRange.ToIntegerArray.htm)
		 Метод ToIntegerArray
		 осуществляет преобразование диапазона в целочисленный массив.


		 ![](../../Sub_Image.gif)
		 [Unmerge](ITabRange.Unmerge.htm)
		 Метод Unmerge отменяет
		 объединение ячеек диапазона.


См. также:


[Интерфейсы сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
