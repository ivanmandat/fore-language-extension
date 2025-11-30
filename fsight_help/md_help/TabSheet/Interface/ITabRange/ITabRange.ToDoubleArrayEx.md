# ITabRange.ToDoubleArrayEx

ITabRange.ToDoubleArrayEx
-


# ITabRange.ToDoubleArrayEx


## Синтаксис


ToDoubleArray([Flags: [TabRangeToArrayFlags](../../Enums/TabRangeToArrayFlags.htm)
 = 0]): Array;


## Параметры


Flags. Флаг, определяющий дополнительные
 параметры преобразования.


## Описание


Метод ToDoubleArrayEx осуществляет
 преобразование диапазона в вещественный массив с возможностью применения
 дополнительных параметров преобразования.


## Комментарии


Вид применяемого дополнительного преобразования указывается с помощью
 входного параметра Flags.


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

Begin

    TSheet := UiTabSheet1.TabSheet;

    TRange := TSheet.View.Selection.Range;

    Arr := TRange.ToDoubleArrayEx(TabRangeToArrayFlags.SkipNonNumbers);

    // Получим длину массива

    Debug.WriteLine("Длина массива: " + Arr.Length.ToString);

End Sub Button1OnClick;


При нажатии на кнопку будет создан вещественный массив «Arr», в него
 будут помещены значения из выделенного диапазона таблицы. Нечисловые значения
 будут пропущены. В окно консоли будет выведено сообщение о длине массива
 «Arr».


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
