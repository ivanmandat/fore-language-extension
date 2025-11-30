# EaxDimBarMaster.clearDims

EaxDimBarMaster.clearDims
-


**


# EaxDimBarMaster.clearDims


## Синтаксис


clearDims();


## Описание


Метод clearDims** пересоздает измерения в мастере управления отметкой.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее пересоздадим все измерения:


// Получаем представление местера управления отметкой
var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
dimBarMaster.clearDims();

В результате выполнения данного примера будут удалены все измерения в мастере управления отметкой, а затем вновь добавлены.


См. также:


[EaxDimBarMaster](EaxDimBarMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
