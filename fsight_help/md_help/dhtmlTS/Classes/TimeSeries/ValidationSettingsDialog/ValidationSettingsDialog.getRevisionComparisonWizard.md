# ValidationSettingsDialog.getRevisionComparisonWizard

ValidationSettingsDialog.getRevisionComparisonWizard
-


**


# ValidationSettingsDialog.getRevisionComparisonWizard


## Синтаксис


getRevisionComparisonWizard();


## Описание


Метод getRevisionComparisonWizard** возвращает мастер правила валидации данных путём сравнения их версий в [рабочей книге](../Workbook/Workbook.htm).


## Комментарии


Метод возвращает объект типа [PP.TS.Ui.RevisionComparisonWizard](ValidationSettingsDialog.getRevisionComparisonWizard.htm).


## Пример


Для выполнения примера необходимо наличие компонента [ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog.htm) с наименованием «validationSettingsDialog» (см. «[Пример создания компонента ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog_Example.htm)»). Отобразим мастер правила валидации данных путём сравнения их версий:


// Получим мастер правила валидации путём сравнения версий данных
var revisionComparisonWizard = validationSettingsDialog.getRevisionComparisonWizard();
// Получим DOM-дерево для данного мастера
var dom = revisionComparisonWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Сделаем мастер видимым
revisionComparisonWizard.show();
// Добавим полученный мастер в стандартный диалог
var dialog = new PP.Ui.Dialog({
    Content: revisionComparisonWizard,
    // Укажем ключ ресурса для отображения заголовка в диалоге
    ResourceKey: "TSRibbonVersionDataComparisonDialog",
    Width: 734, // Ширина диалога
    Height: 184 // Высота диалога
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера в созданном диалоге был отображён мастер правила валидации данных путём сравнения их версий:


![](../../../Components/TimeSeries/RevisionComparisonDialog/RevisionComparisonDialog.png)


См. также:


[ValidationSettingsDialog](ValidationSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
