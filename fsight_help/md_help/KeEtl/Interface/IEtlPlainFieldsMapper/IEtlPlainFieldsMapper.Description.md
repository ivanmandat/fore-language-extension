# IEtlPlainFieldsMapper.Description

IEtlPlainFieldsMapper.Description
-


# IEtlPlainFieldsMapper.Description


## Синтаксис


Description: String;


## Описание


Свойство Description определяет
 описание связи между полями.


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

	    s := Mapper.Description;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться описание
 связи между полями выхода и входов. Объект задачи ETL - Соединение. Объект
 репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainFieldsMapper](IEtlPlainFieldsMapper.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
