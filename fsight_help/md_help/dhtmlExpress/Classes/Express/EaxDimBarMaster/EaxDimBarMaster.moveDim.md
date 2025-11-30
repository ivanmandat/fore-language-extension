# EaxDimBarMaster.moveDim

EaxDimBarMaster.moveDim
-


**


# EaxDimBarMaster.moveDim


## Синтаксис


moveDim(dimKey: Number, moveTo: PP.Exp.PvtDimPos, indexPosition: Number, fireEvent: Boolean);


## Параметры


*d*imKey. Ключ измерения, которое нужно переместить;


*moveTo.* Позиция, в которую нужно переместить измерение; задаётся с помощью элемента перечисления PP.Exp.[PvtDimPos](../../../Enums/PvtDimPos.htm);


*indexPosition.* Индекс новой позиции;


*fireEvent.* Определяет, генерировать ли событие изменения позиции в контроллер.


## Описание


Метод moveDim** перемещает измерение в указанную позицию.


## Комментарии


Метод возвращает значение true, если измерение переместилось, и false, если нет.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Расположим измерение по столбцам в первой позиции:


var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();

// Обработаем событие перемещения измерения DimensionMoved
dimBarMaster.DimensionMoved.add(function() {
   // Обновим все содержимое мастера
   dimBarMaster.refreshAll(true);
});
// Покажем мастер управления отметкой
dimBarMaster.show();
// Получим ключ первого измерения
var dimKey = dimBarMaster.getCurrentState().dims.its.it[0].k;
// Изменим расположение измерения
dimBarMaster.moveDim(dimKey, PP.Exp.PvtDimPos.Top, 0, true);

После выполнения примера измерение c индексом 0 будет располагаться по столбцам и находиться в первой позиции.


После перемещения измерения были обновлены все элементы мастера управления отметкой, а в консоли браузера был выведен результат успешного выполнения метода:


true


См. также:


[EaxDimBarMaster](EaxDimBarMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
