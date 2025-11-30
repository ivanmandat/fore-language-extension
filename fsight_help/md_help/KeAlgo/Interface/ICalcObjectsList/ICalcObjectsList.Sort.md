# ICalcObjectsList.Sort

ICalcObjectsList.Sort
-


# ICalcObjectsList.Sort


## Синтаксис


Sort(CalcComparer: [ICalcObjectComparer](../ICalcObjectComparer/ICalcObjectComparer.htm));


## Параметры


CalcComparer. Объекты, осуществляющие
 сравнение.


## Описание


Метод Sort осуществляет сортировку
 списка с помощью объекта для сравнения.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны содержаться
 настроенные объекты.


Добавьте ссылки на системные сборки: Algo, Collections, Metabase. Также
 [добавьте ссылки](../../Intro/KeAlgo_Programming.htm) на сборки,
 которые необходимы для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    Obj: ICalcObject;

	    i, c: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим
	 список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    c := List.Count;

	    Debug.WriteLine("---До
	 сортировки---");

	    For i := 0 To c - 1 Do

	        Obj := List.Item(i);

	        Debug.WriteLine(Obj.Name);

	    End For;

	    // Выполним сортировку
	 с помощью собственного сортировщика

	    List.Sort(New MyComparer.Create);

	    Debug.WriteLine("---После
	 сортировки---");

	    For i := 0 To c - 1 Do

	        Obj := List.Item(i);

	        Debug.WriteLine(Obj.Name);

	    End For;

	End Sub UserProc;


Class MyComparer: Object, ICalcObjectComparer, IComparer

    Public Function Compare(obj1, obj2: Variant): Integer;

    Begin

        Return CompareCalcObject(obj1, obj2);

    End Function Compare;


    Public Function CompareCalcObject(objV1, objV2: ICalcObject): Integer;

    Var

        Comp: IComparer;

    Begin

        Comp := Comparer.StringComparer;

        //
 Сравним наименования объектов алгоритма расчёта

        Return Comp.Compare(objV1.Name, objV2.Name)

    End Function CompareCalcObject;

End Class MyComparer;


При выполнении примера будет получен список объектов алгоритма расчёта.
 Данный список будет отсортирован по наименованиям объектов с помощью пользовательского
 объекта для сравнения. Содержимое списка до и после сортировки будет выведено
 в консоль среды разработки.


См. также:


[ICalcObjectsList](ICalcObjectsList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
