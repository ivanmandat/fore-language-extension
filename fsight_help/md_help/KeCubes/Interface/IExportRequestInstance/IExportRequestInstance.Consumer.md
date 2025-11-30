# IExportRequestInstance.Consumer

IExportRequestInstance.Consumer
-


# IExportRequestInstance.Consumer


## Синтаксис


Consumer: Object;


## Описание


Свойство Consumer возвращает
 объект, являющийся приёмником данных.


## Комментарии


Для работы с возвращенным объектом приведите его к одному из интерфейсов
 [приёмников
 данных](KeDt.chm::/KeDt_Introduction.htm).


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором FC_COMM, содержащим объект экспорта в текстовый
 файл с идентификатором EXP_OBJ.


Добавьте ссылки на системные сборки: Cubes, Dt, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    RubKey: Integer;

	    Inst: IExportRequestInstance;

	    Consumer: IDtTextConsumer;

	Begin

	    mb := MetabaseClass.Active;

	    RubKey := mb.GetObjectKeyById("FC_COMM");

	    Inst := mb.ItemByIdNamespace("EXP_OBJ", RubKey).Open(Null) As IExportRequestInstance;

	    Consumer := Inst.Consumer As IDtTextConsumer;

	    Debug.WriteLine(Consumer.File);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 текстового файла, используемого объектом экспорта.


См. также:


[IExportRequestInstance](IExportRequestInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
