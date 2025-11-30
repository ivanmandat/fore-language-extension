# EaxDimBarView.clearDims

EaxDimBarView.clearDims
-


**


# EaxDimBarView.clearDims


## Синтаксис


clearDims();


## Описание


Метод clearDims** пересоздает измерения на панели измерений экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее пересоздадим все измерения:


// Получаем представление панели измерений
var dimBar = expressBox.getPropertyBarView().getDimBarViewPanel();
dimBar.clearDims();

В результате выполнения данного примера будут удалены все измерения на панели измерений экспресс-отчета, а затем вновь добавлены.


См. также:


[EaxDimBarView](EaxDimBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
