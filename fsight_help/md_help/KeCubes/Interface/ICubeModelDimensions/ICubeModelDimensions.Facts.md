# ICubeModelDimensions.Facts

ICubeModelDimensions.Facts
-


# ICubeModelDimensions.Facts


## Синтаксис


Facts: [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm);


## Описание


Свойство Facts определяет справочник,
 используемый в качестве перечня показателей куба.


## Пример


Для выполнения примера предполагается наличие автоматического куба с
 идентификатором AUTO_CUBE и двух табличных справочников с идентификаторами
 Dim_Pokaz и Dim_Ei.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IAutoCube;

    CubeModel: ICubeModel;

    Dims: ICubeModelDimensions;

Begin

    MB := MetabaseClass.Active;

    Cube := Mb.ItemById("AUTO_CUBE").Edit As IAutoCube;

    CubeModel := Cube As ICubeModel;

    Cube.Dimensions.Add(Mb.ItemById("Dim_Ei").Bind As IDimensionModel);

    Cube.Dimensions.Add(Mb.ItemById("Dim_Pokaz").Bind As IDimensionModel);

    Dims := CubeModel.Destinations.DefaultDestination.Dimensions;

    Dims.Units := Dims.FindById("Dim_Ei");

    Dims.Facts := Dims.FindById("Dim_Pokaz");

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в указанный куб будут добавлены два справочника.
 Первый будет использоваться в качестве справочника единиц измерения, а
 второй - справочник перечня показателей куба.


См. также:


[ICubeModelDimensions](ICubeModelDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
