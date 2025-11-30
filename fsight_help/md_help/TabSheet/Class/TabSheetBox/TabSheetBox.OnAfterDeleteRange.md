# TabSheetBox.OnAfterDeleteRange

TabSheetBox.OnAfterDeleteRange
-


# TabSheetBox.OnAfterDeleteRange


## Синтаксис


Sub OnAfterDeleteRange(Sender:
 Object; Args: [ITabRangeDeleteEventArgs](../../Interface/ITabRangeDeleteEventArgs/ITabRangeDeleteEventArgs.htm));


Begin


//набор операторов;


End Sub OnAfterDeleteRange;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnAfterDeleteRange наступает
 после удаления диапазона ячеек.


## Комментарии


Перед удалением диапазона ячеек наступает событие [TabSheetBox.OnBeforeDeleteRange](TabSheetBox.OnBeforeDeleteRange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 TabSheetBox с идентификатором «TabSheetBox1» и компонент UiTabSheet с
 идентификатором «UiTabSheet1». Укажите компонент «UiTabSheet1» в качестве
 источника данных для компонента «TabSheetBox1».


			Sub TabSheetBox1OnAfterDeleteRange(Sender: Object; Args: ITabRangeDeleteEventArgs);

Begin

    Debug.WriteLine("Был удален диапазон: " + Args.Range.Address +

    " способом: " + Args.ShiftDirection.ToString + " из таблицы: " + Args.TabSheet.Name);

End Sub TabSheetBox1OnAfterDeleteRange;


В результате выполнения примера после каждого удаления диапазона ячеек
 в окно консоли будет выводиться сообщение с информацией об удаленном диапазоне.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
