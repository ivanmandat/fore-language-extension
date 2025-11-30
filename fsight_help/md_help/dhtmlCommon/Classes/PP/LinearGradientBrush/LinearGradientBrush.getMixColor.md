# LinearGradientBrush.getMixColor

LinearGradientBrush.getMixColor
-


# LinearGradientBrush.getMixColor


## Синтаксис


getMix(brush2: [PP.LinearGradientBrush](LinearGradientBrush.htm),
 part: Number, stop: Number)


## Параметры


brush2. Кисть с линейной градиентной
 заливкой, с которой требуется выполнить смешивание;


part. Доля использования указываемой
 кисти. Значение может варьироваться от 0 (кисть не применяется) до 1 (применяется
 только данная кисть).


stop. Индекс градиента для
 смешивания.


## Описание


Метод getMixColor возвращает
 цвет, полученный в результате смешивание цветов градиентов в заданном
 соотношении.


## Комментарии


Метод смешивает цвета [GradientStops](../GradientBrush/GradientBrush.GradientStops.htm)
 с одинаковыми индексами у обоих кистей.


Метод возвращает значение цвета типа String
 в формате "#RRGGBB".


## Пример


Использование метода приведено в описании метода [getMix](LinearGradientBrush.getMix.htm).


См. также:


[LinearGradientBrush](LinearGradientBrush.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
