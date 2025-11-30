# ParametersDialog.getAllViewsState

ParametersDialog.getAllViewsState
-


**


# ParametersDialog.getAllViewsState


## Синтаксис


getAllViewsState();


## Описание


Метод getAllViewsState** возвращает массив объектов-состояний настроек всех вкладок диалога «Параметры».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog.htm) с наименованием «parametersDialog» (см. «[Пример создания компонента ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog_Example.htm)»). Получим ключи вкладок диалога «Параметры».


// Получаем набор объектов-состояний у вкладок диалога «Параметры»
var states = parametersDialog.getAllViewsState();
for(var i = 0; i < states.length; i++) {    // Получаем объект-состояние для конкретной вкладки
    var state = states[i];
    // Выводим ключ вкладки
    console.log("SectionId: " + state.SectionId);
}

В результате выполнения примера в консоли браузера будут выведены ключи вкладок диалога «Параметры»:


SectionId: SI_DataSourceParams

SectionId: SI_DimsView


См. также:


[ParametersDialog](ParametersDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
