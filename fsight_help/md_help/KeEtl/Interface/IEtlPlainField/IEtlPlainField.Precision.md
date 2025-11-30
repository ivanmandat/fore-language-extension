# IEtlPlainField.Precision

IEtlPlainField.Precision
-


# IEtlPlainField.Precision


## Синтаксис


Precision: Integer;


## Описание


Свойство Precision определяет
 точность поля источника/приёмника. Под точностью понимается количество
 знаков после запятой. Свойство актуально только для вещественного типа
 данных.


## Пример


В рассматриваемом примере предполагается существование задачи ETL с
 размещённым на поле приёмником OleDb с идентификатором OLE_CONSUMER.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlConsumer: IEtlPlainDataConsumer;

	    Fields: IEtlPlainFields;

	    Field: IEtlPlainField;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("ETL").Edit;

	    EtlTask := MObj As IEtlTask;

	    EtlConsumer := EtlTask.FindById("OLE_CONSUMER") As IEtlPlainDataConsumer;

	    EtlConsumer := EtlConsumer.Edit;

	    Fields := EtlConsumer.PlainInput.Fields;

	    Field := Fields.Add;

	    Field.Name := "F_Float";

	    Field.DataType := DbDataType.Float;

	    Field.Size := 20;

	    Field.Precision := 8;

	    Field := Fields.Add;

	    Field.Name := "F_String";

	    Field.DataType := DbDataType.String;

	    Field.Size := 200;

	    EtlConsumer.Save;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для приёмника OleDB будут добавлены поля входа.


См. также:


[IEtlPlainField](IEtlPlainField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
