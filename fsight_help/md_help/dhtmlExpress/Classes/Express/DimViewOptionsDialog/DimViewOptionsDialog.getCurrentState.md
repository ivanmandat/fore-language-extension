# DimViewOptionsDialog.getCurrentState

DimViewOptionsDialog.getCurrentState
-


**


# DimViewOptionsDialog.getCurrentState


## Синтаксис


getCurrentState();


## Описание


Метод getCurrentState** возвращает текущее состояние свойств диалога для настройки размещения измерений.


## Комментарии


Метод возвращает JSON-объект, содержащий поле it, которое представляет собой массив объектов с данными текущего измерения.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [DimViewOptionsDialog](DimViewOptionsDialog.htm) с наименованием «dimViewOptionsDialog» (см. «[Пример создания компонента DimViewOptionsDialog](../../../Components/Express/DimViewOptionsDialog/DimViewOptionsDialog_Example.htm)»). Получим наименование измерений в диалоге для настройки размещения измерений:


// Получаем текущее состояние свойств диалога для настройки размещения измерений
var state = dimViewOptionsDialog.getCurrentState();
// Получаем список измерений
var dims = state.dims.its.it;
var strDims = "";
for(var i = 0; i < dims.length; i++) {
    // Получаем наименования измерений
    strDims += state.dims.its.it[i].n;
    if (i != dims.length - 1) {
         strDims += ", ";
    }
}
// Выводим наименование текущего измерения в диалоге
console.log("Наименование измерений: " + strDims);

В результате выполнения примера в консоли браузера будут выведены наименования текущего измерения в диалоге для настройки размещения измерений:


Наименование измерений: Календарь, Календарь, Территориальные преобразования, Типы данных, Социально-экономические показатели, Факты


См. также:


[DimViewOptionsDialog](DimViewOptionsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
