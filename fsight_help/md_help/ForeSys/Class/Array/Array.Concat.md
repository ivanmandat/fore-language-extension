# Array.Concat

Array.Concat
-


# Array.Concat


## Синтаксис


Concat(Value: Variant; [Dimension: Integer = 1]):
 Variant;


## Параметры


Value. Массив, который необходимо
 объединить с текущим массивом;


Dimension. Измерение, вдоль
 которого осуществляется объединение.


## Описание


Метод Concat объединяет элементы
 двух массивов в новый массив путём расширения исходного массива по указанному
 измерению.


## Комментарии


Объединяемые массивы должны иметь одинаковую размерность по всем измерениям,
 кроме измерения Dimension, вдоль
 которого осуществляется объединение. По измерению Dimension
 размерность выходного массива будет увеличена на количество элементов
 объединяемых массивов.


Примечание.
 При работе метода с большими массивами данных вырастает потребление памяти,
 так как требуется отдельное выделение памяти для формируемого объединённого
 массива.


## Пример


	Sub UserProc;

	Var

	    arrI1: Array[3] Of Integer = [1, 2, 3, 4];

	    arrI2: Array[3] Of Integer = [9, 7, 5];

	    arrI3: Array[2, 2] Of Integer = [[1, 2], [3, 4]];

	    arrI4: Array[1, 2] Of Integer = [[5, 6]];

	    arrI5: Array[2, 1] Of Integer = [5, 6];

	    arrNewI: Array Of Integer;

	    arrS1: Array[2, 2] Of String = [

	        ["AA", "AB"],

	        ["BA", "BB"]];

	    arrS2: Array[2, 2] Of String = [

	        ["CC", "CD"],

	        ["DC", "DD"]];

	    arrNewS: Array Of String;

	Begin

	    // Объединение двух одномерных массивов

	    arrNewI := arrI1.Concat(ArrI2) As Array Of Integer;

	    Debug.WriteLine("Length: " + arrNewI.Length.ToString);

	    // Объединение двух двухмерных массивов

	    // по первому измерению

	    arrNewI := arrI3.Concat(ArrI4, 1) As Array Of Integer;

	    PrintArr2dV(arrNewI.ToVariantArray, "---Объединение по первому измерению---");

	    // по второму измерению

	    arrNewI := arrI3.Concat(ArrI5, 2) As Array Of Integer;

	    PrintArr2dV(arrNewI.ToVariantArray, "---Объединение по второму измерению---");

	    // Символьные массивы

	    arrNewS := arrS1.Concat(arrS2, 2) As Array Of String;

	    PrintArr2dV(arrNewS.ToVariantArray, "---Символьные массивы---");

	End Sub UserProc;


	Sub PrintArr2dV(arr: Array Of Variant; title: String);

	Var

	    i, j: Integer;

	Begin

	    Debug.WriteLine(title);

	    Debug.WriteLine("[");

	    For i := arr.GetLowerBound(1) To arr.GetUpperBound(1) Do

	        Debug.Indent;

	        Debug.Write("[");

	        For j := arr.GetLowerBound(2) To arr.GetUpperBound(2) Do

	            Debug.Write(String.Format("{0}{1}", arr[i, j], (j < arr.GetUpperBound(2)? ", " : "")));

	        End For;

	        Debug.WriteLine(String.Format("{0}", (i < arr.GetUpperBound(1)? "], " : "]")));

	        Debug.Unindent;

	    End For;

	    Debug.WriteLine("]");

	    Debug.WriteLine("");

	End Sub PrintArr2dV;


При выполнении примера осуществляется объединение различных видов массивов.
 Результирующие массивы будут выведены в консоль среды разработки:


Выполнение модуля начато


Length: 6


---Объединение по первому измерению---


[


    [1, 2],


    [3, 4],


    [5, 6]


]


---Объединение по второму измерению---


[


    [1, 2, 5],


    [3, 4, 6]


]


---Символьные массивы---


[


    [AA, AB, CC, CD],


    [BA, BB, DC, DD]


]


Выполнение модуля завершено


См. также:


[Array](Array.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
