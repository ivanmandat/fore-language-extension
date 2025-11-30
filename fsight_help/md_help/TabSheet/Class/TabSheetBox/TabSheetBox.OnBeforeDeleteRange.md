# TabSheetBox.OnBeforeDeleteRange

TabSheetBox.OnBeforeDeleteRange
-


# TabSheetBox.OnBeforeDeleteRange


## Синтаксис


Sub OnBeforeDeleteRange(Sender:
 Object; Args: [ITabRangeDeleteEventArgs](../../Interface/ITabRangeDeleteEventArgs/ITabRangeDeleteEventArgs.htm));


Begin


//набор операторов;


End Sub OnBeforeDeleteRange;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeDeleteRange
 наступает перед удалением диапазона ячеек.


## Комментарии


После удаления диапазона ячеек наступает событие [TabSheetBox.OnAfterDeleteRange](TabSheetBox.OnAfterDeleteRange.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 TabSheetBox с идентификатором «TabSheetBox1» и компонент UiTabSheet с
 идентификатором «UiTabSheet1». Укажите компонент «UiTabSheet1» в качестве
 источника данных для компонента «TabSheetBox1».


			Sub TabSheetBox1OnBeforeDeleteRange(Sender: Object; Args: ITabRangeDeleteEventArgs);

Begin

    Debug.WriteLine("Будет удален диапазон: " + Args.Range.Address +

    " способом: " + Args.ShiftDirection.ToString + " из таблицы: " + Args.TabSheet.Name);

End Sub TabSheetBox1OnBeforeDeleteRange;


В результате выполнения примера перед каждым удалением диапазона ячеек
 в окно консоли будет выводиться сообщение с информацией об удаляемом диапазоне.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
