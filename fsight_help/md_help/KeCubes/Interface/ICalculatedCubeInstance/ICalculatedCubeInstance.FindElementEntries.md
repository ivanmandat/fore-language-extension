# ICalculatedCubeInstance.FindElementEntries

ICalculatedCubeInstance.FindElementEntries
-


# ICalculatedCubeInstance.FindElementEntries


## Синтаксис


FindElementEntries(Dimension: [IDimInstance](kedims.chm::/interface/idiminstance/idiminstance.htm);
 El: Integer): [ICalculatedCubeIterator](../ICalculatedCubeIterator/ICalculatedCubeIterator.htm);


## Параметры


Dimension. Данные справочника,
 среди которых находится искомый элемент.


El. Индекс элемента справочника.


## Описание


Метод FindElementEntries осуществляет
 поиск вхождений заданного элемента справочника в формулы вычисляемого
 куба.


## Комментарии


В случае удачного поиска метод возвращает итератор по формулам, удовлетворяющим
 условию поиска.


## Пример


Для выполнения примера, предполагается наличие в репозитории вычисляемого
 куба с идентификатором Calc_Cube и справочника с идентификатором Dim_1.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CubeInst: ICalculatedCubeInstance;

	    Dim: IDimInstance;

	    Iter: ICalculatedCubeIterator;

	Begin

	    Mb := MetabaseClass.Active;

	    CubeInst := Mb.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

	    Dim := Mb.ItemById("Dim_1").Open(Null) As IDimInstance;

	    Iter := CubeInst.FindElementEntries(Dim, 0);

	    While Not Iter.Eof Do

	        Debug.WriteLine(Iter.Coord.AsString);

	        Iter.Next;

	    End While;

	End Sub UserProc;


После выполнения примера будет осуществлён поиск первого элемента указанного
 справочника в формулах вычисляемого куба. В случае удачного поиска на
 экран будут выведены символьные обозначения координат вычисляемого куба,
 в формулах которых содержится искомый элемент.


См. также:


[ICalculatedCubeInstance](ICalculatedCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
