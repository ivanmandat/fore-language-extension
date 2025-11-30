# ITabSheet.PasteInRangeEx

ITabSheet.PasteInRangeEx
-


# ITabSheet.PasteInRangeEx


## Синтаксис


PasteInRangeEx(


Range: [ITabRange](../ITabRange/ITabRange.htm);


PasteMode: [TabPasteMode](../../Enums/TabPasteMode.htm);


[SkipEmptyCells: Boolean
 = False];


[Transpose: Boolean =
 False]);


## Параметры


Range. Диапазон, в который
 осуществляется вставка.


PasteMode. Режим вставки.


SkipEmptyCells. Признак пропуска
 ячеек с пустыми значениями.


Transpose. Признак необходимости
 транспонировать данные при вставке.


## Описание


Метод PasteInRangeEx осуществляет
 специальную вставку данных из буфера обмена в область указанного диапазона
 ячеек.


## Комментарии


Вставка осуществляется только в область диапазона Range
 без заполнения соседних диапазонов. При вставке учитывается текущий [выделенный диапазон](../ITabSelection/ITabSelection.Range.htm).
 Если начало выделения совпадает с началом диапазона Range,
 то в диапазон вставляются скопированные данные, соответствующие по размеру
 диапазону Range. Если начало
 выделенного диапазона отличается от диапазона Range,
 то при вставке будет формироваться соответствующее смещение по ячейкам.


Если во вставляемом диапазоне имеются ячейки с пустым значением и параметру
 SkipEmptyCells установлено значение
 True, то для этих ячеек не будут
 вставлены формулы, оформление, комментарии.


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

        TSheet.PasteInRangeEx(TSheet.ParseRange("E0:G0"), TabPasteMode.Values);

    End Sub Button2OnClick;

End Class TESTForm;


При нажатии на кнопку Button1 в буфер обмена будут скопированы данные
 диапазона A0:C2. При нажатии на кнопку Button2 будет выделена ячейка E0
 и в область ячеек E0:G0 будет осуществлена специальная вставка - будут
 вставлены только значения, соответствующие части скопированного диапазона
 A0:C0.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
