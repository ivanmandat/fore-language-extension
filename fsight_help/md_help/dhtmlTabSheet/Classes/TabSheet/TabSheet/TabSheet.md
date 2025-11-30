# TabSheet

TabSheet
-


**


# TabSheet


Пространство имен**: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


    [Control](dhtmlUi.chm::/Classes/control/control.htm)


        TabSheet


## Описание


Класс **TabSheet** реализует
 таблицу.


## Синтаксис


PP.initClass(PP.Ui.TabSheet, [PP.Ui.Control](dhtmlUi.chm::/Classes/control/control.htm),
 "PP.Ui.TabSheet");


## Конструктор


				 Имя конструктора
				 Краткое описание


				 ![](../../../Sub_Image.gif)
				 [TabSheet](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/Constructor_TabSheet.htm)
				 Конструктор TabSheet
				 создает экземпляр компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm).


## Методы


			 Имя метода
			 Краткое описание


			 ![](../../../Sub_Image.gif)
			 [addCellControl](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.addCellControl.htm)
			 Метод **addCellControl**
			 добавляет элемент управления в ячейку с указанными координатами.


			 ![](../../../Sub_Image.gif)
			 [addCellToSearchResult](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.addCellToSearchResult.htm)
			 Метод addCellToSearchResult
			 добавляет ячейку к результатам поиска.


			 ![](../../../Sub_Image.gif)
			 [addExpander](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.addExpander.htm)
			 Метод **addExpander**
			 добавляет кнопку развёртывания для диапазона в его верхней
			 левой ячейке.


			 ![](../../../Sub_Image.gif)
			 [addFilter](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.addFilter.htm)
			 Метод **addFilter**
			 добавляет фильтр для столбца таблицы.


			 ![](../../../Sub_Image.gif)
			 [addObject](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.addObject.htm)
			 Метод **addObject**
			 добавляет объект в таблицу.


			 ![](../../../Sub_Image.gif)
			 [autoColumnWidth](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.autoColumnWidth.htm)
			 Метод **autoColumnWidth**
			 автоматически подгоняет ширину столбцов таблицы.


			 ![](../../../Sub_Image.gif)
			 [autoRowHeight](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.autoRowHeight.htm)
			 Метод **autoRowHeight**
			 автоматически подгоняет высоту строк таблицы.


			 ![](../../../Sub_Image.gif)
			 [beginUpdate](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.beginUpdate.htm)
			 Метод beginUpdate
			 отключает перерисовку таблицу до тех пор, пока не будет вызван
			 метод [endUpdate](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.endUpdate.htm).


			 ![](../../../Sub_Image.gif)
			 [calcCoordByOffset](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.calcCoordByOffset.htm)
			 Метод **calcCoordByOffset**
			 возвращает координаты, соответствующие сдвигу относительно
			 верхнего правого угла таблицы с учётом объединения ячеек.


			 ![](../../../Sub_Image.gif)
			 [calcCoordUnderMouse](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.calcCoordUnderMouse.htm)
			 Метод **calcCoordUnderMouse**
			 возвращает координаты ячейки под текущей позиции курсора мыши
			 с учётом объединения ячеек таблицы.


			 ![](../../../Sub_Image.gif)
			 [calcNonSpanCoordByOffset](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.calcNonSpanCoordByOffset.htm)
			 Метод **calcNonSpanCoordByOffset**
			 возвращает координаты, соответствующие сдвигу относительно
			 верхнего правого угла таблицы без учёта объединения ячеек.


			 ![](../../../Sub_Image.gif)
			 [calcNonSpanCoordUnderMouse](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.calcNonSpanCoordUnderMouse.htm)
			 Метод **calcNonSpanCoordUnderMouse**
			 возвращает координаты ячейки под текущей позиции курсора мыши
			 без учёта объединения ячеек таблицы.


			 ![](../../../Sub_Image.gif)
			 [clearChangedCells](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.clearChangedCells.htm)
			 Метод **clearChangedCells**
			 очищает информацию об измененных ячейках таблицы.


			 ![](../../../Sub_Image.gif)
			 [clearRedo](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.clearRedo.htm)
			 Метод **clearRedo**
			 очищает массив команд для их возврата.


			 ![](../../../Sub_Image.gif)
			 [clearSearchResult](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.clearSearchResult.htm)
			 Метод clearSearchResult
			 удаляет все ячейки из результатов поиска.


			 ![](../../../Sub_Image.gif)
			 [clearSelection](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.clearSelection.htm)
			 Метод **clearSelection**
			 убирает все выделения в таблице.


			 ![](../../../Sub_Image.gif)
			 [clearUndo](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.clearUndo.htm)
			 Метод **clearUndo**
			 очищает массив команд для их отмены.


			 ![](../../../Sub_Image.gif)
			 [clearUserEditableRanges](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.clearUserEditableRanges.htm)
			 Метод **clearUserEditableRanges**
			 очищает массив диапазонов ячеек, отредактированных пользователем.


			 ![](../../../Sub_Image.gif)
			 [closeCellEditor](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.closeCellEditor.htm)
			 Метод **closeCellEditor**
			 закрывает текущий активный редактор ячейки.


			 ![](../../../Sub_Image.gif)
			 [convertToExcelFormat](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.convertToExcelFormat.htm)
			 Метод convertToExcelFormat
			 преобразует диапазон ячеек в текст в формате табличной верстки.


			 ![](../../../Sub_Image.gif)
			 [convertToPlainText](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.convertToPlainText.htm)
			 Метод **convertToPlainText**
			 преобразует данные диапазона ячеек в текст.


			 ![](../../../Sub_Image.gif)
			 [coord](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.coord.htm)
			 Устарел. Используйте
			 [TabSheet.getCoord](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCoord.htm).


			 ![](../../../Sub_Image.gif)
			 [copy](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.copy.htm)
			 Метод **copy**
			 возвращает содержимое указанного или выделенного диапазона
			 ячеек таблицы.


			 ![](../../../Sub_Image.gif)
			 [cutRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.cutRange.htm)
			 Метод **cutRange**
			 вырезает содержимое диапазона ячеек таблицы.


			 ![](../../../Sub_Image.gif)
			 [deleteColumn](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.deleteColumn.htm)
			 Метод **deleteColumn**
			 удаляет столбцы таблицы.


			 ![](../../../Sub_Image.gif)
			 [deleteColums](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.deleteColumns.htm)
			 Метод **deleteColumns**
			 удаляет массив столбцов таблицы.


			 ![](../../../Sub_Image.gif)
			 [deleteRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.deleteRange.htm)
			 Метод **deleteRange**
			 удаляет диапазоны ячеек в таблице.


			 ![](../../../Sub_Image.gif)
			 [deleteRow](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.deleteRow.htm)
			 Метод **deleteRow**
			 удаляет строки таблицы.


			 ![](../../../Sub_Image.gif)
			 [deleteRows](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.deleteRows.htm)
			 Метод **deleteRows** удаляет
			 массив строк таблицы.


			 ![](../../../Sub_Image.gif)
			 [doEdit](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.doEdit.htm)
			 Метод **doEdit**
			 генерирует событие таблицы Edited.


			 ![](../../../Sub_Image.gif)
			 [edit](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.edit.htm)
			 Метод **edit**
			 переводит ячейку в режим редактирования.


			 ![](../../../Sub_Image.gif)
			 [endUpdate](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.endUpdate.htm)
			 Метод endUpdate
			 включает перерисовку таблицы и обновляет её.


			 ![](../../../Sub_Image.gif)
			 [ensureCellSpanUnderCoordVisibility](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.ensureCellSpanUnderCoordVisibility.htm)
			 Метод **ensureCellSpanUnderCoordVisibility**
			 изменяет видимую область таблицы так, чтобы отображался диапазон
			 объединённых ячеек.


			 ![](../../../Sub_Image.gif)
			 [ensureCoordVisibility](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.ensureCoordVisibility.htm)
			 Метод **ensureCoordVisibility**
			 изменяет видимую область таблицы так, чтобы отображалась ячейка
			 с указанными координатами.


			 ![](../../../Sub_Image.gif)
			 [ensureCurrentSelectionVisibility](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.ensureCurrentSelectionVisibility.htm)
			 Метод **ensureCurrentSelectionVisibility**
			 изменяет видимую область таблицы так, чтобы отображалось выделение.


			 ![](../../../Sub_Image.gif)
			 [ensureRangeVisibility](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.ensureRangeVisibility.htm)
			 Метод **ensureRangeVisibility**
			 изменяет видимую область таблицы так, чтобы отображался указанный
			 диапазон ячеек.


			 ![](../../../Sub_Image.gif)
			 [getActiveSelectedRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getActiveSelectedRange.htm)
			 Метод **getActiveSelectedRange**
			 возвращает активный выделенный диапазон ячеек.


			 ![](../../../Sub_Image.gif)
			 [getAdjustmentMgr](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getAdjustmentMgr.htm)
			 Метод **getAdjustmentMgr**
			 возвращает менеджер изменений размеров строк и столбцов таблицы.


			 ![](../../../Sub_Image.gif)
			 [getCell](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCell.htm)
			 Метод **getCell**
			 возвращает диапазон, состоящий из одной ячейки.


			 ![](../../../Sub_Image.gif)
			 [getCellControl](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCellControl.htm)
			 Метод **getCellControl**
			 возвращает элемент управления по координатам ячейки, в которой
			 он расположен.


			 ![](../../../Sub_Image.gif)
			 [getCellControlIndex](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCellControlIndex.htm)
			 Метод **getCellControlIndex**
			 возвращает индекс элемента управления по координатам ячейки,
			 в которой он расположен.


			 ![](../../../Sub_Image.gif)
			 [getCellId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCellId.htm)
			 Метод **getCellId**
			 возвращает идентификатор ячейки таблицы.


			 ![](../../../Sub_Image.gif)
			 [getCellNode](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCellNode.htm)
			 Метод **getCellNode **возвращает
			 DOM-элемент ячейки таблицы.


			 ![](../../../Sub_Image.gif)
			 [getCellSpanUnderCoord](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCellSpanUnderCoord.htm)
			 Метод **getCellSpanUnderCoord**
			 возвращает диапазон объединённых ячеек по координате ячейки,
			 входящей в него.


			 ![](../../../Sub_Image.gif)
			 [getChangedCells](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getChangedCells.htm)
			 Метод **getChangedCells**
			 возвращает массив данных изменённых ячеек таблицы.


			 ![](../../../Sub_Image.gif)
			 [getChangedData](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getChangedData.htm)
			 Метод **getChangedData**
			 возвращает массив изменённых данных.


			 ![](../../../Sub_Image.gif)
			 [getClipboardContainsData](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getClipboardContainsData.htm)
			 Метод **getClipboardContainsData**
			 извлекает содержимое буфера.


			 ![](../../../Sub_Image.gif)
			 [getColIndexByHeaderText](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getColIndexByHeaderText.htm)
			 Метод getColIndexByHeaderText
			 возвращает индекс столбца таблицы по тексту его заголовка.


			 ![](../../../Sub_Image.gif)
			 [getColumnHeaderId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getColumnHeaderId.htm)
			 Метод **getColumnHeaderId**
			 возвращает идентификатор заголовка столбца таблицы.


			 ![](../../../Sub_Image.gif)
			 [getColumnHeaderNode](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getColumnHeaderNode.htm)
			 Метод **getColumnHeaderNode**
			 возвращает DOM-элемент заголовка столбца.


			 ![](../../../Sub_Image.gif)
			 [getColumnHeaderText](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getColumnHeaderText.htm)
			 Метод **getColumnHeaderText**
			 возвращает заголовок столбца таблицы.


			 ![](../../../Sub_Image.gif)
			 [getColumnLeftOffset](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getColumnLeftOffset.htm)
			 Метод **getColumnLeftOffset**
			 возвращает координату, с которой начинается столбец таблицы.


			 ![](../../../Sub_Image.gif)
			 [getContainer](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getContainer.htm)
			 Метод **getContainer**
			 возвращает DOM-элемент контейнера таблицы.


			 ![](../../../Sub_Image.gif)
			 [getContainerId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getContainerId.htm)
			 Метод **getContainerId**
			 возвращает идентификатор DOM-элемента контейнера таблицы.


			 ![](../../../Sub_Image.gif)
			 [getCoord](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCoord.htm)
			 Метод **getCoord**
			 возвращает координаты ячейки по индексу строки и столбца таблицы.


			 ![](../../../Sub_Image.gif)
			 [getCoordByNode](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCoordByNode.htm)
			 Метод **getCoordByNode**
			 возвращает координаты ячейки по её DOM-элементу.


			 ![](../../../Sub_Image.gif)
			 [getCoordFromString](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCoordFromString.htm)
			 Метод getCoordFromString
			 возвращает координаты ячейки по указанному строковому представлению.


			 ![](../../../Sub_Image.gif)
			 [getCoordInfo](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCoordInfo.htm)
			 Метод **getCoordInfo**
			 возвращает объект с информацией о координате.


			 ![](../../../Sub_Image.gif)
			 [getCoordUnderMouse](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCoordUnderMouse.htm)
			 Метод **getCoordUnderMouse**
			 возвращает текущую координату под курсором мыши.


			 ![](../../../Sub_Image.gif)
			 [getCurrentCellEditor](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCurrentCellEditor.htm)
			 Метод **getCurrentCellEditor**
			 возвращает текущий активный редактор ячейки.


			 ![](../../../Sub_Image.gif)
			 [getCurrentVisibleCellsRanges](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCurrentVisibleCellsRanges.htm)
			 Метод **getCurrentVisibleCellsRanges**
			 возвращает текущий видимый диапазон ячеек.


			 ![](../../../Sub_Image.gif)
			 [getCustomFixedBehaviour](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCustomFixedBehaviour.htm)
			 Метод getCustomFixedBehaviour
			 возвращает определённое пользователем поведение фиксированных
			 строк и столбцов таблицы при нажатии на них.


			 ![](../../../Sub_Image.gif)
			 [getCustomFixedLineColor](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getCustomFixedLineColor.htm)
			 Метод **getCustomFixedLineColor**
			 возвращает определённый пользователем цвет линии, отделяющей
			 фиксированные строки и столбцы от нефиксированных.


			 ![](../../../Sub_Image.gif)
			 [getDynamicExpansion](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getDynamicExpansion.htm)
			 Метод getDynamicExpansion
			 возвращает признак использования динамического увеличения
			 количества строк/столбцов при достижении последней заполненной
			 ячейки таблицы.


			 ![](../../../Sub_Image.gif)
			 [getExpanderUnderCoord](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getExpanderUnderCoord.htm)
			 Метод **getExpanderUnderCoord**
			 возвращает кнопку развёртывания по указанной координате.


			 ![](../../../Sub_Image.gif)
			 [getFixedColumnCount](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getFixedColumnCount.htm)
			 Метод **getFixedColumnCount**
			 возвращает количество зафиксированных столбцов в таблице.


			 ![](../../../Sub_Image.gif)
			 [getFixedRowCount](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getFixedRowCount.htm)
			 Метод **getFixedRowCount**
			 возвращает количество зафиксированных строк в таблице.


			 ![](../../../Sub_Image.gif)
			 [getGridBorderWidth](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getGridBorderWidth.htm)
			 Метод **getGridBorderWidth**
			 возвращает ширину сетки таблицы.


			 ![](../../../Sub_Image.gif)
			 [getHeaderCellContentId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getHeaderCellContentId.htm)
			 Метод **getHeaderCellContentId**
			 возвращает идентификатор содержимого заголовка столбца таблицы.


			 ![](../../../Sub_Image.gif)
			 [getHScrollBar](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getHScrollBar.htm)
			 Метод getHScrollBar
			 возвращает элемент горизонтальной прокрутки.


			 ![](../../../Sub_Image.gif)
			 [getHScrollBarId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getHScrollBarId.htm)
			 Метод **getHScrollBarId**
			 возвращает идентификатор контейнера горизонтальной полосы
			 прокрутки в таблице.


			 ![](../../../Sub_Image.gif)
			 [getHScrollbarHeight](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getHScrollbarHeight.htm)
			 Метод **getHScrollbarHeight**
			 возвращает высоту горизонтального полосы прокрутки в пикселях.


			 ![](../../../Sub_Image.gif)
			 [getIsAsync](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getIsAsync.htm)
			 Метод **getIsAsync**
			 возвращает режим работы с источником данных.


			 ![](../../../Sub_Image.gif)
			 [getIsAsyncScrolling](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getIsAsyncScrolling.htm)
			 Метод getIsAsyncScrolling
			 возвращает признак асинхронной работы компонента.


			 ![](../../../Sub_Image.gif)
			 [getIsEditing](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getIsEditing.htm)
			 Метод getIsEditing
			 возвращает признак процесса редактирования ячейки таблицы.


			 ![](../../../Sub_Image.gif)
			 [getJSON](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getJSON.htm)
			 Метод **getJSON**
			 преобразует указанный диапазон ячеек в JSON-объект.


			 ![](../../../Sub_Image.gif)
			 [getLeftmostVisibleColumn](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getLeftmostVisibleColumn.htm)
			 Метод **getLeftmostVisibleColumn**
			 возвращает столбец, ближайший к левому краю текущей видимой
			 области таблицы.


			 ![](../../../Sub_Image.gif)
			 [getMeasures](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getMeasures.htm)
			 Метод **getMeasures**
			 возвращает измерения таблицы.


			 ![](../../../Sub_Image.gif)
			 [getModel](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getModel.htm)
			 Метод **getModel**
			 возвращает модель данных таблицы.


			 ![](../../../Sub_Image.gif)
			 [getNodeUnderCoord](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getNodeUnderCoord.htm)
			 Метод **getNodeUnderCoord**
			 возвращает DOM-элемент ячейки таблицы по указанной координате.


			 ![](../../../Sub_Image.gif)
			 [getNonSpanCoordUnderMouse](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getNonSpanCoordUnderMouse.htm)
			 Метод **getNonSpanCoordUnderMouse**
			 возвращает текущую координату ячейки под курсором мыши без
			 учета объединений.


			 ![](../../../Sub_Image.gif)
			 [getObjectSelection](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getObjectSelection.htm)
			 Метод **getObjectSelection**
			 возвращает объект выделения.


			 ![](../../../Sub_Image.gif)
			 [getRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getRange.htm)
			 Метод **getRange**
			 возвращает диапазон ячеек.


			 ![](../../../Sub_Image.gif)
			 [getRangeFromString](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getRangeFromString.htm)
			 Метод getRangeFromString
			 возвращает диапазон ячеек по строковому представлению.


			 ![](../../../Sub_Image.gif)
			 [getRedoChangedData](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getRedoChangedData.htm)
			 Метод **getRedoChangedData**
			 возвращает массив команд для их возврата.


			 ![](../../../Sub_Image.gif)
			 [getRowHeaderContentId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getRowHeaderContentId.htm)
			 Метод **getRowHeaderContentId**
			 возвращает идентификатор содержимого заголовка строки таблицы.


			 ![](../../../Sub_Image.gif)
			 [getRowHeaderId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getRowHeaderId.htm)
			 Метод **getRowHeaderId**
			 возвращает идентификатор заголовка строки таблицы.


			 ![](../../../Sub_Image.gif)
			 [getRowHeaderNode](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getRowHeaderNode.htm)
			 Метод **getRowHeaderNode**
			 возвращает DOM-элемент заголовка строки.


			 ![](../../../Sub_Image.gif)
			 [getRowId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getRowId.htm)
			 Метод **getRowId**
			 возвращает идентификатор строки таблицы.


			 ![](../../../Sub_Image.gif)
			 [getRowNode](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getRowNode.htm)
			 Метод **getRowNode**
			 возвращает DOM-элемент строки таблицы.


			 ![](../../../Sub_Image.gif)
			 [getRowTopOffset](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getRowTopOffset.htm)
			 Метод **getRowTopOffset**
			 возвращает координаты, с которой начинается строка таблицы.


			 ![](../../../Sub_Image.gif)
			 [getSelectedCoord](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getSelectedCoord.htm)
			 Метод **getSelectedCoord**
			 возвращает начальные координаты выделенного диапазона в таблице.


			 ![](../../../Sub_Image.gif)
			 [getSelectedRanges](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getSelectedRanges.htm)
			 Метод **getSelectedRanges**
			 возвращает все выделенные диапазоны в таблице.


			 ![](../../../Sub_Image.gif)
			 [getSelection](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getSelection.htm)
			 Метод **getSelection**
			 возвращает объект выделения в таблице.


			 ![](../../../Sub_Image.gif)
			 [getSelectionTransparent](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getSelectionTransparent.htm)
			 Метод getSelectionTransparent
			 возвращает значение степени прозрачности цвета заливки выделенных
			 ячеек таблицы.


			 ![](../../../Sub_Image.gif)
			 [getSmoothScrollStep](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getSmoothScrollStep.htm)
			 Метод getSmoothScrollStep
			 возвращает шаг плавной прокрутки.


			 ![](../../../Sub_Image.gif)
			 [getStyleSheet](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getStyleSheet.htm)
			 Метод getStyleSheet
			 возвращает настройки стиля компонента.


			 ![](../../../Sub_Image.gif)
			 [getTable](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getTable.htm)
			 Метод **getTable**
			 возвращает DOM-элемент таблицы.


			 ![](../../../Sub_Image.gif)
			 [getTableContainer](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getTableContainer.htm)
			 Метод **getTableContainer**
			 возвращает DOM-элемент контейнера таблицы.


			 ![](../../../Sub_Image.gif)
			 [getTableContainerId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getTableContainerId.htm)
			 Метод **getTableContainerId**
			 возвращает идентификатор DOM-элемента контейнера таблицы.


			 ![](../../../Sub_Image.gif)
			 [getTopmostVisibleRow](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getTopmostVisibleRow.htm)
			 Метод **getTopmostVisibleRow**
			 возвращает ближайшую к левому краю текущей видимой области
			 строку.


			 ![](../../../Sub_Image.gif)
			 [getVScrollBar](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getVScrollBar.htm)
			 Метод getVScrollBar
			 возвращает элемент вертикальной прокрутки.


			 ![](../../../Sub_Image.gif)
			 [getVScrollBarContainer](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getVScrollBarContainer.htm)
			 Метод **getVScrollBarContainer**
			 возвращает DOM-элемент контейнера вертикальной полосы прокрутки.


			 ![](../../../Sub_Image.gif)
			 [getVScrollBarId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getVScrollBarId.htm)
			 Метод **getVScrollBarId**
			 возвращает идентификатор контейнера вертикальной полосы прокрутки
			 в таблице.


			 ![](../../../Sub_Image.gif)
			 [getVScrollbarWidth](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getVScrollbarWidth.htm)
			 Метод **getVScrollbarWidth**
			 возвращает ширину вертикальной полосы прокрутки в пикселях.


			 ![](../../../Sub_Image.gif)
			 [getVisibleHeight](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getVisibleHeight.htm)
			 Метод **getVisibleHeight**
			 возвращает видимую высоту таблицы в пикселях.


			 ![](../../../Sub_Image.gif)
			 [getVisibleWidth](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.getVisibleWidth.htm)
			 Метод **getVisibleWidth**
			 возвращает видимую ширину таблицы в пикселях.


			 ![](../../../Sub_Image.gif)
			 [hasRangesToLoad](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.hasRangesToLoad.htm)
			 Метод **hasRangesToLoad**
			 определяет, есть ли видимые диапазоны, данные для которых
			 необходимо загрузить из источника.


			 ![](../../../Sub_Image.gif)
			 [hideColumns](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.hideColumns.htm)
			 Метод **hideColumns**
			 скрывает столбцы таблицы.


			 ![](../../../Sub_Image.gif)
			 [hideRows](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.hideRows.htm)
			 Метод **hideRows**
			 скрывает строки таблицы.


			 ![](../../../Sub_Image.gif)
			 [insertColumn](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.insertColumn.htm)
			 Метод **insertColumn**
			 вставляет столбцы в таблицу.


			 ![](../../../Sub_Image.gif)
			 [insertRow](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.insertRow.htm)
			 Метод **insertRow**
			 вставляет столбцы в таблицу.


			 ![](../../../Sub_Image.gif)
			 [isCellSpanVisible](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isCellSpanVisible.htm)
			 Метод **isCellSpanVisible**
			 определяет, находится ли диапазон объединённых ячеек в видимой
			 области таблицы.


			 ![](../../../Sub_Image.gif)
			 [isColInsideVisibleRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isColInsideVisibleRange.htm)
			 Метод **isColInsideVisibleRange**
			 определяет, находится ли столбец внутри видимого диапазона.


			 ![](../../../Sub_Image.gif)
			 [isColVisible](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isColVisible.htm)
			 Метод **isColVisible**
			 определяет видимость столбца таблицы.


			 ![](../../../Sub_Image.gif)
			 [isColVisibleAndOutsideVisibleRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isColVisibleAndOutsideVisibleRange.htm)
			 Метод **isColVisibleAndOutsideVisibleRange**
			 определяет, не скрыт ли столбец и находится ли он за пределами
			 видимого диапазона.


			 ![](../../../Sub_Image.gif)
			 [isCoordVisible](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isCoordVisible.htm)
			 Метод **isCoordVisible**
			 определяет видимость ячейки с указанной координатой в таблице.


			 ![](../../../Sub_Image.gif)
			 [isCoordVisibleOrInsideVisibleSpan](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isCoordVisibleOrInsideVisibleSpan.htm)
			 Метод **isCoordVisibleOrInsideVisibleSpan**
			 определяет, не скрыт ли диапазон объединённых ячеек и находится
			 ли он в пределах видимого диапазона таблицы.


			 ![](../../../Sub_Image.gif)
			 [isLastVisibleColumn](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isLastVisibleColumn.htm)
			 Метод **isLastVisibleColumn**
			 определяет, является ли указанный столбец последним видимым.


			 ![](../../../Sub_Image.gif)
			 [isLastVisibleRow](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isLastVisibleRow.htm)
			 Метод **isLastVisibleRow**
			 определяет, является ли указанная строка последней видимой.


			 ![](../../../Sub_Image.gif)
			 [isLoaded](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isLoaded.htm)
			 Метод **isLoaded**
			 определяет, была ли загружена таблица.


			 ![](../../../Sub_Image.gif)
			 [isRowInsideVisibleRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isRowInsideVisibleRange.htm)
			 Метод **isRowInsideVisibleRange**
			 определяет находится ли строка внутри видимого диапазона .


			 ![](../../../Sub_Image.gif)
			 [isRowVisible](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isRowVisible.htm)
			 Метод **isRowVisible**
			 определяет видимость строки таблицы.


			 ![](../../../Sub_Image.gif)
			 [isRowVisibleAndOutsideVisibleRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.isRowVisibleAndOutsideVisibleRange.htm)
			 Метод **isRowVisibleAndOutsideVisibleRange**
			 определяет, не скрыта ли строка, и находится ли она за пределами
			 видимого диапазона.


			 ![](../../../Sub_Image.gif)
			 [IsTabSheetExpandExist](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.IsTabSheetExpandExist.htm)
			 Метод IsTabSheetExpandExist
			 возвращает признак наличия группировок в таблице.


			 ![](../../../Sub_Image.gif)
			 [IsTabSheetTabObjectExist](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.IsTabSheetTabObjectExist.htm)
			 Метод IsTabSheetTabObjectExist
			 возвращает признак наличия объектов в таблице.


			 ![](../../../Sub_Image.gif)
			 [liteRerender](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.liteRerender.htm)
			 Метод liteRerender
			 перерисовывает компонент из кеша.


			 ![](../../../Sub_Image.gif)
			 [loadVisibleRanges](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.loadVisibleRanges.htm)
			 Метод **loadVisibleRanges**
			 загружает ещё незагруженные из источника видимые диапазоны
			 таблицы.


			 ![](../../../Sub_Image.gif)
			 [merge](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.merge.htm)
			 Метод **merge**
			 объединяет ячейки таблицы в указанном диапазоне.


			 ![](../../../Sub_Image.gif)
			 [mergeSelectedRanges](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.mergeSelectedRanges.htm)
			 Метод **mergeSelectedRanges**
			 объединяет ячейки для всех выделенных диапазонов таблицы.


			 ![](../../../Sub_Image.gif)
			 [parseCellId](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.parseCellId.htm)
			 Метод **parseCellId**
			 возвращает координаты ячейки по её идентификатору.


			 ![](../../../Sub_Image.gif)
			 [parsePlainText](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.parsePlainText.htm)
			 Метод **parsePlainText**
			 десериализует текст диапазона таблицы в формат источника данных.


			 ![](../../../Sub_Image.gif)
			 [paste](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.paste.htm)
			 Метод **paste**
			 вставляет текст в ячейку с указанными координатами.


			 ![](../../../Sub_Image.gif)
			 [redo](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.redo.htm)
			 Метод **redo**
			 возвращает последнее изменение в таблице.


			 ![](../../../Sub_Image.gif)
			 [removeAllCellControl](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.removeAllCellControl.htm)
			 Метод **removeAllCellControl**
			 удаляет все элементы управления в ячейках таблицы.


			 ![](../../../Sub_Image.gif)
			 [removeCellControl](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.removeCellControl.htm)
			 Метод **removeCellControl**
			 удаляет элемент управления по координатам ячейки, в которой
			 он расположен.


			 ![](../../../Sub_Image.gif)
			 [removeCellControlByIndex](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.removeCellControlByIndex.htm)
			 Метод **removeCellControlByIndex**
			 удаляет элемент управления в ячейке таблицы по его индексу.


			 ![](../../../Sub_Image.gif)
			 [removeCellFromSearchResult](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.removeCellFromSearchResult.htm)
			 Метод removeCellFromSearchResult
			 удаляет ячейку из результатов поиска.


			 ![](../../../Sub_Image.gif)
			 [removeExpander](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.removeExpander.htm)
			 Метод **removeExpander**
			 удаляет кнопку развёртывания из ячейки с указанной координатой.


			 ![](../../../Sub_Image.gif)
			 [removeFilter](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.removeFilter.htm)
			 Метод **removeFilter**
			 убирает фильтр со столбца таблицы.


			 ![](../../../Sub_Image.gif)
			 [removeObject](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.removeObject.htm)
			 Метод **removeObject**
			 удаляет объект из таблицы.


			 ![](../../../Sub_Image.gif)
			 [removeUndo](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.removeUndo.htm)
			 Метод **removeUndo**
			 удаляет последние изменения в таблице.


			 ![](../../../Sub_Image.gif)
			 [rerender](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.rerender.htm)
			 Метод **rerender**
			 перерисовывает компонент.


			 ![](../../../Sub_Image.gif)
			 [rerenderDisable](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.rerenderDisable.htm)
			 Метод **rerenderDisable**
			 отключает перерисовку таблицы.


			 ![](../../../Sub_Image.gif)
			 [rerenderEnable](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.rerenderEnable.htm)
			 Метод **rerenderEnable**
			 включает перерисовку таблицы.


			 ![](../../../Sub_Image.gif)
			 [reset](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.reset.htm)
			 Метод **reset**
			 cбрасывает весь кеш компонента и заново запрашивает все данные
			 из источника данных.


			 ![](../../../Sub_Image.gif)
			 [resetCoord](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.resetCoord.htm)
			 Метод **resetCoord**
			 перерисовывает ячейку таблицы.


			 ![](../../../Sub_Image.gif)
			 [resetRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.resetRange.htm)
			 Метод **resetRange**
			 перерисовывает указанный диапазон ячеек.


			 ![](../../../Sub_Image.gif)
			 [scrollHorizontal](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.scrollHorizontal.htm)
			 Метод **scrollHorizontal**
			 осуществляет горизонтальную прокрутку таблицы.


			 ![](../../../Sub_Image.gif)
			 [scrollToColumn](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.scrollToColumn.htm)
			 Метод **scrollToColumn**
			 выполняет прокрутку таблицы к указанному столбцу.


			 ![](../../../Sub_Image.gif)
			 [scrollToColumnAsToLast](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.scrollToColumnAsToLast.htm)
			 Метод **scrollToColumnAsToLast**
			 выполняет прокрутку таблицы к указанному столбцу, чтобы он
			 был последним видимым.


			 ![](../../../Sub_Image.gif)
			 [scrollToPos](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.scrollToPos.htm)
			 Метод scrollToPos
			 осуществляет прокрутку таблицы до указанных строки и столбца.


			 ![](../../../Sub_Image.gif)
			 [scrollToPosInPx](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.scrollToPosInPx.htm)
			 Метод scrollToPosInPx
			 осуществляет прокрутку таблицы на определенное количество
			 пикселей по вертикали и горизонтали.


			 ![](../../../Sub_Image.gif)
			 [scrollToRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.scrollToRange.htm)
			 Метод **scrollToRange**
			 выполняет прокрутку таблицы к указанному диапазону.


			 ![](../../../Sub_Image.gif)
			 [scrollToRow](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.scrollToRow.htm)
			 Метод **scrollToRow**
			 выполняет прокрутку таблицы к указанной строке.


			 ![](../../../Sub_Image.gif)
			 [scrollToRowAsToLast](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.scrollToRowAsToLast.htm)
			 Метод **scrollToRowAsToLast**
			 выполняет прокрутку таблицы к указанной строке, чтобы она
			 была последней видимой.


			 ![](../../../Sub_Image.gif)
			 [scrollVertical](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.scrollVertical.htm)
			 Метод **scrollVertical**
			 осуществляет вертикальную прокрутку таблицы.


			 ![](../../../Sub_Image.gif)
			 [select](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.select.htm)
			 Метод **select**
			 выбирает указанный диапазон ячеек.


			 ![](../../../Sub_Image.gif)
			 [selectAll](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.selectAll.htm)
			 Метод **selectAll**
			 выделяет все ячейки таблицы.


			 ![](../../../Sub_Image.gif)
			 [setCellControls](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setCellControls.htm)
			 Метод **setCellControls**
			 добавляет элементы управления в ячейки с указанными координатами.


			 ![](../../../Sub_Image.gif)
			 [setColumnsWidth](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setColumnsWidth.htm)
			 Метод **setColumnsWidth**
			 устанавливает ширину столбцов таблицы.


			 ![](../../../Sub_Image.gif)
			 [setComment](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setComment.htm)
			 Метод **setComment**
			 устанавливает комментарий у диапазона ячеек таблицы.


			 ![](../../../Sub_Image.gif)
			 [setDataSource](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setDataSource.htm)
			 Метод **setDataSource**
			 устанавливает новый источник данных для таблицы.


			 ![](../../../Sub_Image.gif)
			 [setDynamicExpansion](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setDynamicExpansion.htm)
			 Метод setDynamicExpansion
			 устанавливает признак использования динамического увеличения
			 количества строк/столбцов при достижении последней заполненной
			 ячейки таблицы.


			 ![](../../../Sub_Image.gif)
			 [setHint](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setHint.htm)
			 Метод **setHint**
			 изменяет всплывающие подсказки у диапазона ячеек таблицы.


			 ![](../../../Sub_Image.gif)
			 [setCellPictureSettings](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setCellPictureSettings.htm)
			 Метод setCellPictureSettings
			 устанавливает настройки для изображения в ячейке таблицы.


			 ![](../../../Sub_Image.gif)
			 [setCellsValues](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setCellsValues.htm)
			 Метод setCellsValues
			 устанавливает новые значения ячеек таблицы на основе указанного
			 массива данных.


			 ![](../../../Sub_Image.gif)
			 [setClassToRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setClassToRange.htm)
			 Метод setClassToRange
			 устанавливает настройки указанного CSS-класса для диапазона
			 ячеек.


			 ![](../../../Sub_Image.gif)
			 [setIsUserEditableRanges](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setIsUserEditableRanges.htm)
			 Метод **setIsUserEditableRanges**
			 разрешает редактирование диапазона ячеек в режиме [PP.Ui.TabSheetEditMode](dhtmlTabSheet.chm::/Enums/TabSheetEditMode.htm).UserEnabledCell.


			 ![](../../../Sub_Image.gif)
			 [setPreservedFvCol](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setPreservedFvCol.htm)
			 Метод setPreservedFvCol
			 устанавливает значение сохраненного индекса столбца.


			 ![](../../../Sub_Image.gif)
			 [setPreservedFvRow](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setPreservedFvRow.htm)
			 Метод setPreservedFvRow
			 устанавливает значение сохраненного индекса строки.


			 ![](../../../Sub_Image.gif)
			 [setRangeEnabled](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setRangeEnabled.htm)
			 Метод **setRangeEnabled**
			 управляет доступностью диапазона ячеек.


			 ![](../../../Sub_Image.gif)
			 [setRowsHeight](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setRowsHeight.htm)
			 Метод setRowsHeight
			 устанавливает высоту строк таблицы.


			 ![](../../../Sub_Image.gif)
			 [setSelectionControlPosition](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setSelectionControlPosition.htm)
			 Метод setSelectionControlPosition
			 устанавливает позицию элемента управления, который будет отображаться
			 при выборе ячейки таблицы.


			 ![](../../../Sub_Image.gif)
			 [setSelectionTransparent](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.setSelectionTransparent.htm)
			 Метод setSelectionTransparent
			 устанавливает степень прозрачности цвета заливки выделенных
			 ячеек таблицы.


			 ![](../../../Sub_Image.gif)
			 [showColumns](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.showColumns.htm)
			 Метод **showColumns**
			 отображает скрытые столбцы таблицы.


			 ![](../../../Sub_Image.gif)
			 [showHyperlinksOnRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.showHyperlinksOnRange.htm)
			 Метод showHyperlinksOnRange отображает
			 содержимое ячеек таблицы в виде гиперссылок.


			 ![](../../../Sub_Image.gif)
			 [showRows](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.showRows.htm)
			 Метод **showRows**
			 отображает скрытые строки таблицы.


			 ![](../../../Sub_Image.gif)
			 [sort](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.sort.htm)
			 Метод **sort**
			 сортирует таблицу по указанным столбцам таблицы.


			 ![](../../../Sub_Image.gif)
			 [sortColumn](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.sortColumn.htm)
			 Метод sortColumn
			 устанавливает настройки сортировки для столбца.


			 ![](../../../Sub_Image.gif)
			 [split](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.split.htm)
			 Метод **split**
			 разъединяет объединённые ячейки таблицы.


			 ![](../../../Sub_Image.gif)
			 [splitSelectedRanges](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.splitSelectedRanges.htm)
			 Метод **splitSelectedRanges**
			 разъединяет ячейки для всех выделенных диапазонов.


			 ![](../../../Sub_Image.gif)
			 [undo](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.undo.htm)
			 Метод **undo**
			 отменяет последнее изменение в таблице.


			 ![](../../../Sub_Image.gif)
			 [undoAll](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.undoAll.htm)
			 Метод **undoAll**
			 отменяет все последние изменения в таблице, количество которых
			 устанавливается свойством [TabSheetSettings.UndoLength](dhtmlTabSheet.chm::/Interfaces/TabSheetSettings/TabSheetSettings.UndoLength.htm).


			 ![](../../../Sub_Image.gif)
			 [unsort](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.unsort.htm)
			 Метод unsort
			 сбрасывает сортировку в таблице.


			 ![](../../../Sub_Image.gif)
			 [update](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.update.htm)
			 Метод **update**
			 устанавливает новый источник данных с запоминанием текущего
			 видимого диапазона таблицы.


