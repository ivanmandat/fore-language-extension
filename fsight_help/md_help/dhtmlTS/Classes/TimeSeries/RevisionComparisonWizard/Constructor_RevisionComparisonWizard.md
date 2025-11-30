# Конструктор RevisionComparisonWizard

Конструктор RevisionComparisonWizard
-


**


# Конструктор RevisionComparisonWizard


## Синтаксис


PP.TS.Ui.RevisionComparisonWizard(settings: Object);


## Параметры


settings. JSON-объект со значениями свойств класса.


## Описание


Конструктор RevisionComparisonWizard** создаёт экземпляр класса [RevisionComparisonWizard](RevisionComparisonWizard.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Создадим и разместим в диалоге мастер для валидации данных путём сравнения их версий:


// Получим вкладку «Данные» на ленте инструментов рабочей книги
var dataCategory = workbookBox.getRibbonView().getDataCategory();
// Определим возвратную функцию
var onRequestMetadata = function (sender, args) {
    console.log("Запрос метаданных...");
    dataCategory.RequestMetadata.fire(dataCategory, args);
};
// Создадим мастер для валидации данных путём сравнения их версий
var revisionComparsionWizard = new PP.TS.Ui.RevisionComparisonWizard({
        RequestMetadata: new PP.Delegate(this.onRequestMetadata, dataCategory)
    });
// Получим DOM-дерево для данного мастера
var dom = revisionComparsionWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Добавим мастер в стандартный диалог
var dialog = new PP.Ui.Dialog({
        // Укажем ключ ресурса для отображения заголовка в диалоге
        ResourceKey: "TSRibbonVersionDataComparisonDialog",
        Content: revisionComparsionWizard,
        Width: 734, // Ширина диалога
        Height: 184 // Высота диалога
    });
// Отобразим диалог
dialog.show();

В результате выполнения примера был создан и размещён в диалоге мастер для валидации данных путём сравнения их версий:


![](../../../Components/TimeSeries/RevisionComparisonDialog/RevisionComparisonDialog.png)


При создании данного компонента было сгенерировано событие RequestMetadata, при обработке которого в консоли браузера было выведено соответствующее уведомление:


Запрос метаданных...


См. также:


[RevisionComparisonWizard](RevisionComparisonWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
