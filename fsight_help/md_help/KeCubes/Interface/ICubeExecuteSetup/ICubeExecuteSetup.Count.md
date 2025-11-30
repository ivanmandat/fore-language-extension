# ICubeExecuteSetup.Count

ICubeExecuteSetup.Count
-


# ICubeExecuteSetup.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 параметров расчета куба.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC_DEP.


			Sub UserProc;

Var

    Mb: IMetabase;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Sels: IDimSelectionSet;

    CubeExSet: ICubeExecuteSetup;

    DimSetup: ICubeExecuteDimSetup;

    Sel: IDimSelection;

    i: Integer;

Begin

    Mb := MetabaseClass.Active;

    CubeInst := Mb.ItemById("FC_DEP").Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    Sels := Dest.CreateDimSelectionSet;

    CubeExSet := Sels As ICubeExecuteSetup;

    For i := 0 To CubeExSet.Count - 1 Do

        DimSetup := CubeExSet.Item(i);

        Sel := DimSetup.Selection;

        Debug.WriteLine(Sel.Dimension.Name);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены наименования
 измерений, входящих в вариант отображения базы данных временных рядов,
 выбираемый по умолчанию.


См. также:


[ICubeExecuteSetup](ICubeExecuteSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
