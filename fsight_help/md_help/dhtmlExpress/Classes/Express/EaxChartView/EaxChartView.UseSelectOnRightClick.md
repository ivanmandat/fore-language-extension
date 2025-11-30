# EaxChartView.UseSelectOnRightClick

EaxChartView.UseSelectOnRightClick
-


# EaxChartView.UseSelectOnRightClick


## Синтаксис


UseSelectOnRightClick: Boolean


## Описание


Свойство UseSelectOnRightClick
 определяет, доступно ли выделение рядов диаграммы при помощи правой кнопки
 мыши.


## Комментарии


Значение свойства устанавливается при помощи метода setUseSelectOnRightClick
 и возвращается пои помощи метода getUseSelectOnRightClick.


Если для свойства установлено значение true,
 доступно выделение рядов при помощи правой кнопки мыши (по умолчанию).
 Если для свойства установлено значение false,
 доступно выделение рядов только при помощи левой кнопки мыши.


Свойство актуально, если для свойства [EaxChartView.EditMode](EaxChartView.EditMode.htm)
 установлено значение None.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ChartBox](../../../Components/Express/ChartBox/ChartBox.htm)
 с наименованием «chartBox» (см. «[Пример
 совместного размещения EaxPropertyBar и ChartBox](../../../Components/Express/ChartBox/ChartBox_Example.htm)»).


chartBox.setEditMode(PP.Exp.Ui.ChartEditMode.None);
chartBox.setUseSelectOnRightClick(false);
После выполнения примера будет отключена возможность выделения рядов
 диаграммы при помощи правой кнопки мыши.


См. также:


[EaxChartView](EaxChartView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
