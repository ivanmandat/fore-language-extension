# TabViewEventGroups

TabViewEventGroups
-


# TabViewEventGroups


## Описание


Перечисление TabViewEventGroups
 используется для определения групп событий, вызываемых для [таблицы](../Interface/ITabSheet/ITabSheet.htm).


Используется следующим свойством:


	- [ITabSheet.EventMask](../Interface/ITabSheet/ITabSheet.EventMask.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 1
		 ClickEvents. Группа
		 событий при щелчках кнопкой мыши:


			- [OnCellClick](../Class/TabSheetBox/TabSheetBox.OnCellClick.htm);


			- [OnColumnClick](../Class/TabSheetBox/TabSheetBox.OnColumnClick.htm);


			- [OnRowClick](../Class/TabSheetBox/TabSheetBox.OnRowClick.htm);


			- [OnTableClick](../Class/TabSheetBox/TabSheetBox.OnTableClick.htm).


		 2
		 SelectionEvents. Группа
		 событий при выделении ячеек:


			- [OnBeginSelectionChange](../Class/TabSheetBox/TabSheetBox.OnBeginSelectionChange.htm);


			- [OnEndSelectionChange](../Class/TabSheetBox/TabSheetBox.OnEndSelectionChange.htm);


			- [OnSelectionChange](../Class/TabSheetBox/TabSheetBox.OnSelectionChange.htm).


		 4
		 CellChangeEvents. Группа
		 событий при изменении содержания ячеек/ячейки:


			- [OnBeforeCellChange](../Class/TabSheetBox/TabSheetBox.OnBeforeCellChange.htm);


			- [OnBeforeCellsChange](../Class/TabSheetBox/TabSheetBox.OnBeforeCellsChange.htm);


			- [OnCellChange](../Class/TabSheetBox/TabSheetBox.OnCellChange.htm);


			- [OnCellsChange](../Class/TabSheetBox/TabSheetBox.OnCellsChange.htm);


			- [OnChangeCellContent](../Class/TabSheetBox/TabSheetBox.OnChangeCellContent.htm).


		 8
		 ResizeEvents. Группа
		 событий при изменении размеров:


			- [OnBeforeColumnResize](../Class/TabSheetBox/TabSheetBox.OnBeforeColumnResize.htm);


			- [OnBeforeRowResize](../Class/TabSheetBox/TabSheetBox.OnBeforeRowResize.htm);


			- [OnColumnResize](../Class/TabSheetBox/TabSheetBox.OnColumnResize.htm);


			- [OnColumnResizing](../Class/TabSheetBox/TabSheetBox.OnColumnResizing.htm);


			- [OnRowResize](../Class/TabSheetBox/TabSheetBox.OnRowResize.htm);


			- [OnRowResizing](../Class/TabSheetBox/TabSheetBox.OnRowResizing.htm).


		 16
		 EditEvents. Группа
		 событий при редактировании ячейки:


			- [OnAfterEdit](../Class/TabSheetBox/TabSheetBox.OnAfterEdit.htm);


			- [OnBeforeEdit](../Class/TabSheetBox/TabSheetBox.OnBeforeEdit.htm).


		 32
		 InteractiveEvents.
		 Группа интерактивных событий:


			- [OnAutoFilter](../Class/TabSheetBox/TabSheetBox.OnAutoFilter.htm);


			- [OnBeforeExpanderChanged](../Class/TabSheetBox/TabSheetBox.OnBeforeExpanderChanged.htm);


			- [OnBeginInteractiveSelectionChange](../Class/TabSheetBox/TabSheetBox.OnBeginInteractiveSelectionChange.htm);


			- [OnCellPictureClick](../Class/TabSheetBox/TabSheetBox.OnCellPictureClick.htm);


			- [OnEndInteractiveSelectionChange](../Class/TabSheetBox/TabSheetBox.OnEndInteractiveSelectionChange.htm);


			- [OnExpanderChanged](../Class/TabSheetBox/TabSheetBox.OnExpanderChanged.htm);


			- [OnHyperlinkClick](../Class/TabSheetBox/TabSheetBox.OnHyperlinkClick.htm);


			- [OnInteractiveSelectionChange](../Class/TabSheetBox/TabSheetBox.OnInteractiveSelectionChange.htm);


			- [OnObjectActivate](../Class/TabSheetBox/TabSheetBox.OnObjectActivate.htm).


		 64
		 NotifyEvents. Группа
		 событий при работе с таблицей:


			- [OnProtectionFail](../Class/TabSheetBox/TabSheetBox.OnProtectionFail.htm);


			- OnRCChange (внутреннее событие);


			- [OnScaleChange](../Class/TabSheetBox/TabSheetBox.OnScaleChange.htm);


			- OnStartCalc (внутреннее событие).


		 128
		 EditorEvents. Группа
		 событий, связанных с редактированием данных в ячейках:


			- [OnEditorTextChanged](../Class/TabSheetBox/TabSheetBox.OnEditorTextChanged.htm).


		 256
		 InsertOrDeleteRangeEvents.
		 Группа событий, связанных с добавлением и удалением диапазонов
		 таблицы:


			- [OnAfterDeleteRange](../Class/TabSheetBox/TabSheetBox.OnAfterDeleteRange.htm);


			- [OnAfterInsertRange](../Class/TabSheetBox/TabSheetBox.OnAfterInsertRange.htm);


			- [OnBeforeDeleteRange](../Class/TabSheetBox/TabSheetBox.OnBeforeDeleteRange.htm);


			- [OnBeforeInsertRange](../Class/TabSheetBox/TabSheetBox.OnBeforeInsertRange.htm).


		 512
		 ObjectEvents. Группа
		 событий, связанных с перемещением, вращением или измерением размера
		 объекта:


			- [OnAfterObjectChange](../Class/TabSheetBox/TabSheetBox.OnAfterObjectChange.htm);


			- [OnBeforeObjectChange](../Class/TabSheetBox/TabSheetBox.OnBeforeObjectChange.htm).


		 65535
		 AllEvents. Все события
		 [таблицы](../Interface/ITabSheet/ITabSheet.htm).


См. также:


[Перечисления сборки Tab](TabSheet_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
