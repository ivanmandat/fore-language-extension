# Создание виртуального куба

Создание виртуального куба
-


# Создание виртуального куба


Рассмотрим пример создания виртуального куба с использованием языка
 Fore. Для выполнения примера необходимо
 наличие в репозитории двух кубов с идентификаторами «Cube_1» и «Cube_2».
 Каждый куб построен на собственном измерении фактов с идентификаторами
 «FACTS1» и «FACTS2» соответственно.


Указанный ниже пример создает в корневой папке репозитория новый объект
 - Виртуальный куб и производит настройку его параметров: фиксируются измерения
 фактов.


Для выполнения примеров добавьте ссылки на системные сборки: Cubes,
 Dimensions, Metabase.


## Пример


			Sub CreateViewCube;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    VCube: IVirtualCube;

    VCubeSources: IVirtualCubeSources;

    CubeModel: ICubeModel;

    CubeDest: ICubeModelDestination;

    VSource1, VSource2: IVirtualCubeSource;

    FixInfo: ICubeDimensionFixInfo;

    Fix: ICubeDimensionFix;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_VIRTUALCUBE;

    CrInfo.Id := "New_Virt_Cube";

    CrInfo.Name := "Новый виртуальный куб";

    CrInfo.Parent := MB.Root;

    MObj := MB.CreateObject(CrInfo).Edit;

    VCube := MObj As IVirtualCube;

    VCubeSources := VCube.Sources;

    //Добавляем первый куб в источники данных

    CubeModel := Mb.ItemById("Cube_1").Bind As ICubeModel;

    CubeDest := CubeModel.Destinations.DefaultDestination;

    VSource1 := VCubeSources.Add(CubeDest);

    //Добавляем второй куб в источники данных

    CubeModel := Mb.ItemById("Cube_2").Bind As ICubeModel;

    CubeDest := CubeModel.Destinations.DefaultDestination;

    VSource2 := VCubeSources.Add(CubeDest);

    //Фиксация элементов в измерениях фактов кубов-источников

    FixInfo := VSource1.FixInfo;

    For Each Fix In FixInfo Do

        If ((Fix.Dimension As IMetabaseObject).Id = "FACTS1") Then

            Fix.Fixed := True;

            Fix.Selection.SelectAll;

        End If;

    End For;

    FixInfo := VSource2.FixInfo;

    For Each Fix In FixInfo Do

        If ((Fix.Dimension As IMetabaseObject).Id = "FACTS2") Then

            Fix.Fixed := True;

            Fix.Selection.SelectAll;

        End If;

    End For;

    MObj.Save;

End Sub CreateViewCube;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
