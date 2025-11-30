# ITabRange.Footnotes

ITabRange.Footnotes
-


# ITabRange.Footnotes


## Синтаксис


Footnotes: [ITabFootnoteCollection](../ITabFootnoteCollection/ITabFootnoteCollection.htm);


## Описание


Свойство Footnotes возвращает
 коллекцию сносок, попадающих в текущий диапазон.


## Комментарии


Свойство позволяет получить отдельную коллекцию сносок, относящихся
 только к текущему диапазону. Данная коллекция также входит в общую коллекцию
 всех сносок таблицы, которую возвращает свойство [ITabSheet.Footnotes](../ITabSheet/ITabSheet.Footnotes.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и каких-либо компонентов, для которых «UiTabSheet1»
 установлен в качестве источника данных. Для ячеек таблицы созданы сноски.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TabSheet: ITabSheet;

    TabRange: ITabRange;

    Footnotes: ITabFootnoteCollection;

    Footnote: ITabFootnote;

Begin

    TabSheet := UiTabSheet1.TabSheet;

    TabRange := TabSheet.View.Selection.Range;

    Footnotes := TabRange.Footnotes;

    For Each Footnote In Footnotes Do

        If Footnote.CustomMark = "" Then

            Debug.WriteLine("Сноска: " + Footnote.NumberText + ". Текст: " + Footnote.Text);

        Else

            Debug.WriteLine("Сноска: " + Footnote.CustomMark + ". Текст: " + Footnote.Text);

        End If;

    End For;

End Sub Button1OnClick;


При нажатии на кнопку в консоль среды разработки будет выведен список
 сносок, которые попадают в выделенный диапазон ячеек.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
