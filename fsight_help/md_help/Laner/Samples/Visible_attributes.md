# Настройка отображаемых атрибутов и всплывающей подсказки

Настройка отображаемых атрибутов и всплывающей подсказки
-


# Настройка отображаемых атрибутов и всплывающей подсказки


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором «OBJ123», построенной на базе данных временных
 рядов, содержащей атрибут с идентификатором «COUNTRY»и атрибут наблюдения
 с идентификатором «DT». В приведенных ниже примерах данный атрибут будет
 отображен в таблице рабочей книги. Кроме того, для рядов рабочей книги
 будет настроена всплывающая подсказка.


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

    MObj: IMetabaseObject;

    Exp: IEaxAnalyzer;

    WB: ILaner;

    TSDB: IRubricator;

    Attr: IMetaAttributes;

    WBAttr: ILanerAttributes;

Begin

    MB := MetabaseClass.Active;

    //Открываем рабочую книгу на редактирование

    MObj := MB.ItemById("OBJ123").Edit;

    Exp := MObj As IEaxAnalyzer;

    WB :=  Exp.Laner;

    WB.BeginUpdate;

    TSDB := WB.RubricatorInstance.Rubricator;

    Attr := TSDB.Facts.Attributes;

    WBAttr := WB.Attributes;

    //Добавляем атрибут COUNTRY в список отображаемых атрибутов рабочей книги

    WBAttr.Add(Attr.FindById("COUNTRY"));

    //Устанавливаем атрибут наблюдения с идентификатором DT в качестве всплывающей подсказки для значений ряда

    WB.ObservationAttributeInComment := "DT";

    WB.EndUpdate;

    MObj.Save;

End Sub UserProc;


После выполнения примера в таблице рабочей книги будет отображен атрибут
 с идентификтаором «COUNRY». Для всех рядов рабочей книги будет отображаться
 всплывающая подсказка с датой последнего обновления ряда.


См. также:


[Примеры](Laner_Samples.htm)
 | [ILanerSerie](../Interface/ILanerSerie/ILanerSerie.htm) |
 [ILanerCalculateSerie](../Interface/ILanerCalculateSerie/ILanerCalculateSerie.htm)
 | [ILanerAttributes](../Interface/ILanerAttributes/ILanerAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
