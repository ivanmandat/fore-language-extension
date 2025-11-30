# ValidationSettingsDialog.getCrossFrequencyWizard

ValidationSettingsDialog.getCrossFrequencyWizard
-


**


# ValidationSettingsDialog.getCrossFrequencyWizard


## Синтаксис


getCrossFrequencyWizard();


## Описание


Метод getCrossFrequencyWizard** возвращает мастер для валидации данных путём сравнения уровней динамики временных рядов.


## Комментарии


Метод возвращает значение типа [PP.TS.Ui.CrossFrequencyWizard](../CrossFrequencyWizard/CrossFrequencyWizard.htm).


## Пример


Для выполнения примера необходимо наличие компонента [ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog.htm) с наименованием «validationSettingsDialog» (см. «[Пример создания компонента ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog_Example.htm)»). Отобразим мастер для валидации данных путём сравнения уровней динамики их временных рядов в отдельном диалоге:


// Получим мастер для валидации данных путём сравнения уровней динамики
var crossFrequencyWizard = validationSettingsDialog.getCrossFrequencyWizard();
// Получим DOM-дерево для данного мастера
var dom = crossFrequencyWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Сделаем мастер видимым
crossFrequencyWizard.show();
// Добавим полученный мастер в диалог
var dialog = new PP.Ui.Dialog({
    Caption: "Мастер сравнения уровней динамики",
    Content: crossFrequencyWizard,
    Width: 800 // Ширина диалога
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера в созданном диалоге был отображён мастер для валидации данных путём сравнения уровней динамики их временных рядов:


![](../CrossFrequencyWizard/CrossFrequencyWizard.png)


См. также:


[ValidationSettingsDialog](ValidationSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
