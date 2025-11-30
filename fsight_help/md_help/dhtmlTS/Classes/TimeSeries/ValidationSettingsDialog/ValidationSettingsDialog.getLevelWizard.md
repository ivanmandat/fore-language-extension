# ValidationSettingsDialog.getLevelWizard

ValidationSettingsDialog.getLevelWizard
-


**


# ValidationSettingsDialog.getLevelWizard


## Синтаксис


getLevelWizard();


## Описание


Метод getLevelWizard** возвращает мастер правила валидации данных путём их сравнения с числом.


## Комментарии


Метод возвращает объект типа [PP.TS.Ui.LevelWizard](../LevelWizard/LevelWizard.htm).


## Пример


Для выполнения примера необходимо наличие компонента [ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog.htm) с наименованием «validationSettingsDialog» (см. «[Пример создания компонента ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog_Example.htm)»). Отобразим мастер правила валидации данных путём их сравнения с числом в отдельном диалоге:


// Получим мастер правила валидации данных путём их сравнения с числом
var levelWizard = validationSettingsDialog.getLevelWizard();
// Получим DOM-дерево для данного мастера
var dom = levelWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Сделаем мастер видимым
levelWizard.show();
// Добавим полученный мастер в стандартный диалог
var dialog = new PP.Ui.Dialog({
    Content: levelWizard,
    Width: 567, // Ширина диалога
    Height: 135, // Высота диалога
    // Укажем ключ ресурса для отображения заголовка в диалоге
    ResourceKey: "TSRibbonLevelAnalysisDialog"
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера в созданном диалоге был отображён мастер правила валидации данных путём их сравнения с числом:


![](../LevelWizard/LevelWizard.png)


См. также:


[ValidationSettingsDialog](ValidationSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
