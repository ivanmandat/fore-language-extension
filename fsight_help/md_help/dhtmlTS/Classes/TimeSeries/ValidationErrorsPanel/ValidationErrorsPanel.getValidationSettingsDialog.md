# ValidationErrorsPanel.getValidationSettingsDialog

ValidationErrorsPanel.getValidationSettingsDialog
-


**


# ValidationErrorsPanel.getValidationSettingsDialog


## Синтаксис


getValidationSettingsDialog(state: Object);


## Параметры


state. Настройки правила валидации. Необязательный параметр. Если данный параметр не указан, то по умолчанию в диалоге загружаются значения настроек по умолчанию.


## Описание


Метод getValidationSettingsDialog** возвращает диалог для редактирования правила валидации данных в рабочей книге.


## Комментарии


Метод возвращает объект типа [PP.TS.Ui.ValidationSettingsDialog](../ValidationSettingsDialog/ValidationSettingsDialog.htm).


## Пример


Для выполнения примера необходимо наличие экземпляра класса [ValidationErrorsPanel](ValidationErrorsPanel.htm) с наименованием «validationErrorsPanel» (см. «[Конструктор ValidationErrorsPanel](Constructor_ValidationErrorsPanel.htm)»). Также должен быть определён объект state с настройками, определяющими тип правила валидации «Пропуски данных» с выявлением пропусков внутри данных, а также точные даты начала и окончания периода данных для валидации (см. странице описания метода [ValidationErrorsPanel.setValidation](ValidationErrorsPanel.setValidation.htm)).


Отобразим диалог для редактирования правила валидации с данными настройками:


// Получим диалог настройки правила валидации
var dialog = validationErrorsPanel.getValidationSettingsDialog(state);
// Определим текущие настройки данного диалога
dialog.setCurrentState(state);
// Отобразим диалог
dialog.show();

В результате выполнения примера в рабочей книге был отображён диалог «Правило валидации». Данное правило имеет тип «Пропуски данных» с выявлением пропусков внутри самих данных и период проверки с точной датой начала 12.04.2012 и точной датой окончания 12.05.2012:


![](../ValidationRulesPanel/ValidationRulesPanel_setValidation.png)


См. также:


[ValidationErrorsPanel](ValidationErrorsPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
