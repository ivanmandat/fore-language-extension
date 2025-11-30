# ITabRange.ToDouble2DArray

ITabRange.ToDouble2DArray
-


# ITabRange.ToDouble2DArray


## Синтаксис


ToDouble2DArray(Var NonDoublesExist: Boolean): Array;


## Параметры


NonDoublesExist. Определяет
 признак наличия в массиве невещественных значений.


## Описание


Метод ToDouble2DArray осуществляет
 преобразование диапазона в двумерный массив вещественных чисел.


## Комментарии


После выполнения метода параметр NonDoublesExist
 принимает значение:


	- True, если в
	 массиве нет невещественных значений;


	- False, если в
	 преобразованном диапазоне были невещественные значения. На месте элементов
	 с невещественным значением в массиве стоит «NaN».


Если свойство [ITabErrorCheckingOptions.EnableChecking](../ITabErrorCheckingOptions/ITabErrorCheckingOptions.EnableChecking.htm)
 принимает значение true, то при
 вызове метода ToDouble2DArray
 будут учитываться все опции из [ITabSheet.ErrorCheckingOptions](../ITabSheet/ITabSheet.ErrorCheckingOptions.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент TabSheetBox с идентификатором
 «TabSheetBox1» и компонент UiTabSheet с идентификатором «UiTabSheet1».
 Укажите компонент «UiTabSheet1» в качестве источника данных для компонента
 «TabSheetBox1».


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

    TRange: ITabRange;

    Arr: Array Of Double;

    NonDoubleExist: Boolean;

Begin

    TSheet := UiTabSheet1.TabSheet;

    TRange := TSheet.View.Selection.Range;

    Arr := TRange.ToDouble2DArray(NonDoubleExist);

    If NonDoubleExist Then

        Debug.WriteLine("В массиве есть невещественные значения");

        Else

            Debug.WriteLine("В массиве все значения вещественные");

    End If;

End Sub Button1OnClick;


При нажатии на кнопку будет создан вещественный массив «Arr», в него
 будут помещены значения из выделенного диапазона таблицы. В окно консоли
 будет выведено сообщение о наличии невещественных значений в массиве «Arr».


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
