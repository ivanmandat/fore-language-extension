# Конструктор CrossFrequencyWizard

Конструктор CrossFrequencyWizard
-


**


# Конструктор CrossFrequencyWizard


## Синтаксис


PP.TS.Ui.CrossFrequencyWizard(settings: Object);


## Параметры


settings. JSON-объект со значениями свойств класса.


## Описание


Конструктор CrossFrequencyWizard** создаёт экземпляр класса **CrossFrequencyWizard**.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Создадим и разместим в диалоге мастер для валидации данных путём сравнения уровней динамики их временных рядов в отдельном диалоге:


/* Создадим мастер для валидации данных путём сравнения
уровней динамики временных рядов */
var crossFrequencyWizard = new PP.TS.Ui.CrossFrequencyWizard({
    Source: workbookBox.getSource() // Источник данных
});
// Получим DOM-дерево для данного мастера
var dom = crossFrequencyWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Установим список доступных уровней
crossFrequencyWizard.selLevels([
    PP.TS.Ui.DimCalendarLvl.Year, // Годы
    PP.TS.Ui.DimCalendarLvl.Quarter, // Кварталы
    PP.TS.Ui.DimCalendarLvl.Month // Месяцы
]);
// Добавим созданный мастер в диалог
var dialog = new PP.Ui.Dialog({
    Caption: "Мастер сравнения уровней динамики",
    Content: crossFrequencyWizard,
    Width: 800 // Ширина диалога
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера был создан и размещён в диалоге мастер для валидации данных путём сравнения уровней динамики их временных рядов:


![](CrossFrequencyWizard.png)


См. также:


[CrossFrequencyWizard](CrossFrequencyWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
