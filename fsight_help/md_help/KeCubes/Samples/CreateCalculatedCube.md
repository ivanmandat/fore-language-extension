# Создание вычисляемого куба

Создание вычисляемого куба
-


# Создание вычисляемого куба


Рассмотрим пример создания вычисляемого куба с использованием языка
 Fore. Для создания куба необходимо
 наличие в репозитории следующих объектов:


	- Какой-либо куб с идентификатором «CUBE_SOURCE», который будет
	 выступать в качестве источника данных для создаваемого вычисляемого
	 куба;


	- Данный куб должен содержать в своей структуре календарное измерение
	 с идентификатором «CALENDAR».


Указанный ниже пример создает в корневой папке репозитория новый объект
 - Вычисляемый куб и производит настройку его параметров:


	- Задается источник данных;


	- В структуру вычисляемого куба переносятся все измерения из источника.
	 Календарное измерение фиксируется.


Для выполнения примеров добавьте ссылки на системные сборки: Cubes,
 Dimensions, Metabase.


## Пример


			Sub CreateCalculatedCube;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    CalcCube: ICalculatedCube;

    CubeModel: ICubeModel;

    CubeDest: ICubeModelDestination;

    CalcSource: ICalculatedCubeSource;

    SourceDim, CalcDim: ICalculatedCubeDimension;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_CALCCUBE;

    CrInfo.Id := "New_Calc_Cube";

    CrInfo.Name := "Новый вычисляемый куб";

    CrInfo.Parent := MB.Root;

    MObj := MB.CreateObject(CrInfo).Edit;

    CalcCube := MObj As ICalculatedCube;

    //Добавление источника, на базе значений которого будут производиться вычисления по формулам

    CubeModel := Mb.ItemById("CUBE_SOURCE").Bind As ICubeModel;

    CubeDest := CubeModel.Destinations.DefaultDestination;

    CalcSource := CalcCube.Sources.Add(CubeDest);

    //Добавляем измерения куба-источника в структуру вычисляемого куба

    For Each SourceDim In CalcSource.Dimensions Do

        CalcDim := CalcCube.Dimensions.Add(SourceDim.Dimension);

        If (SourceDim.Dimension As IMetabaseObject).Id = "CALENDAR" Then

            SourceDim.Fixed := True;

            CalcDim.Fixed := True;

        End If;

    End For;

    MObj.Save;

End Sub CreateCalculatedCube;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
