# DimControl.DimModel

DimControl.DimModel
-


# DimControl.DimModel


## Синтаксис


DimModel: PP.Mb.DimSource


## Описание


Свойство DimModel определяет
 модель справочника.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSource,
 а возвращается с помощью метода getSource.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox». Получим экземпляр элемента управления:


// Получим экземпляр PP.Prx.DimControl
DV = reportBox.getDataView();
// -> PP.Prx.Ui.DataArea {}
cBar = DV.getControlBar();
//  ->  PP.Prx.Ui.ControlBar {}
dimC = cBar.getControls()[0];
//  -> PP.Prx.Ui.DimComboControl {}
dControl = dimC.getSource();
// -> PP.Prx.DimControl {}
// Получен экземпляр PP.Prx.DimControl
// Определим признак изменения содержимого и структуры элемента управления
console.debug(dControl.getIsContentChanged ? "Содержимое справочника изменялось" : "Содержимое справочника не изменялось");
console.debug(dControl.getIsStructureChanged ? "Структура справочника изменялась" : "Структура справочника не изменялась");
// Определим возможность множественной отметки
console.debug(dControl.getMultiSelect ? "В элементе управления доступна множественная отметка" : "Множественная отметка недоступна");
// Определим метод отметки
console.debug("Метод отметки в элементе измерения: " + dControl.getSelectionMode());
// Получим наименование измерения, используемого в элементе управления
console.debug("Наименование измерения: " + dControl.getDimModel().getName());
В результате выполнения пример был получен экземпляр класса DimControl
 и выведена информация о его свойствах, а также получено наименование измерения.


См. также:


[DimControl](DimControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
