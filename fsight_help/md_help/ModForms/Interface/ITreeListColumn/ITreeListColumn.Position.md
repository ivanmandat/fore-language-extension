# ITreeListColumn.Position

ITreeListColumn.Position
-


# ITreeListColumn.Position


## Синтаксис


Position: Integer;


## Описание


Свойство Position определяет позицию столбца.


## Комментарии


По умолчанию номер позиции равен индексу текущего столбца ([ITreeListColumn.Index](ITreeListColumn.Index.htm)).


Номер позиции колонки должен быть не меньше, чем 0, и не больше, чем [ITreeListColumns.Count](../ITreeListColumns/ITreeListColumns.Count.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент Button с идентификатором «Button1», компонент TreeList с идентификатором «TreeList1». В компонент «TreeList1» должно быть добавлено минимум две колонки. Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    TreeList1.Columns.Item(0).Position := 1;

End Sub Button1OnClick;


После выполнения примера первый и второй столбцы таблицы поменяются позициями.


См. также:


[ITreeListColumn](ITreeListColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
