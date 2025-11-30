# TabSheetBox.OnAfterInsertRange

TabSheetBox.OnAfterInsertRange
-


# TabSheetBox.OnAfterInsertRange


## Синтаксис


Sub OnAfterInsertRange(Sender:
 Object; Args: [ITabRangeInsertEventArgs](../../Interface/ITabRangeInsertEventArgs/ITabRangeInsertEventArgs.htm));


Begin


//набор операторов;


End Sub OnAfterInsertRange;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnAfterInsertRange наступает
 после добавления диапазона ячеек.


## Комментарии


Перед добавлением диапазона ячеек наступает событие [TabSheetBox.OnBeforeInsertRange](TabSheetBox.OnBeforeInsertRange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 TabSheetBox с идентификатором «TabSheetBox1» и компонент UiTabSheet с
 идентификатором «UiTabSheet1». Укажите компонент «UiTabSheet1» в качестве
 источника данных для компонента «TabSheetBox1».


			Sub TabSheetBox1OnAfterInsertRange(Sender: Object; Args: ITabRangeInsertEventArgs);

Begin

    Debug.WriteLine("Был добавлен диапазон: " + Args.Range.Address +

    " способом: " + Args.ShiftDirection.ToString + " в таблицу: " + Args.TabSheet.Name);

End Sub TabSheetBox1OnAfterInsertRange;


В результате выполнения примера после каждого добавления диапазона ячеек
 в окно консоли будет выводиться сообщение с информацией о добавленном
 диапазоне.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
