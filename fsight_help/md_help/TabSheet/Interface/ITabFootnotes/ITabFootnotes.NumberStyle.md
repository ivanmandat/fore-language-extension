# ITabFootnotes.NumberStyle

ITabFootnotes.NumberStyle
-


# ITabFootnotes.NumberStyle


## Синтаксис


NumberStyle: [TabNumberStyle](../../Enums/TabNumberStyle.htm);


## Описание


Свойство NumberStyle определяет
 стиль цифр, который используется для нумерации сносок.


## Комментарии


По умолчанию для нумерации сносок используются арабские цифры. При необходимости
 стиль цифр можно изменить или задать [пользовательскую
 метку](ITabFootnotes.CustomMark.htm), которая будет использоваться для обозначения всех сносок.


Для получения номера сноски с учетом заданного стиля используйте свойство
 [ITabFootnote.NumberText](../ITabFootnote/ITabFootnote.NumberText.htm).


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

    Footnotes.Font.Bold := TriState.OnOption;

    Footnotes.NumberStyle := TabNumberStyle.UppercaseCyrillic;

    Footnote := Footnotes.Add(0, 0);

    Footnote.Text := "Начало блока данных";

    Debug.WriteLine(Footnote.Number);

    Debug.WriteLine(Footnote.NumberText);

End Sub Button1OnClick;


При нажатии на кнопку для ячейки «A0» таблицы будет создана сноска.
 Для нумерации сносок будут использоваться буквы кириллицы в верхнем регистре.
 Полученные цифровой номер и номер сноски в виде текста будут выведены
 в консоль среды разработки.


См. также:


[ITabFootnotes](ITabFootnotes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
