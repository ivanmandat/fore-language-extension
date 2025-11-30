# TabSheetBox.OnUserInteractiveSelectionChange

TabSheetBox.OnUserInteractiveSelectionChange
-


# TabSheetBox.OnUserInteractiveSelectionChange


## Синтаксис


Sub OnUserInteractiveSelectionChange(Sender:
 Object; Args: [ITabUserInteractiveSelectionChangeEventArgs](../../Interface/ITabUserInteractiveSelectionChangeEventArgs/ITabUserInteractiveSelectionChangeEventArgs.htm));


Begin


//набор операторов;


End Sub OnUserInteractiveSelectionChange;


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnUserInteractiveSelectionChange
 наступает при изменении интерактивного диапазона ячеек.


## Комментарии


Используя свойства аргумента события, можно организовать проверку настроек
 интерактивного диапазона и, при необходимости, запретить их изменение.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента TabSheetBox с наименованием «TabSheetBox1» и какого-либо
 источника для «TabSheetBox1». В отображаемой таблице созданы интерактивные
 диапазоны. Указанная процедура установлена в качестве обработчика события
 OnUserInteractiveSelectionChange компонента «TabSheetBox1».


			Sub TabSheetBox1OnUserInteractiveSelectionChange(Sender: Object; Args: ITabUserInteractiveSelectionChangeEventArgs);

Var

    IntSelection: ITabUserInteractiveSelection;

Begin

    IntSelection := Args.Selection;

    If IntSelection.Range.Right > 10 Then

        Args.Cancel := True;

    End If;

End Sub TabSheetBox1OnUserInteractiveSelectionChange;


При наступлении события будет осуществлена проверка правой границы интерактивного
 диапазона: если граница была перемещена дальше десятого столбца, то дальнейшее
 изменение интерактивного диапазона будет запрещено.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
