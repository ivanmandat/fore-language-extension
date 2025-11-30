# ITabCellContentChangeEventArgs.Type

ITabCellContentChangeEventArgs.Type
-


# ITabCellContentChangeEventArgs.Type


## Синтаксис


Type: [TabCellContentChange](../../Enums/TabCellContentChange.htm);


## Описание


Свойство Type возвращает тип
 изменения.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента TabSheetBox с наименованием «TabSheetBox1» и какого-либо
 источника данных для «TabSheetBox1». Указанная ниже процедура назначена
 в качестве обработчика события [OnChangeCellContent](../../Class/TabSheetBox/TabSheetBox.OnChangeCellContent.htm).
 Добавьте ссылку на системную сборку Tabsheet.


			Sub TabSheetBox1OnChangeCellContent(Sender: Object; Args: ITabCellContentChangeEventArgs);

Begin

    Select Case Args.Type

        //Действия при изменении значения

        Case TabCellContentChange.Value: Debug.WriteLine("Изменено значение");

        //Действия при изменении формулы

        Case TabCellContentChange.Formula: Debug.WriteLine("Изменена формула");

        //Действия при изменении текста

        Case TabCellContentChange.Text: Debug.WriteLine("Изменён текст");

        //Действия при изменении форматирования текста

        Case TabCellContentChange.FormattedText: Debug.WriteLine("Изменено форматирование текста");

        //Действия при изменении стиля

        Case TabCellContentChange.Style: Debug.WriteLine("Изменён стиль");

    End Select;

End Sub TabSheetBox1OnChangeCellContent;


Указанная процедура в общем виде показывает каким образом можно обработать
 различные типы изменений при наступлении события [OnChangeCellContent](../../Class/TabSheetBox/TabSheetBox.OnChangeCellContent.htm).


См. также:


[ITabCellContentChangeEventArgs](ITabCellContentChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
