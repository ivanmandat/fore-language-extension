# ITabEditor.Text

ITabEditor.Text
-


# ITabEditor.Text


## Синтаксис


Text: String;


## Описание


Свойство Text возвращает текст,
 установленный в текущий момент в редакторе ячейки.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента TabSheetBox с наименованием «TabSheetBox1» и какого-либо
 источника данных для «TabSheetBox1». Для таблицы, отображаемой в «TabSheetBox1»,
 включена генерация события, связанного с редактированием ячейки. Указанная
 процедура установлена в качестве обработчика события OnEditorTextChanged
 компонента «TabSheetBox1».


	Sub TabSheetBox1OnEditorTextChanged(Sender: Object; Args: ITabEditorEventArgs);

	Var

	    Editor: ITabEditor;

	Begin

	    Editor := Args.Editor;

	    Debug.WriteLine("Редактируемая ячейка: " + Editor.Sheet.Cell(Editor.Row, Editor.Column).Address);

	    Debug.WriteLine("Текущий текст:" + Editor.Text);

	    Debug.WriteLine("Текущий отформатированный текст:" + Editor.XamlText);

	End Sub TabSheetBox1OnEditorTextChanged;


При возникновении события в консоль среды разработки будет выведена
 информация об ячейке, редактируемой в текущий момент, а также текущий
 введенный текст и отформатированный текст.


См. также:


[ITabEditor](ITabEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
