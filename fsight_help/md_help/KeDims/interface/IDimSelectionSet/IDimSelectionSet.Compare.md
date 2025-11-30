# IDimSelectionSet.Compare

IDimSelectionSet.Compare
-


# IDimSelectionSet.Compare


## Синтаксис


Compare(Value: [IDimSelectionSet](IDimSelectionSet.htm)):
 Boolean;


## Параметры


Value — отметка
 куба, с которой происходит сравнение.


## Описание


Метод Compare осуществляет сравнение
 текущей отметки с отметкой, передаваемой посредством параметра Value.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInstance, CubeInstance1: ICubeInstance;

	    Destination, Destination1: ICubeInstanceDestination;

	    DimSS, DimSS1: IDimSelectionSet;

	    s: String;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInstance := MB.ItemById("CUBE_1").Open(Null) As ICubeInstance;

	    Destination := CubeInstance.Destinations.DefaultDestination;

	    DimSS := Destination.CreateDimSelectionSet;

	    CubeInstance1 := MB.ItemById("CUBE_2").Open(Null) As ICubeInstance;

	    Destination1 := CubeInstance.Destinations.DefaultDestination;

	    DimSS1 := Destination.CreateDimSelectionSet;

	    For i := 0 To DimSS.Count - 1 Do

	        DimSS.Item(i).SelectAll;

	    End For;

	    For i := 0 To DimSS1.Count - 1 Do

	        DimSS1.Item(i).SelectAll;

	    End For;

	    If DimSS.Compare(DimSS1) Then

	        s := "Идентичны";

	    Else

	        s := "Не идентичны";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Идентичны»
 если отметка кубе с идентификатором «CUBE_1», и куба с идентификатором
 «CUBE_2» идентичны.


См. также:


[IDimSelectionSet](IDimSelectionSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
