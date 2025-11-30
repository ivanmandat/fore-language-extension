# Конструктор CrossDatabaseWizard

Конструктор CrossDatabaseWizard
-


**


# Конструктор CrossDatabaseWizard


## Синтаксис


PP.TS.Ui.CrossDatabaseWizard(settings: Object);


## Параметры


settings. JSON-объект со значениями свойств класса.


## Описание


Конструктор CrossDatabaseWizard** создаёт экземпляр класса [CrossDatabaseWizard](CrossDatabaseWizard.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Создадим и разместим в диалоге мастер для валидации данных путём их сравнения с базой данных временных рядов:


/* Создадим мастер для валидации данных путём их сравнения
с базой данных временных рядов */
var crossDatabaseWizard = new PP.TS.Ui.CrossDatabaseWizard({
    Source: workbookBox.getSource(),
});
// Получим DOM-дерево для данного мастера
var dom = crossDatabaseWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Разместим созданный мастер в стандартном диалоге
var dialog = new PP.Ui.Dialog({
    Content: crossDatabaseWizard,
    Caption: "Сравнение с базой данных временных рядов", // Заголовок
    Width: 750, // Ширина диалога
    Height: 190 // Высота диалога
});
// Отобразим диалог
dialog.show();

В результате выполнения примера был создан и размещён в диалоге мастер для валидации данных путём их сравнения с базой данных временных рядов:


![](CrossDatabaseWizard.png)


См. также:


[CrossDatabaseWizard](CrossDatabaseWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
