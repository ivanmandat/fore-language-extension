# ValidationSettingsDialog.getRatioWizard

ValidationSettingsDialog.getRatioWizard
-


**


# ValidationSettingsDialog.getRatioWizard


## Синтаксис


getRatioWizard();


## Описание


Метод getRatioWizard** возвращает мастер для валидации данных временных рядов путём сравнения отношения наблюдений.


## Комментарии


Метод возвращает объект типа [PP.TS.Ui.RatioWizard](../RatioWizard/RatioWizard.htm).


## Пример


Для выполнения примера необходимо наличие компонента [ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog.htm) с наименованием «validationSettingsDialog» (см. «[Пример создания компонента ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog_Example.htm)»). Отобразим мастер для валидации данных путём сравнения отношения наблюдений в отдельном диалоге:


// Получим мастер для валидации данных путём анализа темпа роста временных рядов
var ratioWizard = validationSettingsDialog.getRatioWizard();
// Получим DOM-дерево для данного мастера
var dom = ratioWizard.getDomNode();
// Установим стиль для мастера
PP.addClass(dom, "PPValidationSettingsDlgContent");
// Сделаем мастер видимым
ratioWizard.show();
// Добавим полученный мастер в стандартный диалог
var dialog = new PP.Ui.Dialog({
    Caption: "Сравнение отношения наблюдений", // Заголовок диалога
    Content: ratioWizard, // Содержимое диалога
    Width: 670, // Ширина диалога
    Height: 180 // Высота диалога
});
// Отобразим данный диалог
dialog.show();

В результате выполнения примера в созданном диалоге был отображён мастер для валидации данных путём сравнения отношения наблюдения:


![](../RatioWizard/RatioWizard.png)


См. также:


[ValidationSettingsDialog](ValidationSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
