# EaxParameterView.ParamSource

EaxParameterView.ParamSource
-


**


# EaxParameterView.ParamSource


## Синтаксис


ParamSource: [PP.Mb.Param](dhtmlMetabase.chm::/Classes/Metabase/Param/Param.htm)


## Описание


Свойство ParamSource**
 устанавливает параметр экспресс-отчета.


## Комментарии


Значение свойства ParamSource
 можно задавать из JSON и при помощи метода setParamSource,
 а возвращать - при помощи метода getParamSource.


Для создания компонента [EaxParameterBox](../../../Components/Express/EaxParameterBox/EaxParameterBox.htm)
 можно либо задать свойства [Source](EaxParameterView.Source.htm)
 и [ParamId](EaxParameterView.ParamId.htm) (параметр должен
 существовать в источнике данных), либо задать свойства ParamSource и Service.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Выведем информацию о параметре экспресс-отчета,
 используя свойство ParamSource:


// Получаем объект класса EaxParameterView
var paramsPanel = expressBox.getPropertyBarView().getDataSourceParamsPanel();
// Получаем представление параметра
var parameterView = paramsPanel._Items[0];
// Получаем параметр
var param = parameterView.getParamSource();
console.log("Id: " + param.getId() + ";");
console.log("Name: " + param.getName() + ";");
console.log("Value: " + param.getValue() + ";");
console.log("Is visible: " + param.getVisible());

В результате выполнения примера в консоли браузера будут выведены данные
 о параметре «EaxParam».


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
