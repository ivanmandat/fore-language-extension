# IDimSelectionSet.CopyToEx

IDimSelectionSet.CopyToEx
-


# IDimSelectionSet.CopyToEx


## Синтаксис


CopyToEx: (Dest: [IDimSelectionSet](IDimSelectionSet.htm);
 Options: [SelectionCopyToExOptions](../../Enums/SelectionCopyToExOptions.htm);
 ReplaceSelection: Boolean; AddDimensions: Boolean);


## Параметры


Dest. Приемник, в который осуществляется
 копирование отметки справочников.


Options. Определяет копируемую
 опцию (только отметка, отметка и группы элементов; отметка и схемы отметки);


ReplaceSelection. Параметр,
 определяющий, будет ли заменяться отметка в приёмнике. Если True,
 то приёмник перед копированием очищается, если False
 - добавляются только не отмеченные элементы.


AddDimensions. Параметр, определяющий,
 будут ли добавляться отметки справочников, которых нет в приёмнике.


## Описание


Метод CopyToEx
 копирует группы элементов и отметки справочников в указанный приёмник.


## Комментарии


Для копирования отметки справочников в указанный приёмник используйте
 метод [IDimSelectionSet.CopyTo](IDimSelectionSet.CopyTo.htm).


## Пример


Для выполнения примера предполагается наличие двух кубов с идентификаторами
 «CUBE_1» и «CUBE_2».


Добавьте ссылки на системные сборки «Metabase», «Cubes», «Dimensions».


			Sub main;

Var

    MB: IMetabase;

    CubeInstance, CubeInstance1: ICubeInstance;

    Destination, Destination1: ICubeInstanceDestination;

    DimSelectionSet, DimSelectionSet1: IDimSelectionSet;

    Options: SelectionCopyToExOptions;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    CubeInstance := MB.ItemById("CUBE_1").Open(Null) As ICubeInstance;

    Destination := CubeInstance.Destinations.DefaultDestination;

    DimSelectionSet := Destination.CreateDimSelectionSet;

    CubeInstance1 := MB.ItemById("CUBE_2").Open(Null) As ICubeInstance;

    Destination1 := CubeInstance.Destinations.DefaultDestination;

    DimSelectionSet1 := Destination.CreateDimSelectionSet;

    For i := 0 To DimSelectionSet.Count - 1 Do

        DimSelectionSet.Item(i).SelectAll;

    End For;

    Options := SelectionCopyToExOptions.None;

    DimSelectionSet.CopyToEx(DimSelectionSet1, Options, True, True);

    DimSelectionSet.Clear;

End Sub main;


После выполнения примера отметка, созданная в кубе с идентификатором
 «CUBE_1», будет скопирована в куб с идентификатором «CUBE_2».


См. также:


[IDimSelectionSet](IDimSelectionSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
