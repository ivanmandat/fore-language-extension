# ScaleBase.LogarithmBase

ScaleBase.LogarithmBase
-


# ScaleBase.LogarithmBase


## Синтаксис


LogarithmBase: Number


## Описание


Свойство LogarithmBase устанавливает
 основание логарифма для расчета интервалов шкалы.


## Комментарии


Свойство актуально, если для свойства [ScaleBase.Mode](ScaleBase.Mode.htm)
 установлено значение Logarithmic.


## Пример


Для выполнения примера повторим действия, описанные для метода [ScaleBase.constructScaleElements](ScaleBase.constructScaleElements.htm)
 и добавим следующий код:


scale.setMode("Logarithmic");
scale.setLogarithmBase(3);
scale.constructScaleElements(data);
legend = map.getLegends().MapLegend0;
legend.draw();
В результате шкала была расчитана на другом основании логарифма.


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
