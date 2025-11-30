# ICalculatedCubeInstance.FindCubeEntries

ICalculatedCubeInstance.FindCubeEntries
-


# ICalculatedCubeInstance.FindCubeEntries


## Синтаксис


FindCubeEntries(Cube: [ICubeModel](../ICubeModel/ICubeModel.htm)):
 [ICalculatedCubeIterator](../ICalculatedCubeIterator/ICalculatedCubeIterator.htm);


## Параметры


Cube. Куб, который необходимо
 найти в формулах вычисляемого куба.


## Описание


Метод FindCubeEntries осуществляет
 поиск вхождений заданного куба в формулы вычисляемого куба.


## Комментарии


В случае удачного поиска метод возвращает итератор по формулам, удовлетворяющим
 условию поиска.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube и куба с идентификатором Cube_1.


			Sub UserProc;

Var

    Mb: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    FindCube: ICubeModel;

    Iter: ICalculatedCubeIterator;

Begin

    Mb := MetabaseClass.Active;

    CubeInst := Mb.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    FindCube := Mb.ItemById("Cube_1").Bind As ICubeModel;

    Iter := CubeInst.FindCubeEntries(FindCube);

    While Not Iter.Eof Do

        Debug.WriteLine(Iter.Coord.AsString);

        Iter.Next;

    End While;

End Sub UserProc;


После выполнения примера будет осуществлен поиск вхождений заданного
 куба в формулах вычисляемого куба. В случае удачного поиска, на экран
 будут выведены символьные обозначения координат вычисляемого куба, в формулах
 которых содержится ссылка на искомый куб.


См. также:


[ICalculatedCubeInstance](ICalculatedCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
