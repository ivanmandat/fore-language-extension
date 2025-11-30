# IEtlPlainIndex.PlainInputField

IEtlPlainIndex.PlainInputField
-


# IEtlPlainIndex.PlainInputField


## Синтаксис


PlainInputField(Field: Integer, Input: Integer):
 [IEtlPlainField](../IEtlPlainField/IEtlPlainField.htm);


## Параметры


Field. Позиция поля индекса;


Input. Индекс источника данных.


## Описание


Свойство PlainInputField определяет
 поле соответствующего источника данных, входящего в данный индекс.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Index: IEtlPlainIndex;

	    Field: IEtlPlainField;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Index := Join.Index;

	    Field := Index.PlainInputField(0,0);

	    s := Field.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 поля первого источника данных которому соответствует первая запись в поле
 индекса. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainIndex](IEtlPlainIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
