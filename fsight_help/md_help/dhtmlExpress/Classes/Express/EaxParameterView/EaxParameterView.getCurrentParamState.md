# EaxParameterView.getCurrentParamState

EaxParameterView.getCurrentParamState
-


**


# EaxParameterView.getCurrentParamState


## Синтаксис


getCurrentParamState();


## Описание


Метод getCurrentParamState**
 возвращает текущее (видимое пользователю) состояние параметра в формате
 метаданных.


## Комментарии


Метод возвращает объект в JSON-формате со следующими свойствами: id
 - идентификатор параметра, k - ключ, n - наименование, dt - тип параметра,
 value - значение, vis - признак видимости параметра.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Выведем информацию о параметре экспресс-отчета:


// Получаем объект класса EaxParameterView
var paramsPanel = expressBox.getPropertyBarView().getDataSourceParamsPanel();
// Получаем представление параметра
var parameterView = paramsPanel._Items[0];
// Получаем настройки параметра
var state = parameterView.getCurrentParamState();
console.log("Id: " + state.id + ";");
console.log("Name: " + state.n + ";");
console.log("Value: " + state.value + ";");
console.log("Is visible: " + state.vis);
console.log("Type: " + parameterView.getParamType());


В результате выполнения примера в консоли браузера будут выведены данные
 о параметре «EaxParam»:


Id: INTPARAM;

Name: EaxParam;

Value: 5;

Is visible: true


См. также:


[EaxParameterView](EaxParameterView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
