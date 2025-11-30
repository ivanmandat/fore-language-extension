# IVirtualCubeDimensionFix.Compound

IVirtualCubeDimensionFix.Compound
-


# IVirtualCubeDimensionFix.Compound


## Синтаксис


Compound: [IVirtualCubeCompound](../IVirtualCubeCompound/IVirtualCubeCompound.htm);


## Описание


Свойство Compound определяет
 составную структуру измерения.


## Комментарии


Если фиксированное измерение виртуального куба не содержит составных
 структур, то Compound возвращает
 значение Null.


## Пример


Для выполнения примера в репозитории предполагается наличие баз данных
 временных рядов с идентификаторами FC_FIRST и FC_SECOND. Также необходимо
 добавить ссылки на системные сборки Metabase, Cubes.


			Sub UserProc;

Var

    Mb: IMetabase;

    Ci: IMetabaseObjectCreateInfo;

    VirtCube: IVirtualCube;

    SourceInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    VirtSour: IVirtualCubeSource;

    i: Integer;

    DimFix: IVirtualCubeDimensionFix;

Begin

    Mb := MetabaseClass.Active;

    Ci := Mb.CreateCreateInfo;

    Ci.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

    Ci.Permanent := False;

    // Создаем виртуальный куб

    Ci.ClassId := MetabaseObjectClass.KE_CLASS_VIRTUALCUBE;

    VirtCube := Mb.CreateObject(Ci).Edit As IVirtualCube;

    // Добавляем в виртуальный куб 1-ю базу
 данных временных рядов

    SourceInst := Mb.ItemById("FC_FIRST").Open(Null) As ICubeInstance;

    Dest := SourceInst.Destinations.DefaultDestination;

    VirtCube.Sources.Add(Dest.DestinationModel);

    // Добавляем в виртуальный куб 2-ю базу
 данных временных рядов

    SourceInst := Mb.ItemById("FC_SECOND").Open(Null) As ICubeInstance;

    Dest := SourceInst.Destinations.DefaultDestination;

    VirtSour := VirtCube.Sources.Add(Dest.DestinationModel);

    For i := 0 To VirtSour.FixInfo.Count - 1 Do

        DimFix := VirtSour.FixInfo.Item(i) As IVirtualCubeDimensionFix;

       DimFix.Pinned := True;

        // Сохраняем виртуальный куб}

        (VirtCube As IMetabaseObject).Save;

        // Выводим информацию о составном справочнике

        Debug.WriteLine("Справочник: ");

        Select Case DimFix.PredefinedCompound

            Case VirtualCubeCompoundPredefinedType.Custom: Debug.WriteLine("    пользовательское");

            Case VirtualCubeCompoundPredefinedType.Fact: Debug.WriteLine("    факты");

            Case VirtualCubeCompoundPredefinedType.Calendar: Debug.WriteLine("    календарь");

            Case VirtualCubeCompoundPredefinedType.Scenario: Debug.WriteLine("    сценарии");

        End Select;

        Debug.WriteLine("    составной: " + (DimFix.Compound <> Null).ToString);

    End For;

End Sub UserProc;


После выполнения примера будет создан виртуальный куб на основе двух
 баз данных временных рядов. В окно консоли будет выведена информация о
 фиксированных измерениях второго источника виртуального куба.


См. также:


[IVirtualCubeDimensionFix](IVirtualCubeDimensionFix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
