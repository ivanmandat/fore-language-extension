# ValidationSettingsDialog.getStatisticalOutliersWizard

ValidationSettingsDialog.getStatisticalOutliersWizard
-


**


# ValidationSettingsDialog.getStatisticalOutliersWizard


## Синтаксис


getStatisticalOutliersWizard();


## Описание


Метод getStatisticalOutliersWizard**
 возвращает мастер для валидации путём анализа статистических выбросов
 данных временных рядов.


## Комментарии


Метод возвращает объект типа [PP.TS.Ui.StatisticalOutliersWizard](../StatisticalOutliersWizard/StatisticalOutliersWizard.htm).


## Пример


Для выполнения примера необходимо наличие компонента [ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog.htm)
 с наименованием «validationSettingsDialog» (см. «[Пример
 создания компонента ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog_Example.htm)»). Отобразим мастер для
 валидации путём анализа статистических выбросов данных временных рядов:


/* Получим мастер для валидации путём анализа
   статистических выбросов данных временных рядов */
var statisticalOutliersWizard = validationSettingsDialog.getStatisticalOutliersWizard();
// Получим DOM-дерево для данного мастера
var dom = statisticalOutliersWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Сделаем мастер видимым
statisticalOutliersWizard.show();
// Добавим полученный мастер в диалог
var dialog = new PP.Ui.Dialog({
    Content: statisticalOutliersWizard,
    Caption: "Мастер анализа статистических выбросов", // Заголовок диалога
    Width: 500, // Ширина диалога
    Height: 180 // Высота диалога
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера в созданном диалоге был отображён мастер
 для валидации путём анализа статистических выбросов данных временных рядов:


![](../StatisticalOutliersWizard/StatisticalOutliersWizard.png)


См. также:


[ValidationSettingsDialog](ValidationSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
