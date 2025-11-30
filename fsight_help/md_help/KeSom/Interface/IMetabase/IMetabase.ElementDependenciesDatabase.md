# IMetabase.ElementDependenciesDatabase

IMetabase.ElementDependenciesDatabase
-


# IMetabase.ElementDependenciesDatabase


## Синтаксис


		ElementDependenciesDatabase: [IMbElementDependenciesDatabase](../IMbElementDependenciesDatabase/IMbElementDependenciesDatabase.htm);


## Описание


Свойство ElementDependenciesDatabase
 возвращает объект, предназначенный для работы с зависимостями объектов
 от элементов справочников НСИ.


## Комментарии


Для проверки возможности работы с зависимостями используйте свойство
 [IMbElementDependenciesDatabase.Active](../IMbElementDependenciesDatabase/IMbElementDependenciesDatabase.Active.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «Report_1». Данный отчет использует какие-либо
 источники данных, основанные на справочниках НСИ. Для отчета и справочников
 включено отслеживание зависимостей от элементов справочника НСИ.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    DepDB: IMbElementDependenciesDatabase;

		    Template: IMbElementDependencyTemplate;

		    Depends: IMbElementDependencies;

		    Depend: IMbElementDependency;

		    Dict: IRdsDictionary;

		    Elements: IRdsDictionaryElements;

		Begin

		    MB := MetabaseClass.Active;

		    DepDB := MB.ElementDependenciesDatabase;

		    Template := New MbElementDependencyTemplateClass.CreateByObject(MB.GetObjectKeyById("Report_1"));

		    Depends := DepDB.Select_(Template);

		    Debug.WriteLine("Зависимости объекта");

		    For Each Depend In Depends Do

		        Dict := Depend.Dictionary.Bind As IRdsDictionary;

		        Debug.Write("Справочник: " + Depend.Dictionary.Name);

		        Elements := Dict.Open(Null).Elements;

		        Debug.WriteLine("; Элемент: " + Elements.Name(Depend.ElementKey));

		    End For;

		End Sub UserProc;


При выполнении примера будет получена информация о зависимостях регламентного
 отчета от элементов справочников НСИ. Наименования справочников и элементов
 будут выведены в консоль среды разработки.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
