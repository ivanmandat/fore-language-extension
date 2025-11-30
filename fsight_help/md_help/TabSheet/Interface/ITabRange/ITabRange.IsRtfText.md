# ITabRange.IsRtfText

ITabRange.IsRtfText
-


# ITabRange.IsRtfText


## Синтаксис


IsRtfText: Boolean;


## Описание


Свойство IsRtfText определяет,
 будет ли оформление и текст храниться в RTF-формате.


## Комментарии


Допустимые значения:


	- True. Для отдельных
	 частей текста можно задать собственное оформление. Текст и оформление
	 при этом будут храниться в RTF-формате;


	- False. Для текста будут
	 применяться настройки шрифта, установленные в свойстве [ITabCellStyle.Font](../ITabCellStyle/ITabCellStyle.Font.htm).


Для получения/изменения текста в RTF-формате используйте свойство [ITabRange.Text](ITabRange.Text.htm).
 Так как для представления текста в RTF-формате требуются специальные значения
 спецификации этого формата, то для облегчения работы с ним в Fore
 был реализован специальный класс - [TextConverter](ForeSys.chm::/Class/TextConverter/TextConverter.htm).
 Методы данного класса позволяют производить конвертацию и получить RTF-представление
 из более понятных форматов, таких как XAML, HTML.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1», который является источником для TabSheetBox.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

    TRange: ITabRange;

    Converter: ITextConverter;

    HTMLtext: String = "<span style=""font-size: 8pt;color: #000000;text-align: left;font-family: Arial; "">" +

    "<span style=""color: #ff0000;font-size: 10pt;font-family: inherit;"">Важный </span>" +

    "<span style=""color: #0000ff;font-style: italic;font-size: 8pt;font-family: inherit;"">текст</span></span>";

Begin

    TSheet := UiTabSheet1.TabSheet;

    TRange := TSheet.ParseCell("A0");

    TRange.IsRtfText := True;

    Converter := New TextConverter.Create;

    TRange.Value := "Важный текст";

    TRange.Text := Converter.Export(HTMLText, TextFormat.Rtf);

End Sub Button1OnClick;


При нажатии на кнопку для ячейки «A0» будет задан форматированный текст.
 Текст устанавливается путем преобразования из HTML в RTF-формат.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
