# Использование запросов в пользовательских приложениях

Использование запросов в пользовательских приложениях
-


# Использование запросов в пользовательских приложениях


	Номер статьи: KB000016


## Общие сведения


	Связанные блоки:


		- [Fore](Fore.chm::/Fore_Title.htm)


		- объекты репозитория «[Запрос](UiNavObj.chm::/Query/Query.htm)»
		 и «[Процедура](UiNavObj.chm::/procedure/UiDb_relationa_procedure.htm)»


## Описание


	Есть несколько вариантов выполнения запросов к БД в пользовательском
	 приложении: через стандартные программные интерфейсы или через объекты
	 репозитория «[Запрос](UiNavObj.chm::/Query/Query.htm)» или
	 «[Процедура](UiNavObj.chm::/procedure/UiDb_relationa_procedure.htm)».


### Использование интерфейсов сборки Dal


	Первый вариант предполагает выполнение запроса через интерфейсы
	 сборки [Dal](dal.chm::/dal_title.htm).
	 Если используется сложный по структуре запрос, то данный метод имеет
	 ряд недостатков:


		- увеличивается трудоемкость редактирования запроса;


		- ухудшается читаемость кода пользовательского приложения.


	Рассмотрим пример выполнения параметрического запроса, которые добавляет
	 запись в какую-либо таблицу базы данных. Значения полей передаются
	 посредством входных параметров функции. Для выполнения примера предполагается
	 наличие в репозитории объекта «База данных» с идентификатором «OBJ_DB».
	 Результатом работы функции будет количество добавленных записей:


		Function ChangeData(Value1: Variant; Value2: Variant): Integer;

		Var

		    Mb: IMetabase;

		    DbIns: IDatabaseInstance;

		    Command: IDalCommand;

		    CommandParams: IDalCommandParams;

		    SQL: String;

		    Result: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    DbIns := Mb.ItemById("OBJ_DB").Open(Null) As IDatabaseInstance;

		    SQL := "Insert into ... values (:Val1, :Val2)";

		    Command := DbIns.Connection.CreateCommand(SQL);

		    Command.Parse;

		    CommandParams := Command.Params;

		    CommandParams.Item(0).Value := Value1;

		    CommandParams.Item(1).Value := Value2;

		    Result := Command.Execute;

		    Command.Close;

		    Return Result;

		End Function ChangeData;


	Пример извлечения значений. Результатом работы функции будет являться
	 курсор с результирующим набором данных:


		Function ReadData: IDalCursor;

		Var

		    Mb: IMetabase;

		    DbIns: IDatabaseInstance;

		    Command: IDalCommand;

		    SQL: String;

		    Result: IDalCursor;

		Begin

		    Mb := MetabaseClass.Active;

		    DbIns := Mb.ItemById("OBJ_DB").Open(Null) As IDatabaseInstance;

		    SQL := "Select ...";

		    Command := DbIns.Connection.CreateCommand(SQL);

		    Result := Command.CreateCursor;

		    Command.Close;

		    Return Result;

		End Function ReadData;


