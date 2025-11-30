# Конструктор FindSettingsDialog

Конструктор FindSettingsDialog
-


# Конструктор FindSettingsDialog


## Синтаксис


PP.Rds.Ui.FindSettingsDialog(settings);


## Параметры


settings. JSON-объект со значениями свойств класса.


## Описание


Конструктор FindSettingsDialog создает экземпляр класса [FindSettingsDialog](FindSettingsDialog.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm) с наименованием «dictionaryBox» (см. «[Пример создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Получим дерево элементов справочника. Определим объект диалога настроек поиска. Получим настройки диалога, отключим учет регистра, после чего установим измененные настройки диалога. Отобразим диалог настроек поиска:


// Получим область данных справочника
var area = dictionaryBox.getDataArea();
// Получим дерево элементов справочника
var tree = area.getActiveDictTree();
// Определим объект диалога настроек поиска
var fsd = new PP.Rds.Ui.FindSettingsDialog({
    Source: tree.getSource(), // Источник данных
});
// Получим настройки диалога
var filterSettings = fsd.getFilterSettings();
// Отключим учет регистра
filterSettings.caseSensitive = false;
// Установим настройки диалога
fsd.setFilterSettings(filterSettings);
// Отобразим диалог
fsd.showDialog();

В результате был отображен диалог настроек поиска:


![](FindSettingsDialog_FilterSettings.png)


См. также:


[FindSettingsDialog](FindSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
