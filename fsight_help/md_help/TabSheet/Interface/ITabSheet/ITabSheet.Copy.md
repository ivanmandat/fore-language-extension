# ITabSheet.Copy

ITabSheet.Copy
-


# ITabSheet.Copy


## Синтаксис


Copy;


## Описание


Метод Copy копирует отмеченные
 ячейки электронной таблицы в буфер обмена.


## Комментарии


При копировании чисел с несколькими знаками после десятичной запятой
 и последующей вставке этих чисел в источник данных, отличный от платформы,
 будет скопирована только видимая часть числа.


Используется только в настольном приложении.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней кнопок с наименованием «Button1» и «Button2», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


			Class TESTForm: Form

    Button1: Button;

    Button2: Button;

    UiTabSheet1: UiTabSheet;

    TabSheetBox1: TabSheetBox;

    Tab: ITabSheet;


    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

    Begin

        Tab := UiTabSheet1.TabSheet;

    End Sub TESTFormOnCreate;

    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        Tab.Copy;

    End Sub Button1OnClick;

    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        Tab.Paste;

    End Sub Button2OnClick;

End Class TESTForm;


После нажатия на кнопку «Button1» данные из выделенных ячеек будут скопированы
 в буфер обмена, а при нажатии кнопки «Button2» данные из буфера обмена
 будут вставлены в выделенные ячейки.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
