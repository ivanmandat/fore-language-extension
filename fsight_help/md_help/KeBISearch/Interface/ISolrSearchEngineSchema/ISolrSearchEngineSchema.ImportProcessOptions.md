# ISolrSearchEngineSchema.ImportProcessOptions

ISolrSearchEngineSchema.ImportProcessOptions
-


# ISolrSearchEngineSchema.ImportProcessOptions


## Синтаксис


ImportProcessOptions: [ISolrImportProcessOptions](../ISolrImportProcessOptions/ISolrImportProcessOptions.htm);


## Описание


Свойство ImportProcessOptions
 возвращает параметры, используемые при индексации данных/метаданных.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «CUSTOMVALUES». В сборке реализован класс «CSolrImportCustomValues», используемый для
 заполнения значений пользовательских полей при индексации. Класс должен
 содержать реализацию интерфейса [ISolrImportCustomValues](../ISolrImportCustomValues/ISolrImportCustomValues.htm).
 Подключите системные сборки: BISearch, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SharedParams: ISharedParams;

    SearchEngine: ISolrSearchEngineService;

    Schema: ISolrSearchEngineSchema;

    Options: ISolrImportProcessOptions;

    Binding: ISolrImportCustomBinding;

Begin

    MB := MetabaseClass.Active;

    SharedParams := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

    SearchEngine := SharedParams.SearchEngine As ISolrSearchEngineService;

    Schema := SearchEngine.SearchEngineSchema As ISolrSearchEngineSchema;

    //Изменение настроек

    Options := Schema.ImportProcessOptions;

    Options.BlockSize := 1000;

    Options.QueryMaxSize := 1048576;

    Options.ThreadsCount := 4;

    Options.NeedSmartSearch := True;

    Binding := Options.ImportBinding;

    Binding.Assembly := MB.ItemById("CUSTOMVALUES");

    Binding.ClassName := "CSolrImportCustomValues";

    //Сохранение

    SharedParams.SearchEngine := SearchEngine;

    (SharedParams As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будут определены настройки индексации в репозитории:
 указаны значения, используемые при построении матрицы, задан максимальный
 размер формируемого XML-документа, который будет передаваться для индексации
 на сервер Apache Solr, а также указаны сборка и класс, используемые для
 обработки пользовательских полей.


См. также:


[ISolrSearchEngineSchema](ISolrSearchEngineSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
