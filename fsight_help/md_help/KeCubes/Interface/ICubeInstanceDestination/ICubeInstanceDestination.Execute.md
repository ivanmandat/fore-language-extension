# ICubeInstanceDestination.Execute

ICubeInstanceDestination.Execute
-


# ICubeInstanceDestination.Execute


## Синтаксис


Execute(Selection: [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm);
 [BasicUnit: Integer = -1]): [IMatrix](kematrix.chm::/interface/imatrix/imatrix.htm);


## Параметры


Selection. Отметка куба, в
 соответствии с которой осуществляется расчёт результирующей матрицы куба.


BasicUnit. Единицы измерения,
 в соответствии с которыми производится расчёт.


## Описание


Метод Execute осуществляет расчёт
 результирующей матрицы куба.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 CUBE_1.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICubeInstance;

    DefDes: ICubeInstanceDestination;

    Matr: IMatrix;

    Iter: IMatrixIterator;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

Begin

    Mb := MetabaseClass.Active;

    // Открытие куба

    CubeInst := Mb.ItemById("CUBE_1").Open(Null) As ICubeInstance;

    DefDes := CubeInst.Destinations.DefaultDestination;

    // Создание отметки

    DimSS := DefDes.CreateDimSelectionSet;

    For Each DimS In DimSS Do

        DimS.SelectAll;

    End For;

    // Расчёт матрицы

    Matr := DefDes.Execute(DimSS);

    // Создание итератора и просмотр рассчитанных значений

    Iter := Matr.CreateIterator;

    Iter.Move(IteratorDirection.First);

    While Iter.Valid Do

        Debug.Write(Iter.Value + " ");

        Iter.Move(IteratorDirection.Next);

    End While;

End Sub UserProc;


После выполнения примера будет осуществлен расчет результирующей матрицы
 куба. Все рассчитанные значения будут выведены в консоль среды разработки.


См. также:


[ICubeInstanceDestination](ICubeInstanceDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
