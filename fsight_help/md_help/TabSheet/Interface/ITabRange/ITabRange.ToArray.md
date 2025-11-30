# ITabRange.ToArray

ITabRange.ToArray
-


# ITabRange.ToArray


## Синтаксис


ToArray: Array;


## Описание


Метод ToArray создает двумерный
 массив. Размер массива определяется размером диапазона ячеек.


## Комментарии


Для преобразования диапазона в двумерный массив вещественных значений
 используйте метод [ITabRange.ToDouble2DArray](ITabRange.ToDouble2DArray.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент TabSheetBox с идентификатором
 «TabSheetBox1» и компонент UiTabSheet с идентификатором «UiTabSheet1».
 Укажите компонент «UiTabSheet1» в качестве источника данных для компонента
 «TabSheetBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

    TRange: ITabRange;

    Arr: Array Of Variant;

    i, j: Integer;

Begin

    TSheet := UiTabSheet1.TabSheet;

    TRange := TSheet.View.Selection.Range;

    Arr := TRange.ToArray;

    i := Arr.GetUpperBound(1);

    j := Arr.GetUpperBound(2);

    Debug.WriteLine("Размерность
 массива: " + i.ToString + ",
 " + j.ToString);

End Sub Button1OnClick;


При нажатии на кнопку будет создан массив «Arr», содержащий значения
 ячеек из выделенного диапазона таблицы. В переменной «i» будет содержаться
 количество строк массива, в «j» - количество столбцов массива.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
