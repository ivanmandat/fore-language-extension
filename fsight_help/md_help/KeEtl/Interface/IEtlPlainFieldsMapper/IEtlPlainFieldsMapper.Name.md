# IEtlPlainFieldsMapper.Name

IEtlPlainFieldsMapper.Name
-


# IEtlPlainFieldsMapper.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 связи между полями выхода и входа.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Object: IEtlPlainDataJoin;

	    Mapper: IEtlPlainFieldsMapper;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Object := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Mapper := Object.Mapper;

	    s := Mapper.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 связи межу полями выхода и входов. Объект задачи ETL - Соединение. Объект
 репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainFieldsMapper](IEtlPlainFieldsMapper.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
