# ITabFootnotes.CustomMark

ITabFootnotes.CustomMark
-


# ITabFootnotes.CustomMark


## Синтаксис


CustomMark: String;


## Описание


Свойство CustomMark определяет
 пользовательскую метку, которая будет использоваться для обозначения сносок.


## Комментарии


По умолчанию метка не задана, при этом для каждой сноски может использоваться
 [собственная метка](../ITabFootnote/ITabFootnote.CustomMark.htm),
 или автоматическая [нумерация](../ITabFootnote/ITabFootnote.Number.htm).


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

    Footnotes.CustomMark := #167; //Код символа - §

    Footnotes.CustomMarkFontName := "Terminal";

    Footnote := Footnotes.Add(0, 0);

    Footnote.Text := "Описание в первом параграфе документации";

    Footnote := Footnotes.Add(0, 1);

    Footnote.Text := "Описание во втором параграфе документации";

End Sub Button1OnClick;


При нажатии на кнопку для ячеек «A0» и «B0» будут добавлены две сноски.
 В качестве метки для сносок будет использоваться символ параграфа.


См. также:


[ITabFootnotes](ITabFootnotes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
