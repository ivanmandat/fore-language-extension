# IMsCalculationChainFolder.Contents

IMsCalculationChainFolder.Contents
-


# IMsCalculationChainFolder.Contents


## Синтаксис


		Contents: [IMsCalculationChainEntries](../IMsCalculationChainEntries/IMsCalculationChainEntries.htm);


## Описание


Свойство Contents возвращает
 коллекцию дочерних элементов.


## Комментарии


В папке могут располагаться любые элементы цепочки расчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего метамодель с идентификатором
 META и модель с идентификатором MODEL_LINEARREGR.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: Imetabase;

		    MsKey: Integer;

		    MetaModel: IMsMetaModel;

		    CalcChain: IMsCalculationChainEntries;

		    Folder: IMsCalculationChainFolder;

		    Model: IMsModel;

		Begin

		    // Получаем репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем метамодель

		    MetaModel := mb.ItemByIdNamespace("META", MsKey).Edit As IMsMetaModel;

		    // Получаем цепочку расчета метамодели

		    CalcChain := MetaModel.CalculationChain;

		    // Проверяем, есть ли в цепочке расчета модель «MODEL_LINEARREGR»

		    If CalcChain.FindById("MODEL_LINEARREGR") = Null Then

		        // Если метамодели нет, то в цепочке расчета создаем папку

		        Folder := CalcChain.AddFolder("Папка с моделью");

		        CalcChain := Folder.Contents;

		        // В созданную папку добавляем модель
		 «MODEL_LINEARREGR»

		        Model := mb.ItemByIdNamespace("MODEL_LINEARREGR", MsKey).Bind As IMsModel;

		        CalcChain.AddModel(Model);

		    End If;

		    // Сохраняем изменения

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в цепочке расчёта будет создана папка,
 содержащая модель.


См. также:


[IMsCalculationChainFolder](IMsCalculationChainFolder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
