# Объединение рядов в группу

Объединение рядов в группу
-


# Объединение рядов в группу


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором «OBJ123», в которой будут сгруппированы ряды.
 База данных, на которой построена рабочая книга, должна содержать атрибут
 с идентификатором «TERRID», среди значений которого должно быть значение
 1.


Подключите ссылки на следующие системные сборки:


	- Cubes;


	- Express;


	- Laner;


	- Metabase;


	- Rds.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Exp: IEaxAnalyzer;

    WB: ILaner;

    TSDB: IRubricator;

    MetaAtt: IMetaAttribute;

    AttrVals: ILanerMetaAttributeValues;

    AttrVal: ILanerMetaAttributeValue;

    GroupSer: ILanerGroupSerie;

Begin

    MB := MetabaseClass.Active;

    //Открываем рабочую книгу на редактирование

    MObj := MB.ItemById("OBJ123").Edit;

    Exp := MObj As IEaxAnalyzer;

    //Возвращаем рабочую книгу

    WB := Exp.Laner;

    WB.BeginUpdate;

    //Возвращаем базу данных, на основе которой построена рабочая книга

    TSDB := WB.RubricatorInstance.Rubricator;

    //Создаем коллекцию значений атрибутов

    AttrVals := WB.Series.CreateMetaAttributeValues;

    //Получаем из базы данных временных рядов атрибут с указанным идентификатором

    MetaAtt := TSDB.Facts.Attributes.FindById("TERRID");

    //Добавляем атрибут в коллекцию атрибутов

    AttrVal := AttrVals.Add(MetaAtt);

    //Устанавливаем значение атрибута

    AttrVal.Value := 1;

    //Добавляем в рабочую книгу группу рядов, у которых значение атрибута TERRID равняется «1»

    GroupSer := WB.Series.AddGroupSerie(TSDB, AttrVals);

    //Раскрываем группу рядов

    GroupSer.Expanded := True;

    WB.EndUpdate;

    MObj.Save;

End Sub UserProc;


После выполнения примера в рабочую книгу будет добавлена новая группа
 рядов. В данную группу войдут ряды, у которых значение атрибута «COUNTRY»
 равняется «512». Группа будет развернута.


См. также:


[Примеры](Laner_Samples.htm)
 | [ILaner](../Interface/ILaner/ILaner.htm) | [ILanerMetaAttributeValue](../Interface/ILanerMetaAttributeValue/ILanerMetaAttributeValue.htm)
 | [ILanerMetaAttributeValues](../Interface/ILanerMetaAttributeValues/ILanerMetaAttributeValues.htm)
 | [ILanerGroupSerie](../Interface/ILanerGroupSerie/ILanerGroupSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