## События


			 Имя события
			 Краткое описание


			 ![](../../../event_image.gif)
			 [BeforeCopy](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.BeforeCopy.htm)
			 Событие **BeforeCopy**
			 наступает перед копированием содержимого диапазона ячеек таблицы.


			 ![](../../../event_image.gif)
			 [BeforePaste](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.BeforePaste.htm)
			 Событие **BeforePaste**
			 наступает перед вставкой текста в ячейку таблицы.


			 ![](../../../event_image.gif)
			 [CellEditorRendered](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.CellEditorRendered.htm)
			 Событие CellEditorRendered
			 наступает после отрисовки редактора для ввода значения ячейки.


			 ![](../../../event_image.gif)
			 [ContainerRendered](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.ContainerRendered.htm)
			 Событие **ContainerRendered**
			 генерируется при перерисовке контейнера с таблицей.


			 ![](../../../event_image.gif)
			 [CoordUnderMouseChanged](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.CoordUnderMouseChanged.htm)
			 Событие **CoordUnderMouseChanged**
			 генерируется при изменении координат ячейки под курсором мыши.


			 ![](../../../event_image.gif)
			 [EnabledChanged](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.EnabledChanged.htm)
			 Событие **EnabledChanged**
			 генерируется при изменении доступности асинхронной прокрутки
			 таблицы.


			 ![](../../../event_image.gif)
			 [Edited](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.Edited.htm)
			 Событие Edited
			 наступает после редактирования ячейки таблицы.


			 ![](../../../event_image.gif)
			 [Editing](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.Editing.htm)
			 Событие Editing
			 наступает в процессе редактирования ячейки таблицы.


			 ![](../../../event_image.gif)
			 [EditingEnd](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.EditingEnd.htm)
			 Событие EditingEnd
			 наступает после редактирования ячейки таблицы.


			 ![](../../../event_image.gif)
			 [EditingStart](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.EditingStart.htm)
			 Событие EditingStart
			 наступает перед редактированием ячейки таблицы.


			 ![](../../../event_image.gif)
			 [ExpanderAction](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.ExpanderAction.htm)
			 Событие ExpanderAction
			 наступает при взаимодействии с экспандером в таблице.


			 ![](../../../event_image.gif)
			 [HeadersMouseDown](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.HeadersMouseDown.htm)
			 Событие HeadersMouseDown
			 генерируется при нажатии на заголовки строк и столбцов таблицы.


			 ![](../../../event_image.gif)
			 [HintChanged](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.HintChanged.htm)
			 Событие **HintChanged**
			 генерируется при изменении всплывающей подсказки у диапазона
			 ячеек таблицы.


			 ![](../../../event_image.gif)
			 [HyperlinkMouseDown](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.HyperlinkMouseDown.htm)
			 Событие **HyperlinkMouseDown**
			 генерируется при нажатии курсора мыши на гиперссылку.


			 ![](../../../event_image.gif)
			 [ITabObjectCreating](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.ITabObjectCreating.htm)
			 Событие ITabObjectCreating
			 наступает при создании пользовательского объекта в таблице.


			 ![](../../../event_image.gif)
			 [MetaChanged](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.MetaChanged.htm)
			 Событие **MetaChanged**
			 генерируется при отсутствии данных в источнике таблицы.


			 ![](../../../event_image.gif)
			 [MouseMove](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.MouseMove.htm)
			 Событие **MouseMove**
			 генерируется при перемещении курсора мыши.


			 ![](../../../event_image.gif)
			 [ObjectSelectionChanged](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.ObjectSelectionChanged.htm)
			 Событие ObjectSelectionChanged
			 наступает при выделении объекта в таблице.


			 ![](../../../event_image.gif)
			 [PictureMouseDown](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.PictureMouseDown.htm)
			 Событие **PictureMouseDown**
			 генерируется при нажатии курсором мыши на значок.


			 ![](../../../event_image.gif)
			 [RenderDimComboEditor](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.RenderDimComboEditor.htm)
			 Событие **RenderDimComboEditor**
			 генерируется при перерисовке раскрывающегося списка в таблице.


			 ![](../../../event_image.gif)
			 [Rendered](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.Rendered.htm)
			 Событие **Rendered**
			 генерируется после отрисовки таблицы.


			 ![](../../../event_image.gif)
			 [Rendering](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.Rendering.htm)
			 Событие **Rendering**
			 генерируется в процессе отрисовки таблицы.


			 ![](../../../event_image.gif)
			 [Rerendered](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.Rerendered.htm)
			 Событие **Rerendered**
			 генерируется после перерисовки таблицы.


			 ![](../../../event_image.gif)
			 [RowColumnSizeChanged](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.RowColumnSizeChanged.htm)
			 Событие **RowColumnSizeChanged**
			 наступает после изменения размеров строк и столбцов таблицы.


			 ![](../../../event_image.gif)
			 [ScrollChanged](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.ScrollChanged.htm)
			 Событие ScrollChanged
			 наступает при прокрутке таблицы.


			 ![](../../../event_image.gif)
			 [SelectionBegin](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.SelectionBegin.htm)
			 Событие SelectionBegin
			 генерируется в начале процесса выделения ячеек таблицы.


			 ![](../../../event_image.gif)
			 [SelectionChanged](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.SelectionChanged.htm)
			 Событие **SelectionChanged**
			 генерируется после изменения области выделения ячеек таблицы.


			 ![](../../../event_image.gif)
			 [SelectionChanging](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.SelectionChanging.htm)
			 Событие Selection**Changing**
			 генерируется в процессе изменения области выделения ячеек
			 таблицы.


			 ![](../../../event_image.gif)
			 [StyleChanged](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.StyleChanged.htm)
			 Событие **StyleChanged**
			 генерируется после изменения стиля таблицы.


			 ![](../../../event_image.gif)
			 [TabObjectRender](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheet/TabSheet.TabObjectRender.htm)
			 Событие TabObjectRender
			 наступает при перерисовке объекта в таблице.


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addClass](dhtmlUi.chm::/classes\control\control.addclass.htm)


		 Метод addClass добавляет
		 CSS-класс к компоненту.


		 ![](../../../Sub_Image.gif)
		 [addEventHandler](dhtmlUi.chm::/Classes/Control/Control.addEventHandler.htm)
		 Метод addEventHandler
		 добавляет обработчик события на DOM-вершину.


		 ![](../../../Sub_Image.gif)
		 [addStateClass](dhtmlUi.chm::/Classes/Control/Control.addStateClass.htm)


		 Метод addStateClass
		 добавляет CSS-класс к компоненту и удаляет прежний CSS-класс.


		 ![](../../../Sub_Image.gif)
		 [addToNode](dhtmlUi.chm::/classes\control\control.addtonode.htm)


		 Метод addToNode добавляет
		 компонент в указанную вершину.


		 ![](../../../Sub_Image.gif)
		 [bindEvents](dhtmlUi.chm::/Classes/Control/Control.bindEvents.htm)
		 Метод bindEvents подписывает
		 элемент на все стандартные события.


		 ![](../../../Sub_Image.gif)
		 [getAnchorFlags](dhtmlUi.chm::/Classes/Control/Control.getAnchorFlags.htm)


		 Метод getAnchorFlags
		 возвращает JSON-объект с настройками текущей позиции компонента.


		 ![](../../../Sub_Image.gif)
		 [getClass](dhtmlUi.chm::/classes\control\control.getclass.htm)


		 Метод getClass возвращает
		 текущие css-классы компонента.


		 ![](../../../Sub_Image.gif)
		 [getCssStyle](dhtmlUi.chm::/Classes/Control/Control.getCssStyle.htm)


		 Метод getCssStyle возвращает
		 стили для указанной вершины.


		 ![](../../../Sub_Image.gif)
		 [getDomNode](dhtmlUi.chm::/Classes/Control/Control.getDomNode.htm)


		 Метод getDomNode возвращает
		 главную DOM-вершину компонента.


		 ![](../../../Sub_Image.gif)
		 [getFocused](dhtmlUi.chm::/Classes/Control/Control.getFocused.htm)


		 Метод getFocused определяет
		 наличие фокуса у компонента.


		 ![](../../../Sub_Image.gif)
		 [getIsBinded](dhtmlUi.chm::/Classes/Control/Control.getIsBinded.htm)
		 Метод getIsBinded возвращает
		 признак подписи элемента на события DOM-вершины.


		 ![](../../../Sub_Image.gif)
		 [hide](dhtmlUi.chm::/classes\control\control.hide.htm)


		 Метод hide скрывает
		 элемент управления.


		 ![](../../../Sub_Image.gif)
		 [hideToolTip](dhtmlUi.chm::/Classes/Control/Control.hideToolTip.htm)


		 Метод hideToolTip очищает
		 таймаут появления подсказки и скрывает её, если она был показана.


		 ![](../../../Sub_Image.gif)
		 [refreshStyle](dhtmlUi.chm::/Classes/Control/Control.refreshStyle.htm)
		 Метод refreshStyle
		 обновляет CSS-стили элемента.


		 ![](../../../Sub_Image.gif)
		 [removeClass](dhtmlUi.chm::/classes\control\control.removeclass.htm)


		 Метод removeClass удаляет
		 CSS-класс из компонента.


		 ![](../../../Sub_Image.gif)
		 [removeEventHandler](dhtmlUi.chm::/Classes/Control/Control.removeEventHandler.htm)
		 Метод removeEventHandler
		 удаляет обработчик события DOM-вершины.


		 ![](../../../Sub_Image.gif)
		 [removeFromDOM](dhtmlUi.chm::/classes/control/control.removefromdom.htm)
		 Метод removeFromDOM
		 удаляет вершину из DOM-структуры.


		 ![](../../../Sub_Image.gif)
		 [removeStateClasses](dhtmlUi.chm::/Classes/Control/Control.removeStateClasses.htm)


		 Метод removeStateClasses
		 удаляет CSS-классы компонента.


		 ![](../../../Sub_Image.gif)
		 [setDraggable](dhtmlUi.chm::/classes\control\control.setdraggable.htm)


		 Метод setDraggable
		 устанавливает возможность перетаскивания компонента на HTML-странице.


		 ![](../../../Sub_Image.gif)
		 [setFocus](dhtmlUi.chm::/Classes/Control/Control.setFocus.htm)


		 Метод setFocus устанавливает
		 фокус компонента.


		 ![](../../../Sub_Image.gif)
		 [setIsHovered](dhtmlUi.chm::/Classes/Control/Control.setIsHovered.htm)


		 Метод setIsHovered
		 настраивает отображение компонента только при наведении на него
		 курсора.


		 ![](../../../Sub_Image.gif)
		 [setSize](dhtmlUi.chm::/classes\control\control.setsize.htm)


		 Метод setSize устанавливает
		 размеры компонента.


		 ![](../../../Sub_Image.gif)
		 [show](dhtmlUi.chm::/classes/control/control.show.htm)


		 Метод show отображает
		 элемент управления.


		 ![](../../../Sub_Image.gif)
		 [unBindEvents](dhtmlUi.chm::/Classes/Control/Control.unBindEvents.htm)
		 Метод unBindEvents
		 отписывает элемент от всех стандартных событий.


		 ![](../../../Sub_Image.gif)
		 [updatePosition](dhtmlUi.chm::/Classes/Control/Control.updatePosition.htm)


		 Метод updatePosition
		 корректирует размер и положение при абсолютном позиционировании
		 на основе текущих параметров.


		 ![](../../../Sub_Image.gif)
		 [updateSize](dhtmlUi.chm::/classes\control\control.updatesize.htm)


		 Метод updateSize обновляет
		 размеры компонента подгонке размеров контейнера, в котором находится
		 компонент.


