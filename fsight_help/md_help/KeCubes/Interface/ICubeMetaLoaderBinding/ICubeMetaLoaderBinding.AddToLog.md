# ICubeMetaLoaderBinding.AddToLog

ICubeMetaLoaderBinding.AddToLog
-


# ICubeMetaLoaderBinding.AddToLog


## Синтаксис


AddToLog: Boolean;


## Описание


Свойство AddToLog определяет,
 включать ли значение поля привязки в журнал ошибок.


## Комментарии


Допустимые значения:


	- True. Включать значение
	 поля в журнал;


	- False. Значение по умолчанию.
	 Не включать значение поля в журнал.


В журал могут быть включены поля, привязки которых имеют тип [CubeMetaLoaderBindingType.Unit](../../Enums/CubeMetaLoaderBindingType.htm)
 или [CubeMetaLoaderBindingType.Attribute](../../Enums/CubeMetaLoaderBindingType.htm)
 (свойство [ICubeMetaLoaderBinding.BindingType](ICubeMetaLoaderBinding.BindingType.htm)).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «RUBRICATOR». База содержит объект импорта
 с идентификатором «OBJ_IMPORT», импортирующий данные из любого источника,
 кроме базы данных временных рядов. Добавьте ссылки на системные сборки
 «Metabase» и «Cubes».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        RubrDescr: IMetabaseObjectDescriptor;

        ImpRequestDefDescr: IMetabaseObjectDescriptor;

        ImpRequestDef: IImportRequestDefinition;

        ImpProvParams: IImportRequestProviderParams;

        ImpBindings: ICubeMetaLoaderBindings;

        ImpBinding: ICubeMetaLoaderBinding;

        i: Integer;

        LastBinding: Integer;

        Loader: ICubeMetaLoader;

        Log: ICubeMetaLoaderLog;

        Entry: ICubeMetaLoaderLogEntry;

        Count: Integer;

        key: Integer;

    Begin

        Mb := MetabaseClass.Active;

        RubrDescr := Mb.ItemById("FC_FOR_IMPORT");

        ImpRequestDefDescr := Mb.ItemByIdNamespace("OBJ_IMPORT", RubrDescr.Key);

        ImpRequestDef := ImpRequestDefDescr.Edit As IImportRequestDefinition;

        ImpProvParams := ImpRequestDef.ProviderParams;

        ImpBindings := ImpProvParams.Bindings;

        For i := 0 To ImpBindings.Count - 1 Do

            ImpBinding := ImpBindings.Item(i);

            If (ImpBinding.BindingType = CubeMetaLoaderBindingType.Attribute) Or (ImpBinding.BindingType = CubeMetaLoaderBindingType.Unit) Then

                ImpBinding.AddToLog := True;

                LastBinding := i;

            End If;

        End For;

        (ImpRequestDef As IMetabaseObject).Save;

        Loader := ImpProvParams As ICubeMetaLoader;

        Loader.LoadData;

        Log := Loader.Log;

        For Each key In Loader.InvalidFactors Do

            Debug.WriteLine("Ошибка при загрузке показателя с ключом: " + key.ToString);

        End For;

        Count := Log.Count;

        Debug.WriteLine("Всего записей в журнале: " + Count.ToString);

        For i := 0 To Count - 1 Do

            Entry := Log.Item(i);

            Debug.WriteLine(i.ToString + " : "

            + Entry.DateBegin.ToString + ", "

            + Entry.RecordNumber.ToString + ", "

            + Entry.Field + ", "

            + "Extra Field = " + Entry.ExtraField(LastBinding) + ", "

            + Entry.ErrorMessage);

            If i >= 10 - 1 Then

                Break;

            End If;

        End For;

    End Sub UserProc;


После выполнения примера все поля для привязок типа атрибут и единица
 измерения будут включены в журнал ошибок. Затем будет произведен импорт
 данных. Первые десять строк журнала импорта данных, содержащего значения
 поля последней привязки, будут выведены в окно консоли.


См. также:


[ICubeMetaLoaderBinding](ICubeMetaLoaderBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
