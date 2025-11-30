# ValidationSettingsDialog.getGrowthRateWizard

ValidationSettingsDialog.getGrowthRateWizard
-


**


# ValidationSettingsDialog.getGrowthRateWizard


## Синтаксис


getGrowthRateWizard();


## Описание


Метод getGrowthRateWizard** возвращает мастер для валидации данных путём анализа темпа роста временных рядов.


## Комментарии


Метод возвращает объект типа [PP.TS.Ui.LevelWizard](../LevelWizard/LevelWizard.htm).


## Пример


Для выполнения примера необходимо наличие компонента [ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog.htm) с наименованием «validationSettingsDialog» (см. «[Пример создания компонента ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog_Example.htm)»). Отобразим мастер для валидации данных путём анализа темпа роста временных рядов в отдельном диалоге:


// Получим мастер для валидации данных путём анализа темпа роста временных рядов
var growthRateWizard = validationSettingsDialog.getGrowthRateWizard();
// Получим DOM-дерево для данного мастера
var dom = growthRateWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Сделаем мастер видимым
growthRateWizard.show();
// Добавим полученный мастер в стандартный диалог
var dialog = new PP.Ui.Dialog({
    Content: growthRateWizard,
    Width: 600, // Ширина диалога
    Height: 120 // Высота диалога
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера в созданном диалоге был отображён мастер для валидации данных путём анализа темпа роста временных рядов:


![](ValidationSettingsDialog_getGrowthRateWizard.png)


См. также:


[ValidationSettingsDialog](ValidationSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
