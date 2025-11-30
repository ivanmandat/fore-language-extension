# IMetabaseUpdateMandatoryAccess.Category

IMetabaseUpdateMandatoryAccess.Category
-


# IMetabaseUpdateMandatoryAccess.Category


## Синтаксис


Category: [IMetabaseUpdateSecurityCategory](../IMetabaseUpdateSecurityCategory/IMetabaseUpdateSecurityCategory.htm);


## Описание


Свойство Category возвращает категорию по индексу.


## Пример


Для выполнения примера добавьте ссылки на системные сборки «Metabase» и «Stat». Предполагается наличие файла обновления "D:\Update.pefx".


			Sub main;

Var

    Mb: IMetabase;

    Upd: IMetabaseUpdate;

Begin

    MB := MetabaseClass.Active;

    Upd := Mb.CreateUpdate;

    Upd.LoadFromFileNF("D:\Update.pefx");

    Upd.Prepare;

    updateMandatory(Upd);

    Upd.SaveAvailable("D:\Update.pefx");

End Sub main;


Sub updateMandatory (update: IMetabaseUpdate);

    Var

        muma: IMetabaseUpdateMandatoryAccess;

        musc: IMetabaseUpdateSecurityCategory;

        musl: IMetabaseUpdateSecurityLevel;

        i, j: integer;

        mma: IMetabaseMandatoryAccess;

        Mb: IMetabase;

    Begin

        Mb := MetabaseClass.Active;

        muma := update.MandatoryAccess;

        mma := Mb.Security.Policy.MandatoryAccess;

        debug.WriteLine("Включен ли Мандатный контроль в базе заказчика:  "+Mb.Security.Policy.MandatoryAccessControl.ToString);

        For i := 0 To muma.CategoryCount - 1 Do

            musc := muma.Category(i);

            If musc.Exists.ToString <> "True" Then

                debug.WriteLine("Необходимо добавление новой категории:  "+musc.Name);

            Else

            debug.WriteLine("Наименование категории в базе заказчика:  "+musc.Name);

            debug.WriteLine("Ключ категории в базе заказчика:  "+musc.Key.ToString);

            debug.WriteLine("Доступность категории в базе заказчика:  "+musc.IsValid.ToString);

            For j := 0 To musc.LevelCount - 1 Do

                musl := musc.Level(j);

                If musl.Exists.ToString <> "True" Then

                    debug.WriteLine("Необходимо добавление нового уровня категории:  "+musl.Name+" ("+musl.Category.Name+")");

                Else

                debug.WriteLine("Наименование уровня безопасности (категория) в базе заказчика:  "+musc.FindLevelByLabel(musl.Index).Name+" ("+musl.Category.Name+")");

                debug.WriteLine("Существование уровня безопасности в базе заказчика:  "+musc.Level(j).Exists.ToString+ " Метка уровня безопасности:  "+musl.CriticalityLabel.ToString);

                debug.WriteLine("Описание уровня безопасности в базе заказчика:  "+musl.Description);

                debug.WriteLine("Доступность уровня безопасности в базе заказчика:  "+musl.IsValid.ToString);

                End If;

            End For;

            End If;

        End For;

End Sub updateMandatory;


После выполнения примера в окне консоли появится информация об использовании мандатного контроля в базе, на которой запускается модуль, наличие соответствующих категорий и уровней из обновления в базе, на которой запускается модуль и информация по существующим категориям и уровням.


См. также:


[IMetabaseUpdateMandatoryAccess](IMetabaseUpdateMandatoryAccess.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
