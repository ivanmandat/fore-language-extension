# IEtlPlainFieldsMapper.Map

IEtlPlainFieldsMapper.Map
-


# IEtlPlainFieldsMapper.Map


## Синтаксис


Map(Field: [IEtlPlainField](../IEtlPlainField/IEtlPlainField.htm)):
 [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Параметры


Field. Поле, для которого необходимо
 определить привязку.


## Описание


Свойство Map возвращает объект,
 содержащий формулу связи поля выхода с полями входа.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Object: IEtlPlainDataJoin;

	    Mapper: IEtlPlainFieldsMapper;

	    Map: IExpression;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Object := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Mapper := Object.Mapper;

	    Map := Mapper.Map(Object.PlainOutput.Fields.Item(0));

	End Sub UserProc;


После выполнения примера в переменной «Map» будет содержаться формула
 связи поля выхода с полями входа. Объект задачи ETL - Соединение. Объект
 репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainFieldsMapper](IEtlPlainFieldsMapper.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
