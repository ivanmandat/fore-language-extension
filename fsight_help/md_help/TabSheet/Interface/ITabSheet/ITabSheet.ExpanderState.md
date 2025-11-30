# ITabSheet.ExpanderState

ITabSheet.ExpanderState
-


# ITabSheet.ExpanderState


## Синтаксис


ExpanderState(Row: Integer; Column: Integer): [TriState](ForeSys.chm::/Enums/TriState.htm);


## Параметры


Row. Индекс строки, в которой
 располагается экспандер. Допустимое значение параметра находится в диапазоне
 [0, [RowsCount](ITabSheet.RowsCount.htm)).


Column. Индекс столбца, в котором
 располагается экспандер. Допустимое значение параметра находится в диапазоне
 [0, [ColumnsCount](ITabSheet.ColumnsCount.htm)).


## Описание


Свойство ExpanderState определяет
 состояние экспандера в ячейке, координаты которой передаются посредством
 входных параметров.


## Комментарии


Состояния экспандера:


	- [TriState.OnOption](ForeSys.chm::/Enums/TriState.htm).
	 Экспандер развёрнут;


	- [TriState.OffOption](ForeSys.chm::/Enums/TriState.htm).
	 Экспандер свёрнут;


	- [TriState.Undefined](ForeSys.chm::/Enums/TriState.htm).
	 Удаление экспандера из ячейки, если он был создан.


## Пример


Использование свойства приведено в примере для [ITabSheet.CreateExpander](ITabSheet.CreateExpander.htm).


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
