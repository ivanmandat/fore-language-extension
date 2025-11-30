# IDimSelectionSet.CopyTo

IDimSelectionSet.CopyTo
-


# IDimSelectionSet.CopyTo


## Синтаксис


CopyTo(


Dest: [IDimSelectionSet](IDimSelectionSet.htm);


Replace: Boolean;


AddDimensions: Boolean);


## Параметры


Dest. Приёмник, в который осуществляется
 копирование отметки справочников.


Replace. Параметр, определяющий,
 будет ли заменяться отметка в приёмнике. Если True,
 то приёмник перед копированием очищается, если False
 - добавляются только не отмеченные элементы.


AddDimensions. Параметр, определяющий,
 будут ли добавляться отметки справочников, которых нет в приёмнике.


## Описание


Метод CopyTo осуществляет копирование
 отметки справочников в приёмник, передаваемый посредством параметра Dest.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CubeInstance, CubeInstance1: ICubeInstance;

	    Destination, Destination1: ICubeInstanceDestination;

	    DimSelectionSet, DimSelectionSet1: IDimSelectionSet;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    CubeInstance:=MB.ItemById("CUBE_1").Open(Null) As ICubeInstance;

	    Destination:=CubeInstance.Destinations.DefaultDestination;

	    DimSelectionSet:=Destination.CreateDimSelectionSet;

	    CubeInstance1:=MB.ItemById("CUBE_2").Open(Null) As ICubeInstance;

	    Destination1:=CubeInstance.Destinations.DefaultDestination;

	    DimSelectionSet1:=Destination.CreateDimSelectionSet;

	    For i:=0 To DimSelectionSet.Count-1 Do

	        DimSelectionSet.Item(i).SelectAll;

	    End For;

	    DimSelectionSet.CopyTo(DimSelectionSet1,True,True);

	    DimSelectionSet.Clear;

	End Sub UserProc;


После выполнения примера отметка, созданная в кубе с идентификатором
 «CUBE_1», будет скопирована в куб с идентификатором «CUBE_2».


См. также:


[IDimSelectionSet](IDimSelectionSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
