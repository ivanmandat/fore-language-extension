# IEtlPlainLinkFieldMapping.StartValue

IEtlPlainLinkFieldMapping.StartValue
-


# IEtlPlainLinkFieldMapping.StartValue


## Синтаксис


StartValue: Integer;


## Описание


Свойство StartValue определяет
 начальное значение при [автоинкрементном
 заполнении полей](UiEtl.chm::/Desktop/03_ETLObjects/05_Links/UIEtl_Links_Autolink.htm).


## Комментарии


Свойство актуально, если свойство [IEtlPlainLinkFieldMapping.Type](IEtlPlainLinkFieldMapping.Type.htm)
 принимает значение EtlPlainLinkFieldMapping.Increment.


Для определения шага приращения при автоинкрементном заполнении полей
 используйте [IEtlPlainLinkFieldMapping.Increment](IEtlPlainLinkFieldMapping.Increment.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие задачи ETL с
 идентификатором TASK_ETL. Задача ETL содержит:


	- источник репозитория, для которого источником данных является
	 таблица, содержащая поле целого типа. Поле должно содержать несколько
	 значений.


	- приёмник репозитория, для которого источником данных является
	 таблица, содержащая поле целого типа;


	- ненастроенная связь между выходом источника и входом приёмника
	 репозитория.


Добавьте ссылки на системные сборки: Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Links: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Output: IEtlPlainOutput;

	    Field: IEtlPlainField;

	    FileMapp: IEtlPlainLinkFieldMapping;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим задачу ETL

	    EtlObj := MB.ItemById("TASK_ETL").Edit;

	    EtlTask := EtlObj As IEtlTask;

	    // Получим объект-связку

	    Links := EtlTask.Links;

	    Link := Links.Item(0);

	    // Получим выход источника

	    Output := Link.SourceObjectOutput;

	    // Получим поле выхода

	    Field := Output.Fields.Item(0);

	    // Заполним поле с помощью типа связи - автоинкремент

	    FileMapp := Link.Link(Field);

	    FileMapp.Type := EtlPlainLinkFieldMappingType.Increment;

	    // Установим начальное значение

	    FileMapp.StartValue := 100;

	    // Установим шаг

	    FileMapp.Increment := 10;

	    // Сохраним изменения

	    EtlObj.Save;

	End Sub UserProc;


После выполнения примера для указанного поля входа установится тип связи
 - автоинкремент с заданными значениями.


См. также:


[IEtlPlainLinkFieldMapping](IEtlPlainLinkFieldMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
