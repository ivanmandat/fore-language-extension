# ITabRange.ToIntegerArray

ITabRange.ToIntegerArray
-


# ITabRange.ToIntegerArray


## Синтаксис


ToIntegerArray([SkipNonIntegers: Boolean = false]):
 Array;


## Параметры


SkipNonIntegers. Определяет,
 будут ли пропускаться нецелочисленные значения.


## Описание


Метод ToIntegerArray осуществляет
 преобразование диапазона в целочисленный массив.


## Комментарии


Параметр SkipNonIntegers определяет
 правило пропуска нецелочисленных значений диапазона. Допустимые значения:


	- True. Нецелочисленное
	 значение будет пропущено;


	- False. Значение по умолчанию.
	 На месте элемента с нецелочисленным значением в массиве будет стоять
	 «0».


Если свойство [ITabErrorCheckingOptions.EnableChecking](../ITabErrorCheckingOptions/ITabErrorCheckingOptions.EnableChecking.htm)
 принимает значение true, то при
 вызове метода ToIntegerArray будут
 учитываться все опции из [ITabSheet.ErrorCheckingOptions](../ITabSheet/ITabSheet.ErrorCheckingOptions.htm).


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

    Arr: Array Of Integer;

Begin

    TSheet := UiTabSheet1.TabSheet;

    TRange := TSheet.View.Selection.Range;

    Arr := TRange.ToIntegerArray(True);

    // Получим длину массива

    Debug.WriteLine("Длина массива: " + Arr.Length.ToString);

End Sub Button1OnClick;


При нажатии на кнопку будет создан целочисленный массив «Arr», в него
 будут помещены значения из выделенного диапазона таблицы. Невещественные
 значения будут пропущены. В окно консоли будет выведено сообщение о длине
 массива «Arr».


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
