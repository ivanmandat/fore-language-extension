# IEaxDataSources.DisplaySourcesNames

IEaxDataSources.DisplaySourcesNames
-


# IEaxDataSources.DisplaySourcesNames


## Синтаксис


DisplaySourcesNames: Boolean;


## Описание


Свойство DisplaySourcesNames
 определяет признак отображения названий источников перед наименованиями
 элементов в шапке/боковике таблицы.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Названия источников будут отображены;


	- False. Названия источников
	 будут скрыты.


## Пример


Для выполнения примера предполагается наличие экспресс-отчёта с идентификатором
 EXPRESS_REPORT, построенном на нескольких источниках данных.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    ExpDs: IEaxDataSources;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    ExpDs := Expr.DataSources;

	    ExpDs.DisplaySourcesNames := False;

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера названия источников экспресс-отчёта
 будут скрыты из таблицы.


См. также:


[IEaxDataSources](IEaxDataSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
