# NumberFormat.maskFormat

NumberFormat.maskFormat
-


# NumberFormat.maskFormat


## Синтаксис


PP.NumberFormat.maskFormat(mask, value);


## Параметры


mask. Маска числа;


value. Число.


## Описание


Статический метод maskFormat
 возвращает число, отформатированное по указанной маске.


## Комментарии


Допустимые значения маски описаны на странице «[Формат
 числа](UiNavCommon.chm::/GUI/Format/UiReport_Table_Attribute_Format.htm)», в разделе «Все форматы».


## Пример


Для выполнения примера предполагается наличие на странице ссылки на
 библиотеку PP.js. Выведем в консоль значения, рассчитанные по различным
 маскам:


Маска:


PP.NumberFormat.maskFormat("# %",
 100);


Результат:


"100 %"


Маска:


PP.NumberFormat.maskFormat("$ ##0,##",
 123456789);


Результат:


"$ 123 456 789"


Маска:


PP.NumberFormat.maskFormat("\"begin\"
  ##0,# \"end\"", 123456789);


Результат:


"begin  123 456 789 end"


См. также:


[NumberFormat](NumberFormat.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
