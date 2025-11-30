# ITabRange.Merge

ITabRange.Merge
-


# ITabRange.Merge


## Синтаксис


Merge;


## Описание


Метод Merge объединяет все ячейки диапазона в одну ячейку.


## Комментарии


Для определения наличия объединенных ячеек используйте свойство [ITabRange.Merged](ITabRange.Merged.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент Button с идентификатором «Button1», компонент TabSheetBox с идентификатором «TabSheetBox1» и компонент UiTabSheet с идентификатором «UiTabSheet1». Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Tsheet: ITabSheet;

    Range: ITabRange;

Begin

    TSheet := UiTabSheet1.TabSheet;

    Range := Tsheet.Cells(0, 0, 5, 5);

    Range.Merge;

End Sub Button1OnClick;


После выполнения примера диапазон ячеек будет объединен в одну ячейку.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
