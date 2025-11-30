# EaxDimBarView.getCurrentState

EaxDimBarView.getCurrentState
-


**


# EaxDimBarView.getCurrentState


## Синтаксис


getCurrentState();


## Описание


Метод getCurrentState** возвращает информацию об измерениях - ключ и позицию.


## Комментарии


Метод возвращает JSON-объет, содержащий массив объектов с полями k (ключ измерения) и position (позиция измерения, задаваемая с помощью перечисления PP.Exp.[PvtDimPos](../../../Enums/PvtDimPos.htm)).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее обновим все измерения на панели и получим список их ключей :


var dimBar = expressBox.getPropertyBarView().getDimBarViewPanel();
// Покажем панель
dimBar.show();
// Раскроем панель
dimBar.expand(true);
// Получим массив измерений
var dims = dimBar.getCurrentState().dims.its.it;
// Обновим все измерения
dimBar.refreshSelections(dims);
// Выведем ключи всех измерений на панели
var keys = "";
for(var i = 0; i < dims.length; i++) {
    keys += dims[i].k;
    keys += " ";
};
console.log("Keys: " + keys);

В результате выполнения данного примера будут обновлены все измерения на панели, а в консоли браузера будут выведены их ключи:


Keys: 1646 2038 1824 2042


См. также:


[EaxDimBarView](EaxDimBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
