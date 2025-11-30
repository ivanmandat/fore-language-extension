# ICubeModelAlternateSource.AddDimension

ICubeModelAlternateSource.AddDimension
-


# ICubeModelAlternateSource.AddDimension


## Синтаксис


AddDimension(Value: [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm));


## Параметры


Value. Измерение альтернативного
 куба, которое необходимо добавить в список.


## Описание


Метод AddDimension осуществляет
 добавление измерения альтернативного куба в список измерений, по элементам
 которых будет производиться отбор данных.


## Комментарии


По умолчанию в списке отсутствуют измерения. При этом загрузка данных
 определяется настройками альтернативного куба. Если свойству [UseExecute](ICubeModelAlternateSource.UseExecute.htm)
 установлено значение True, то
 все данные будут загружаться из альтернативного куба, иначе данные будут
 загружаться из источника исходного куба.


Если в список добавлены какие-либо измерения, то при открытии исходного
 куба будет осуществляться проверка наличия данных в альтернативном кубе
 по каждой точке всех добавленных измерений. Если по какой-либо точке одного
 измерения имеются данные, то по всем координатам в которые входит данная
 точка, данные будут загружены из альтернативного куба. По всем точкам,
 для которых отсутствуют данные в альтернативном кубе, будет осуществляться
 загрузка из источника исходного куба.


Примечание.
 Данный механизм поддерживается только для стандартных кубов.


## Пример


Для выполнения примера предполагается наличие в репозитории двух стандартных
 кубов:


	- куб с идентификатором Cube_1
	 - исходный куб, к которому будет подключен альтернативный;


	- куб с идентификатором Cube_2
	 - куб, которой будет использоваться как альтернативный.


Оба куба основаны на одинаковом наборе справочников. В каждом кубе имеется
 календарное измерение.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICubeModel;

    AltCube: ICubeModelAlternateSource;

    Dims: ICubeModelDimensions;

    Dim: IDimensionModel;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("Cube_1").Edit As ICubeModel;

    AltCube := Cube.Destinations.DefaultDestination.AlternateSource;

    AltCube.Source := (MB.ItemById("Cube_2").Bind As ICubeModel).Destinations.DefaultDestination;

    AltCube.AutoSaveToStorage := False;

    AltCube.UseExecute := True;

    AltCube.UseStorage := True;

    Dims := AltCube.Destination.Dimensions;

    For i := 0 To Dims.Count - 1 Do

        Dim := Dims.Item(i);

        If (Dim Is ICalendarDimension) Then

            AltCube.AddDimension(Dim);

            Break;

        End If;

    End For;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера куб Cube_1 будет настроен на использование
 альтернативного куба. В альтернативном кубе в список измерений, по координатам
 которых будет осуществляться поиск извлекаемых данных, будет включено
 календарное измерение.


При открытии куба Cube_1 из альтернативного куба будут загружен данные,
 имеющиеся на какую-либо дату календарного измерения. Для дат календарного
 измерения данные, отсутствующие в альтернативном кубе, будут загружены
 из источника данных куба Cube_1.


См. также:


[ICubeModelAlternateSource](ICubeModelAlternateSource.htm)
 | [ICubeModelAlternateSource.RemoveDimension](ICubeModelAlternateSource.RemoveDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
