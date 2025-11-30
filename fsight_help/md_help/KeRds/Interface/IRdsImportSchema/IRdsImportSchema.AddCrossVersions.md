# IRdsImportSchema.AddCrossVersions

IRdsImportSchema.AddCrossVersions
-


# IRdsImportSchema.AddCrossVersions


## Синтаксис


AddCrossVersions: Boolean;


## Описание


Свойство AddCrossVersions определяет
 признак добавления новых версий элемента, у которого период действия пересекается
 с периодами других версий этого элемента.


## Комментарии


Используется, если импорт осуществляется в версионный справочник НСИ
 при способах обновления «Добавлять новые
 (отсутствующие) элементы» или «Добавлять
 новые элементы и обновлять существующие».


Допустимые значения:


	- True. Добавлять новую
	 версию элемента и корректировать периоды действия у других версий
	 в соответствии с периодом новой версии;


	- False. Значение по умолчанию.
	 Не добавлять новую версию элемента, если период действия этой версии
	 пересекается с периодами других версий элемента.


## Пример


Для выполнения примера предполагается наличие в репозитории версионного
 справочника НСИ с идентификатором NSI_DICT, в котором содержится схема
 импорта с идентификатором IMPORTSCHEMA. Источником схемы импорта является
 таблица с полями KEY, NAME, INDATE, OUTDATE, VERSION, связанными с соответствующими
 атрибутами справочника НСИ в настройках схемы импорта. В схеме импорта
 должен быть выбран способ обновления «Добавлять
 новые элементы и обновлять существующие». Добавление версий осуществляется
 при одинаковом значении атрибута KEY и разном значении атрибута VERSION.


Добавьте ссылки на системные
 сборки: Metabase, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Obj: IMetabaseObject;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Schema: IRdsImportSchema;

	    Attrs: IRdsAttributes;

	    Elements: IRdsDictionaryElements;

	    Hist: IRdsDictionaryElementHistory;

	    InDate, OutDate, Name, i, j: Integer;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим версионный справочник НСИ

	    Obj := MB.ItemById("NSI_DICT").Edit;

	    Dict := Obj As IRdsDictionary;

	    // Получим данные справочника НСИ

	    DictInst := Dict.Open(Null) As IRdsDictionaryInstance;

	    // Получим коллекцию атрибутов

	    Attrs := Dict.Attributes;

	    // Получим ключ атрибута «Дата начала»

	    InDate := Attrs.InDate.Key;

	    // Получим ключ атрибута «Дата окончания»

	    OutDate := Attrs.OutDate.Key;

	    // Получим ключ атрибута «Наименование»

	    Name := Attrs.Name.Key;

	    // Получим коллекцию элементов справочника

	    Elements := DictInst.Elements;

	    // Выведем в консоль
	 наименования элементов и значения их атрибутов до применения схемы
	 импорта

	    Debug.WriteLine("Версии элементов до применения схемы импорта");

	    For i := 1 To Elements.Count - 1 Do

	        Hist := Elements.Item(i).History;

	        Debug.WriteLine(Elements.Item(i).Name);

	            For j := 0 To Hist.Count - 1 Do

	                Debug.Write("Дата начала: " + Hist.Attribute(j, InDate));

	                Debug.Write(" Дата окончания: " + Hist.Attribute(j, OutDate));

	                Debug.WriteLine(" Значение на данном интервале: " + Hist.Attribute(j, Name));

	            End For;

	    End For;

	    // Получим схему импорта

	    Schema := Dict.ImportSchemas.FindById("IMPORTSCHEMA");

	    // Определим признак добавления новых версий элемента с пересекающимися периодами

	    Schema.AddCrossVersions := True;

	    // Импортируем данные из схемы импорта

	    DictInst.ImportData(Schema);

	    // Выведем в консоль
	 наименования элементов и значения их атрибутов после применения схемы
	 импорта

	    Debug.WriteLine("Версии элементов после применения схемы импорта");

	    For i := 1 To Elements.Count - 1 Do

	        Hist := Elements.Item(i).History;

	        Debug.WriteLine(Elements.Item(i).Name);

	            For j := 0 To Hist.Count - 1 Do

	                Debug.Write("Дата начала: " + Hist.Attribute(j, InDate));

	                Debug.Write(" Дата окончания: " + Hist.Attribute(j, OutDate));

	                Debug.WriteLine(" Значение на данном интервале: " + Hist.Attribute(j, Name));

	            End For;

	    End For;

	    // Сохраним изменения

	    Obj.Save;

	End Sub UserProc;


В результате выполнения примера для элементов справочника НСИ будут
 добавлены новые версии и в консоль будет выведена информация о версиях
 элементов до и после применения схемы импорта. Например:


Версии элементов до применения схемы импорта


Элемент 1


Дата начала: 25.07.2024 Дата окончания: 30.07.2024
 Значение на данном интервале: Элемент 1


Версии элементов после применения схемы импорта


Элемент 1


Дата начала: 25.07.2024 Дата окончания: 27.07.2024
 Значение на данном интервале: Элемент 1


Дата начала: 29.07.2024 Дата окончания: 30.07.2024
 Значение на данном интервале: Элемент 2


Дата начала: 27.07.2024 Дата окончания: 29.07.2024
 Значение на данном интервале: Элемент 3


См. также:


[IRdsImportSchema](IRdsImportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
