# ITabFootnote.CustomMark

ITabFootnote.CustomMark
-


# ITabFootnote.CustomMark


## Синтаксис


CustomMark: String;


## Описание


Свойство CustomMark определяет
 пользовательскую метку, которая будет использоваться для обозначения сноски.


## Комментарии


По умолчанию метка не задана, при этом для сноски применяется метка,
 заданная для всей [коллекции](../ITabFootnotes/ITabFootnotes.CustomMark.htm),
 или автоматическая [нумерация](ITabFootnote.Number.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и каких-либо визуальных компонентов, для
 которых «UiTabSheet1» установлен в качестве источника данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TabSheet: ITabSheet;

    Footnotes: ITabFootnotes;

    Footnote: ITabFootnote;

Begin

    TabSheet := UiTabSheet1.TabSheet;

    Footnotes := TabSheet.Footnotes;

    Footnote := Footnotes.Add(0, 0);

    Footnote.CustomMark := "+";

    Footnote.Text := "Усреднённый рост";

    Footnote.CustomMarkFontName := "Terminal";

    Footnote := Footnotes.Add(0, 1);

    Footnote.CustomMark := "-";

    Footnote.CustomMarkFontName := "Terminal";

    Footnote.Text := "Усреднённое снижение";

End Sub Button1OnClick;


При нажатии на кнопку для ячеек «A0» и «B0» будут добавлены две сноски.
 Для сносок будет задана метка, шрифт для отрисовки метки и текст.


См. также:


[ITabFootnote](ITabFootnote.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
