# Создание справочника НСИ

Создание справочника НСИ
-


# Создание справочника НСИ


Ниже приведён пример создания справочника НСИ на языке Fore.


Для выполнения примера в репозитории предполагается наличие папки с
 идентификатором RDS_FOLDER и базы данных с идентификатором DB.


## Пример


Добавьте ссылки на системные сборки: Db, Metabase, Rds.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Inf: IMetabaseObjectCreateInfo;

	    Desc: IMetabaseObjectDescriptor;

	    RdsDict: IRdsDictionary;

	Begin

	    Mb := MetabaseClass.Active;

	    Inf := Mb.CreateCreateInfo;

	    Inf.ClassId := MetabaseObjectClass.KE_CLASS_METADICTIONARYRDS;

	    Inf.Name := Inf.DefaultName;

	    Inf.Parent := Mb.ItemById("RDS_FOLDER");

	    Inf.KeepEdit := True;

	    Desc := Mb.CreateObject(Inf);

	    RdsDict := Desc As IRdsDictionary;

	    RdsDict.Database := Mb.ItemById("DB").Bind As IDatabase;

	    If RdsDict.Type = RdsDictionaryType.MetaDictionaryRds Then

	        Debug.WriteLine("Cоздан справочник НСИ:");

	        Debug.Indent;

	        Debug.WriteLine("- наименование: «" + Desc.Name + "»");

	        Debug.WriteLine("- идентификатор: «" + Desc.Id + "»");

	        Debug.WriteLine("- физическое имя таблицы, используемой для хранения данных: «" + RdsDict.TableName + "»");

	        Debug.Unindent;

	        (RdsDict As IMetabaseObject).Save;

	    End If;

	End Sub UserProc;


После выполнения примера в указанной папке будет создан новый справочник
 НСИ. Базовая информация о справочнике будет выведена в консоль среды разработки.


См. также:


[Примеры](KeRds_Sample.htm)
 | [IRdsDictionary](../Interface/IRdsDictionary/IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
