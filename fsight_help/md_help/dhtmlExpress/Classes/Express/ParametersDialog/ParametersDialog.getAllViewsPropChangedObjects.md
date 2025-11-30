# ParametersDialog.getAllViewsPropChangedObjects

ParametersDialog.getAllViewsPropChangedObjects
-


**


# ParametersDialog.getAllViewsPropChangedObjects


## Синтаксис


getAllViewsPropChangedObjects();


## Описание


Метод getAllViewsPropChangedObjects**
 возвращает изменения по каждой из вкладок диалога «Параметры».


## Комментарии


Метод возвращает JSON-объект со следующими параметрами: DataSourceParams
 - массив объектов типа [ParametersDataSource](../ParametersDataSource/ParametersDataSource.htm)
 и SI_DimsView - массив объектов типа [ParametersDimensionsView](../ParametersDimensionsView/ParametersDimensionsView.htm).


Каждый элемент указанных массивов имеет тип [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - метаданные, TypeUpdateData - тип обновляемых данных, задаваемый
 с помощью перечисления PP.Exp.Ui.[ViewTypeUpdate](../../../Enums/ViewTypeUpdate.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog.htm)
 с наименованием «parametersDialog» (см. «[Пример
 создания компонента ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog_Example.htm)»). Определим изменившиеся свойства
 у вкладок диалога «Параметры»:


// Получаем набор объектов-состояний у вкладок диалога «Параметры»
var changedObjects = parametersDialog.getAllViewsPropChangedObjects();
// Получим названия изменившихся свойств:
var propertyName = "";
propertyName = changedObjects.SI_DataSourceParams[0]._PropertyName;
console.log("Изменившееся свойство вкладки «Параметры источников данных»: " + propertyName);
propertyName = changedObjects.SI_DimsView[0]._PropertyName;
console.log("Изменившееся свойство вкладки «Параметры источников данных»: " + propertyName);

В результате выполнения примера в консоль браузера будут выведены названия
 изменившихся свойств для вкладок «Параметры источников данных» и «Измерения»:


Изменившееся свойство вкладки «Параметры источников
 данных»: DataSourceParams

Изменившееся свойство вкладки «Параметры источников данных»: DimOrder


См. также:


[ParametersDialog](ParametersDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
