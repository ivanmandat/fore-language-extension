# SlideSmoothingWizardView.CurrentState

SlideSmoothingWizardView.CurrentState
-


# SlideSmoothingWizardView.CurrentState


## Синтаксис


CurrentState: Object;


## Описание


Свойство CurrentState возвращает
 параметры скользящего среднего.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


var getCurrentStateButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Get Current State", //Подпись
	Click: PP.Delegate(onClickGetCurrentState)
});
function onClickGetCurrentState()
	{
		//Получаем панель, где должна находиться панель параметров скользящего среднего
		var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
		console.log(parametersPanel);
		//Получаем панель параметров скользящего среднего
		var SlideSmoothingWizard = parametersPanel._SlideSmoothingWizard;
		//Если тип формулы у выбранного ряда отличный от "Скользящее среднее", то при нажатии на кнопку
		//будет выведено сообщение о том, что панель параметров "Скользящее среднее" не применима к выбранному ряду
		if (!SlideSmoothingWizard) return alert('панель параметров скользящего среднего не применима к выбранному ряду. \n Выберите другой ряд');
		//Получаем CurrentState панели параметров скользящего среднего
		var state = SlideSmoothingWizard.getCurrentState();
		alert(JSON.stringify(state));
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Get Current State». Для выполнения примера необходимо
 на вкладке ленты инструментов «Вычисление» нажать на кнопку «Сглаживание»
 и из раскрывающегося меню выбрать «Скользящее среднее», а также на [панели свойств
 рабочей книги](../WbkPropertyBarView/WbkPropertyBarView.htm) выбрать вкладку «Ряд» и открыть панель «Параметры».
 Измените любые настройки на панели «Параметры». После этого следует нажать
 на кнопку «Get Current State», после чего на экран будет выведено сообщение с
 заданными параметрами скользящего среднего. Для работы примера необходимо,
 чтобы тип формулы выбранного ряда был «Скользящее среднее», в противном
 случае будет выведено сообщение о необходимости выбора другого ряда.


См. также:


[SlideSmoothingWizardView](SlideSmoothingWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
