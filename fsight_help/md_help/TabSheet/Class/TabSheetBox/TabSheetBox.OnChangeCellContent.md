# TabSheetBox.OnChangeCellContent

TabSheetBox.OnChangeCellContent
-


# TabSheetBox.OnChangeCellContent


## Синтаксис


Sub TabSheetBox1OnChangeCellContent(Sender:
 Object; Args: [ITabCellContentChangeEventArgs](../../Interface/ITabCellContentChangeEventArgs/ITabCellContentChangeEventArgs.htm));


Begin


//набор операторов


End Sub
 TabSheetBox1OnChangeCellContent;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить ячейку, в которой было произведено изменение, а также задать
 дополнительные параметры.


## Описание


Событие OnChangeCellContent
 наступает, если было произведено изменение содержимого в ячейке таблицы.


## Комментарии


Обработка данного события может использоваться, например, для получения
 формул, вводимых пользователем.


Данное событие отличается от события [OnCellChange](TabSheetBox.OnCellChange.htm)
 тем, что событие [OnCellChange](TabSheetBox.OnCellChange.htm)
 наступает только если было изменено значение в ячейке таблицы, а событие
 OnChangeCellContent наступает,
 если было изменено значение, текст или формула в ячейке таблицы.


Например, в ячейке таблицы содержится значение «5». Если в данную ячейку
 ввести формулу «=3+2», то значение и текст останутся прежними, а изменится
 только формула. Следовательно событие [OnCellChange](TabSheetBox.OnCellChange.htm)
 не наступит, наступит только событие OnChangeCellContent,
 так как содержимое ячейки было изменено, а значение осталось прежним.


Если в ячейку была введена или изменена формула и при этом изменится
 значение ячейки, то событие OnChangeCellContent
 будет вызвано дважды. При первом вызове свойство [Value](../../Interface/ITabCellContentChangeEventArgs/ITabCellContentChangeEventArgs.Value.htm)
 параметра [Args](../../Interface/ITabCellContentChangeEventArgs/ITabCellContentChangeEventArgs.htm)
 будет содержать введенную формулу, при втором вызове свойство [Value](../../Interface/ITabCellContentChangeEventArgs/ITabCellContentChangeEventArgs.Value.htm)
 будет содержать уже результат вычисления формулы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события [OnChangeCellContent](TabSheetBox.OnChangeCellContent.htm)
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnChangeCellContent(Sender: Object; Args: ITabCellContentChangeEventArgs);

	Begin

	    If Args.Type = TabCellContentChange.Formula Then

	        WinApplication.InformationBox("Была введена формула: " + Args.Value);

	    End If;

	    If Args.Type = TabCellContentChange.Value Then

	        WinApplication.InformationBox("Результат вычисления формулы: " + Args.Value);

	    End If;

	End Sub TabSheetBox1OnChangeCellContent;


Если при вводе формулы в ячейку таблицы изменилось и значение в ячейке,
 то будут показаны 2 сообщения: сначала с текстом формулы, потом с результатом
 ее вычисления.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
