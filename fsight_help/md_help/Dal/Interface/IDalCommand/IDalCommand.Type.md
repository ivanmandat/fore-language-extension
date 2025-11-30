# IDalCommand.Type

IDalCommand.Type
-


# IDalCommand.Type


## Синтаксис


Type: [DalCommandType](../../Enums/DalCommandType.htm);


## Описание


Свойство Type определяет тип
 выполняемой команды.


## Комментарии


В виду имеющихся особенностей реализации при работе с СУБД Oracle значение
 свойства [SQL](IDalCommand.SQL.htm) должно быть определено
 перед установкой значения свойству Type.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором DB. На сервере, на который настроена данная база данных,
 имеется функция «Func_1», вычисляющая какое-либо значение.


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub Main;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    v: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("");

	    Com.SQL := "Func_1";

	    Com.Type := DalCommandType.StoredProcedure;

	    Com.Params.Add("Param").Direction := DalParamDirection.ReturnValue;

	    Com.Execute;

	    v := Com.Params.Item(0).Value;

	    Com.Close;

	End Sub Main;


При выполнении примера будет создана команда, выполняющая хранимые на
 сервере функции или процедуры. Для команды будет создан один параметр,
 в который возвращается результат выполнения функции. После выполнения
 команды в переменной v будет содержаться результат выполнения указанной
 функции.


См. также:


[IDalCommand](IDalCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
