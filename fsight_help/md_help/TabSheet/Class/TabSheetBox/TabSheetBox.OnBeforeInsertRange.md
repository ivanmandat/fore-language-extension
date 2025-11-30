# TabSheetBox.OnBeforeInsertRange

TabSheetBox.OnBeforeInsertRange
-


# TabSheetBox.OnBeforeInsertRange


## Синтаксис


Sub OnBeforeInsertRange(Sender:
 Object; Args: [ITabRangeInsertEventArgs](../../Interface/ITabRangeInsertEventArgs/ITabRangeInsertEventArgs.htm));


Begin


//набор операторов;


End Sub OnBeforeInsertRange;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeInsertRange
 наступает перед добавлением диапазона ячеек.


## Комментарии


После добавления диапазона ячеек наступает событие [TabSheetBox.OnAfterInsertRange](TabSheetBox.OnAfterInsertRange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 TabSheetBox с идентификатором «TabSheetBox1» и компонент UiTabSheet с
 идентификатором «UiTabSheet1». Укажите компонент «UiTabSheet1» в качестве
 источника данных для компонента «TabSheetBox1».


			Sub TabSheetBox1OnBeforeInsertRange(Sender: Object; Args: ITabRangeInsertEventArgs);

Begin

    Debug.WriteLine("Будет добавлен диапазон: " + Args.Range.Address +

    " способом: " + Args.ShiftDirection.ToString + " в таблицу: " + Args.TabSheet.Name);

End Sub TabSheetBox1OnBeforeInsertRange;


В результате выполнения примера перед каждым добавлением диапазона ячеек
 в окно консоли будет выводиться сообщение с информацией о добавляемом
 диапазоне.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
