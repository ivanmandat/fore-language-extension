# Сравнение значений по алгоритму пользователя

Сравнение значений по алгоритму пользователя
-


# Сравнение значений по алгоритму пользователя


Для сравнения значений различных типов предназначен метод [Compare](../Interface/IComparer/IComparer.Compare.htm)
 интерфейса [IComparer](../Interface/IComparer/IComparer.htm).
 Для получения объекта, осуществляющего сравнение, в зависимости от типа
 данных сравниваемых значений, используются статические свойства класса
 [Comparer](../Class/Comparer/Comparer.htm). Если ни один из
 доступных объектов не подходит, то можно реализовать собственный объект.
 Для этого необходимо унаследовать класс от интерфейса [IComparer](../Interface/IComparer/IComparer.htm)
 и в этом классе переопределить метод [Compare](../Interface/IComparer/IComparer.Compare.htm),
 реализовав в нем собственный алгоритм сравнения каких-либо объектов.


	Class MyComparer: Object, IComparer

	    Public Function Compare(x: Variant; y: Variant): Integer;

	    Var

	        sX, sY: String;

	    Begin

	        sX := String.Trim(x As String);

	        sY := String.Trim(y As String);

	        If sX.Length = sy.Length Then

	            Return 0

	        Elseif sX.Length > sy.Length Then

	            Return 1

	        Elseif sX.Length < sy.Length Then

	            Return - 1

	        End If;

	    End Function Compare;

	End Class MyComparer;


	Sub UserProc;

	Var

	    Comp: MyComparer;

	    Result: Integer;

	Begin

	    Comp := New MyComparer.Create;

	    Result := Comp.Compare("Test ", " Sample");

	End Sub UserProc;


В указанном примере в переопределенном методе Compare сравниваемые объекты
 сначала приводятся к строковому типу, затем удаляются пробелы в начале
 и в конце, и после этого объекты сравниваются по длине значения.


См также:


[Примеры](ModCollections_Samples.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
