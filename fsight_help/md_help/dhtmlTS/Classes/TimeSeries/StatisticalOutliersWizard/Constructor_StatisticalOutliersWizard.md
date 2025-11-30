# Конструктор StatisticalOutliersWizard

Конструктор StatisticalOutliersWizard
-


**


# Конструктор StatisticalOutliersWizard


## Синтаксис


PP.TS.Ui.StatisticalOutliersWizard(setttings: Object);


## Параметры


settings. JSON-объект со значениями свойств класса.


## Описание


Конструктор StatisticalOutliersWizard** создаёт экземпляр класса [StatisticalOutliersWizard](StatisticalOutliersWizard.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Создадим и разместим в диалоге рассматриваемый мастер:


/* Создадим мастер для валидации путём анализа
   статистических выбросов данных временных рядов */
var statisticalOutliersWizard = new PP.TS.Ui.StatisticalOutliersWizard();
// Получим DOM-дерево для данного мастера
var dom = statisticalOutliersWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Добавим созданный мастер в диалог
var dialog = new PP.Ui.Dialog({
    Caption: "Мастер анализа статистических выбросов", // Заголовок диалога
    Content: statisticalOutliersWizard, // Содержимое диалога
    Width: 500, // Ширина диалога
    Height: 180 // Высота диалога
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера был создан и размещён в диалоге мастер валидации путём анализа статистических выбросов данных временных рядов:


![](StatisticalOutliersWizard.png)


См. также:


[StatisticalOutliersWizard](StatisticalOutliersWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
