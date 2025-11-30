# IMsScenarioTreeEntries.AddScenario

IMsScenarioTreeEntries.AddScenario
-


# IMsScenarioTreeEntries.AddScenario


## Синтаксис


AddScenario([External: Boolean = False;][Save: Boolean
 = True]): [IMsScenarioTreeElement](../IMsScenarioTreeElement/IMsScenarioTreeElement.htm);


## Параметры


External. Признак того, что
 сценарий внешний;


Save. Признак того, что сценарий
 сохраняется.


## Описание


Метод AddScenario добавляет
 новый сценарий.


## Комментарии


Допустимые значения параметра External:


	- True. Сценарий внешний;


	- False. Значение по умолчанию
	 в Fore. Сценарий внутренний.


Допустимые значения параметра Save:


	- True. Значение по умолчанию
	 в Fore. Сценарий сохраняется сразу после создания. Для дальнейших
	 изменений сценария его потребуется открыть на редактирование;


	- False. Сценарий остаётся
	 открытым на редактирование. Все дальнейшие изменения в сценарии необходимо
	 сохранять.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором «MS».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    ModelSpace: IMsModelSpace;

    Tree: IMsScenarioTreeEntries;

    Folder: IMsScenarioTreeFolder;

    Scen: IMsScenarioTreeElement;

    Scenario: IMsScenario;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MObj := MB.ItemById("MS").Edit;

    ModelSpace := MObj As IMsModelSpace;

    // Получаем дерево сценариев

    Tree := ModelSpace.ScenarioTree;

    // Добавляем папку

    Folder := Tree.AddFolder("Дополнительные сценарии");

    // Создаем новый сценарий

    Scen := Folder.Contents.AddScenario(False, False);

    // Задаем наименование сценария

    Scen.Name := "Базовый сценарий";

    // Указываем, что сценарий защищенный

    Scenario := Scen.Scenario;

    Scenario.Protected_ := True;

    // Сохраняем изменения в сценарии

    (Scenario As IMetabaseObject).Save;

    // Сохраняем изменения в контейнере моделирования

    MObj.Save;

End Sub UserProc;


После выполнения примера в дерево сценариев контейнера моделирования
 будет добавлена новая папка. В данной папке будет создан один защищенный
 сценарий.


См. также:


[IMsScenarioTreeEntries](IMsScenarioTreeEntries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
