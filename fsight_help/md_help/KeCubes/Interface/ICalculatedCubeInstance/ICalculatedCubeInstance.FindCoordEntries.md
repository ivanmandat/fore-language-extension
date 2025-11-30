# ICalculatedCubeInstance.FindCoordEntries

ICalculatedCubeInstance.FindCoordEntries
-


# ICalculatedCubeInstance.FindCoordEntries


## Синтаксис


FindCoordEntries(Coord: [ICalculatedCubeInstanceCoord](../ICalculatedCubeInstanceCoord/ICalculatedCubeInstanceCoord.htm)):
 [ICalculatedCubeIterator](../ICalculatedCubeIterator/ICalculatedCubeIterator.htm);


## Параметры


Coord. Координата, которую
 необходимо найти в формулах вычисляемого куба.


## Описание


Метод FindCoordEntries осуществляет
 поиск вхождений заданной координаты в формулы вычисляемого куба.


## Комментарии


В случае удачного поиска метод возвращает итератор по формулам, удовлетворяющим
 условию поиска.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube. В кубе-источнике имеется два незафиксированных
 измерения.


			Sub UserProc;

Var

    Mb: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    Coord: ICalculatedCubeInstanceCoord;

    Iter: ICalculatedCubeIterator;

Begin

    Mb := MetabaseClass.Active;

    CubeInst := Mb.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    Coord := CubeInst.CreateSourceCoord(CubeInst.Sources.Item(0));

    Coord.MatrixCoord.Item(0) := 0;

    Coord.MatrixCoord.Item(1) := 0;

    Iter := CubeInst.FindCoordEntries(Coord);

    While Not Iter.Eof Do

        Debug.WriteLine(Iter.Coord.AsString);

        Iter.Next;

    End While;

End Sub UserProc;


После выполнения примера будет получена координаты в первом кубе-источнике
 и осуществлен поиск данной координаты в формулах вычисляемого куба. В
 случае удачного поиска, на экран будут выведены символьные обозначения
 координат вычисляемого куба, в формулах которых содержится искомая координата.


См. также:


[ICalculatedCubeInstance](ICalculatedCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
