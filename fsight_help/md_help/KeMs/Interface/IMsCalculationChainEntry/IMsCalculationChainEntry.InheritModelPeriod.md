# IMsCalculationChainEntry.InheritModelPeriod

IMsCalculationChainEntry.InheritModelPeriod
-


# IMsCalculationChainEntry.InheritModelPeriod


## Синтаксис


		InheritModelPeriod: Boolean;


## Описание


Свойство InheritModelPeriod
 определяет признак наследования элементом [цепочки](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm)
 периода и динамики расчёта у родительского элемента.


## Комментарии


Допустимые значения:


	- True. Элемент цепочки
	 наследует период и динамику расчёта у родительского элемента. Если
	 родительский элемент тоже наследует период, то период будет браться
	 у элемента более высокого уровня, вплоть до периода расчёта задачи;


	- False. Значение по умолчанию.
	 Каждый элемент цепочки использует собственные период и динамику расчёта.
	 Если период или динамика расчёта не заданы, то они наследуется у родительского
	 элемента.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODELING_CONTAINER. Данный контейнер содержит
 метамодель с идентификатором META_MODEL и модель с идентификатором MODEL.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserInherit;

		Var

		    Metabase: IMetabase;

		    ModelspaceDescr: IMetabaseObjectDescriptor;

		    MetaModel: IMsMetaModel;

		    CalculationChain, FolderCont: IMsCalculationChainEntries;

		    Folder: IMsCalculationChainFolder;

		    Period: IMsModelPeriod;

		    Model: IMsModel;

		    CalcModel: IMsCalculationChainModel;

		Begin

		    Metabase := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    ModelspaceDescr := Metabase.ItemById("MODELING_CONTAINER");

		    // Получаем метамодель

		    MetaModel := Metabase.ItemByIdNamespace("META_MODEL", ModelspaceDescr.Key).Edit As IMsMetaModel;

		    // Получаем цепочку расчёта и создаём в ней папку

		    CalculationChain := MetaModel.CalculationChain;

		    Folder := CalculationChain.AddFolder("Исходные данные");

		    // Задаём параметры расчёта папки

		    Folder.Level := DimCalendarLevel.Year;

		    Period := Folder.Period;

		    Period.ForecastEndDate := DateTime.ComposeDay(2019, 12, 31);

		    Period.ForecastStartDate := DateTime.ComposeDay(2010, 1, 1);

		    Period.IdentificationEndDate := DateTime.ComposeDay(2009, 12, 31);

		    Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

		    FolderCont := Folder.Contents;

		    // Получаем модель

		    Model := Metabase.ItemByIdNamespace("MODEL", ModelspaceDescr.Key).Bind As IMsModel;

		    // Добавляем модель в папку

		    CalcModel := FolderCont.AddModel(Model);

		    // Указываем, что модель наследует у папки период и динамику расчёта

		    CalcModel.InheritModelPeriod := True;

		    // Сохраняем изменения

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserInherit;


В результате выполнения примера в цепочку метамодели будет добавлена
 папка, содержащая модель. Данная папка будет рассматриваться как группа.
 Для неё будут заданы период и динамика расчёта. Модель, находящаяся в
 папке, наследует период и динамику расчёта папки.


См. также:


[IMsCalculationChainEntry](IMsCalculationChainEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
