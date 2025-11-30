# ITabUserInteractiveSelections.Add

ITabUserInteractiveSelections.Add
-


# ITabUserInteractiveSelections.Add


## Синтаксис


Add: [ITabUserInteractiveSelection](../ITabUserInteractiveSelection/ITabUserInteractiveSelection.htm);


## Описание


Метод Add создает интерактивный
 диапазон и возвращает его настройки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox с наименованием
 «TabSheetBox1» и какого-либо компонента, выступающего в качестве источника
 данных для «TabSheetBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

    IntSelections: ITabUserInteractiveSelections;

    IntSelection: ITabUserInteractiveSelection;

Begin

    TSheet := TabSheetBox1.Source.GetTabSheet;

    IntSelections := TSheet.View.UserIntearactiveSelections;

    IntSelection := IntSelections.Add;

    IntSelection.BorderColor := GxColor.FromKnownColor(GxKnownColor.Red);

    IntSelection.BorderStyle := TabBorderStyle.Dash;

    IntSelection.InteractiveRestrictions := TabUserInteractiveSelectionChangeType.Top Or TabUserInteractiveSelectionChangeType.Bottom;

    IntSelection.Range := TSheet.ParseRange("B1:C5");

    IntSelection.Visible := True;

End Sub Button1OnClick;


При нажатии на кнопку для таблицы будет создан интерактивный диапазон.
 Для этого диапазона будут определены параметры отрисовки границы, а также
 будет наложено ограничение: будет запрещено изменение верхней и нижней
 границы диапазона.


См. также:


[ITabUserInteractiveSelections](ITabUserInteractiveSelections.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
