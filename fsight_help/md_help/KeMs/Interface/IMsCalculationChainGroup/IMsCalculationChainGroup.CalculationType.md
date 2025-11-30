# IMsCalculationChainGroup.CalculationType

IMsCalculationChainGroup.CalculationType
-


# IMsCalculationChainGroup.CalculationType


## Синтаксис


		CalculationType: [MsCalculationType](../../Enums/MsCalculationType.htm);


## Описание


Свойство CalculationType определяет
 режим расчёта группы.


## Комментарии


По умолчанию группа рассчитывается в векторном режиме, то есть CalculationType = MsCalculationType.Serie.


Свойство актуально, если расчёт группы выполняется с помощью задачи
 трансформации.


Примечание.
 Если в группе используются параметры, то при расчёте динамические изменения
 параметров не учитываются.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. Данный контейнер содержит
 метамодель с идентификатором METAMODEL и модель с идентификатором MODEL.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

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

		    ModelspaceDescr := Metabase.ItemById("MODEL_SPACE");

		    // Получаем метамодель

		    MetaModel := Metabase.ItemByIdNamespace("METAMODEL", ModelspaceDescr.Key).Edit As IMsMetaModel;

		    // Получаем цепочку расчёта метамодели

		    CalculationChain := MetaModel.CalculationChain;

		    // Очищаем цепочку расчёта

		    CalculationChain.Clear;

		    // Добавляем папку в цепочку расчета

		    Folder := CalculationChain.AddFolder("Исходные данные");

		    // Задаем календарный уровень для расчёта папки

		    Folder.Level := DimCalendarLevel.Year;

		    // Задаем период расчёта папки

		    Period := Folder.Period;

		    Period.ForecastEndDate := DateTime.Parse("01.01.2015");

		    Period.ForecastStartDate := DateTime.Parse("01.01.2010");

		    Period.IdentificationEndDate := DateTime.Parse("31.12.2009");

		    Period.IdentificationStartDate := DateTime.Parse("01.01.1990");

		    // Задаем режим расчёта папки

		    Folder.CalculationType := MsCalculationType.Pointwise;

		    // Формируем содержимое папки

		    FolderCont := Folder.Contents;

		    // Получаем модель

		    Model := Metabase.ItemByIdNamespace("MODEL", ModelspaceDescr.Key).Bind As IMsModel;

		    // Добавляем модель в папку

		    CalcModel := FolderCont.AddModel(Model);

		    // Указываем, что модель наследует параметры периода расчёта от папки

		    CalcModel.InheritModelPeriod := True;

		    // Сохраняем изменения

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в цепочку метамодели будет добавлена
 папка, содержащая модель. Папка является группой элементов и для неё будут
 заданы: календарный уровень и период расчёта, режим расчёта. Модель, которая
 содержится в папке, наследует календарный уровень и период расчёта папки.


См. также:


[IMsCalculationChainGroup](IMsCalculationChainGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
