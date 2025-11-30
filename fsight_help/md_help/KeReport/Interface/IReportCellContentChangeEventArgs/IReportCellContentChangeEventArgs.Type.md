# IReportCellContentChangeEventArgs.Type

IReportCellContentChangeEventArgs.Type
-


# IReportCellContentChangeEventArgs.Type


## Синтаксис


Type: [TabCellContentChange](TabSheet.chm::/Enums/TabCellContentChange.htm);


## Описание


Свойство Type возвращает тип
 изменения.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента ReportBox с наименованием «ReportBox1» и какого-либо
 источника данных для «ReportBox1». Указанная ниже процедура назначена
 в качестве обработчика события [OnChangeCellContent](../../Class/ReportBox/ReportBox.OnChangeCellContent.htm).
 Добавьте ссылки на системные сборки Report, Tabsheet.


			Sub ReportBox1OnChangeCellContent(Sender: Object; Args: IReportCellContentChangeEventArgs);

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

End Sub ReportBox1OnChangeCellContent;


Указанная процедура в общем виде показывает каким образом можно обработать
 различные типы изменений при наступлении события [OnChangeCellContent](../../Class/ReportBox/ReportBox.OnChangeCellContent.htm).


См. также:


[IReportCellContentChangeEventArgs](IReportCellContentChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
