# ParametersDialog.CurrentView

ParametersDialog.CurrentView
-


**


# ParametersDialog.CurrentView


## Синтаксис


CurrentView: [Control](dhtmlUi.chm::/Classes/control/control.htm)


## Описание


Свойство CurrentView** устанавливает активную вкладку в диалоге «Параметры».


## Комментарии


Значение свойства CurrentView можно устанавливать из JSON и с помощью метода setCurrentView, а возвращать - при помощи свойства getCurrentView.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog.htm) с наименованием «parametersDialog» (см. «[Пример создания компонента ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog_Example.htm)»). Получим текущую вкладку диалога и выведем ее наименование:


// Получаем текущую вкладку диалога «Параметры»
var currentView = parametersDialog.getCurrentView();
// Выводим наименование вкладки
console.log("Наименование: " + currentView.getName());

В результате выполнения примера в консоль браузера будет выведено наименование текущей вкладки диалога:


Наименование: Параметры источника данных


См. также:


[ParametersDialog](ParametersDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
