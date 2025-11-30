# IImportRequestInstance.Provider

IImportRequestInstance.Provider
-


# IImportRequestInstance.Provider


## Синтаксис


Provider: Object;


## Описание


Свойство Provider возвращает объект, являющийся источником данных.


## Комментарии


Для работы с возвращенным объектом приведите его к одному из интерфейсов [источников данных](KeDt.chm::/KeDt_Introduction.htm).


## Пример


Для выполнения примера предполагается наличие базы данных временных рядов с идентификатором «FC_COMM», содержащей объект импорта из текстового файла с идентификатором «IMP_OBJ». Добавьте ссылки на системные сборки «Metabase», «Cubes», «Dt».


			Sub UserProc;

Var

    mb: IMetabase;

    RubKey: Integer;

    Inst: IImportRequestInstance;

    Provider: IDtTextProvider;

Begin

    mb := MetabaseClass.Active;

    RubKey := mb.GetObjectKeyById("FC_COMM");

    Inst := mb.ItemByIdNamespace("IMP_OBJ", RubKey).Open(Null) As IImportRequestInstance;

    Provider := Inst.Provider As IDtTextProvider;

    Debug.WriteLine(Provider.File);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование текстового файла, используемого объектом импорта.


См. также:


[IImportRequestInstance](IImportRequestInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
