# Метамодель

Метамодель
-


# Метамодель


При создании и работе с метамоделью следует учитывать следующие особенности:


	- класс объекта «[Метамодель](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel.htm)»
	 - MetabaseObjectClass.KE_CLASS_MSMETAMODEL;


	- обязательно необходимо указывать родительский контейнер, так
	 как метамодель может располагаться только внутри контейнера.


Для работы с моделью через язык Fore
 предназначен интерфейс [IMsMetaModel](../Interface/IMsMetaModel/IMsMetaModel.htm).
 Используя его свойства и методы можно сформировать цепочку расчета и задать
 параметры метамодели.


Для работы с цепочкой расчета предназначен интерфейс [IMsCalculationChainEntries](../Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.htm).
 Используя его методы, в цепочку расчета можно добавить следующие элементы:


	- [Папка](../Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.AddFolder.htm).
	 Предназначена для упорядочивания структуры цепочки расчета. Интерфейс
	 [IMsCalculationChainFolder](../Interface/IMsCalculationChainFolder/IMsCalculationChainFolder.htm);


	- [Модель](../Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.AddModel.htm).
	 Наименьшая единица расчета. Модель, доступная для использования внутри
	 всего контейнера моделирования. Интерфейс [IMsCalculationChainModel](../Interface/IMsCalculationChainModel/IMsCalculationChainModel.htm);


	- [Внутренняя
	 модель](../Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.AddExclusiveModel.htm). Наименьшая единица расчета. Модель, существующая и доступная
	 для использования только внутри метамодели. Интерфейс [IMsCalculationChainModel](../Interface/IMsCalculationChainModel/IMsCalculationChainModel.htm);


	- [Метамодель](../Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.AddMetaModel.htm).
	 Существующая цепочка расчета, добавленная в метамодель. Интерфейс
	 [IMsCalculationChainMetaModel](../Interface/IMsCalculationChainMetaModel/IMsCalculationChainMetaModel.htm);


	- [Цикл](../Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.AddIterator.htm).
	 Управляющая конструкция, предназначенная для организации многократного
	 расчета указанных элементов цепочки. Интерфейс [IMsCalculationChainIterator](../Interface/IMsCalculationChainIterator/IMsCalculationChainIterator.htm);


	- [Условие
	 расчета цепочки](../Interface/IMsCalculationChainEntries/IMsCalculationChainEntries.AddBranch.htm). Управляющая конструкция, обеспечивающее расчет
	 определенных элементов цепочки только при выполнении некоторого условия.
	 Интерфейс [IMsCalculationChainBranch](../Interface/IMsCalculationChainBranch/IMsCalculationChainBranch.htm).


Для метамодели можно задать параметры, которые будут влиять на расчет
 моделей, входящих в цепочку. Для работы с параметрами метамодели предназначен
 интерфейс [IMsModelParam](../Interface/IMsModelParam/IMsModelParam.htm).


Для расчета всей цепочки метамодели с учетом последовательности элементов,
 циклов, условий и параметров предназначена задача моделирования.


## Создание метамодели


После [создания модели](KeMs_Programming_Model.htm#model_create)
 следует создать метамодель, содержащую модель «Сальдо
 торгового баланса, млрд.долл.США» для расчета.


Добавьте ссылки на системные сборки: Metabase, Ms, .


	Sub UserProc;

	Var

	    MB: IMetabase;

	    KMDesc: IMetabaseObjectDescriptor;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Meta: IMsMetaModel;

	    Model: IMsModel;

	    Root: IMsCalculationChainEntries;

	Begin

	    MB := MetabaseClass.Active;

	    KMDesc := MB.ItemById("MODEL_SPACE");

	    // Создаем метамодель

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSMETAMODEL;

	    CrInfo.Id := "META_MODEL_BALANCE";

	    CrInfo.Name := "Метамодель для расчета сальдо";

	    CrInfo.Parent := KMDesc;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Meta := MObj As IMsMetaModel;

	    // Добавляем в цепочку расчета модель «Сальдо торгового баланса, млрд.долл.США»

	    Model := MB.ItemByIdNamespace("BALANCE_MODEL", KMDesc.Key).Bind As IMsModel;

	    Root := Meta.CalculationChain;

	    Root.AddModel(Model);

	    MObj.Save;

	    Debug.WriteLine("Создана метамодель '" + MObj.Name + "' с идентификатором '" + MObj.Id + "'");

	End Sub UserProc;


После выполнения модуля будет создана метамодель «Метамодель
 для расчета сальдо» с идентификатором META_MODEL_BALANCE, информация
 об этом будет выведена в окно консоли.


Следующим шагом будет [создание
 и расчет задачи моделирования](KeMs_Programming_Problem.htm#problem_create).


См. также:


[Общие принципы программирования с использованием
 сборки Ms](KeMs_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
