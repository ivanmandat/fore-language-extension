# ICubeModelDimensions.Item

ICubeModelDimensions.Item
-


# ICubeModelDimensions.Item


## Синтаксис


Item(Index: Integer): [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm);


## Параметры


Index. Индекс измерения куба.


## Описание


Свойство Item возвращает справочник
 репозитория, используемый в качестве измерения куба.


## Пример


Для выполнения примера предполагается наличие куба с идентификатором
 CUBE_1.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeModel: ICubeModel;

    Dims: ICubeModelDimensions;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    CubeModel := Mb.ItemById("CUBE_1").Bind As ICubeModel;

    Dims := CubeModel.Destinations.DefaultDestination.Dimensions;

    For i := 0 To Dims.Count - 1 Do

        Debug.WriteLine((Dims.Item(i) As IMetabaseObject).Id);

    End For;

End Sub UserProc;


После выполнения примера в консоль будут выведены идентификаторы всех
 справочников, являющихся измерениями в кубе.


См. также:


[ICubeModelDimensions](ICubeModelDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
