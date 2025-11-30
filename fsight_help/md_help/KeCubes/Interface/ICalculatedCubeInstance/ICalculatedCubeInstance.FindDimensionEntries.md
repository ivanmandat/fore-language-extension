# ICalculatedCubeInstance.FindDimensionEntries

ICalculatedCubeInstance.FindDimensionEntries
-


# ICalculatedCubeInstance.FindDimensionEntries


## Синтаксис


FindDimensionEntries(Dimension: [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm)):
 [ICalculatedCubeIterator](../ICalculatedCubeIterator/ICalculatedCubeIterator.htm);


## Параметры


Dimension. Справочник, который необходимо найти в
 формулах вычисляемого куба.


## Описание


Метод FindDimensionEntries осуществляет
 поиск вхождений заданного справочника в формулы вычисляемого куба.


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

    Dim: IDimensionModel;

    Iter: ICalculatedCubeIterator;

Begin

    Mb := MetabaseClass.Active;

    CubeInst := Mb.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    Dim := Mb.ItemById("Dim_1").Bind As IDimensionModel;

    Iter := CubeInst.FindDimensionEntries(Dim);

    While Not Iter.Eof Do

        Debug.WriteLine(Iter.Coord.AsString);

        Iter.Next;

    End While;

End Sub UserProc;


После выполнения примера будет осуществлен поиск вхождения указанного
 справочника в формулы вычисляемого куба. В случае удачного поиска на экран
 будут выведены символьные обозначения координат вычисляемого куба, в формулах
 которых содержатся ссылки на искомый справочник.


См. также:


[ICalculatedCubeInstance](ICalculatedCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
