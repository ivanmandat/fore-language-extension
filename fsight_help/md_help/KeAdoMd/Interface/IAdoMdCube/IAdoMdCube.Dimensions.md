# IAdoMdCube.Dimensions

IAdoMdCube.Dimensions
-


# IAdoMdCube.Dimensions


## Синтаксис


Dimensions: [ICubeModelDimensions](KeCubes.chm::/Interface/ICubeModelDimensions/ICubeModelDimensions.htm);


## Описание


Свойство Dimensions возвращает
 коллекцию измерений куба ADOMD, описываемую интерфейсом [ICubeModelDimensions](KeCubes.chm::/Interface/ICubeModelDimensions/ICubeModelDimensions.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В каталоге имеется куб ADOMD с идентификатором
 «Cube_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IAdoMdCube;

    Dims: ICubeModelDimensions;

    Dim: IMetabaseObject;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemByIdNamespace("Cube_1", MB.GetObjectKeyById("ADOMDTest")).Bind As IAdoMdCube;

    Dims := Cube.Dimensions;

    For Each Dim In Dims Do

        Debug.WriteLine(Dim.Name + " (" + Dim.Id + ")");

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 измерений указанного куба.


См. также:


[IAdoMdCube](IAdoMdCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
