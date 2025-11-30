# ReportBox.OnChangeCellContent

ReportBox.OnChangeCellContent
-


# ReportBox.OnChangeCellContent


## Синтаксис


ReportBoxOnChangeCellContent(Sender: Object; Args:
 [IReportCellContentChangeEventArgs](../../Interface/IReportCellContentChangeEventArgs/IReportCellContentChangeEventArgs.htm));


## Параметры


Sender. Параметр, указывающий
 на компонент, в котором произошло событие;


Args. Параметр, позволяющий
 определить ячейку, в которой было произведено изменение, а также задать
 дополнительные параметры.


## Описание


Событие OnChangeCellContent
 наступает, если было произведено изменение содержимого в ячейке таблицы.
 Обработка данного события может использоваться, например, для получения
 формул, вводимых пользователем.


Данное событие отличается от события [ReportBox.OnCellChange](ReportBox.OnCellChange.htm)
 тем, что событие [ReportBox.OnCellChange](ReportBox.OnCellChange.htm)
 наступает только если было изменено значение в ячейке таблицы, а событие
 OnChangeCellContent наступает,
 если было изменено значение, текст или формула в ячейке таблицы.


Например, в ячейке таблицы содержится значение «5». Если в данную ячейку
 ввести формулу «=3+2», то значение и текст останутся прежними, а изменится
 только формула. Следовательно событие [ReportBox.OnCellChange](ReportBox.OnCellChange.htm)
 не наступит, наступит только событие OnChangeCellContent,
 так как содержимое ячейки было изменено, а значение осталось прежним.


Если в ячейку была введена или изменена формула и при этом изменится
 значение ячейки, то событие OnChangeCellContent
 будет вызвано дважды: до и после события [ReportBox.OnCellChange](ReportBox.OnCellChange.htm).
 При первом вызове свойство [Value](../../Interface/IReportCellContentChangeEventArgs/IReportCellContentChangeEventArgs.Value.htm)
 параметра [Args](../../Interface/IReportCellContentChangeEventArgs/IReportCellContentChangeEventArgs.htm)
 будет содержать введенную формулу, при втором вызове свойство [Value](../../Interface/IReportCellContentChangeEventArgs/IReportCellContentChangeEventArgs.Value.htm)
 будет содержать уже результат вычисления формулы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события [OnChangeCellContent](ReportBox.OnChangeCellContent.htm)
 для компонента ReportBox с наименованием
 «ReportBox1».


	Sub ReportBox1OnChangeCellContent(Sender: Object; Args: IReportCellContentChangeEventArgs);

	Begin

	    If Args.Type = TabCellContentChange.Formula Then

	        WinApplication.InformationBox("Была введена формула: " + Args.Value);

	    End If;

	    If Args.Type = TabCellContentChange.Value Then

	        WinApplication.InformationBox("Результат вычисления формулы: " + Args.Value);

	    End If;

	End Sub ReportBox1OnChangeCellContent;


Если при вводе формулы в ячейку таблицы изменилось и значение в ячейке,
 то будут показаны 2 сообщения: сначала с текстом формулы, потом с результатом
 ее вычисления.


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
