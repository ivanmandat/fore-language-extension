# IVirtualCube.Compounds

IVirtualCube.Compounds
-


# IVirtualCube.Compounds


## Синтаксис


Compounds: [IVirtualCubeCompounds](../IVirtualCubeCompounds/IVirtualCubeCompounds.htm);


## Описание


Свойство Compounds возвращает
 коллекцию составных структур виртуального куба.


## Комментарии


В результатах вычисления виртуального куба составные структуры будут
 спроецированы в составные справочники. Для получения результатов вычисления
 куба используйте интерфейс [ICubeExecuteResult](../ICubeExecuteResult/ICubeExecuteResult.htm).
 Для работы с составными справочниками используйте [ICompoundDimension](KeDims.chm::/interface/ICompoundDimension/ICompoundDimension.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификаторами «FC_FIRST» и «FC_SECOND». Также необходимо
 добавить ссылки на системные сборки «Metabase», «Cubes».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        Ci: IMetabaseObjectCreateInfo;

        VirtCube: IVirtualCube;

        SourceInst: ICubeInstance;

        Dest: ICubeInstanceDestination;

        VirtCompounds: IVirtualCubeCompounds;

        VCompound: IVirtualCubeCompound;

        i: Integer;

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

        VirtCube.Sources.Add(Dest.DestinationModel);

    // Сохраняем виртуальный куб

        (VirtCube As IMetabaseObject).Save;

    // Выводим информацию о составных справочниках

        VirtCompounds := VirtCube.Compounds;

        For i := 0 To VirtCompounds.Count - 1 Do

            VCompound := VirtCompounds.Item(i);

            Debug.WriteLine(i.ToString + "- Составной справочник: ");

            Select Case VCompound.Predefined

                Case VirtualCubeCompoundPredefinedType.Custom: Debug.WriteLine("    пользовательское");

                Case VirtualCubeCompoundPredefinedType.Fact: Debug.WriteLine("    факты");

                Case VirtualCubeCompoundPredefinedType.Calendar: Debug.WriteLine("    календарь");

                Case VirtualCubeCompoundPredefinedType.Scenario: Debug.WriteLine("    сценарии");

            End Select;

            Debug.WriteLine("    активно: " + VCompound.Active.ToString);

            Debug.WriteLine("    идентификатор измерения: " + (VCompound.Dimension As IMetabaseObject).Id);

        End For;

    End Sub UserProc;


После выполнения примера будет создан виртуальный куб на основе двух
 баз данных временных рядов. В окно консоли будет выведена информация о
 составных справочниках виртуального куба.


См. также:


[IVirtualCube](IVirtualCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
