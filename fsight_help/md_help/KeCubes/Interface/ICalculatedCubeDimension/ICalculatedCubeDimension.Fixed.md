# ICalculatedCubeDimension.Fixed

ICalculatedCubeDimension.Fixed
-


# ICalculatedCubeDimension.Fixed


## Синтаксис


Fixed: Boolean;


## Описание


Свойство Fixed определяет, является
 ли измерение фиксированным.


## Комментарии


Допустимые значения:


	- True. Измерение зафиксировано.


	- False. Измерение не
	 зафиксировано.


Для фиксации измерения в источниках данных вычисляемого куба, данное
 измерение должно быть добавлено в куб назначения.


Фиксация подразумевает прямое соответствие между элементами справочника-источника
 и справочника-назначения. Соответствие между элементами измерений устанавливается
 по [индексу](ICalculatedCubeDimension.Index.htm).


## Пример


Для выполнения примера предполагается наличие вычисляемого куба с идентификатором
 «Calc_Cube» и куба с идентификатором «Cube_1», которой будет добавлен
 в источники данных вычисляемого куба.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Cube: ICalculatedCube;

    Sources: ICalculatedCubeSources;

    Source: ICalculatedCubeSource;

    CubeSource: ICubeModel;

    SourceDims: ICalculatedCubeSourceDimensions;

    SourceDim, CalCubeDim: ICalculatedCubeDimension;

    CalCubeDims: ICalculatedCubeDimensions;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("Calc_Cube").Edit;

    CubeSource := MB.ItemById("Cube_1").Bind As ICubeModel;

    Cube := MObj As ICalculatedCube;

    Sources := Cube.Sources;

    //Добавление куба-источника

    Source := Sources.Add(CubeSource.Destinations.DefaultDestination);

    //Получение измерений куба-источника

    SourceDims := Source.Dimensions;

    //Получение измерений вычисляемого куба

    CalCubeDims := Cube.Dimensions;

    For i := 0 To SourceDims.Count - 1 Do

        SourceDim := SourceDims.Item(i);

        //Если измерение уже имеется в вычисляемом кубе, то просто фиксируем его в
 кубе-источнике

        //Если
 отсутствует, то добавляем в вычисляемый куб и фиксируем

        If CalCubeDims.FindByKey((SourceDim.Dimension As IMetabaseObject).Key) <> Null Then

            SourceDim.Fixed := True;

        Else

            CalCubeDim := CalCubeDims.Add(SourceDim.Dimension);

            SourceDim.Fixed := True;

            CalCubeDim.Fixed := True;

        End If;

    End For;

    MObj.Save;

End Sub UserProc;


При выполнении примера в источники данных вычисляемого куба будет добавлен
 куб с идентификатором «Cube_1». Все измерения нового источника данных
 будут добавлены в куб назначения и зафиксированы.


См. также:


[ICalculatedCubeDimension](ICalculatedCubeDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
