# IEaxWorkbook.Laner

IEaxWorkbook.Laner
-


# IEaxWorkbook.Laner


## Синтаксис


Laner: [ILaner](Laner.chm::/Interface/ILaner/ILaner.htm);


## Описание


Свойство Laner возвращает
 объект для настройки рабочей книги.


## Комментарии


Для получения объекта для настройки рабочей книги также можно использовать
 свойство [IEaxAnalyzeCore.Laner](../IEaxAnalyzeCore/IEaxAnalyzeCore.Laner.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие папки с
 идентификатором WORKBOOKS и базы данных временных рядов с идентификатором
 TSDB.


Добавьте ссылки на системные сборки: Cubes, Express, Laner, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Exp: IEaxAnalyzer;

	    Source: IMetabaseObjectDescriptor;

	    WB: IEaxWorkbook;

	    Context: ILanerContext;

	    Laner: ILaner;

	Begin

	    // Получаем репозиторий

	    MB := MetabaseClass.Active;

	    // Задаем базовые параметры создания рабочей книги

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_WORKBOOK;

	    CrInfo.Id := MB.GenerateId("NEW_WORKBOOK");

	    CrInfo.Name := "Новая рабочая книга";

	    CrInfo.Parent := MB.ItemById("WORKBOOKS");

	    // Создаем объект репозитория «Рабочая книга»

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Exp := MObj As IEaxAnalyzer;

	    WB := Exp As IEaxWorkbook;

	    // Задаем источник данных рабочей книги

	    Source := MB.ItemById("TSDB");

	    Laner := WB.Laner;

	    Laner.RubricatorInstance := Source.Open(Null) As IRubricatorInstance;

	    // Настраиваем контекст

	    WB.UseLanerContext := True;

	    Context := WB.LanerContext;

	    Context.AllowExternalStubs := True;

	    Context.AllowSmartHighlighting := True;

	    Context.AllowSynchronization := True;

	    //Сохраняем созданный объект репозитория

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера в папке WORKBOOKS будет создана рабочая
 книга с настроенным контекстом. В качестве источника данных будет использоваться
 база данных временных рядов с идентификатором TSDB.


См. также:


[IEaxWorkbook](IEaxWorkbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
