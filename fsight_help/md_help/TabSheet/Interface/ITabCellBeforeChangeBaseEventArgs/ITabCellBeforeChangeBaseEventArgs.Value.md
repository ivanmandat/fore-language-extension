# ITabCellBeforeChangeBaseEventArgs.Value

ITabCellBeforeChangeBaseEventArgs.Value
-


# ITabCellBeforeChangeBaseEventArgs.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение, которое будет содержаться в ячейке после завершения редактирования.


## Комментарии


Используя данное свойство можно изменить значение ячейки перед завершением редактирования.


## Пример


Для выполнения примера предполагается наличие формы, расположенного на ней компонента LanerBox с наименованием «LanerBox1» и компонента UiErAnalyzer являющегося источником данных для «LanerBox1». UiErAnalyzer подключен к какой-либо рабочей книге базы данных временных рядов.


Данная процедура установлена в качестве обработчика события OnBeforeCellChange компонента «LanerBox1».


			    Sub LanerBox1OnBeforeCellChange(Sender: Object; Args: ITabCellBeforeChangeBaseEventArgs);

    Var

        New_val, Old_val: Variant;

    Begin

        Old_val := Args.TabSheet.CellValue(Args.Row, Args.Column);

        New_val := Args.Value;

    End Sub LanerBox1OnBeforeCellChange;


После выполнения события в переменной «Old_val» будет содержаться старое значение ячейки, а в переменной «New_val» - значение, которое будет занесено в ячейку после завершения редактирования.


См. также:


[ITabCellBeforeChangeBaseEventArgs](ITabCellBeforeChangeBaseEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
