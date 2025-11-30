# TabSheetBox.OnEditorTextChanged

TabSheetBox.OnEditorTextChanged
-


# TabSheetBox.OnEditorTextChanged


## Синтаксис


Sub OnEditorTextChanged(Sender:
 Object; Args: [ITabEditorEventArgs](../../Interface/ITabEditorEventArgs/ITabEditorEventArgs.htm));


Begin


//набор операторов;


End Sub
 OnEditorTextChanged;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnEditorTextChanged
 наступает во время редактирования данных в ячейке таблицы.


## Комментарии


Данное событие наступает перед событием [TabSheetBox.OnBeforeCellChange](TabSheetBox.OnBeforeCellChange.htm)
 и может использоваться для анализа вводимых данных.


По умолчанию данное событие не отслеживается для таблицы. Для включения
 данного события в список отслеживаемых используйте свойство [ITabSheet.EventMask](../../Interface/ITabSheet/ITabSheet.EventMask.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 TabSheetBox с идентификатором «TabSheetBox1» и компонент UiTabSheet с
 идентификатором «UiTabSheet1». Укажите компонент «UiTabSheet1» в качестве
 источника данных для компонента «TabSheetBox1».


			Sub TabSheetBox1OnEditorTextChanged(Sender: Object; Args: ITabEditorEventArgs);

Begin

    Debug.WriteLine("Изменяются данные в строке: "+ Args.Editor.Row.ToString +

        ", в столбце:" + Args.Editor.Column.ToString);

End Sub TabSheetBox1OnEditorTextChanged;


В результате выполнения примера при каждом изменении данных в ячейке
 в окно консоли будет выводиться информация о строке и столбце, в которых
 происходят изменения.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
