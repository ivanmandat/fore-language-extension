# ITabCellStyle.FormatType

ITabCellStyle.FormatType
-


# ITabCellStyle.FormatType


## Синтаксис


FormatType: [CustomFormatType](ForeSys.chm::/Enums/CustomFormatType.htm);


## Описание


Свойство FormatType определяет формат числа в ячейке таблицы.


## Пример


Для выполнения примера создайте форму, расположите на ней кнопку с наименованием «Button1», компонент TabSheetBox и компонент UiTabSheet с наименованием «UiTabSheet1». Укажите «UiTabSheet1» в качестве источника данных для компонента TabSheetBox.


			Class OBJ100607Form: Form

    UiTabSheet1: UiTabSheet;

    Button1: Button;

    TabSheetBox1: TabSheetBox;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var TSheet: ITabSheet;

            TRange: ITabRange;

            Style: ITabCellStyle;

    Begin

        TSheet := UiTabSheet1.TabSheet;

        TRange := TSheet.ParseRange("A0:B1");

        Style := TRange.Style;

        Style.FormatType := CustomFormatType.Date;

    End Sub Button1OnClick;


End Class OBJ100607Form;


При нажатии на кнопку с наименованием «Button1» значения в ячейках диапазона «A0:B1» будут приведены к формату «Дата».


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
