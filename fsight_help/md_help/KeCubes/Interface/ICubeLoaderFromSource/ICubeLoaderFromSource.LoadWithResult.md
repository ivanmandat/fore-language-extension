# ICubeLoaderFromSource.LoadWithResult

ICubeLoaderFromSource.LoadWithResult
-


# ICubeLoaderFromSource.LoadWithResult


## Синтаксис


LoadWithResult(Source: Object; CreateInfo: [IMetabaseObjectCreateInfo](kesom.chm::/interface/imetabaseobjectcreateinfo/imetabaseobjectcreateinfo.htm)):
 [ICubeLoaderResult](../ICubeLoaderResult/ICubeLoaderResult.htm);


## Параметры


Source. Источник данных, описываемый
 интерфейсом [IDtProvider](kedt.chm::/interface/idtprovider/idtprovider.htm);


CreateInfo. Информация о создаваемом
 объекте. Если информация отсутствует, либо загрузка осуществляется в существующий
 объект, то в качестве параметра необходимо передать значение Null.


## Описание


Метод LoadWithResult выполняет
 загрузку данных и возвращает результат загрузки.


## Комментарии


Тип создаваемого объекта определяет значение свойства [ICubeLoaderFromSource.Type](ICubeLoaderFromSource.Type.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие:


	- Папки с идентификатором TSDB_FOLDER.


	- Репозитория НСИ с идентификатором RDS_LOAD.


	- Табличного справочника НСИ с идентификатором CITY_DICT. Данный
	 справочник должен содержаться вне репозитория НСИ. Также в справочнике
	 должен присутствовать уникальный индекс с идентификатором UINDEX.
	 В данный индекс должен входить только один атрибут с идентификатором
	 NAME. Атрибут содержит наименование элементов справочника. Справочник
	 должен содержать следующие элементы:


		- Анкоридж;


		- Мехико;


		- Чикаго.


В файловой системе должен присутствовать файл «C:\result_exp.txt» с
 данными.


Добавьте ссылки на системные сборки: Collections, Cubes, Dimensions,
 Dt, Metabase, Rds.


[![](../../Opened.gif)![](../../Closed.gif)Содержимое файла
 «C:\result_exp.txt»](javascript:TextPopup(this))


	"INDICATOR";"CITY";"Year";"Value"


	"Население, млн. человек";"Чикаго";"2010";17,314


	"Население, млн. человек";"Чикаго";"2011";17,93


	"Население, млн. человек";"Чикаго";"2012";17,603


	"Население, млн. человек";"Чикаго";"2013";17,603


	"Население, млн. человек";"Чикаго";"2014";17,566


	"Население, млн. человек";"Чикаго";"2015";17,975


	"Население, млн. человек";"Чикаго";"2010";17,314


	"Население, млн. человек";"Чикаго";"2011";17,93


	"Уровень безработицы, %";"Чикаго";"2010";81,2726319


	"Уровень безработицы, %";"Чикаго";"2011";9,12417907


	"Уровень безработицы, %";"Чикаго";"2012";36,50366842


	"Уровень безработицы, %";"Чикаго";"2013";22,35032041


	"Уровень безработицы, %";"Чикаго";"2014";97,99169619


	"Уровень безработицы, %";"Чикаго";"2015";23,13102147


	"Население, млн. человек";"Анкоридж";"2010";17,314


	"Население, млн. человек";"Анкоридж";"2011";17,93


	"Население, млн. человек";"Анкоридж";"2012";17,603


	"Население, млн. человек";"Анкоридж";"2013";17,603


	"Население, млн. человек";"Анкоридж";"2014";17,566


	"Население, млн. человек";"Анкоридж";"2015";17,975


	"Уровень безработицы, %";"Мехико";"2010";15,256


	"Уровень безработицы, %";"Мехико";"2011";15,59


	"Уровень безработицы, %";"Мехико";"2012";16,57


	"Уровень безработицы, %";"Мехико";"2013";16,57


	"Уровень безработицы, %";"Мехико";"2014";16,762


	"Уровень безработицы, %";"Мехико";"2015";17,132


	Sub UserProc;

	Var

	    mb: IMetabase;

	    parent: IMetabaseObject;

	    rdsDatabase: IRdsDatabase;

	    loader: ICubeLoaderFromSource;

	    DimBindings: ICubeLoaderDimensionBindings;

	    bind: ICubeLoaderDimensionBinding;

	    DimModel: IDimensionModel;

	    Calend: ICubeLoaderDimensionBinding;

	    DateConv: IDateConverter;

	    creator: IDtObjectCreator;

	    prov: IDtTextProvider;

	    Result: ICubeLoaderResult;

	    Object: IMetabaseObject;

	    List, Arr: IArrayList;

	    Item: Variant;

	    i: Integer;

	Begin


	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем папку TSDB_FOLDER, в которой будет создана
	 база данных временных рядов

	    parent := mb.ItemById("TSDB_FOLDER").Bind;

	    // Получаем репозиторий НСИ

	    rdsDatabase := mb.ItemById("RDS_LOAD").Bind As IRdsDatabase;

	    // Создаем объект для загрузки данных

	    loader := New CubeLoaderFromSource.Create;

	    // Указываем репозиторий НСИ, который будет использоваться при загрузке

	    loader.RdsDatabase := rdsDatabase.Open(Null);

	    // Указываем, что для загружаемых данных будет создана
	 база данных временных рядов

	    loader.Type := CubeLoaderType.Rubricator;

	    // Указываем папку, в которой будет создана база данных временных рядов

	    loader.Parent := parent;


	    // Получаем привязки измерений к полям источника данных

	    DimBindings := loader.DimensionBindings;

	    // Добавляем привязку для поля CITY

	    bind := DimBindings.Add("CITY");

	    // Указываем, что полю будет соответствовать измерение,
	 основанное на справочнике НСИ CITY_DICT

	    DimModel := mb.ItemById("CITY_DICT").Bind As IDimensionModel;

	    bind.Dictionary := DimModel;

	    // Указываем индекс, по которому будет создана привязка

	    bind.Index := DimModel.Indexes.FindById("UINDEX");

	    // Указываем идентификатор атрибута, на котором построен индекс

	    bind.AttributeId := "NAME";


	    // Добавляем привязку для поля INDICATOR.

	    // Справочник для создания измерения, соответствующему данному полю,
	 будет создан автоматически в репозитории НСИ RDS_LOAD

	    DimBindings.Add("INDICATOR");

	    // Добавляем привязку для календарного измерения

	    Calend := DimBindings.AddCalendar("Year", DimCalendarLevel.Year);

	    // Создаем объект для разбора дат в источнике данных

	    DateConv := New DateConverter.Create;

	    // Задаем формат дат

	    DateConv.CalendarDateFormat := "$YEAR$";

	    DateConv.ConvertShortYear := True;

	    // Устанавливаем созданный объект в привязку календарного измерения

	    Calend.Converter := DateConv;


	    // Добавляем привязку для значений источника данных

	    loader.FactBindings.Add("Value");

	    // Создаем объект для работы с источником данных

	    creator := New DtObjectCreator.Create;

	    // Создаем текстовый источник данных из файла

	    prov := creator.CreateDtObjectFromFile("C:\result_exp.txt") As IDtTextProvider;

	    // Указываем разделитель полей, используемый в источнике

	    prov.DelimitedColumnDelimiter := ";";

	    // Загружаем данные и обрабатываем результат загрузки

	    Result := loader.LoadWithResult(prov, Null);

	    // Получаем объект, в который были загружены данные

	    Object := Result.Object;

	    // Выводим информацию объекте в окно консоли

	    Debug.WriteLine("Наименование и идентификатор созданной базы данных временных рядов: " +

	    Object.Name + "(" + Object.Id + ")");


	    // Получаем пустые записи и выводим их в окно консоли

	    List := Result.NullStrings;

	    If List.Count <> 0 Then

	        Debug.WriteLine("Пустые записи:");

	        For Each Item In List Do

	            Arr := Item As IArrayList;

	            For i := 0 To Arr.Count - 1 Do

	                Debug.Write(Arr.Item(i));

	                Debug.Write("; ");

	            End For;

	            Debug.WriteLine("");

	        End For;

	    End If;


	    // Получаем дублирующие записи и выводим их в окно консоли

	    List := Result.DuplicatedStrings;

	    If List.Count <> 0 Then

	        Debug.WriteLine("Дублирующие записи:");

	        For Each Item In List Do

	            Arr := Item As IArrayList;

	            For i := 0 To Arr.Count - 1 Do

	                Debug.Write(Arr.Item(i));

	                Debug.Write("; ");

	            End For;

	            Debug.WriteLine("");

	        End For;

	    End If;

	End Sub UserProc;


В результате выполнения примера данные из файла «C:\result_exp.txt»
 будут загружены в базу данных временных рядов, специально созданную для
 этого. Результаты импорта, а также идентификатор и наименование созданной
 базы данных временных рядов будут выведены в окно консоли.


См. также:


[ICubeLoaderFromSource](ICubeLoaderFromSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
