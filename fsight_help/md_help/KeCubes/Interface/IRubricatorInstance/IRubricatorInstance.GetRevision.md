# IRubricatorInstance.GetRevision

IRubricatorInstance.GetRevision
-


# IRubricatorInstance.GetRevision


## Синтаксис


GetRevision(Revision: Integer; [Options: [DictionaryGetDataOptions](KeRds.chm::/Enums/DictionaryGetDataOptions.htm)
 = 0]): [IRubricatorRevision](../IRubricatorRevision/IRubricatorRevision.htm);


## Параметры


Revision. Ключ ревизии;


Options. Параметр
 получения данных.


## Описание


Метод GetRevision возвращает
 ревизию по ключу.


## Комментарии


Если в качестве параметра Revision передать
 значение Integer.MaxValue, то
 для версионных баз данных временных рядов метод вернёт последнюю ревизию,
 а для неверсионных - ревизию, соответствующую актуальным данным.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    DictIn: IMetaDictionaryInstance;

	    Record: IMetaDataMemberRecord;

	    TSKey: Integer;

	    RevDim: IDimInstance;

	    DimAtt: IDimAttributesInstance;

	    DimA: IDimAttributeInstance;

	    RubrRev: IRubricatorRevision;

	    i: integer;

	Begin

	    // Получаем репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем базу данных временных рядов

	    RubDesc := MB.ItemById("TSDB");

	    // Получаем открытый экземпляр базы данных временных рядов

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    // Получаем данные справочника временных рядов

	    DictIn := RubrIn.GetDictionary(RubricatorDictionary.Facts);

	    // Получаем данные первого временного ряда в справочнике

	    Record := DictIn.GetData(1).Record;

	    // Получаем ключ первого временного ряда

	    TSKey := Record.Members.FindById("KEY").Value;

	    // Получаем данные справочника ревизий для первого временного ряда на определенную дату

	    RevDim := RubrIn.RevisionsDimensionPoint(TSKey, DateTime.Parse("01.01.2002 00:00:00"));

	    // Получаем атрибуты справочника ревизий

	    DimAtt := RevDim.Attributes;

	    // Получаем атрибут «KEY»

	    DimA := DimAtt.FindById("KEY");

	    // Получаем ключ ревизии

	    i := DimA.Attribute.Key;

	    // Получаем данные ревизии с указанным ключом

	    RubrRev := RubrIn.GetRevision(i, DictionaryGetDataOptions.EditExisting);

	    // Выводим наименование ревизии в окно консоли

	    Debug.WriteLine(RubrRev.Name);

	End Sub UserProc;


В результате выполнения примера на редактирование будет открыта ревизия,
 в которую вошли данные первого временного ряда на первое января 2002 года.
 В окно консоли будет выведено наименование ревизии.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
