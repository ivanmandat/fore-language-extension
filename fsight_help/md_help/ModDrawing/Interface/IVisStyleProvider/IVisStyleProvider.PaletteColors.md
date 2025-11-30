# IVisStyleProvider.PaletteColors

IVisStyleProvider.PaletteColors
-


# IVisStyleProvider.PaletteColors


## Синтаксис


PaletteColors(PaletteID: String): Array;


## Параметры


PaletteID. Идентификатор палитры.


## Описание


Метод PaletteColors используется
 для получения массива основных цветов по идентификатору палитры.


## Комментарии


Для получения массива строк с идентификаторами альтернативных наборов
 палитр используйте метод [IVisStyleProvider.PaletteIDs](IVisStyleProvider.PaletteIDs.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 ComboBox с идентификатором ComboBox1, компонент UiTabSheet с идентификатором
 UiTabSheet1, компонент TabSheetBox с идентификатором TabSheetBox1. Укажите
 UiTabSheet1 в качестве источника данных для TabSheetBox1. Компонент ComboBox1
 содержит список стилей.


Пример является обработчиком события OnChange для компонента ComboBox1.


Добавьте ссылку на системную сборку Drawing.


	Sub ComboBox1OnChange(Sender: Object; Args: IEventArgs);

	Var

	    sp: IVisStyleProvider;

	    TabSheet: ITabSheet;

	    count, i, Index: Integer;

	    Item:  String;

	    PaletteColor: Array Of Integer;

	Begin

	    sp := New VisStyleProvider.Create;

	    TabSheet := UiTabSheet1.TabSheet;

	    Index := ComboBox1.ItemIndex;

	    Item := ComboBox1.Items.Item(Index);

	    PaletteColor := sp.PaletteColors((Item="default")?"":Item);

	    For i := 0 To sp.PaletteIDs.Length-1 Do

	        TabSheet.Cell(i,count).Style.BackgroundColor := GxColor.FromValue(PaletteColor[i]*-1);

	    End For;

	    count := count + 1;

	End Sub ComboBox1OnChange;


При выборе стиля из раскрывающегося списка происходит заливка ячеек
 табличного листа согласно выбранному стилю.


См. также:


[IVisStyleProvider](IVisStyleProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
