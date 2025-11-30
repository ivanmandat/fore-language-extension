# ILanerSeries.AddGroupSerie

ILanerSeries.AddGroupSerie
-


# ILanerSeries.AddGroupSerie


## Синтаксис


AddGroupSerie(

    Rubricator: [IRubricator](KeCubes.chm::/Interface/IRubricator/IRubricator.htm);

    MetaAttributeValues: [ILanerMetaAttributeValueList](../ILanerMetaAttributeValueList/ILanerMetaAttributeValueList.htm);

    [RevisionKey: Integer = -1;]

    [Index: Integer = -1]

): [ILanerGroupSerie](../ILanerGroupSerie/ILanerGroupSerie.htm);


## Параметры


Rubricator. База данных временных
 рядов;


MetaAttributeValues. Набор
 атрибутов;


RevisionKey. Ключ ревизии,
 данные которой должны отображаться;


Index. Индекс позиции, в которую
 необходимо добавить группу рядов.


## Описание


Метод AddGroupSerie добавляет
 группу рядов.


## Комментарии


Группа будет формироваться из рядов, соответствующих набору атрибутов,
 заданных параметром MetaAttributeValues.


Если параметр RevisionKey имеет
 значение «-1», то отображаются данные по состоянию на последнюю ревизию.


Если база данных временных рядов неверсионная, то значение параметра
 RevisionKey игнорируется. Признак
 версионности возвращает свойство [IRubricator.KeepHistory](KeCubes.chm::/Interface/IRubricator/IRubricator.KeepHistory.htm).


Если параметр Index имеет значение
 «-1», то группа рядов добавляется в конец коллекции рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_SERIES, содержащей несколько рядов. Источником
 данных для рабочей книги должна быть база данных временных рядов, содержащая
 обязательный атрибут рядов с идентификатором INDICATOR.


Добавьте ссылки на системные сборки: Cubes, Express, Laner, Metabase,
 Rds.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    Rub: IRubricator;

	    MetaAtt: IMetaAttribute;

	    AttrVals: ILanerMetaAttributeValues;

	    AttrVal: ILanerMetaAttributeValue;

	    GroupSer: ILanerGroupSerie;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SERIES").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем ряды рабочей книги

	    Series := Laner.Series;

	    // Получаем базу данных временных рядов, являющуюся источником данных для рабочей книги

	    Rub := Laner.RubricatorInstance.Rubricator;

	    // Создаем коллекцию значений атрибутов

	    AttrVals := Series.CreateMetaAttributeValues;

	    // Получаем атрибут ряда с идентификатором
	 «INDICATOR»

	    MetaAtt := Rub.Facts.Attributes.FindById("INDICATOR");

	    // Добавляем атрибут в коллекцию

	    AttrVal := AttrVals.Add(MetaAtt);

	    // Задаем значение атрибута

	    AttrVal.Value := 765;

	    // Добавляем группу рядов в начало рабочей книги

	    GroupSer := Series.AddGroupSerie(Rub, AttrVals, -1, 1);

	    // Раскрываем группу

	    GroupSer.Expanded := True;

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


После выполнения примера в рабочую книгу будет добавлена новая группа
 рядов. В данную группу войдут ряды, у которых значение атрибута «INDICATOR»
 равняется «765». Группа будет развернута и будет располагаться после первого
 ряда рабочей книги.


См. также:


[ILanerSeries](ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
