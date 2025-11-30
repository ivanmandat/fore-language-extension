# Конструктор TrendWizard

Конструктор TrendWizard
-


**


# Конструктор TrendWizard


## Синтаксис


PP.TS.Ui.TrendWizard(settings: Object);


## Параметры


settings. JSON-объект со значениями свойств класса.


## Описание


Конструктор TrendWizard** создаёт экземпляр класса [TrendWizard](TrendWizard.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Создадим и разместим в диалоге мастер для валидации данных путём сравнения трендов временных рядов:


/* Создадим мастер для валидации данных путём сравнения трендов временных рядов */
var trendWizard = new PP.TS.Ui.TrendWizard({
    Source: workbookBox.getSource() // Источник данных
});
// Получим и загрузим в диалог иерархию метабазы
var metaHierarchy = workbookBox.getSource().getHier();
trendWizard.setHierarchy(metaHierarchy, true);
// Получим DOM-дерево для данного мастера
var dom = trendWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Добавим созданный мастер в диалог
var dialog = new PP.Ui.Dialog({
    Caption: "Сравнение трендов",
    Content: trendWizard,
    Width: 735, // Ширина диалога
    Height: 150 // Высота диалога
});
// Отобразим данный диалог
dialog.show();
// Получим у мастера цепочку навигации по объектам
var breadcrumb = trendWizard._Breadcrumb;
/* Скроем и вновь отобразим цепочку навигации
   для её корректного отображения */
breadcrumb.hide();
breadcrumb.show();

В результате выполнения примера был создан и размещён в диалоге мастер для валидации данных путём сравнения трендов временных рядов:


![](TrendWizard.png)


См. также:


[TrendWizard](TrendWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
