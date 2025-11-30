# DimIndicatorMP.getPropertyName

DimIndicatorMP.getPropertyName
-


**


# DimIndicatorMP.getPropertyName


## Синтаксис


getPropertyName();


## Описание


Метод getPropertyName**
 возвращает тип элемента управления, отображаемого в данный момент в рабочей
 области экспресс-отчета.


## Комментарии


Метод **getPropertyName**
 возвращает элемент перечисления [PP.Exp.Ui.ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)), а также должна быть открыта вкладка
 «Карта» или «Пузырьковая диаграмма». Далее получим объект класса DimIndicatorMP и выполним с ним
 ряд действий - покажем и раскроем панель «Показатели», сфокусируемся на
 элементе измерения, на котором сейчас установлен индикатор, и выведем
 тип элемента управления, отображаемого в данный момент в рабочей области
 экспресс-отчета:


// Текущей должна быть вкладка «Карта» или «Пузырьковая диаграмма»
var items = expressBox.getPropertyBarView().getControl().getItems();
for (var i = 0; i < items.length; i++) {
     if (items[i].getTypeName() == "DimIndicatorMP") {
         var dimIndicatorMP = items[i];
         // Покажем панель
         dimIndicatorMP.show();
         // Раскрываем панель
         dimIndicatorMP.expand(true);
         // Сфокусируемся на элементе измерения, на котором сейчас установлен индикатор «Color»
         dimIndicatorMP.showIndicator("Color");
         // Выведем тип элемента управления, отображаемого в рабочей области
         console.log(dimIndicatorMP.getPropertyName()); // Будет возвращено «Map»
     }
}

В результате выполнения примера раскроется панель «Показатели», фокус
 будет передан на элемент измерений, на котором установлен индикатор «Color»,
 а также будет возращен тип элемента управления, отображаемого в рабочей
 области экспресс-отчета - «Карта».


См. также:


[DimIndicatorMP](DimIndicatorMP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
