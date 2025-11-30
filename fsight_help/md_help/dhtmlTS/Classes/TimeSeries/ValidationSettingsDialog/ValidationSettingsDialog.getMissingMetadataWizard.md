# ValidationSettingsDialog.getMissingMetadataWizard

ValidationSettingsDialog.getMissingMetadataWizard
-


**


# ValidationSettingsDialog.getMissingMetadataWizard


## Синтаксис


getMissingMetadataWizard();


## Описание


Метод getMissingMetadataWizard** возвращает мастер для валидации типа «Пропуски в метаданных».


## Комментарии


Метод возвращает значение типа [PP.TS.Ui.MissingDataWizard](../MissingDataWizard/MissingDataWizard.htm).


## Пример


Для выполнения примера необходимо наличие компонента [ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog.htm) с наименованием «validationSettingsDialog» (см. «[Пример создания компонента ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog_Example.htm)»). Отобразим мастер для валидации типа «Пропуски в метаданных» в отдельном диалоге:


// Получим мастер для валидации типа «Пропуски в метаданных»
var missingMetadataWizard = validationSettingsDialog.getMissingMetadataWizard();
// Получим DOM-дерево для данного мастера
var dom = missingMetadataWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Сделаем мастер видимым
missingMetadataWizard.show();
// Добавим полученный мастер в диалог
var dialog = new PP.Ui.Dialog({
    Caption: "Пропуски в метаданных",
    Content: missingMetadataWizard,
    Width: 750, // Ширина диалога
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера в созданном диалоге был отображён мастер для валидации типа «Пропуски в метаданных»:


![](../MissingMetadataWizard/MissingMetadataWizard.png)


См. также:


[ValidationSettingsDialog](ValidationSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
