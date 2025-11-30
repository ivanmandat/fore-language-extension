# EaxDataView.undo

EaxDataView.undo
-


**


# EaxDataView.undo


## Синтаксис


undo();


## Описание


Метод undo** осуществляет откат изменений в рабочей области экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее откатим изменения, совершенные в рабочей области экспресс-отчета:


var dataView = expressBox.getDataView();
// Устанавливаем обработчик события UndoChangedData
dataView.UndoChangedData.add(function(){
    alert("Откат изменения данных")
});
dataView.undo();

В результате выполнения данного примера будут отменены изменения, после чего будет выведено окно с сообщением «Откат изменения данных».


См. также:


[EaxDataView](EaxDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
