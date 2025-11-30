# ValidationSettingsDialog.getCustomAnalysisWizard

ValidationSettingsDialog.getCustomAnalysisWizard
-


**


# ValidationSettingsDialog.getCustomAnalysisWizard


## Синтаксис


getCustomAnalysisWizard();


## Описание


Метод getCustomAnalysisWizard** возвращает мастер для валидации данных путём пользовательского анализа временных рядов.


## Комментарии


Метод возвращает объект типа [PP.TS.Ui.CustomAnalysisWizard](../CustomAnalysisWizard/CustomAnalysisWizard.htm).


## Пример


Для выполнения примера необходимо наличие компонента [ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog.htm) с наименованием «validationSettingsDialog» (см. «[Пример создания компонента ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog_Example.htm)»). Отобразим мастер для валидации данных путём пользовательского анализа временных рядов в отдельном диалоге:


// Получим мастер для валидации данных путём пользовательского анализа временных рядов
var customAnalysisWizard = validationSettingsDialog.getCustomAnalysisWizard();
// Получим DOM-дерево для данного мастера
var dom = customAnalysisWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Сделаем мастер видимым
customAnalysisWizard.show();
// Добавим полученный мастер в диалог
var dialog = new PP.Ui.Dialog({
    Caption: "Сравнение по выражению",
    Content: customAnalysisWizard,
    Width: 780, // Ширина диалога
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера в созданном диалоге был отображён мастер для валидации данных путём пользовательского анализа временных рядов:


![](../CustomAnalysisWizard/CustomAnalysisWizard.png)


См. также:


[ValidationSettingsDialog](ValidationSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
