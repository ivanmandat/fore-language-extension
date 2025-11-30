# ValidationSettingsDialog.getMissingDataWizard

ValidationSettingsDialog.getMissingDataWizard
-


**


# ValidationSettingsDialog.getMissingDataWizard


## Синтаксис


getMissingDataWizard();


## Описание


Метод getMissingDataWizard** возвращает мастер для валидации типа «Пропуски в данных».


## Комментарии


Метод возвращает значение типа [PP.TS.Ui.MissingDataWizard](../MissingDataWizard/MissingDataWizard.htm).


## Пример


Для выполнения примера необходимо наличие компонента [ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog.htm) с наименованием «validationSettingsDialog» (см. «[Пример создания компонента ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog_Example.htm)»). Отобразим мастер для валидации типа «Пропуски в данных» в отдельном диалоге:


// Получим мастер для валидации типа «Пропуски в данных»
var missingDataWizard = validationSettingsDialog.getMissingDataWizard();
// Получим DOM-дерево для данного мастера
var dom = missingDataWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Сделаем мастер видимым
missingDataWizard.show();
// Добавим полученный мастер в диалог
var dialog = new PP.Ui.Dialog({
    Caption: "Пропуски в данных",
    Content: missingDataWizard,
    Width: 500 // Ширина диалога
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера в созданном диалоге был отображён мастер для валидации типа «Пропуски в данных»:


![](../MissingDataWizard/MissingDataWizard.png)


См. также:


[ValidationSettingsDialog](ValidationSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
