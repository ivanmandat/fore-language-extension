# Подготовка файла с синонимами

Подготовка файла с синонимами
-


# Подготовка файла с синонимами


BI-поиск включает в себя возможность учета слов-синонимов. Для использования
 этой возможности необходимо предварительно подготовить файл synonyms.txt,
 который был скопирован при [настройке
 экземпляров Solr](Instance_Solr_Setting.htm). Apache Solr использует один общий файл synonyms.txt,
 содержащий список синонимов на всех языках.


Файл synonyms.txt состоит из
 множества строк. Каждый комплект слов-синонимов указывается в отдельной
 строке. Слова (сочетания слов) разделяются между собой запятой. Для возможности
 поиска слов в различных падежах в Apache Solr используются специальные
 алгоритмы поиска, для их использования слова-синонимы должны указываться
 без окончаний. Чтобы подготовить слова в том виде, в котором их сможет
 использовать Apache Solr, можно воспользоваться двумя способами:


	- Использовать анализатор Apache Solr:


		- На странице установленного Apache Solr выберите необходимый
		 экземпляр и перейдите на вкладку «Analysis».
		 Сформировавшаяся ссылка при этом будет иметь следующий вид: http://localhost:8080/solr-4.4.0#/SourceData_ru1/analysis;


		- В раскрывающемся списке «Analyse
		 Fieldname / FieldType» выберите тип «synonyms_transformer»;


		- В поле «Field Value (Index)»
		 укажите необходимое сочетание слов-синонимов, например «ВВП, Валовой
		 Внутренний Продукт», и нажмите кнопку «Analyse
		 Values»;


		- Результаты обработки различными фильтрами будут выведены
		 на странице (Флаг «Verbose Output»
		 можно снять, чтобы отобразить только текст, полученный после обработки
		 фильтрами);


		- Самая последняя строка это тот набор слов-синонимов, который
		 должен быть сохранен в файле synonyms.txt.
		 Например, для указанного выше сочетания «ВВП,
		 Валовой Внутренний Продукт» сохраняемое в файл сочетание
		 будет иметь вид «ввп, валов внутрен
		 продукт».


	- Использовать ядро Fore, предназначенное для работы с Apache
	 Solr: Для анализа и получения необходимой комбинации слов-синонимов
	 можно воспользоваться следующей функцией:

	Function AnalysisString(Phrase: String): Array;

	Const

	    CoreURL = "http://localhost:8080/solr-4.4.0/SourceData_ru1";

	Var

	    MB: IMetabase;

	    SearchFactory: ISearchEngineServiceFactory;

	    SolrService: ISolrSearchEngineService;

	    Core: ISolrSearchEngineCore;

	    SolrOp: ISolrOperations;

	    Result: Array Of Variant;

	Begin

	    MB := MetabaseClass.Active;

	    //Параметры механизма BI-поиска

	    SearchFactory := New SearchEngineServiceFactory.Create;

	    SolrService := SearchFactory.CreateSearchEngine(MB) As ISolrSearchEngineService;

	    Core := SolrService.Cores.Add(CoreURL, SearchEngineTargetType.SourceData, LocaleCodeID.Russian);

	    //Объект для работы с Apache Solr

	    SolrOp := New SolrOperations.Create;

	    //Анализ слов-синонимов

	    Result := SolrOp.GetPhraseAnalysisByFieldType(Core, "synonyms_transformer", Phrase) As Array;

	    //Возврат результата

	    Return Result;

	End Function AnalysisString;


В качестве входного параметра функции передается
 набор слов-синонимов, на выходе будет получен массив обработанных слов.
 Доработав код необходимым образом слова из массива можно сохранить непосредственно
 в файл synonyms.txt или в какое-либо
 другое хранилище.


См. также:


[Установка
 и настройка программного обеспечения](software_installation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
