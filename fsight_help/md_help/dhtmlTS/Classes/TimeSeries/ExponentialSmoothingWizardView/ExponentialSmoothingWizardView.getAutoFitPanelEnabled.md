# ExponentialSmoothingWizardView.getAutoFitPanelEnabled

ExponentialSmoothingWizardView.getAutoFitPanelEnabled
-


# ExponentialSmoothingWizardView.getAutoFitPanelEnabled


## Синтаксис


getAutoFitPanelEnabled ();


## Описание


Метод getAutoFitPanelEnabled
 возвращает признак того, доступна ли панель автозаполнения.


## Комментарии


Если установлено
 значение true, панель автозаполнения
 доступна, false - не доступна.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


var getAutoFitPanelEnabledButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Доступна ли панель автозаполнения?", //Подпись
	Click: PP.Delegate(onClickGetAutoFitPanelEnabled)
});
function onClickGetAutoFitPanelEnabled()
	{
		//Получаем панель, где должен находиться мастер настройки параметров расчёта для компонента ModelToolbar - уравнение
		var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
		var exponentialSmoothingWizard = parametersPanel._ExponentialSmoothingWizard;
		//Панель  настройки параметров расчёта для компонента ModelToolbar - уравнение доступна в том случае, если тип формулы у выбранного ряда
		//"[Экспоненциальное сглаживание](../../../Enums/TsFormulaKind.htm)".
		if (!exponentialSmoothingWizard || !exponentialSmoothingWizard.getIsVisible())
			{
				return alert('Мастер настройки параметров расчёта для компонента ModelToolbar - уравнение не применим к выбранному ряду. \n Выберите другой ряд');
			}
		//Получаем информацию о доступности панели автозаполнения
		var panelEnabled = exponentialSmoothingWizard.getAutoFitPanelEnabled();
		var panelEnabledSrt = "Панель автозаполнения доступна";
		var panelNotEnabledStr = "Панель автозаполнения не доступна";
		//Выводим сообщение о доступности панели автозаполнения
		panelEnabled ? alert(panelEnabledSrt) : alert(panelNotEnabledStr);
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Доступна ли панель автозаполнения?». На вкладке
 ленты «Вычисление» нажать на кнопку «Прогнозирование» и из раскрывающегося
 меню выбрать «Экспоненциальное сглаживание», на вкладке панели свойств
 «Ряд» раскрыть панель «Параметры» и выбрать любой из доступных параметров,
 затем нажать на кнопку «Доступна ли панель автозаполнения?». После чего
 на экран будет выведено сообщение с информацией о доступности панели автозаполнения.


См. также:


[ExponentialSmoothingWizardView](ExponentialSmoothingWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
