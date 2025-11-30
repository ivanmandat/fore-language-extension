# IEtlPlainFields.Fill

IEtlPlainFields.Fill
-


# IEtlPlainFields.Fill


## Синтаксис


Fill(Value: [IEtlPlainFields](IEtlPlainFields.htm));


## Параметры


Value.
 Список полей источника.


## Описание


Метод Fill осуществляет заполнение
 списка полей в соответствии со списком который передается в качестве параметра
 Value.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Input, Input1: IEtlPlainInput;

	    Fields, Fields1: IEtlPlainFields;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Input := Join.PlainInputs.Item(0);

	    Input1 := Join.PlainInputs.Item(1);

	    Fields := Input.Fields;

	    Fields1 := Input1.Fields;

	    Fields1.Fill(Fields);

	    Object.Save;

	End Sub UserProc;


После выполнения примера произойдет заполнение списка полей второго
 входа в соответствии со списком полей первого входа объекта задачи ETL.
 Тип объекта задачи ETL - Соединение. Объект репозитория имеет идентификатор
 ETL.


См. также:


[IEtlPlainFields](IEtlPlainFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