## События, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя события
		 Краткое описание


		 ![](../../../event_image.gif)
		 [Drag](dhtmlUi.chm::/classes\control\control.drag.htm)
		 Событие Drag наступает
		 при нажатии и удерживании кнопки мыши.


		 ![](../../../event_image.gif)
		 [DragEnd](dhtmlUi.chm::/classes\control\control.dragend.htm)
		 Событие DragEnd наступает
		 при окончании перетаскивания компонента.


		 ![](../../../event_image.gif)
		 [DragStart](dhtmlUi.chm::/classes\control\control.dragstart.htm)
		 Событие DragStart наступает,
		 когда начинается перетаскивание компонента.


		 ![](../../../event_image.gif)
		 [OnContextMenu](dhtmlUi.chm::/classes\control\control.OnContextMenu.htm)
		 Событие OnContextMenu
		 наступает при вызове контекстного меню компонента.


		 ![](../../../event_image.gif)
		 [SizeChanged](dhtmlUi.chm::/Classes/Control/Control.SizeChanged.htm)
		 Событие SizeChanged
		 наступает после изменения размеров компонента.


		 ![](../../../event_image.gif)
		 [SizeChanging](dhtmlUi.chm::/Classes/Control/Control.SizeChanging.htm)
		 Событие SizeChanging
		 наступает во время изменения размеров компонента.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[Работа
 с таблицей](../../TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
