# TSService.updateCalculatedRow

TSService.updateCalculatedRow
-


# TSService.updateCalculatedRow


## Синтаксис


updateCalculatedRow (wbk: [PP.TS.WbkDocument](../WbkDocument/WbkDocument.htm),
 metaData: [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 getStatistics: Boolean, callback: PP.Delegate);


## Параметры


wbk. Документ рабочей книги;


metaData. Метаданные рабочей
 книги, содержащие информацию об изменяемых вычисленных рядах. Значение
 параметра указывается в виде объекта.


getStatistics. Признак того,
 нужно ли получить статистические данные рядов. Если параметр равен значению
 true, то статические данные будут
 получены, если значению false,
 то не будут;


callback. Функция обратного
 вызова на получение ответа от сервиса рабочей книги.


## Описание


Метод
 updateCalculatedRow обновляет вычисленные
 временные ряды в рабочей книге.


## Комментарии


Поле Metadata у параметра metaData, являющегося объектом типа [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm),
 должно содержать JSON-объект со следующими свойствами:


	- DependentSeries.
	 Массив зависимых рядов;


	- FormulaType.
	 Тип формулы, применяемой при вычислении рядов (задаётся с помощью
	 перечисления PP.TS.Ui.FormulaTypeEnum);


	- SelectionTimeRanges.
	 Массив выделенных временных диапазонов;


	- Splice.
	 Объект настройки сращивания рядов, содержащий свойства:


		-  Direction. Направление сращивания
		 рядов, задаваемое с помощью элемента перечисления [PP.TS.Ui.TsSpliceDirection](../../../Enums/TsSpliceDirection.htm);


		- Type.
		 Метод сращивания рядов, задаваемый с помощью перечисления [PP.TS.Ui.TsSpliceType](../../../Enums/TsSpliceType.htm);


	- SpliceMethod.
	 Параметр, аналогичный Splice.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Установим метод и направление сращивания
 временных рядов в соответствующем мастере на вкладке «Параметры» боковой
 панели рабочей книги:


// Получим источник данных для рабочей книги
var source = workbookBox.getSource();
// Получим сервис для работы рабочей книги
var service = tsService;
// Получим панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
// Получим панель параметров
var parametersPanel = propertyBar.getParametersPanel();
// Отобразим данную панель
parametersPanel.show();
// Развернём панель
parametersPanel.expand();
// Получим мастер настройки сращивания временных рядов
var spliceMethodWizard = parametersPanel.getSpliceMethodWizard();
// Отобразим данный мастер
spliceMethodWizard.show();
// Получим настройки мастера
var metadata = spliceMethodWizard.getCurrentState();
// Укажем тип операции
metadata.formulaType = PP.TS.Ui.FormulaTypeEnum.ConversionsJoinSeries;
// Укажем выделенные ряды
metadata.selectedRows = source.getSelectedSeries();
// Зададим метод и направление сращивания рядов
metadata.spliceMethod = {
    direction: PP.TS.Ui.TsSpliceDirection.Backward,
    type: PP.TS.Ui.TsSpliceType.Pch
};
// Определим аргументы для возвратной функции
var args = new PP.Mb.Ui.PropertyChangedEventArgs({
    PropertyName: PP.TS.Ui.PropertyGroups.Parameters,
    Metadata: metadata,
    TypeUpdateData: [PP.TS.Ui.ViewTypeUpdate.UpdateCalculateSeries, PP.TS.Ui.ViewTypeUpdate.Chart,
    PP.TS.Ui.ViewTypeUpdate.Map, PP.TS.Ui.ViewTypeUpdate.StatPanel]
});
// Определим возвратную функцию
var onResponse = function (sender, args) {
    // Обновим панель параметров
    parametersPanel.refresh();
};
// Обновим вычисленные временные ряды в рабочей книге в соответствии с указанными настройками
service.updateCalculatedRow(source, args, true, PP.Delegate(this.onResponse, this, args));

В результате выполнения примера в мастере настройки совмещения временных
 рядов был установлен метод их сращивания с темпами прироста в обратном
 направлении:


![](../SpliceMethodWizard/SpliceMethodWizard.CurrentState.png)


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
