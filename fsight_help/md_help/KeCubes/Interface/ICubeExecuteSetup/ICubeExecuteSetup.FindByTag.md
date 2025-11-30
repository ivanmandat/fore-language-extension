# ICubeExecuteSetup.FindByTag

ICubeExecuteSetup.FindByTag
-


# ICubeExecuteSetup.FindByTag


## Синтаксис


FindByTag(Tag: [CubeDimensionTag](../../Enums/CubeDimensionTag.htm)):
 [ICubeExecuteDimSetup](../ICubeExecuteDimSetup/ICubeExecuteDimSetup.htm);


## Параметры


Tag. Тип измерения.


## Описание


Метод FindByTag осуществляет
 поиск параметров по типу измерения.


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

Begin

    Mb := MetabaseClass.Active;

    CubeInst := Mb.ItemById("FC_DEP").Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    Sels := Dest.CreateDimSelectionSet;

    CubeExSet := Sels As ICubeExecuteSetup;

    DimSetup := CubeExSet.FindByTag(CubeDimensionTag.Calendar);

    If DimSetup <> Null Then

        Debug.WriteLine("Настройки указанного измерения найдены");

    Else

        Debug.WriteLine("Настройки указанного измерения не найдены");

    End If;

End Sub UserProc;


После выполнения примера будет осуществлен поиск параметров для календарного
 измерения. Результаты поиска будут выведены в окно консоли. Если параметры
 найдены, то они будут содержаться в переменной DimSetup.


См. также:


[ICubeExecuteSetup](ICubeExecuteSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