### Использование объекта репозитория


	Второй вариант предполагает использование объектов репозитория «[Запрос](uinavobj.chm::/query/query.htm)» или
	 «[Процедура](UiNavObj.chm::/procedure/UiDb_relationa_procedure.htm)»
	 с необходимыми наборами параметров. В приложении должна быть функция,
	 позволяющая получать результат выполнения этого запроса. Преимущества
	 данного способа:


		- объект репозитория хранится в определенном месте и его можно
		 легко его редактировать;


		- уменьшается количество кода прикладного приложения, увеличивается
		 эффективность его отладки.


	Пример получения данных путем выполнения объекта «Запрос». Идентификатор
	 запроса в репозитории передается в параметре функции QueryId, идентификатор
	 параметра запроса - ParamId, значение параметра - ParamValue. Результатом
	 работы функции будет открытый экземпляр объекта, предоставляющий доступ
	 к кешированным данными:


		Public Function RunQueryWithParam(QueryId: String; ParamId: String; ParamValue: Variant): IDatasetInstance;

		Var

		    Mb: IMetabase;

		    QueryKey: Integer;

		    Desc: IMetabaseObjectDescriptor;

		    Pars: IMetabaseObjectParamValues;

		Begin

		    Mb := MetabaseClass.Active;

		    QueryKey := Mb.GetObjectKeyById(QueryId);

		    If QueryKey = -1 Then

		        Return Null;

		    End If;

		    Desc := Mb.Item(QueryKey);

		    Pars := Desc.Params.CreateEmptyValues;

		    Pars.FindById(ParamId).Value := ParamValue;

		    Return Desc.Open(Pars) As IDatasetInstance;

		End Function RunQueryWithParam;


	В приложении код будет выглядеть следующим образом:


		Var

		    Tasks: IDatasetInstance;

		Begin

		    Tasks := RunQueryWithParam(< Идентификатор запроса >, "ID", < Значение параметра >);


	Для получения доступа к данным можно использовать свойство [IDatasetInstance.Fields](kedb.chm::/interface/idatasetinstance/idatasetinstance.fields.htm),
	 либо обратиться к кешу источника посредством метода [IDatasetInstance.OpenCached](kedb.chm::/interface/idatasetinstance/idatasetinstance.opencached.htm):


		Var

		    Tasks: IDatasetInstance;

		    TasksData: ICachedDataset;

		Begin

		    Tasks := RunQueryWithParam(< Идентификатор запроса >, "ID", < Значение параметра >);

		    TasksData := Tasks.OpenCached;


	Для передачи параметру множественного значения можно использовать
	 следующую конструкцию:


		Var

		    Tasks: IDatasetInstance;

		    Ls: ArrayList;

		Begin

		    Ls := New ArrayList.Create;

		    For i := 1 To 2 Do

		        Ls.Add(i);

		    End For;

		    Tasks := RunQueryWithParam(< Идентификатор запроса >, "ID", Ls.ToArray);


	После завершения работы с данными закройте экземпляр объекта и кеш:


		Var

		    Tasks: IDatasetInstance;

		    TasksData: ICachedDataset;

		Begin

		    Tasks := RunQueryWithParam(< Идентификатор запроса >, "ID", < Значение параметра >);

		    TasksData := Tasks.OpenCached;

		    //...

		    // Работа с данными

		    //...

		    TasksData.Close;

		    Tasks.Close;


## Ограничения


	Настройки серверов СУБД накладывают ограничение на количество одновременно
	 открытых курсоров, поэтому необходимо своевременно закрывать неиспользуемые
	 курсоры с помощью метода [Close](dal.chm::/interface/idalcursor/idalcursor.close.htm).


	Также стоит учитывать рекомендации по разработке приложений, функционирующих
	 в режиме MARS. Данные рекомендации представлены в MSDN.


	При формировании запросов необходимо учитывать синтаксис, который
	 используется при работе с конкретной СУБД. Объекты репозитория «[Запрос](uinavobj.chm::/query/query.htm)» и
	 «[Процедура](UiNavObj.chm::/procedure/UiDb_relationa_procedure.htm)»
	 позволяют указывать синтаксис сразу для нескольких СУБД, это может
	 использоваться при переносе объектов между репозиториями, развернутыми
	 на различных СУБД.


	Важным аспектом являются параметры объектов «[Запрос](uinavobj.chm::/query/query.htm)» и
	 «[Процедура](UiNavObj.chm::/procedure/UiDb_relationa_procedure.htm)»,
	 которые в SQL-запросах используются для возврата значений. Такие параметры
	 необходимо явно приводить к типу возвращаемого значения. Это связано
	 с возможностями преобразования данных различных СУБД, а также с особенностями
	 работы драйверов платформы. Пример запроса с преобразованием типа
	 параметра:


	select cast(:param as <type>) as param


	См. также:


	[База
	 знаний разработчиков](../KnowledgeBase_Intro.htm) | [Сборка Dal](dal.chm::/dal_title.htm) | [Объект «Запрос»](uinavobj.chm::/query/query.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
