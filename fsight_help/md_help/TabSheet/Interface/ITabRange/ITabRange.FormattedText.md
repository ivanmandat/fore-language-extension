# ITabRange.FormattedText

ITabRange.FormattedText
-


# ITabRange.FormattedText


## Синтаксис


FormattedText: String;


## Описание


Свойство FormattedText возвращает
 значение ячейки с учетом заданного формата отображения данных.


## Комментарии


Данное свойство актуально для диапазона, состоящего только из одной
 ячейки.


Формат отображения данных устанавливается с помощью свойства [CustomFormat](../ITabCellStyle/ITabCellStyle.CustomFormat.htm)
 для диапазона.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1». «UiTabSheet1» является источником данных для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    s: String;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange := TSheet.Cell(0, 0);

	    TRange.Style.CustomFormat := "0,00;" + #34 + "минус " + #34 + "0,00";

	    TRange.Value := -10;

	    s := TRange.FormattedText;

	    Debug.WriteLine(s);

	End Sub Button1OnClick;


При нажатии на кнопку для ячейки «А0» будет установлен числовой формат.
 Для отрицательных чисел будет задан следующий способ отображения: «минус
 1234,58». В переменной «s» будет содержаться отформатированное значение
 - «минус 10,00».


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
