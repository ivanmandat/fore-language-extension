# ITabSheet.PasteInRange

ITabSheet.PasteInRange
-


# ITabSheet.PasteInRange


## Синтаксис


PasteInRange(Range: [ITabRange](../ITabRange/ITabRange.htm));


## Параметры


Range. Диапазон, в который
 осуществляется вставка.


## Описание


Метод PasteInRange вставляет
 данные из буфера обмена в область указанного диапазона ячеек.


## Комментарии


Вставка осуществляется только в область диапазона Range
 без заполнения соседних диапазонов. При вставке учитывается текущий [выделенный диапазон](../ITabSelection/ITabSelection.Range.htm).
 Если начало выделения совпадает с началом диапазона Range,
 то в диапазон вставляются скопированные данные, соответствующие по размеру
 диапазону Range. Если начало
 выделенного диапазона отличается от диапазона Range,
 то при вставке будет формироваться соответствующее смещение по ячейкам.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней кнопок с наименованием Button1 и Button2, компонента UiTabSheet с
 наименованием UiTabSheet1 и компонента TabSheetBox.


Добавьте ссылки на системные сборки: Tab.


			Class TESTForm: Form

    Button1: Button;

    Button2: Button;

    UiTabSheet1: UiTabSheet;

    TabSheetBox1: TabSheetBox;

    TSheet: ITabSheet;


    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

    Begin

        TSheet := UiTabSheet1.TabSheet;

    End Sub TESTFormOnCreate;

    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        TSheet.View.Selection.Range := TSheet.ParseRange("A0:C2");

        TSheet.Copy;

    End Sub Button1OnClick;

    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        TSheet.View.Selection.Range := TSheet.ParseRange("E0");

        TSheet.PasteInRange(TSheet.ParseRange("E0:G0"));

    End Sub Button2OnClick;

End Class TESTForm;


При нажатии на кнопку Button1 в буфер обмена будут скопированы данные
 диапазона A0:C2. При нажатии на кнопку Button2 будет выделена ячейка E0
 и в область ячеек E0:G0 будут вставлены данные, соответствующие части
 скопированного диапазона - ячейкам A0:C0.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
