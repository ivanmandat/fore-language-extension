# Создание рабочей книги с несколькими листами и добавление в нее данных

Создание рабочей книги с несколькими листами и добавление в нее данных
-


# Создание рабочей книги с несколькими листами и добавление в нее данных


Для выполнения примера предполагается наличие в репозитории:


	- Папки с идентификатором «WORKBOOKS», в которую будет сохранена
	 созданная рабочая книга;


	- База данных временных рядов с идентификатором «TSDB», на основе
	 которой будет построена рабочая книга. В базе данных должен содержаться
	 ряд с ключом 45718;


	- Экспресс-отчет или рабочая книга с идентификатором «OBJ123»,
	 из которого будет добавлен лист в создаваемую рабочую книгу.


Подключите ссылки на следующие системные сборки:


	- Cubes;


	- Express;


	- Laner;


	- Metabase.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Exp: IEaxAnalyzer;

	    Source: IMetabaseObjectDescriptor;

	    WB: ILaner;

	    FactD: IRubricatorFactData;

	    RubFactor : IRubricatorFactor;

	    Series: ILanerSeries;

	Begin

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_WORKBOOK;

	    CrInfo.Id := MB.GenerateId("NewWorkbook");

	    CrInfo.Name := "Новая рабочая книга";

	    CrInfo.Parent := MB.ItemById("WORKBOOKS");

	    //Создаем объект репозитория «Рабочая книга»

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Exp := MObj As IEaxAnalyzer;

	    //Определяем источник рабочей книги

	    Source := MB.ItemById("TSDB");

	    //Добавляем в рабочую книгу второй лист из экспресс-отчета/рабочей книги с указанным идентификатором

	    Exp.Sheets.Add(MB.ItemById("OBJ123").Bind As IEaxAnalyzer);

	    WB := Exp.Laner;

	    WB.RubricatorInstance := Source.Open(Null) As IRubricatorInstance;

	    //Возвращаем из базы данных временных ряд показатель с указанным ключом

	    FactD := WB.RubricatorInstance.GetFactData(45718);

	    RubFactor := FactD.Factor;

	    Series:= WB.Series;

	    //Добавляем на активный лист рабочей книги ряд из базы данных временных рядов

	    Series.AddCalculateSerieAsSource(RubFactor);

	    //Сохраняем созданный объект репозитория

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в папке с идентификатором «WORKBOOKS» будет
 создана рабочая книга с наименованием «Новая рабочая книга», источником
 которой является база данных временных рядов с идентификатором «TSDB».
 В рабочую книгу добавлен второй лист из экспресс-отчета/рабочей книги
 с идентификатором «OBJ123». На активный лист рабочей книги добавлен ряд
 с ключом 45718 из источника рабочей книги.


См. также:


[Примеры](Laner_Samples.htm)
 | [ILaner](../Interface/ILaner/ILaner.htm) | [ILanerSeries](../Interface/ILanerSeries/ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
